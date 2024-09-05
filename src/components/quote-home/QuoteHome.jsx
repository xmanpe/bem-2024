import React from "react";
import './QuoteHome.scss';

// import icons
import quote from '../../images/icon/quote.svg'

// import components
import Button from '../cta/Button';

// import images
import sherly from '../../images/sherly-quote.svg';
import nicho from '../../images/nicho-quote.svg';

const QuoteHome = () => {
    return (
        <section className="quote-home_section">
            <div className="quote-wrapper">
                <div className="each-quote">
                    <img src={quote} alt="quote" />
                    <div className="quote-text">
                        <p>Halo KBM UMN! BEM UMN adalah tempat untuk saling belajar dan berkolaborasi untuk meningkatkan potensi diri, <i>softskill</i>, dan <i>hardskill</i> bahkan lebih daripada itu semua
                        <br /><br />
                        Kami selalu percaya apa yang dikerjakan dengan hati akan sampai ke hati juga, dan untuk berjalan ke arah yang lebih baik kedepan kami butuh dukungan dari kalian semua untuk bersatu bersama melangkah demi Almamater, Persada, dan Sesama.
                        <br /><br />
                        Commit. Solid. Integrated</p>
                        <div className="quote-person">
                            <div className="quote-image">
                                <img src={sherly} alt="person image" />
                            </div>
                            <div className="status">
                                <p className="person-name">Sherly</p>
                                <p className="person-jabatan">Ketua BEM UMN GEN XIV</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-quote">
                    <img src={quote} alt="quote" />
                    <div className="quote-text">
                        <p>Saat ini, BEM bekerja keras untuk menjadi wadah yang responsif dan inklusif bagi seluruh mahasiswa. Ke depan, kami berharap BEM dapat terus berkembang menjadi organisasi yang lebih kuat, inovatif, dan mampu menciptakan perubahan positif di kampus. Bersama - sama, kita berkomitmen untuk terus memperbaiki diri dan membawa manfaat yang lebih besar bagi semua.
                        <br /><br />
                        #TogetherWeImproveBetter</p>
                        <div className="quote-person">
                            <div className="quote-image">
                                <img src={nicho} alt="person image" />
                            </div>
                            <div className="status">
                                <p className="person-name">Nicholas Prawira</p>
                                <p className="person-jabatan">Wakil Ketua BEM UMN GEN XIV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Button variant="secondary" to="/anggota-bem">
                Anggota BEM UMN GEN XIV
            </Button>
        </section>
    );
}
 
export default QuoteHome;