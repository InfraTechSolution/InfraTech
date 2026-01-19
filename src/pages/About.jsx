import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Target, Users, Globe, Award, Briefcase } from 'lucide-react';
import LazyImage from '../components/ui/LazyImage';

export default function About() {
    return (
        <>
            {/* Header */}
            <div className="bg-white text-slate-900 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        About Infra Tech Solution
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto"
                    >
                        We are a global IT consulting firm headquartered in Pune, India, dedicated to transforming enterprises through digital innovation.
                    </motion.p>
                </div>
            </div>

            {/* Company Overview */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                Founded in Pune, the IT hub of India, Infra Tech Solution has rapidly grown into a global technology partner for Fortune 500 companies. We specialize in building scalable, robust, and future-proof digital infrastructure.
                            </p>
                            <p>
                                Our team of expert engineers, architects, and consultants work tirelessly to solve complex business challenges. From legacy modernization to cloud-native development, we bring a wealth of experience and a passion for technology to every project.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="bg-sky-50 p-4 rounded-lg text-center">
                                <div className="text-3xl font-bold text-sky-600 mb-1">3+</div>
                                <div className="text-sm text-slate-500">Years of Excellence</div>
                            </div>
                            <div className="bg-sky-50 p-4 rounded-lg text-center">
                                <div className="text-3xl font-bold text-sky-600 mb-1">10+</div>
                                <div className="text-sm text-slate-500">Projects Delivered</div>
                            </div>
                            <div className="bg-sky-50 p-4 rounded-lg text-center">
                                <div className="text-3xl font-bold text-sky-600 mb-1">5+</div>
                                <div className="text-sm text-slate-500">Global Clients</div>
                            </div>
                            <div className="bg-sky-50 p-4 rounded-lg text-center">
                                <div className="text-3xl font-bold text-sky-600 mb-1">20+</div>
                                <div className="text-sm text-slate-500">Expert Developers</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <LazyImage
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Team collaboration"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/30"></div>
                    </div>
                </div>
            </Section>

            {/* Leadership Values */}
            <Section className="bg-sky-50/50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
                    <p className="text-slate-600">The principles that guide our every action.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Target className="h-8 w-8 text-blue-500" />,
                            title: "Innovation First",
                            desc: "We constantly challenge the status quo to find better, faster, and more efficient solutions."
                        },
                        {
                            icon: <Users className="h-8 w-8 text-blue-500" />,
                            title: "Client Centricity",
                            desc: "Your success is our success. We work as an extension of your team, not just a vendor."
                        },
                        {
                            icon: <Award className="h-8 w-8 text-blue-500" />,
                            title: "Uncompromising Quality",
                            desc: "We adhere to the highest standards of code quality, security, and performance."
                        }
                    ].map((value, idx) => (
                        <Card key={idx} className="text-center p-8 bg-white">
                            <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                            <p className="text-slate-600">{value.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Global Presence */}
            <Section className="bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Footprint</h2>
                    <p className="text-slate-600">Serving clients across continents with local expertise.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                    <div className="p-6">
                        <Globe className="h-12 w-12 text-sky-600 mx-auto mb-4 opacity-80" />
                        <h3 className="text-xl font-bold text-slate-900">Australia</h3>
                        <p className="text-slate-500 mt-2">Sydney (Remote)</p>
                    </div>
                    <div className="p-6 border-l border-r border-slate-100">
                        <Globe className="h-12 w-12 text-sky-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900">India</h3>
                        <p className="text-slate-500 mt-2">Pune (HQ)</p>
                    </div>
                    <div className="p-6">
                        <Globe className="h-12 w-12 text-sky-600 mx-auto mb-4 opacity-80" />
                        <h3 className="text-xl font-bold text-slate-900">United Kingdom</h3>
                        <p className="text-slate-500 mt-2">London (Remote)</p>
                    </div>
                </div>
            </Section>
        </>
    );
}
