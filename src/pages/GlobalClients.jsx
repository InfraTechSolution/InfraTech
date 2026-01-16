import { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { MapPin, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const clients = [
    { name: 'TechFlow Australia', country: 'Australia', city: 'Sydney', logo: 'TF' },
    { name: 'London FinCorp', country: 'UK', city: 'London', logo: 'LF' },
    { name: 'Pune Motors', country: 'India', city: 'Pune', logo: 'PM' },
    { name: 'AusRetail', country: 'Australia', city: 'Melbourne', logo: 'AR' },
    { name: 'BritHealth', country: 'UK', city: 'Manchester', logo: 'BH' },
    { name: 'IndoSystems', country: 'India', city: 'Bangalore', logo: 'IS' },
];

export default function GlobalClients() {
    const [filter, setFilter] = useState('All');

    const filteredClients = filter === 'All' ? clients : clients.filter(c => c.country === filter);

    return (
        <>
            <div className="bg-slate-900 text-white pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Global Highlights
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Trusted by industry leaders across India, Australia, and the UK.
                    </p>
                </div>
            </div>

            <Section className="bg-white dark:bg-slate-900">
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-4 aspect-[2/1] relative overflow-hidden flex items-center justify-center">
                        {/* Abstract Map Representation */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-no-repeat bg-center"></div>

                        {/* Map Pins */}
                        <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}
                            className="absolute top-[40%] left-[72%] group cursor-pointer" // India Approx
                        >
                            <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute"></div>
                            <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10 border-2 border-white"></div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">India (HQ)</div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }}
                            className="absolute top-[25%] left-[48%] group cursor-pointer" // UK Approx
                        >
                            <div className="w-3 h-3 bg-blue-500 rounded-full relative z-10 border-2 border-white"></div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">United Kingdom</div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }}
                            className="absolute bottom-[20%] right-[10%] group cursor-pointer" // Australia Approx
                        >
                            <div className="w-3 h-3 bg-blue-500 rounded-full relative z-10 border-2 border-white"></div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Australia</div>
                        </motion.div>

                        <p className="relative z-10 text-slate-500 dark:text-slate-400 font-medium">Interactive Presence Map</p>
                    </div>
                </div>

                <div className="flex justify-center space-x-4 mb-12">
                    {['All', 'India', 'UK', 'Australia'].map(region => (
                        <button
                            key={region}
                            onClick={() => setFilter(region)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === region
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                }`}
                        >
                            {region}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredClients.map((client, idx) => (
                            <motion.div
                                key={client.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                layout
                            >
                                <Card className="flex items-center space-x-4 hover:border-blue-500/50">
                                    <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-full flex items-center justify-center font-bold text-slate-500 dark:text-slate-300 text-xl">
                                        {client.logo}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{client.name}</h3>
                                        <div className="flex items-center text-sm text-slate-500">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            {client.city}, {client.country}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </Section>
        </>
    );
}
