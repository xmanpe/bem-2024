import React, { useState, useEffect } from "react";
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

    return (
        <section className="page-anggota">
            <Header 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                tabs={tabs} 
                
                title={'Anggota'}   
                desc={'Kenali anggota yang membentuk BEM UMN GEN XIV menjadi satu kesatuan yang solid.'}
            />
            <AnggotaDivisi activeTab={activeTab} />
        </section>
    );
}

export default Anggota;