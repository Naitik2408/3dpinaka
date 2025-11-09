import { FaBox } from "react-icons/fa";

interface WhatsInBoxListProps {
    items: (string | null)[];
}

export default function WhatsInBoxList({ items }: WhatsInBoxListProps) {
    if (!items || items.length === 0) {
        return (
            <div className="text-gray-500 text-center py-8">
                Package contents not specified
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {items.filter((item): item is string => item !== null).map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <FaBox className="text-[#f39c12] text-lg flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                </div>
            ))}
        </div>
    );
}
