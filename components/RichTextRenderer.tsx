import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const components: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <div className="my-6 rounded-lg overflow-hidden">
                    <Image
                        src={urlFor(value).width(800).url()}
                        alt={value.alt || "Product image"}
                        width={800}
                        height={450}
                        className="w-full h-auto"
                    />
                    {value.caption && (
                        <p className="text-sm text-gray-500 mt-2 text-center italic">
                            {value.caption}
                        </p>
                    )}
                </div>
            );
        },
    },
    block: {
        h2: ({ children }) => (
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-800">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#26a69a] pl-4 py-2 my-4 italic text-gray-600 bg-gray-50 rounded">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className="ml-4">{children}</li>
        ),
        number: ({ children }) => (
            <li className="ml-4">{children}</li>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-bold text-gray-900">{children}</strong>
        ),
        em: ({ children }) => (
            <em className="italic">{children}</em>
        ),
        code: ({ children }) => (
            <code className="bg-gray-100 text-[#f39c12] px-2 py-1 rounded text-sm font-mono">
                {children}
            </code>
        ),
        link: ({ value, children }) => {
            const target = value?.href?.startsWith("http") ? "_blank" : undefined;
            return (
                <a
                    href={value?.href}
                    target={target}
                    rel={target === "_blank" ? "noopener noreferrer" : undefined}
                    className="text-[#26a69a] hover:text-[#1e8c82] underline"
                >
                    {children}
                </a>
            );
        },
    },
};

interface RichTextRendererProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any;
}

export default function RichTextRenderer({ content }: RichTextRendererProps) {
    if (!content) return null;

    return (
        <div className="prose prose-lg max-w-none">
            <PortableText value={content} components={components} />
        </div>
    );
}
