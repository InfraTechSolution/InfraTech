import { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "CTO, TechFlow Australia",
        content: "Infra Tech Solution transformed our legacy systems into a modern, cloud-native architecture. Their team's expertise in DevOps and Cloud migration is unmatched.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: 2,
        name: "David Chen",
        role: "Director of Operations, London FinCorp",
        content: "The fraud detection system they built for us has reduced our risk exposure by 40%. Highly professional and secure coding standards.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: 3,
        name: "Rajesh Kumar",
        role: "VP Engineering, IndoSystems",
        content: "Exceptional delivery on our ERP integration project. They understood our complex requirements and delivered ahead of schedule.",
        rating: 4,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        id: 4,
        name: "Emily Thompson",
        role: "Product Manager, EdTech Global",
        content: "The LMS platform designed by Infra Tech is intuitive and robust. Our user engagement has doubled since the launch.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
                        Client Success Stories
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Hear from global leaders who trust us with their technology.
                    </p>
                </div>
            </div>

            <Section className="bg-white dark:bg-slate-900">
                {/* Carousel */}
                <div className="max-w-4xl mx-auto relative mb-20">
                    <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
                        <button onClick={prevSlide} className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
                        <button onClick={nextSlide} className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="overflow-hidden py-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="text-center p-8 md:p-12 border-blue-100 dark:border-slate-700 shadow-2xl">
                                    <Quote className="w-12 h-12 text-blue-200 mx-auto mb-6" />
                                    <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 italic mb-8 leading-relaxed">
                                        "{testimonials[currentIndex].content}"
                                    </p>

                                    <div className="flex items-center justify-center space-x-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
                                            />
                                        ))}
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-blue-500"
                                        />
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                                        <p className="text-slate-500">{testimonials[currentIndex].role}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center space-x-2 mt-6">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Client Logos Grid */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-16">
                    <h3 className="text-center text-slate-500 font-medium mb-8">TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                        {['Google', 'Microsoft', 'Amazon', 'Spotify'].map((logo, i) => (
                            <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                                <span className="text-2xl font-bold text-slate-400 hover:text-blue-600 cursor-default">{logo}</span>
                            </div>
                        ))}
                    </div>
                    {/* Note: In a real app, I'd use actual SVGs for logos. Text placeholders used for simplicity as per instructions. */}
                </div>
            </Section>
        </>
    );
}
