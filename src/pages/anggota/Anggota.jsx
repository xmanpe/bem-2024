import React from "react";
import './Anggota.scss';

// import components
import Header from "../../components/header/Header";
import AnggotaDivisi from "../../components/anggota-divisi/AnggotaDivisi";

const Anggota = () => {
    return (
        <section className="page-anggota">
            <Header />
            <AnggotaDivisi />
        </section>
    );
}
 
export default Anggota;