import { Metadata } from "next";

export const metadata: Metadata = {
    title: "3DPinaka - Under Maintenance",
    description: "We're currently updating our site. Please check back soon!",
};

export default function MaintenancePage() {
    return (
        <div className="min-h-screen bg-[#000000] text-white flex flex-col">
            {/* Noise texture overlay for authenticity */}
            <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-[0.015] pointer-events-none" />
            
            {/* Header */}
            <header className="relative border-b border-[#333333]">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
                    <div className="flex items-center gap-2">
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 76 76"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-90"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M38 76C58.9868 76 76 58.9868 76 38C76 17.0132 58.9868 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9868 17.0132 76 38 76ZM30.3516 20.6094L20.6094 30.3516L30.3516 40.0938L40.0938 30.3516L30.3516 20.6094ZM45.9062 30.3516L35.6484 40.6094L45.9062 50.8672L56.1641 40.6094L45.9062 30.3516Z"
                                fill="white"
                            />
                        </svg>
                        <span className="text-[15px] font-medium tracking-[-0.01em]">3DPinaka</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative flex-1 flex items-center justify-center px-6 py-20">
                <div className="max-w-[580px] mx-auto text-center space-y-12">
                    {/* Vercel Triangle Logo Animation */}
                    <div className="flex justify-center">
                        <div className="relative group">
                            {/* Main triangle icon */}
                            <div className="relative">
                                <svg
                                    width="80"
                                    height="70"
                                    viewBox="0 0 76 65"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                >
                                    <path
                                        d="M37.5274 0.248535L75.0548 65H0L37.5274 0.248535Z"
                                        fill="url(#gradient)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="gradient"
                                            x1="37.5"
                                            y1="0"
                                            x2="37.5"
                                            y2="65"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="white" stopOpacity="0.9" />
                                            <stop offset="1" stopColor="white" stopOpacity="0.6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                {/* Animated pulse ring */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full border border-white/10 animate-[ping_2s_ease-in-out_infinite]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333333] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                            <div className="relative flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
                                <div className="absolute w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-ping opacity-75" />
                            </div>
                            <span className="text-[13px] font-medium text-[#fbbf24] tracking-[-0.01em]">
                                Under Maintenance
                            </span>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="space-y-5">
                        <h1 className="text-[52px] leading-[1.1] font-bold tracking-[-0.03em] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                            We&apos;ll be back soon
                        </h1>
                        <p className="text-[17px] leading-[1.6] text-[#888888] max-w-[480px] mx-auto font-normal">
                            Our site is currently undergoing scheduled maintenance to improve your experience. We appreciate your patience.
                        </p>
                    </div>

                    {/* Info Cards - Vercel Style */}
                    <div className="grid md:grid-cols-2 gap-3 pt-4">
                        <div className="group bg-[#0a0a0a] border border-[#262626] rounded-xl p-5 text-left hover:border-[#333333] transition-all duration-200 shadow-[0_0_0_1px_rgba(255,255,255,0.01)]">
                            <div className="flex items-start gap-3.5">
                                <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#262626] flex items-center justify-center flex-shrink-0 group-hover:border-[#333333] transition-colors">
                                    <svg
                                        className="w-4 h-4 text-[#888888]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1 pt-0.5">
                                    <h3 className="text-[15px] font-medium text-white mb-1 tracking-[-0.01em]">
                                        Estimated Downtime
                                    </h3>
                                    <p className="text-[14px] text-[#888888] leading-relaxed">
                                        Approximately 24-48 hours
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-[#0a0a0a] border border-[#262626] rounded-xl p-5 text-left hover:border-[#333333] transition-all duration-200 shadow-[0_0_0_1px_rgba(255,255,255,0.01)]">
                            <div className="flex items-start gap-3.5">
                                <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#262626] flex items-center justify-center flex-shrink-0 group-hover:border-[#333333] transition-colors">
                                    <svg
                                        className="w-4 h-4 text-[#888888]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1 pt-0.5">
                                    <h3 className="text-[15px] font-medium text-white mb-1 tracking-[-0.01em]">
                                        What&apos;s Coming
                                    </h3>
                                    <p className="text-[14px] text-[#888888] leading-relaxed">
                                        Performance & new features
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section - Vercel Style */}
                    <div className="pt-8">
                        <div className="inline-flex flex-col items-center gap-4 p-6 bg-[#0a0a0a] border border-[#262626] rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.01)]">
                            <p className="text-[14px] text-[#888888] font-normal">
                                Need urgent assistance? Get in touch:
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-2.5">
                                <a
                                    href="mailto:pinakatechnologiessg@gmail.com"
                                    className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1a1a1a] border border-[#333333] hover:bg-[#262626] hover:border-[#404040] transition-all duration-200 text-[13px] font-medium"
                                >
                                    <svg
                                        className="w-3.5 h-3.5 text-[#888888] group-hover:text-white transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-[#e5e5e5]">pinakatechnologiessg@gmail.com</span>
                                </a>
                                <a
                                    href="tel:+918739054493"
                                    className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1a1a1a] border border-[#333333] hover:bg-[#262626] hover:border-[#404040] transition-all duration-200 text-[13px] font-medium"
                                >
                                    <svg
                                        className="w-3.5 h-3.5 text-[#888888] group-hover:text-white transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <span className="text-[#e5e5e5]">+91 87390 54493</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer - Vercel Style */}
            <footer className="relative border-t border-[#333333] mt-auto">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[13px] text-[#666666] tracking-[-0.01em]">
                            © 2025 3DPinaka — A brand of Pinaka Technologies SG Pvt Ltd
                        </p>
                        <div className="flex items-center gap-6">
                            <a
                                href="https://status.3dpinaka.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[13px] text-[#666666] hover:text-white transition-colors tracking-[-0.01em]"
                            >
                                Status
                            </a>
                            <span className="text-[#333333]">•</span>
                            <a
                                href="mailto:pinakatechnologiessg@gmail.com"
                                className="text-[13px] text-[#666666] hover:text-white transition-colors tracking-[-0.01em]"
                            >
                                Support
                            </a>
                            <span className="text-[#333333]">•</span>
                            <a
                                href="https://twitter.com/3dpinaka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[13px] text-[#666666] hover:text-white transition-colors tracking-[-0.01em]"
                            >
                                Updates
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
