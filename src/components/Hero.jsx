import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { siteConfig } from "../data/siteConfig";
import profile from "../assets/profile.png";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-24 pb-16 px-6 relative">
            <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* <p className="eyebrow mb-4">available for opportunities</p> */}
                    <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-4">
                        {siteConfig.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-accent font-display mb-6">{siteConfig.role}</p>
                    <p className="text-muted text-lg max-w-xl mb-8">{siteConfig.tagline}</p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <a
                            href="#projects"
                            className="bg-accent text-navy font-medium px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
                        >
                            View Projects
                        </a>
                        <a
                            href={siteConfig.resumeUrl}
                            download
                            className="border border-border text-text px-6 py-3 rounded-lg hover:border-accent transition-colors"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="flex gap-5 text-2xl text-muted">
                        <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                        {/* <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram">
                            <FaInstagram />
                        </a> */}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative flex justify-center"
                >
                    <div className="absolute w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-glow" />
                    <img
                        src={profile}
                        alt={siteConfig.name}
                        className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border border-border animate-float"
                    />
                </motion.div>
            </div >
        </section >

    );
}