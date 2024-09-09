// divisiData.jsx
import fotobph from '../../images/foto-divisi/bph/foto-1.png';
import fotobph2 from '../../images/foto-divisi/bph/foto-2.png';
import fotosukma from '../../images/foto-divisi/sukma/foto-1.png';
import fotosukma2 from '../../images/foto-divisi/sukma/foto-2.png';
import fotopr from '../../images/foto-divisi/pr/foto-1.png';

// BPH Members
import sherly from '../../images/foto-divisi/bph/member/sherly.png';
import vidy from '../../images/foto-divisi/bph/member/vidy.png';
import nicholas from '../../images/foto-divisi/bph/member/nicholas.png';
import amanda from '../../images/foto-divisi/bph/member/amanda.png';

// SUKMA Members
import alfon from '../../images/foto-divisi/sukma/member/alfon.png';
import steven from '../../images/foto-divisi/sukma/member/steven.png';
import kathleen from '../../images/foto-divisi/sukma/member/kathleen.png';
import ralph from '../../images/foto-divisi/sukma/member/ralph.png';
import rapha from '../../images/foto-divisi/sukma/member/rapha.png';
import putrida from '../../images/foto-divisi/sukma/member/putrida.png';

// Elements
import elementBPH from '../../images/element/grow.svg';
import elementPR from '../../images/element/connect.svg';
import elementSUKMA from '../../images/element/innovate.svg';

export const DivisiData = {
    BPH: {
        title: "BPH",
        subtitle: "Badan Pengurus Harian",
        description: "<span>Badan Pengurus Harian</span>, merupakan divisi yang bertanggung jawab dalam melakukan koordinasi terkait program kerja, mengawasi kinerja dari masing-masing anggota divisi, serta bertugas dalam pengelolaan keuangan serta hal administratif BEM UMN.",
        images: [fotobph, fotobph2],
        element: elementBPH,
        members: [
            { name: "Sherly", role: "Ketua", image: sherly },
            { name: "Nicholas Prawira", role: "Wakil Ketua", image: nicholas },
            { name: "Vidy Tandiono", role: "Sekben 1", image: vidy },
            { name: "Amanda Nicole", role: "Sekben 2", image: amanda },
        ],
    },
    PR: {
        title: "PR",
        subtitle: "<i>Public Relations</i>",
        description: "<span><i>Public Relations</i></span>, bertanggung jawab dalam beberapa hal: <br><br>Koordinator PR, bertanggung jawab untuk mengatur segala bentuk konten publikasi pada media sosial BEM UMN, menjadi penghubung dari Media Kampus UMN, mengatur segala bentuk kerjasama <i>media partner</i> dengan BEM UMN, dan mengawasi kinerja dari divisi PR Internal maupun Eksternal.<br><br>PR Internal, bertanggung jawab dalam mengatur segala bentuk desain dan visualisasi yang bersangkutan dengan publikasi konten pada media sosial BEM UMN, serta bertanggung jawab dalam melakukan penyebaran informasi melalui media sosial BEM UMN atau media komunikasi lainnya.<br><br>PR Eksternal, bertanggung jawab dalam menjalin hubungan kerjasama dengan pihak internal maupun eksternal UMN, berperan dalam mengurus dokumen administratif yang bersinggungan dengan pihak eksternal, serta bertanggung jawab dalam melakukan komunikasi pada media sosial BEM UMN.",
        images: [fotopr, null],
        element: elementPR,
        members: [
            { name: "Gabriella Christina", role: "Koordinator PR", image: null },
            { name: "Daffa Akbari", role: "PR Internal 1", image: null },
            { name: "Gabriella Nadine", role: "PR Internal 2", image: null },
            { name: "Christyana Trifia", role: "PR Eksternal 1", image: null },
            { name: "Ryo Anthonio", role: "PR Eksternal 2", image: null },
        ],
    },
    SUKMA: {
        title: "SUKMA",
        subtitle: "Supervisor Kegiatan Mahasiswa",
        description: "<span>Supervisor Kegiatan Mahasiswa</span>, bertanggung jawab dalam mengawasi masing-masing Kegiatan Mahasiswa yang dinaungi agar dapat terlaksana sesuai dengan tujuan kegiatannya. SUKMA juga berperan aktif untuk memastikan kinerja dari setiap BPH yang terlibat langsung dalam Kegiatan Mahasiswa agar alur kerja yang terbentuk dapat berjalan dengan baik.",
        images: [fotosukma, fotosukma2],
        element: elementSUKMA,
        members: [
            { name: "Alfonsus Given", role: "Spv. UMN Festival 2024", image: alfon },
            { name: "Katheen Tandi", role: "Spv. Mr. & Ms. UMN 2024", image: kathleen },
            { name: "Khanza Azzahra", role: "Spv. UMN ECO 2024", image: putrida },
            { name: "Ralph Theodoric", role: "Spv. OMB UMN 2024", image: ralph },
            { name: "Rapha Zakharia", role: "Spv. Starlight UMN 2024", image: rapha },
            { name: "Steven Fernando", role: "Spv. MAXIMA 2024", image: steven },
        ],
    },
    SUFAK: {
        title: "SUKM",
        subtitle: "Supervisor Unit Kegiatan Mahasiswa",
        description: "<span>SUKM</span>, bertanggung jawab untuk menjaga hubungan baik...",
        images: [null, null],
        element: elementPR,
        members: [
            { name: "Andi Bintang", role: "Koordinator PR", image: null },
            { name: "Ibrahim Zaidan", role: "PR Internal 1", image: null },
            { name: "Gabriella Nadine", role: "PR Internal 2", image: null },
            { name: "Christyana Trifia", role: "PR Eksternal 1", image: null },
            { name: "Antonio Ryo", role: "PR Eksternal 2", image: null },
        ],
    },
    SUKM: {
        title: "PR",
        subtitle: "Public Relations",
        description: "<span>PR</span>, bertanggung jawab untuk menjaga hubungan baik...",
        images: [null, null],
        element: elementPR,
        members: [
            { name: "Gabriella Christina", role: "Koordinator PR", image: null },
            { name: "Daffa Akbari", role: "PR Internal 1", image: null },
            { name: "Gabriella Nadine", role: "PR Internal 2", image: null },
            { name: "Christyana Trifia", role: "PR Eksternal 1", image: null },
            { name: "Antonio Ryo", role: "PR Eksternal 2", image: null },
        ],
    },
    SULSO: {
        title: "PR",
        subtitle: "Public Relations",
        description: "<span>PR</span>, bertanggung jawab untuk menjaga hubungan baik...",
        images: [null, null],
        element: elementPR,
        members: [
            { name: "Gabriella Christina", role: "Koordinator PR", image: null },
            { name: "Daffa Akbari", role: "PR Internal 1", image: null },
            { name: "Gabriella Nadine", role: "PR Internal 2", image: null },
            { name: "Christyana Trifia", role: "PR Eksternal 1", image: null },
            { name: "Antonio Ryo", role: "PR Eksternal 2", image: null },
        ],
    },
};

export default DivisiData;