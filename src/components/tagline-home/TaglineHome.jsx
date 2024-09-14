import React from "react";
import './TaglineHome.scss';

// import elements
import focus from '../../images/element/focus.png';
import innovate from '../../images/element/innovate.png';
import purpose from '../../images/element/purpose.png';
import grow from '../../images/element/grow.png';
import continuity from '../../images/element/continuity.png';
import connect from '../../images/element/connect.png';
import solid from '../../images/element/solid.png';
import balance from '../../images/element/balance.png';

const TaglineHome = () => {
    return (
        <section className="tagline-home_section">
            {/* <h2><span>#</span>TogetherWeImproveBetter</h2> */}
            <div className="element-wrapper">
                <img src={focus} alt="focus" />
                <img src={innovate} alt="innovate" />
                <img src={purpose} alt="purpose" />
                <img src={grow} alt="grow" />
                <img src={continuity} alt="continuity" />
                <img src={connect} alt="connect" />
                <img src={solid} alt="solid" />
                <img src={balance} alt="balance" />
            </div>
            <p>BEM UMN memiliki tagline organisasi "Commit.Solid.Integrated." yang menegaskan bagaimana setiap anggota harus memiliki komitmen tinggi untuk melaksanakan tanggung jawabnya, solidaritas yang kuat antara sesama anggota, serta mampu berintegrasi dengan naungan serta kemahasiswaan.</p>
        </section>
    );
}
 
export default TaglineHome;