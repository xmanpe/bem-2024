// divisiData.jsx
import fotobph from '../../images/foto-divisi/bph/foto-1.jpeg';
import fotobph2 from '../../images/foto-divisi/bph/foto-2.jpeg';
import fotosukma from '../../images/foto-divisi/sukma/foto-1.jpeg';
import fotosukma2 from '../../images/foto-divisi/sukma/foto-2.jpeg';
import fotopr from '../../images/foto-divisi/pr/foto-1.jpeg';
import fotopr2 from '../../images/foto-divisi/pr/foto-2.jpeg';
import fotosukm from '../../images/foto-divisi/sukm/foto-1.jpeg';
import fotosukm2 from '../../images/foto-divisi/sukm/foto-2.jpeg';
import fotosufak from '../../images/foto-divisi/sufak/foto-1.jpeg';
import fotosufak2 from '../../images/foto-divisi/sufak/foto-2.jpeg';
import fotosulso from '../../images/foto-divisi/sulso/foto-1.jpeg';
import fotosulso2 from '../../images/foto-divisi/sulso/foto-2.jpeg';

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
import elementSUFAK from '../../images/element/solid.svg';
import elementSUKM from '../../images/element/balance.svg';
import elementSULSO from '../../images/element/continuity.svg';

export const DivisiData = {
    BPH: {
        title: "BPH",
        subtitle: "Badan Pengurus Harian",
        description: "<span>BPH</span>, merupakan divisi yang bertanggung jawab dalam melakukan koordinasi terkait program kerja, mengawasi kinerja dari masing-masing anggota divisi, serta bertugas dalam pengelolaan keuangan serta hal administratif BEM UMN.",
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
        description: "<span>PR</span>, merupakan divisi yang bertanggung jawab untuk melakukan publikasi konten, menyebarluaskan informasi-informasi penting pada setiap media komunikasi yang digunakan, serta berperan aktif dalam menjalin hubungan dengan pihak internal maupun eksternal UMN.",
        images: [fotopr, fotopr2],
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
        description: "<span>SUKMA</span>, bertanggung jawab dalam mengawasi masing-masing Kegiatan Mahasiswa yang dinaungi agar dapat terlaksana sesuai dengan tujuan kegiatannya. SUKMA juga berperan aktif untuk memastikan kinerja dari setiap BPH yang terlibat langsung dalam Kegiatan Mahasiswa agar alur kerja yang terbentuk dapat berjalan dengan baik.",
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
        title: "SUFAK",
        subtitle: "Supervisor Fakultas",
        description: "<span>SUFAK</span>, bertanggung jawab dalam mengawasi, meninjau, dan memastikan kinerja, dari masing-masing himpunan UMN yang dinaunginya, dengan tujuan alur kerja yang dibangun dapat berjalan dengan baik, dan program kerja yang direncanakan dapat terealisasikan sesuai dengan visi misi himpunan maupun UMN.",
        images: [fotosufak, fotosufak2],
        element: elementSUFAK,
        members: [
            { name: "Kevin Jonathan", role: "SUFAK Bisnis", image: null },
            { name: "Romi Andreas", role: "SUFAK Seni & Desain", image: null },
            { name: "Septhia Rosa", role: "SUFAK Teknik & Informatika", image: null },
            { name: "Sese Listiani", role: "SUFAK Ilmu Komunikasi", image: null },
        ],
        roleDescriptions: {
            "SUFAK Bisnis": "Bertanggung jawab dalam mengawasi himpunan di Fakultas Bisnis...",
            "SUFAK Seni & Desain": "Bertanggung jawab dalam mengawasi himpunan di Fakultas Seni & Desain...",
            "SUFAK Teknik & Informatika": "Bertanggung jawab dalam mengawasi himpunan di Fakultas Teknik & Informatika...",
            "SUFAK Ilmu Komunikasi": "Bertanggung jawab dalam mengawasi himpunan di Fakultas Ilmu Komunikasi...",
        },
    },
    SUKM: {
        title: "SUKM",
        subtitle: "Supervisor Unit Kegiatan Mahasiswa",
        description: "<span>SUKM</span>, bertanggung jawab dalam mengawasi, meninjau, dan memastikan kinerja, dari masing-masing UKM yang dinaunginya, dengan tujuan alur kerja yang dibangun dapat berjalan dengan baik, dan program kerja yang direncanakan dapat terus berjalan sesuai dengan visi misi UKM maupun UMN.",
        images: [fotosukm, fotosukm2],
        element: elementSUKM,
        members: [
            { name: "Valencia Aurelia", role: "SUKM Seni Budaya 1", image: null },
            { name: "Andi Bintang", role: "SUKM Seni Budaya 2", image: null },
            { name: "Fitra Kamila", role: "SUKM Olahraga 1", image: null },
            { name: "Jason Clay", role: "SUKM Olahraga 2", image: null },
            { name: "Ibrahim Zaidan", role: "SUKM Sains & Sosial", image: null },
        ],
        roleDescriptions: {
            "SUKM Seni Budaya 1": "Mengawasi UKM di bidang seni dan budaya...",
            "SUKM Olahraga 1": "Mengawasi UKM di bidang olahraga...",
            "SUKM Sains & Sosial": "Mengawasi UKM di bidang sains dan sosial...",
        },
    },
    SULSO: {
        title: "SULSO",
        subtitle: "Supervisor Lembaga Semi Otonom",
        description: "<span>SULSO</span>, bertanggung jawab dalam membimbing dan mengawasi kinerja maupun daya cipta dari masing-masing LSO, agar program kerja yang telah ditentukan dapat berjalan dan terlaksana dengan baik.",
        images: [fotosulso, fotosulso2],
        element: elementSULSO,
        members: [
            { name: "Indira Sukma", role: "SULSO 1", image: null },
            { name: "Alicia Dindya", role: "SULSO 2", image: null },
        ],
        roleDescriptions: {
            "SULSO 1": "Mengawasi Lembaga Semi Otonom...",
            "SULSO 2": "Mengawasi Lembaga Semi Otonom lainnya...",
        },
    },
};

export default DivisiData;