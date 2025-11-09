"use client";

import { useState } from "react";
import RichTextRenderer from "./RichTextRenderer";
import SpecificationsTable from "./SpecificationsTable";
import FeaturesList from "./FeaturesList";
import WhatsInBoxList from "./WhatsInBoxList";

interface Specification {
    label: string;
    value: string;
}

interface ProductDescriptionTabsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    detailedDescription?: any;
    specifications?: Specification[];
    keyFeatures?: string[];
    whatsInBox?: string[];
}

export default function ProductDescriptionTabs({
    detailedDescription,
    specifications,
    keyFeatures,
    whatsInBox,
}: ProductDescriptionTabsProps) {
    const [activeTab, setActiveTab] = useState("description");

    const tabs = [
        {
            id: "description",
            label: "Description",
            show: detailedDescription,
        },
        {
            id: "specifications",
            label: "Specifications",
            show: specifications && specifications.length > 0,
        },
        {
            id: "features",
            label: "Key Features",
            show: keyFeatures && keyFeatures.length > 0,
        },
        {
            id: "whatsInBox",
            label: "What's in the Box",
            show: whatsInBox && whatsInBox.length > 0,
        },
    ].filter((tab) => tab.show);

    // If no content is available, don't render the component
    if (tabs.length === 0) {
        return null;
    }

    return (
        <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Tabs Header */}
            <div className="flex border-b border-gray-200 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === tab.id
                                ? "text-[#26a69a] border-b-2 border-[#26a69a] bg-gray-50"
                                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tabs Content */}
            <div className="p-6">
                {activeTab === "description" && detailedDescription && (
                    <RichTextRenderer content={detailedDescription} />
                )}

                {activeTab === "specifications" && specifications && (
                    <SpecificationsTable specifications={specifications} />
                )}

                {activeTab === "features" && keyFeatures && (
                    <FeaturesList features={keyFeatures} />
                )}

                {activeTab === "whatsInBox" && whatsInBox && (
                    <WhatsInBoxList items={whatsInBox} />
                )}
            </div>
        </div>
    );
}
