import React, { useState } from "react";
import './Anggota.scss';

// import components
import Header from "../../components/header/Header";
import AnggotaDivisi from "../../components/anggota-divisi/AnggotaDivisi";

const Anggota = () => {
    const tabs = ['BPH', 'PR', 'SUKMA', 'SUFAK', 'SUKM', 'SULSO'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="page-anggota">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
            <AnggotaDivisi activeTab={activeTab} />
        </section>
    );
}

export default Anggota;