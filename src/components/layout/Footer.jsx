import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <Globe className="h-8 w-8 text-blue-500" />
                            <span className="text-2xl font-bold text-white">Infra Tech</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Global IT consulting firm delivering scalable digital solutions.
                            We empower enterprises with cutting-edge technology and innovation.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-blue-600 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-pink-500 transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/services#enterprise" className="hover:text-blue-400 transition-colors">Enterprise Solutions</Link></li>
                            <li><Link to="/services#manufacturing" className="hover:text-blue-400 transition-colors">Manufacturing & IoT</Link></li>
                            <li><Link to="/services#retail" className="hover:text-blue-400 transition-colors">Retail & E-Commerce</Link></li>
                            <li><Link to="/services#finance" className="hover:text-blue-400 transition-colors">BFSI & Fintech</Link></li>
                            <li><Link to="/services#cloud" className="hover:text-blue-400 transition-colors">Cloud Computing</Link></li>
                            <li><Link to="/services#cybersecurity" className="hover:text-blue-400 transition-colors">Cybersecurity</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link to="/mission" className="hover:text-blue-400 transition-colors">Mission & Vision</Link></li>
                            <li><Link to="/global-clients" className="hover:text-blue-400 transition-colors">Global Clients</Link></li>
                            <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                            <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm mb-6">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>Tech Park, Hinjewadi Phase 1,<br />Pune, Maharashtra 411057, India</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>+91 20 1234 5678</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>contact@infratech.com</span>
                            </li>
                        </ul>

                        <div className="bg-slate-800 p-1 rounded-lg flex">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-transparent text-sm w-full px-3 py-2 focus:outline-none text-white placeholder-slate-500"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {currentYear} Infra Tech Solution. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span>Made with precision in Pune</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
