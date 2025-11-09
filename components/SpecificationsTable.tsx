interface Specification {
    label: string;
    value: string;
}

interface SpecificationsTableProps {
    specifications: Specification[];
}

export default function SpecificationsTable({
    specifications,
}: SpecificationsTableProps) {
    if (!specifications || specifications.length === 0) {
        return (
            <div className="text-gray-500 text-center py-8">
                No specifications available
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <tbody>
                    {specifications.map((spec, index) => (
                        <tr
                            key={index}
                            className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                } hover:bg-gray-100 transition-colors`}
                        >
                            <td className="py-3 px-4 font-semibold text-gray-700 w-1/3">
                                {spec.label}
                            </td>
                            <td className="py-3 px-4 text-gray-600">{spec.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
