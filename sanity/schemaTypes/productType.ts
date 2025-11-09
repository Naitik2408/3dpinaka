import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "string",
      description: "Brief product summary shown in product cards",
    }),
    defineField({
      name: "detailedDescription",
      title: "Detailed Description",
      type: "blockContent",
      description: "Rich text description with formatting, images, and links",
    }),
    defineField({
      name: "specifications",
      title: "Technical Specifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Specification Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "value",
              title: "Specification Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        },
      ],
      description: "Technical specifications like dimensions, weight, materials, etc.",
    }),
    defineField({
      name: "keyFeatures",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of key product features and highlights",
    }),
    defineField({
      name: "whatsInBox",
      title: "What's In The Box",
      type: "array",
      of: [{ type: "string" }],
      description: "List of items included in the package",
    }),
    defineField({
      name: "technicalSpecs",
      title: "Additional Technical Details",
      type: "text",
      description: "Additional technical information in text format",
    }),
    defineField({
      name: "compatibleMaterials",
      title: "Compatible Materials",
      type: "array",
      of: [{ type: "string" }],
      description: "For 3D printers - list of compatible filament types",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "reference",
      to: { type: "brand" },
    }),

    defineField({
      name: "status",
      title: "Product Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Hot", value: "hot" },
          { title: "Sale", value: "sale" },
        ],
      },
    }),
    defineField({
      name: "variant",
      title: "Product Type",
      type: "string",
      options: {
        list: [
          { title: "3D Filaments", value: "3d-filaments" },
          { title: "3D Printers", value: "3d-printers" },
          { title: "Resin", value: "resin" },
          { title: "Accessories", value: "accessories" },
          { title: "3D Pens", value: "3d-pens" },
        ],
      },
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Product",
      type: "boolean",
      description: "Toggle to Featured on or off",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images",
      subtitle: "price",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      const image = media && media[0];
      return {
        title: title,
        subtitle: `$${subtitle}`,
        media: image,
      };
    },
  },
});
