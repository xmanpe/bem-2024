import React from "react";
import './TugasBEMHome.scss';

// import icons
import arrowUp from '../../images/icon/arrow up.svg';

// import logos
import bemMuda from '../../images/logo/bem muda.svg';
import bond from '../../images/logo/bond.svg';
import sharingOrganisator from '../../images/logo/sharing organisator.svg';

// import images
import maxima from '../../images/sukma/maxima-color.png';
import maximaUncolor from '../../images/sukma/maxima-uncolor.png';
import starlight from '../../images/sukma/starlight-color.png';
import starlightUncolor from '../../images/sukma/starlight-uncolor.png';
import omb from '../../images/sukma/omb-color.png';
import ombUncolor from '../../images/sukma/omb-uncolor.png';
import umnEco from '../../images/sukma/eco-color.png';
import umnEcoUncolor from '../../images/sukma/eco-uncolor.png';
import mrMs from '../../images/sukma/mrms-color.png';
import mrMsUncolor from '../../images/sukma/mrms-uncolor.png';
import umnFestival from '../../images/sukma/ufest-color.png';
import umnFestivalUncolor from '../../images/sukma/ufest-uncolor.png';

import himpunan from '../../images/himpunan.png';
import ukm from '../../images/ukm.png';
import lso from '../../images/lso.png';

const TugasBEMHome = () => {
    return (
        <section className="tugas-bem-home_section">
            <h1>Tugas BEM UMN</h1>
            <div className="tugas-wrapper">
                <div className="each-tugas">
                    <p>Pertama, BEM UMN bertugas untuk membuat program kerja tahunan.</p>
                    <div className="card-wrapper">
                        <div className="each-card proker">
                            <div className="card-image">
                                <img src={bemMuda} alt="proker" />
                            </div>
                            <div className="card-link">
                                <p>BEM MUDA</p>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                        <div className="each-card proker">
                            <div className="card-image">
                                <img src={bond} alt="proker" />
                            </div>
                            <div className="card-link">
                                <p>BOND</p>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                        <div className="each-card proker">
                            <div className="card-image">
                                <img src={sharingOrganisator} alt="proker" />
                            </div>
                            <div className="card-link">
                                <p>Sharing Organisator</p>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-tugas">
                    <p>Kedua, BEM UMN bertugas menaungi beberapa kegiatan mahasiswa. </p>
                    <div className="card-wrapper grid">
                        <div className="each-card">
                            <div className="card-image square">
                                <img className="absolute-image" src={maximaUncolor} alt="proker" />
                                <img src={maxima} alt="proker" />
                            </div>
                            <div className="card-link">
                                <div className="card-text">
                                    <p>MAXIMA 2024</p>
                                    <p className="supervisor">Spv. Steven Fernando</p>
                                </div>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                        <div className="each-card">
                            <div className="card-image square">
                                <img className="absolute-image" src={starlightUncolor} alt="proker" />
                                <img src={starlight} alt="proker" />
                            </div>
                            <div className="card-link">
                                <div className="card-text">
                                    <p>Starlight UMN 2024</p>
                                    <p className="supervisor">Spv. Rapha Zakharia</p>
                                </div>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                        <div className="each-card">
                            <div className="card-image square">
                                <img className="absolute-image" src={ombUncolor} alt="proker" />
                                <img src={omb} alt="proker" />
                            </div>
                            <div className="card-link">
                                <div className="card-text">
                                    <p>OMB UMN 2024</p>
                                    <p className="supervisor">Spv. Ralph Theodoric</p>
                                </div>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                        <div className="each-card">
                            <div className="card-image square">
                                <img className="absolute-image" src={umnEcoUncolor} alt="proker" />
                                <img src={umnEco} alt="proker" />
                            </div>
                            <div className="card-link">
                                <div className="card-text">
                                    <p>UMN ECO 2024</p>
                                    <p className="supervisor">Spv. Khanza Azzahra</p>
                                </div>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                        <div className="each-card">
                            <div className="card-image square">
                                <img className="absolute-image" src={mrMsUncolor} alt="proker" />
                                <img src={mrMs} alt="proker" />
                            </div>
                            <div className="card-link">
                                <div className="card-text">
                                    <p>Mr. & Ms. UMN 2024</p>
                                    <p className="supervisor">Spv. Kathleen Tandi</p>
                                </div>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                        <div className="each-card">
                            <div className="card-image square">
                                <img className="absolute-image" src={umnFestivalUncolor} alt="proker" />
                                <img src={umnFestival} alt="proker" />
                            </div>
                            <div className="card-link">
                                <div className="card-text">
                                    <p>UMN Festival 2024</p>
                                    <p className="supervisor">Spv. Alfonsus Given</p>
                                </div>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-tugas">
                    <p>Terakhir, BEM UMN juga bertanggung jawab untuk koordinasi, pengembangan, dan dukungan terhadap himpunan mahasiswa, UKM, dan LSO.</p>
                    <div className="card-wrapper grid">
                        <div className="each-card">
                            <div className="card-image square">
                                <img src={himpunan} alt="proker" />
                            </div>
                            <div className="card-link">
                                <div className="card-text">
                                    <p>Himpunan Mahasiswa</p>
                                </div>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                        <div className="each-card">
                            <div className="card-image square">
                                <img src={ukm} alt="proker" />
                            </div>
                            <div className="card-link">
                                <div className="card-text">
                                    <p>Unit Kegiatan Mahasiswa (UKM)</p>
                                </div>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                        <div className="each-card">
                            <div className="card-image square">
                                <img src={lso} alt="proker" />
                            </div>
                            <div className="card-link">
                                <div className="card-text">
                                    <p>Lembaga Semi Otonom (LSO)</p>
                                </div>
                                <img src={arrowUp} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default TugasBEMHome;