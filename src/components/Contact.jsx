import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-6xl mx-auto text-center">
            {/* <p className="eyebrow mb-3 justify-center flex">let's talk</p> */}
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-5xl font-semibold mb-6"
            >
                Let's build something together.
            </motion.h2>
            <p className="text-muted text-lg mb-6 max-w-xl mx-auto">
                Open to full-stack and AI-integration roles. Reach out on WhatsApp for the fastest reply, or email directly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-10 text-sm text-muted">
                <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                    <FaEnvelope className="text-xs" /> {siteConfig.email}
                </a>
                <span className="hidden sm:inline text-border">|</span>
                <a
                    href={`tel:${siteConfig.whatsapp}`}
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                    <FaPhone className="text-xs" /> {siteConfig.phone}
                </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-accent text-navy font-medium px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
                >
                    <FaWhatsapp /> Message on WhatsApp
                </a>
                <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 border border-border px-6 py-3 rounded-lg hover:border-accent transition-colors"
                >
                    <FaEnvelope /> Email Me
                </a>
            </div>

            <div className="flex justify-center gap-6 text-2xl text-muted">
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaGithub /></a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaLinkedin /></a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaInstagram /></a>
            </div>
        </section>
    );
}