import { FaCheckCircle } from "react-icons/fa";

interface FeaturesListProps {
    features: (string | null)[];
}

export default function FeaturesList({ features }: FeaturesListProps) {
    if (!features || features.length === 0) {
        return (
            <div className="text-gray-500 text-center py-8">
                No features available
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.filter((feature): feature is string => feature !== null).map((feature, index) => (
                <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <FaCheckCircle className="text-[#26a69a] text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                </div>
            ))}
        </div>
    );
}
