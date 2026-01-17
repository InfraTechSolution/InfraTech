import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import mapLocation from '../assets/map_location.jpg';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message. We will get back to you shortly.");
    };

    return (
        <>
            <Section id="contact" className="bg-white md:py-0 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 relative bg-slate-100 flex items-center justify-center">
                            <img src={mapLocation} alt="Office Location Map" className="w-full h-full object-cover" />
                        </div>

                        <Card className="p-8 bg-white border border-slate-100 shadow-lg">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-sky-50 p-3 rounded-lg text-sky-600">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-900">Headquarters</h4>
                                        <p className="text-slate-600 mt-1">
                                            Tech Park, Hinjewadi Phase 1,<br />
                                            Pune, Maharashtra 411057, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-sky-50 p-3 rounded-lg text-sky-600">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-900">Phone</h4>
                                        <p className="text-slate-600 mt-1">+91 20 1234 5678</p>
                                        <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am - 6pm IST</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-sky-50 p-3 rounded-lg text-sky-600">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-900">Email</h4>
                                        <p className="text-slate-600 mt-1">contactus@infratech-solution.com</p>
                                        <p className="text-slate-600">careers@infratech.com</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8 bg-white border border-slate-100 shadow-lg">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                    <input type="text" required className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                    <input type="email" required className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="Acme Inc." />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Country</label>
                                <select className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-sky-500 outline-none transition-all">
                                    <option>India</option>
                                    <option>United Kingdom</option>
                                    <option>Australia</option>
                                    <option>United States</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea rows="4" required className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
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
