import React from "react";
import './QuoteHome.scss';

// Import icons and images
import quoteIcon from '../../images/icon/quote.svg';
import sherlyImg from '../../images/foto-divisi/bph/member/sherly.jpeg';
import nichoImg from '../../images/foto-divisi/bph/member/nicholas.jpeg';

// Import components
import Button from '../cta/Button';

const Quote = ({ text, personImg, personName, personJabatan }) => {
    return (
        <div className="each-quote">
            <img src={quoteIcon} alt="quote" />
            <div className="quote-text">
                <p dangerouslySetInnerHTML={{ __html: text }}></p>
                <div className="quote-person">
                    <div className="quote-image">
                        <img src={personImg} alt={personName} />
                    </div>
                    <div className="status">
                        <p className="person-name">{personName}</p>
                        <p className="person-jabatan">{personJabatan}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const QuoteHome = () => {
    return (
        <section className="quote-home_section">
            <div className="quote-wrapper">
                <Quote 
                    text={`
                        Halo KBM UMN! BEM UMN adalah tempat untuk saling belajar dan berkolaborasi 
                        untuk meningkatkan potensi diri, <i>soft skills</i>, dan <i>hard skills</i> bahkan lebih 
                        daripada itu semua. Kami selalu percaya apa yang dikerjakan dengan hati 
                        akan sampai ke hati. Untuk berjalan ke arah yang lebih baik 
                        ke depan, kami butuh dukungan dari KBM UMN untuk bersatu bersama 
                        melangkah demi Almamater, Persada, dan Sesama.
                        <br /><br />
                        Commit. Solid. Integrated.
                    `}
                    personImg={sherlyImg}
                    personName="Sherly"
                    personJabatan="Ketua BEM UMN GEN XIV"
                />
                <Quote 
                    text={`
                        Saat ini, BEM UMN bekerja keras untuk menjadi wadah yang responsif dan inklusif 
                        bagi seluruh mahasiswa. Kami berharap BEM UMN dapat terus berkembang 
                        menjadi organisasi yang lebih kuat, inovatif, dan mampu menciptakan perubahan 
                        positif di kampus kedepannya. Bersama-sama, kita berkomitmen untuk terus memperbaiki diri 
                        dan membawa manfaat yang lebih besar bagi semua.
                        <br /><br />
                        #TogetherWeImproveBetter
                    `}
                    personImg={nichoImg}
                    personName="Nicholas Prawira"
                    personJabatan="Wakil Ketua BEM UMN GEN XIV"
                />
            </div>
            <Button variant="secondary" to="/anggota-bem">
                Anggota BEM UMN GEN XIV
            </Button>
        </section>
    );
};

export default QuoteHome;