import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message. We will get back to you shortly.");
    };

    return (
        <>
            <div className="bg-slate-900 text-white pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Get in Touch
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Have a project in mind? Let's build something great together.
                    </p>
                </div>
            </div>

            <Section className="bg-white dark:bg-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <Card className="p-8">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 dark:bg-slate-700 p-3 rounded-lg text-blue-600">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-900 dark:text-white">Headquarters</h4>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                                            Tech Park, Hinjewadi Phase 1,<br />
                                            Pune, Maharashtra 411057, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 dark:bg-slate-700 p-3 rounded-lg text-blue-600">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-900 dark:text-white">Phone</h4>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">+91 20 1234 5678</p>
                                        <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am - 6pm IST</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 dark:bg-slate-700 p-3 rounded-lg text-blue-600">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-900 dark:text-white">Email</h4>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">contact@infratech.com</p>
                                        <p className="text-slate-600 dark:text-slate-400">careers@infratech.com</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div className="h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 relative bg-slate-100 flex items-center justify-center">
                            <p className="text-slate-500 font-medium z-10">Google Map Placeholder (Pune, India)</p>
                            {/* Actual Google Maps Embed would go here. Using iframe for demo if user wanted, but static placeholder is safer for now unless I have an API key or use public embed link which might be flaky. I'll use a static image/bg for now to keep it clean. */}
                            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pune_District_Map.svg/1200px-Pune_District_Map.svg.png')] bg-cover bg-center opacity-20"></div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                                    <input type="text" required className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                    <input type="email" required className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Acme Inc." />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Country</label>
                                <select className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                                    <option>India</option>
                                    <option>United Kingdom</option>
                                    <option>Australia</option>
                                    <option>United States</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea rows="4" required className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="w-full">
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </Card>
                </div>
            </Section>
        </>
    );
}
