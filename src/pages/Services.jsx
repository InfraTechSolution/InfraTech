import { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {
    Building2, ShoppingCart, GraduationCap, Plane, Tv, Factory, Shield, Server,
    Database, CreditCard, Box, Cpu, Smartphone, Video, Lock, BarChart,
    Users, Heart, CheckCircle, Zap, Briefcase, MessageCircle, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    { id: 'enterprise', name: 'Enterprise Solutions', icon: <Building2 className="w-5 h-5" /> },
    { id: 'finance', name: 'BFSI & Fintech', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: <Factory className="w-5 h-5" /> },
    { id: 'retail', name: 'Retail & E-Commerce', icon: <ShoppingCart className="w-5 h-5" /> },
    { id: 'education', name: 'Education (EdTech)', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'media', name: 'Media & Entertainment', icon: <Tv className="w-5 h-5" /> },
    { id: 'travel', name: 'Travel & Hospitality', icon: <Plane className="w-5 h-5" /> },
];

const servicesData = {
    enterprise: [
        { title: "ERP Systems", desc: "Integrated management of main business processes, often in real-time and mediated by software and technology.", icon: <Server /> },
        { title: "CRM Solutions", desc: "Manage interactions with current and potential customers to improve business relationships.", icon: <Users /> },
        { title: "SCM (Supply Chain)", desc: "Management of the flow of goods and services, involves the movement and storage of raw materials.", icon: <Box /> },
        { title: "HCM (Human Capital)", desc: "Transform traditional HR functions into opportunities to drive engagement, productivity, and business value.", icon: <Users /> },
    ],
    finance: [
        { title: "Core Banking", desc: "Back-end system that processes daily banking transactions and posts updates to accounts and other financial records.", icon: <Building2 /> },
        { title: "Payment Gateways", desc: "Secure and efficient payment processing integrations for seamless transactions.", icon: <CreditCard /> },
        { title: "RegTech", desc: "Regulatory technology to manage regulatory processes within the financial industry through technology.", icon: <Shield /> },
        { title: "Fraud Detection", desc: "AI-driven systems to identify and prevent fraudulent activities in real-time.", icon: <Lock /> },
    ],
    manufacturing: [
        { title: "MES Systems", desc: "Computerized systems used in manufacturing to track and document the transformation of raw materials to finished goods.", icon: <Factory /> },
        { title: "PLM (Product Lifecycle)", desc: "Managing the entire lifecycle of a product from inception, through engineering design and manufacture.", icon: <Cpu /> },
        { title: "IoT Solutions", desc: "Interconnected sensors and instruments for industrial monitoring and automation.", icon: <Smartphone /> },
        { title: "Inventory Mgmt", desc: "Supervision of non-capitalized assets (inventory) and stock items.", icon: <Box /> },
    ],
    retail: [
        { title: "E-Commerce Platforms", desc: "Custom online storefronts with seamless checkout and user experience.", icon: <ShoppingCart /> },
        { title: "POS Systems", desc: "Point of sale systems for unified commerce across channels.", icon: <CreditCard /> },
        { title: "Loyalty Platforms", desc: "Customer retention programs integrated with purchase history and behavior.", icon: <Heart /> },
        { title: "Inventory Systems", desc: "Real-time stock tracking across detailed SKUs and multiple locations.", icon: <BarChart /> },
    ],
    education: [
        { title: "LMS", desc: "Learning Management Systems for administration, documentation, tracking, reporting, and delivery of educational courses.", icon: <GraduationCap /> },
        { title: "Virtual Classrooms", desc: "Online learning environments that allow for live interaction between the tutor and the learners.", icon: <Video /> },
        { title: "EdTech Analytics", desc: "Data-driven insights to improve student performance and institutional efficiency.", icon: <BarChart /> },
        { title: "E-Assessment", desc: "Digital platforms for conducting secure and scalable examinations.", icon: <CheckCircle /> },
    ],
    media: [
        { title: "OTT Platforms", desc: "Streaming media services offered directly to viewers via the Internet.", icon: <Tv /> },
        { title: "CMS", desc: "Content Management Systems tailored for high-volume media publishers.", icon: <Database /> },
        { title: "DRM", desc: "Digital Rights Management to protect intellectual property and copyright.", icon: <Lock /> },
        { title: "AdTech", desc: "Tools and software used to manage, deliver, and target digital advertising.", icon: <Zap /> },
    ],
    travel: [
        { title: "Booking Engines", desc: "Online reservation systems for airlines, hotels, and travel agencies.", icon: <Plane /> },
        { title: "PMS (Property Mgmt)", desc: "Software for hospitality accommodation management and front desk operations.", icon: <Building2 /> },
        { title: "Travel Management", desc: "Corporate travel booking and expense management solutions.", icon: <Briefcase /> },
        { title: "CX Platforms", desc: "Enhancing traveler experience through personalized digital touchpoints.", icon: <MessageCircle /> },
    ]
};

// Helper icons needed (some reused from imports, some need placeholders or additional imports)
// Helper icons needed (some reused from imports, some need placeholders or additional imports)
// Icons consolidated at top

export default function Services() {
    const [activeTab, setActiveTab] = useState('enterprise');

    return (
        <>
            <div className="bg-white text-slate-900 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        End-to-end technology solutions tailored for your industry.
                    </p>
                </div>
            </div>

            <Section className="bg-sky-50/30 min-h-screen">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-24 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`w-full text-left px-6 py-4 flex items-center space-x-3 transition-colors border-l-4 ${activeTab === cat.id
                                        ? 'bg-sky-50 text-sky-600 border-sky-600 font-medium'
                                        : 'text-slate-600 border-transparent hover:bg-sky-50'
                                        }`}
                                >
                                    {cat.icon}
                                    <span>{cat.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                        {categories.find(c => c.id === activeTab)?.name}
                                    </h2>
                                    <p className="text-slate-600">
                                        Comprehensive {categories.find(c => c.id === activeTab)?.name.toLowerCase()} tailored to drive efficiency and innovation.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {servicesData[activeTab].map((service, idx) => (
                                        <Card key={idx} className="hover:border-sky-500/50 transition-colors bg-white">
                                            <div className="bg-sky-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-sky-600">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                                {service.desc}
                                            </p>
                                            <Button variant="ghost" className="!px-0 !py-0 text-sm">
                                                Learn more <ArrowRight className="ml-1 w-4 h-4" />
                                            </Button>
                                        </Card>
                                    ))}
                                </div>

                                <div className="mt-12 bg-sky-600 rounded-2xl p-8 text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Need a custom solution?</h3>
                                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
                                        We understand that every business is unique. Contact our experts to discuss your specific requirements.
                                    </p>
                                    <Button to="/contact" variant="primary" className="relative z-10">
                                        Schedule a Consultation
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Section>
        </>
    );
}

// End of component
