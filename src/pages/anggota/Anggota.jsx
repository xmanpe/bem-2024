import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import './Anggota.scss';

// import components
import Header from "../../components/header/Header";
import AnggotaDivisi from "../../components/anggota-divisi/AnggotaDivisi";

const Anggota = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tabs = ['BPH', 'PR', 'SUKMA', 'SUFAK', 'SUKM', 'SULSO'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

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
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section
            className="page-anggota"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            <motion.div variants={itemVariants}>
                <Header 
                    activeTab={activeTab} 
                    setActiveTab={setActiveTab} 
                    tabs={tabs} 
                    title={'Anggota'}   
                    desc={'Kenali anggota BEM UMN GEN XIV yang telah berkomitmen dan berkontribusi dalam periode kepengurusan 2023/2024.'}
                />
            </motion.div>
            <motion.div variants={itemVariants}>
                <AnggotaDivisi activeTab={activeTab} />
            </motion.div>
        </motion.section>
    );
}

export default Anggota;