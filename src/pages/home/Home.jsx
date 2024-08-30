import React, { useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import './Home.scss';

// import components
import HeroHome from "../../components/hero-home/HeroHome";
import SwiperHeroHome from "../../components/swiper-hero-home/SwiperHeroHome";
import TaglineHome from "../../components/tagline-home/TaglineHome";
import QuoteHome from "../../components/quote-home/QuoteHome";
import TugasBEMHome from "../../components/tugas-bem-home/TugasBEMHome";

const Home = () => {
    const { scrollY } = useScroll();
    const heroScale = useTransform(scrollY, [0, 300], [1, 0.85]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.div 
            className="page-home"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            <motion.div
                style={{ 
                    scale: heroScale, 
                    opacity: heroOpacity,
                    transformOrigin: "top center"
                }}
            >
                <motion.div variants={itemVariants}>
                    <HeroHome />
                </motion.div>
            </motion.div>
            <motion.div variants={itemVariants}>
                <SwiperHeroHome />
            </motion.div>
            <motion.div variants={itemVariants}>
                <TaglineHome />
            </motion.div>
            <motion.div variants={itemVariants}>
                <QuoteHome />
            </motion.div>
            <motion.div variants={itemVariants}>
                <TugasBEMHome />
            </motion.div>
        </motion.div>
    );
}

export default Home;