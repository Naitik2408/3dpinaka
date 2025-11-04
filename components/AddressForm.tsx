"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { createAddress, AddressFormData } from "@/actions/createAddress";
import toast from "react-hot-toast";
import { Plus } from "lucide-react";

interface AddressFormProps {
  userEmail?: string;
  onAddressAdded?: () => void;
}

const AddressForm = ({ userEmail, onAddressAdded }: AddressFormProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<AddressFormData>({
    name: "",
    email: userEmail || "",
    address: "",
    city: "",
    state: "",
    zip: "",
    default: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      default: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zip
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    // Validate state code length
    if (formData.state.length !== 2) {
      toast.error("State code must be 2 letters (e.g., UP, MH, DL)");
      return;
    }

    // Validate ZIP code (6 digits for India)
    if (!/^\d{6}$/.test(formData.zip)) {
      toast.error("Please enter a valid 6-digit PIN code");
      return;
    }

    setLoading(true);

    try {
      const result = await createAddress(formData);

      if (result.success) {
        toast.success("Address added successfully!");
        setOpen(false);
        // Reset form
        setFormData({
          name: "",
          email: userEmail || "",
          address: "",
          city: "",
          state: "",
          zip: "",
          default: false,
        });
        // Notify parent to refresh addresses
        if (onAddressAdded) {
          onAddressAdded();
        }
      } else {
        toast.error(result.error || "Failed to add address");
      }
    } catch (error) {
      console.error("Error submitting address:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Add New Address
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Delivery Address</DialogTitle>
          <DialogDescription>
            Add a new address for delivery. All fields are required.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Address Name */}
            <div className="grid gap-2">
              <Label htmlFor="name">
                Address Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="e.g., Home, Office, etc."
                value={formData.name}
                onChange={handleInputChange}
                maxLength={50}
                required
              />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Street Address */}
            <div className="grid gap-2">
              <Label htmlFor="address">
                Street Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="address"
                name="address"
                placeholder="House/Flat No., Street Name"
                value={formData.address}
                onChange={handleInputChange}
                maxLength={100}
                required
              />
            </div>

            {/* City and State */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="city">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="e.g., Kanpur"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">
                  State <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="state"
                  name="state"
                  placeholder="e.g., UP"
                  value={formData.state}
                  onChange={handleInputChange}
                  maxLength={2}
                  className="uppercase"
                  required
                />
              </div>
            </div>

            {/* ZIP Code */}
            <div className="grid gap-2">
              <Label htmlFor="zip">
                PIN Code <span className="text-red-500">*</span>
              </Label>
              <Input
                id="zip"
                name="zip"
                placeholder="e.g., 208021"
                value={formData.zip}
                onChange={handleInputChange}
                maxLength={6}
                pattern="\d{6}"
                required
              />
            </div>

            {/* Default Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="default"
                checked={formData.default}
                onCheckedChange={handleCheckboxChange}
              />
              <Label
                htmlFor="default"
                className="text-sm font-normal cursor-pointer"
              >
                Set as default delivery address
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Address"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddressForm;
