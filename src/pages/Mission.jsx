import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Eye, TrendingUp, Heart } from 'lucide-react';

export default function Mission() {
    return (
        <>
            <div className="bg-slate-900 text-white pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Mission & Vision
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Our guiding stars as we navigate the digital future.
                    </p>
                </div>
            </div>

            <Section className="bg-white dark:bg-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col h-full"
                    >
                        <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-2xl h-full border-l-4 border-blue-600">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                    <TrendingUp className="h-8 w-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
                            </div>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
                                "To empower global enterprises with scalable, innovative, and sustainable digital solutions that drive operational excellence and business growth. We strive to bridge the gap between complex technology and tangible business value."
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col h-full"
                    >
                        <div className="bg-cyan-50 dark:bg-slate-800 p-8 rounded-2xl h-full border-l-4 border-cyan-500">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-full">
                                    <Eye className="h-8 w-8 text-cyan-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
                            </div>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
                                "To be the most trusted global technology partner, recognized for our integrity, innovation, and ability to deliver transformative digital experiences that shape the future of industries."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            <Section className="bg-slate-50 dark:bg-slate-800/50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Long-Term Goals</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-6">
                            <div className="text-4xl font-bold text-blue-200 mb-2">01</div>
                            <h3 className="text-lg font-bold mb-2">Global Expansion</h3>
                            <p className="text-sm text-slate-500">Establishing new innovation hubs in Europe and North America by 2028.</p>
                        </Card>
                        <Card className="p-6">
                            <div className="text-4xl font-bold text-blue-200 mb-2">02</div>
                            <h3 className="text-lg font-bold mb-2">Sustainable Tech</h3>
                            <p className="text-sm text-slate-500">Helping 100+ clients achieve net-zero carbon footprints through green IT solutions.</p>
                        </Card>
                        <Card className="p-6">
                            <div className="text-4xl font-bold text-blue-200 mb-2">03</div>
                            <h3 className="text-lg font-bold mb-2">Talent Nurturing</h3>
                            <p className="text-sm text-slate-500">Building a world-class workforce of 1000+ technology experts.</p>
                        </Card>
                    </div>
                </div>
            </Section>
        </>
    );
}
