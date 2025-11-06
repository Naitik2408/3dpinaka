"use client";

import Container from "@/components/Container";
import { Title, SubTitle } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Image from "next/image";

const InfoPage = () => {
    const faqs = [
        {
            question: "What products do you sell?",
            answer:
                "We sell a wide range of 3D printing products including 3D printers, 3D filaments (PLA, ABS, PETG, etc.), resin, 3D pens, build plates, nozzles, hotends, and various accessories for 3D printing enthusiasts and professionals.",
        },
        {
            question: "Do you ship across India?",
            answer:
                "Yes, we ship to all locations across India. Shipping charges may vary based on your location and order value. We offer free shipping on orders above a certain amount.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept various payment methods including Credit/Debit Cards, UPI, Net Banking, and popular digital wallets through our secure Razorpay payment gateway.",
        },
        {
            question: "How long does delivery take?",
            answer:
                "Delivery typically takes 3-7 business days depending on your location. You will receive a tracking number once your order is shipped. Metropolitan cities usually receive orders faster.",
        },
        {
            question: "What is your return policy?",
            answer:
                "We accept returns within 7 days of delivery for defective or damaged products. The product must be unused and in its original packaging. Please contact our customer support to initiate a return.",
        },
        {
            question: "Do your products come with a warranty?",
            answer:
                "Yes, all our 3D printers and major accessories come with a manufacturer's warranty. The warranty period varies by product. Please check the product description for specific warranty details.",
        },
        {
            question: "How can I track my order?",
            answer:
                "Once your order is shipped, you will receive an email with the tracking number. You can use this number to track your shipment on the carrier's website. You can also view your order status in the 'My Orders' section after logging in.",
        },
        {
            question: "Can I cancel or modify my order?",
            answer:
                "You can cancel or modify your order before it is shipped. Please contact our customer support immediately if you need to make changes. Once the order is shipped, cancellation is not possible, but you can return it as per our return policy.",
        },
    ];

    const helpTopics = [
        {
            title: "Orders & Shipping",
            items: [
                "How to place an order",
                "Track your order",
                "Shipping information",
                "Delivery times",
            ],
        },
        {
            title: "Returns & Refunds",
            items: [
                "Return policy",
                "How to return a product",
                "Refund process",
                "Exchange policy",
            ],
        },
        {
            title: "Account & Payment",
            items: [
                "Create an account",
                "Payment methods",
                "Payment security",
                "Order history",
            ],
        },
        {
            title: "Product Information",
            items: [
                "3D Printer guides",
                "Filament compatibility",
                "Product warranties",
                "Technical specifications",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <div
                className="relative py-24 mb-16 overflow-hidden"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=400&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-shop_dark_green/90 to-orange-500/90"></div>
                <Container className="relative z-10">
                    <div className="text-center space-y-4 text-white">
                        <Title className="text-shop_light_pink">Information Center</Title>
                        <p className="text-white/90 max-w-2xl mx-auto">
                            Discover more about 3DPinaka, our policies, and how we can help you with your 3D printing journey
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="space-y-24 pb-16">
                {/* About Us Section */}
                <section id="about" className="scroll-mt-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <Title className="text-darkColor">About 3DPinaka</Title>
                            <p className="text-darkColor/60 mt-2">
                                Your Trusted Partner in 3D Printing Solutions
                            </p>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden mb-10"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&h=300&fit=crop)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '300px',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-shop_dark_green/80 to-transparent flex items-center">
                                <div className="text-white px-10 max-w-2xl">
                                    <SubTitle className="text-white mb-3">Who We Are</SubTitle>
                                    <p className="text-white/90">
                                        3DPinaka.com is dedicated to providing high-quality, cost-effective 3D printers,
                                        3D filaments, and 3D Pens with easy-to-use devices and outstanding user experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-shop_light_pink/30 rounded-lg p-6 border border-shop_light_green/20 hover:border-shop_light_green hoverEffect">
                                <div className="text-4xl mb-3">🎯</div>
                                <SubTitle className="text-darkColor mb-2">Our Mission</SubTitle>
                                <p className="text-darkColor/60 text-sm">
                                    Empowering creators with cutting-edge 3D printing solutions, making technology accessible and affordable for everyone.
                                </p>
                            </div>

                            <div className="bg-shop_light_pink/30 rounded-lg p-6 border border-shop_light_green/20 hover:border-shop_light_green hoverEffect">
                                <div className="text-4xl mb-3">💡</div>
                                <SubTitle className="text-darkColor mb-2">Our Vision</SubTitle>
                                <p className="text-darkColor/60 text-sm">
                                    To be India's leading 3D printing solutions provider, driving innovation and excellence in additive manufacturing.
                                </p>
                            </div>

                            <div className="bg-shop_light_pink/30 rounded-lg p-6 border border-shop_light_green/20 hover:border-shop_light_green hoverEffect">
                                <div className="text-4xl mb-3">⭐</div>
                                <SubTitle className="text-darkColor mb-2">Our Values</SubTitle>
                                <p className="text-darkColor/60 text-sm">
                                    Quality, innovation, customer satisfaction, and integrity guide everything we do in serving our customers.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-8 border border-shop_light_green/20">
                            <SubTitle className="text-darkColor mb-6">Why Choose 3DPinaka?</SubTitle>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: "🎨", text: "Wide range of high-quality 3D printers and accessories" },
                                    { icon: "💰", text: "Competitive pricing and great deals" },
                                    { icon: "🤝", text: "Expert customer support and technical assistance" },
                                    { icon: "🚚", text: "Fast and secure delivery across India" },
                                    { icon: "✅", text: "Genuine products with warranty" },
                                    { icon: "❤️", text: "Dedicated to customer satisfaction" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-shop_light_pink/20 p-4 rounded-md">
                                        <span className="text-2xl">{item.icon}</span>
                                        <p className="text-darkColor/60 text-sm font-medium">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 bg-shop_dark_green/10 rounded-lg p-6 border border-shop_dark_green/20">
                            <SubTitle className="text-darkColor mb-3">Company Information</SubTitle>
                            <div className="space-y-1 text-darkColor/60 text-sm">
                                <p className="font-semibold text-darkColor">PINAKA TECHNOLOGIES S G PRIVATE LIMITED</p>
                                <p>📍 86, Sanjay Gandhi Nagar, Naubasta, Kanpur, Uttar Pradesh – 208021</p>
                                <p>🆔 GSTIN: 09AALCP3503B1ZQ</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Us Section */}
                <section id="contact" className="scroll-mt-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <Title className="text-darkColor">Contact Us</Title>
                            <p className="text-darkColor/60 mt-2">
                                We'd love to hear from you. Reach out to us anytime!
                            </p>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden mb-10"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=300&fit=crop)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '250px',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-shop_dark_green/85 to-orange-500/85 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <SubTitle className="text-white mb-2">Get In Touch</SubTitle>
                                    <p className="text-white/90">Our team is ready to assist you with any questions</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-shop_light_pink/30 rounded-lg p-6 border border-shop_light_green/20">
                                    <SubTitle className="text-darkColor mb-4">Visit Us</SubTitle>
                                    <div className="space-y-2 text-darkColor/60 text-sm">
                                        <p className="text-darkColor font-medium">86, Sanjay Gandhi Nagar, Naubasta</p>
                                        <p>Kanpur, Uttar Pradesh – 208021</p>
                                    </div>
                                </div>

                                <div className="bg-shop_light_pink/30 rounded-lg p-6 border border-shop_light_green/20">
                                    <SubTitle className="text-darkColor mb-4">Contact Details</SubTitle>
                                    <div className="space-y-3 text-darkColor/60 text-sm">
                                        <div>
                                            <p className="font-medium text-darkColor">📧 Email:</p>
                                            <p>pinakatechnologiessg@gmail.com</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-darkColor">📞 Phone:</p>
                                            <p>+91 87390 54493</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-darkColor">🕒 Business Hours:</p>
                                            <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                                            <p>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg p-6 border border-shop_light_green/20">
                                <SubTitle className="text-darkColor mb-4">Send Us a Message</SubTitle>
                                <form className="space-y-4">
                                    <Input
                                        placeholder="Your Name"
                                        required
                                        className="border-shop_light_green/30 focus:border-shop_dark_green"
                                    />
                                    <Input
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        className="border-shop_light_green/30 focus:border-shop_dark_green"
                                    />
                                    <Input
                                        placeholder="Subject"
                                        required
                                        className="border-shop_light_green/30 focus:border-shop_dark_green"
                                    />
                                    <Textarea
                                        placeholder="Your Message"
                                        rows={5}
                                        required
                                        className="border-shop_light_green/30 focus:border-shop_dark_green"
                                    />
                                    <Button className="w-full bg-shop_dark_green hover:bg-shop_light_green text-white">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Terms & Conditions Section */}
                <section id="terms" className="scroll-mt-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <Title className="text-darkColor">Terms & Conditions</Title>
                            <p className="text-darkColor/60 text-xs mt-2">Last Updated: November 2025</p>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden mb-10"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=200&fit=crop)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '200px',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-darkColor/90 to-shop_dark_green/90 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <SubTitle className="text-white">Terms of Service</SubTitle>
                                    <p className="text-white/80 text-sm mt-2">Please read these terms carefully before using our services</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "Introduction",
                                    content:
                                        'Welcome to 3DPinaka.com, operated by PINAKA TECHNOLOGIES S G PRIVATE LIMITED. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.',
                                },
                                {
                                    title: "Use of Website",
                                    content:
                                        "By using this website, you warrant that you are at least 18 years of age, have the legal capacity to enter into binding contracts, will use this website in accordance with these terms, and all information you provide is accurate and up-to-date.",
                                },
                                {
                                    title: "Product Information",
                                    content:
                                        "We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content on this website is accurate, complete, reliable, current, or error-free.",
                                },
                                {
                                    title: "Orders and Payment",
                                    content:
                                        "All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, limit quantities on any order, and require additional verification before accepting orders.",
                                },
                                {
                                    title: "Intellectual Property",
                                    content:
                                        "All content on this website, including text, graphics, logos, and images, is the property of PINAKA TECHNOLOGIES S G PRIVATE LIMITED and is protected by copyright and other intellectual property laws.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-6 border border-shop_light_green/20 hover:border-shop_light_green hoverEffect"
                                >
                                    <SubTitle className="text-darkColor mb-3">
                                        {index + 1}. {item.title}
                                    </SubTitle>
                                    <p className="text-darkColor/60 text-sm leading-relaxed">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Section */}
                <section id="privacy" className="scroll-mt-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <Title className="text-darkColor">Privacy Policy</Title>
                            <p className="text-darkColor/60 text-xs mt-2">Last Updated: November 2025</p>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden mb-10"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=200&fit=crop)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '200px',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-shop_dark_green/90 to-darkColor/90 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <SubTitle className="text-white">Your Privacy Matters</SubTitle>
                                    <p className="text-white/80 text-sm mt-2">We are committed to protecting your personal information</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "Introduction",
                                    content:
                                        'PINAKA TECHNOLOGIES S G PRIVATE LIMITED respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit 3DPinaka.com.',
                                },
                                {
                                    title: "Information We Collect",
                                    content:
                                        "We collect personal identification information (name, email, phone), billing and shipping addresses, payment information, order history, technical data (IP address, browser type), and usage data.",
                                },
                                {
                                    title: "How We Use Your Information",
                                    content:
                                        "We use your information to process and fulfill orders, communicate with you, improve our services, send marketing communications (with consent), detect fraud, and comply with legal obligations.",
                                },
                                {
                                    title: "Data Security",
                                    content:
                                        "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Payment information is encrypted and processed through secure payment gateways.",
                                },
                                {
                                    title: "Your Rights",
                                    content:
                                        "You have the right to access your personal data, request correction of inaccurate data, request deletion of your data, opt-out of marketing communications, and withdraw consent for data processing.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-6 border border-shop_light_green/20 hover:border-shop_light_green hoverEffect"
                                >
                                    <SubTitle className="text-darkColor mb-3">
                                        {index + 1}. {item.title}
                                    </SubTitle>
                                    <p className="text-darkColor/60 text-sm leading-relaxed">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs" className="scroll-mt-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <Title className="text-darkColor">Frequently Asked Questions</Title>
                            <p className="text-darkColor/60 mt-2">
                                Find answers to common questions about our products and services
                            </p>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden mb-10"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=200&fit=crop)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '200px',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-shop_dark_green/90 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <SubTitle className="text-white">Got Questions?</SubTitle>
                                    <p className="text-white/80 text-sm mt-2">We've got the answers you're looking for</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-8 border border-shop_light_green/20">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-shop_light_green/20">
                                        <AccordionTrigger className="text-left font-semibold text-darkColor hover:text-shop_dark_green">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-darkColor/60 text-sm">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div className="mt-8 bg-shop_light_pink/40 p-6 rounded-lg border border-shop_light_green/20 text-center">
                            <p className="text-darkColor font-medium mb-2">Can't find the answer you're looking for?</p>
                            <p className="text-darkColor/60 text-sm">
                                Please{" "}
                                <a
                                    href="#contact"
                                    className="text-shop_dark_green font-semibold hover:underline"
                                >
                                    contact our support team
                                </a>{" "}
                                and we'll be happy to help!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Help Section */}
                <section id="help" className="scroll-mt-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <Title className="text-darkColor">Help Center</Title>
                            <p className="text-darkColor/60 mt-2">How can we help you today?</p>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden mb-10"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=200&fit=crop)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '200px',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-shop_dark_green/90 to-orange-500/90 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <SubTitle className="text-white">We're Here to Help</SubTitle>
                                    <p className="text-white/80 text-sm mt-2">Find solutions and get support for all your needs</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            {helpTopics.map((topic, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-6 border border-shop_light_green/20 hover:border-shop_light_green hoverEffect"
                                >
                                    <SubTitle className="text-darkColor mb-4">{topic.title}</SubTitle>
                                    <ul className="space-y-2">
                                        {topic.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-darkColor/60 text-sm">
                                                <span className="text-shop_dark_green mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="bg-shop_dark_green/10 rounded-lg p-8 border border-shop_dark_green/20 text-center space-y-4">
                            <SubTitle className="text-darkColor">Still Need Help?</SubTitle>
                            <p className="text-darkColor/60 text-sm">
                                Our customer support team is here to assist you with any questions or concerns
                            </p>
                            <a
                                href="#contact"
                                className="inline-block bg-shop_dark_green text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-shop_light_green hoverEffect"
                            >
                                Contact Support
                            </a>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-10">
                            {[
                                {
                                    icon: "📧",
                                    title: "Email Support",
                                    detail: "pinakatechnologiessg@gmail.com",
                                    info: "Response within 24 hours",
                                },
                                {
                                    icon: "📞",
                                    title: "Phone Support",
                                    detail: "+91 87390 54493",
                                    info: "Mon - Sat: 10 AM - 7 PM",
                                },
                                {
                                    icon: "💬",
                                    title: "Live Chat",
                                    detail: "Chat with us",
                                    info: "Coming Soon",
                                },
                            ].map((support, idx) => (
                                <div
                                    key={idx}
                                    className="bg-shop_light_pink/30 rounded-lg p-6 border border-shop_light_green/20 text-center hover:border-shop_light_green hoverEffect"
                                >
                                    <div className="text-4xl mb-3">{support.icon}</div>
                                    <SubTitle className="text-darkColor mb-2 text-base">{support.title}</SubTitle>
                                    <p className="text-darkColor/60 text-sm mb-1">{support.detail}</p>
                                    <p className="text-darkColor/40 text-xs">{support.info}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default InfoPage;
