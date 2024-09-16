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
import sherly from '../../images/foto-divisi/bph/member/sherly.jpeg';
import vidy from '../../images/foto-divisi/bph/member/vidy.jpeg';
import nicholas from '../../images/foto-divisi/bph/member/nicholas.jpeg';
import amanda from '../../images/foto-divisi/bph/member/amanda.jpeg';

// PR Members
import bella from '../../images/foto-divisi/pr/member/bella.jpeg';
import daffa from '../../images/foto-divisi/pr/member/daffa.jpeg';
import nadine from '../../images/foto-divisi/pr/member/nadine.jpeg';
import christy from '../../images/foto-divisi/pr/member/christy.jpeg';
import ryo from '../../images/foto-divisi/pr/member/ryo.jpeg';

// SUKMA Members
import alfon from '../../images/foto-divisi/sukma/member/alfon.jpeg';
import steven from '../../images/foto-divisi/sukma/member/steven.jpeg';
import kathleen from '../../images/foto-divisi/sukma/member/kathleen.jpeg';
import ralph from '../../images/foto-divisi/sukma/member/ralph.jpeg';
import rapha from '../../images/foto-divisi/sukma/member/rapha.jpeg';
import putrida from '../../images/foto-divisi/sukma/member/putrida.jpeg';

// SUFAK Members
import ds from '../../images/foto-divisi/sufak/member/ds.jpeg';
import romi from '../../images/foto-divisi/sufak/member/romi.jpeg';
import septhi from '../../images/foto-divisi/sufak/member/septhi.jpeg';
import sese from '../../images/foto-divisi/sufak/member/sese.jpeg';

// SUKM Members
import valen from '../../images/foto-divisi/sukm/member/valen.jpeg';
import bintang from '../../images/foto-divisi/sukm/member/bintang.jpeg';
import fitra from '../../images/foto-divisi/sukm/member/fitra.jpeg';
import clay from '../../images/foto-divisi/sukm/member/clay.jpeg';
import ibra from '../../images/foto-divisi/sukm/member/ibra.jpeg';

// SULSO Members
import dira from '../../images/foto-divisi/sulso/member/dira.jpeg';
import cia from '../../images/foto-divisi/sulso/member/cia.jpeg';

// Elements
import elementBPH from '../../images/element/grow.png';
import elementPR from '../../images/element/connect.png';
import elementSUKMA from '../../images/element/innovate.png';
import elementSUFAK from '../../images/element/solid.png';
import elementSUKM from '../../images/element/balance.png';
import elementSULSO from '../../images/element/continuity.png';

export const DivisiData = {
    BPH: {
        title: "BPH",
        subtitle: "Badan Pengurus Harian",
        description: "<span>BPH</span> merupakan divisi yang bertanggung jawab dalam melakukan koordinasi terkait program kerja, mengawasi kinerja dari masing-masing anggota divisi, serta bertugas dalam pengelolaan keuangan serta hal administratif BEM UMN.",
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
        description: "<span>PR</span> merupakan divisi yang bertanggung jawab untuk melakukan publikasi konten, menyebarluaskan informasi-informasi penting pada setiap media komunikasi yang digunakan, serta berperan aktif dalam menjalin hubungan dengan pihak internal maupun eksternal UMN.",
        images: [fotopr, fotopr2],
        element: elementPR,
        members: [
            { name: "Gabriella Christina", role: "Koordinator PR&nbsp;&nbsp;ⓘ", image: bella },
            { name: "Daffa Akbari", role: "PR Internal 1&nbsp;&nbsp;ⓘ", image: daffa },
            { name: "Gabriella Nadine", role: "PR Internal 2&nbsp;&nbsp;ⓘ", image: nadine },
            { name: "Christyana Trifia", role: "PR Eksternal 1&nbsp;&nbsp;ⓘ", image: christy },
            { name: "Ryo Anthonio", role: "PR Eksternal 2&nbsp;&nbsp;ⓘ", image: ryo },
        ],
        roleDescriptions: {
            "Koordinator PR&nbsp;&nbsp;ⓘ": "Bertanggung jawab untuk mengatur segala bentuk konten publikasi pada media sosial BEM UMN, menjadi penghubung dari Media Kampus UMN, dan mengawasi kinerja dari divisi PR Internal maupun Eksternal.",
            "PR Internal 1&nbsp;&nbsp;ⓘ": "Bertanggung jawab dalam mengatur segala bentuk desain dan visualisasi yang bersangkutan dengan publikasi konten pada media sosial BEM UMN.",
            "PR Internal 2&nbsp;&nbsp;ⓘ": "Bertanggung jawab dalam mengatur segala bentuk desain dan visualisasi yang bersangkutan dengan publikasi konten pada media sosial BEM UMN.",
            "PR Eksternal 1&nbsp;&nbsp;ⓘ": "Bertanggung jawab dalam menjalin hubungan kerjasama dengan pihak internal maupun eksternal UMN.",
            "PR Eksternal 2&nbsp;&nbsp;ⓘ": "Bertanggung jawab dalam menjalin hubungan kerjasama dengan pihak internal maupun eksternal UMN.",
        },
    },
    SUKMA: {
        title: "SUKMA",
        subtitle: "Supervisor Kegiatan Mahasiswa",
        description: "<span>SUKMA</span> bertanggung jawab dalam mengawasi masing-masing Kegiatan Mahasiswa yang dinaungi agar dapat terlaksana sesuai dengan tujuan kegiatannya. SUKMA juga berperan aktif untuk memastikan kinerja dari setiap BPH yang terlibat langsung dalam Kegiatan Mahasiswa agar alur kerja yang terbentuk dapat berjalan dengan baik.",
        images: [fotosukma, fotosukma2],
        element: elementSUKMA,
        members: [
            { name: "Alfonsus Given", role: `Spv. <span>UMN Festival 2024</span>`, image: alfon },
            { name: "Katheen Tandi", role: `Spv. <span>Mr. & Ms. UMN 2024</span>`, image: kathleen },
            { name: "Khanza Azzahra", role: `Spv. <span>UMN ECO 2024</span>`, image: putrida },
            { name: "Ralph Theodoric", role: `Spv. <span>OMB UMN 2024</span>`, image: ralph },
            { name: "Rapha Zakharia", role: `Spv. <span>Starlight UMN 2024</span>`, image: rapha },
            { name: "Steven Fernando", role: `Spv. <span>MAXIMA 2024</span>`, image: steven },
        ],
    },
    SUFAK: {
        title: "SUFAK",
        subtitle: "Supervisor Fakultas",
        description: "<span>SUFAK</span> bertanggung jawab dalam mengawasi, meninjau, dan memastikan kinerja, dari masing-masing himpunan UMN yang dinaunginya, dengan tujuan alur kerja yang dibangun dapat berjalan dengan baik, dan program kerja yang direncanakan dapat terealisasikan sesuai dengan visi misi himpunan maupun UMN.",
        images: [fotosufak, fotosufak2],
        element: elementSUFAK,
        members: [
            { name: "Kevin Jonathan", role: "SUFAK Bisnis&nbsp;&nbsp;ⓘ", image: ds },
            { name: "Romi Andreas", role: "SUFAK Seni & Desain&nbsp;&nbsp;ⓘ", image: romi },
            { name: "Septhia Rosa", role: "SUFAK Teknik & Informatika&nbsp;&nbsp;ⓘ", image: septhi },
            { name: "Sese Listiani", role: "SUFAK Ilmu Komunikasi&nbsp;&nbsp;ⓘ", image: sese },
        ],
        roleDescriptions: {
            "SUFAK Bisnis&nbsp;&nbsp;ⓘ": "Bertanggung jawab mengawasi HIMMA, HIMTARA, dan HMP.",
            "SUFAK Seni & Desain&nbsp;&nbsp;ⓘ": "Bertanggung jawab mengawasi HIMARS, HMDKV, dan HMFILM.",
            "SUFAK Teknik & Informatika&nbsp;&nbsp;ⓘ": "Bertanggung jawab mengawasi ACES, HIMFERA, HIMSI, dan HMIF.",
            "SUFAK Ilmu Komunikasi&nbsp;&nbsp;ⓘ": "Bertanggung jawab mengawasi I'M KOM.",
        },
    },
    SUKM: {
        title: "SUKM",
        subtitle: "Supervisor Unit Kegiatan Mahasiswa",
        description: "<span>SUKM</span> bertanggung jawab dalam mengawasi, meninjau, dan memastikan kinerja, dari masing-masing UKM yang dinaunginya, dengan tujuan alur kerja yang dibangun dapat berjalan dengan baik, dan program kerja yang direncanakan dapat terus berjalan sesuai dengan visi misi UKM maupun UMN.",
        images: [fotosukm, fotosukm2],
        element: elementSUKM,
        members: [
            { name: "Valencia Aurelia", role: "SUKM Seni Budaya 1&nbsp;&nbsp;ⓘ", image: valen },
            { name: "Andi Bintang", role: "SUKM Seni Budaya 2&nbsp;&nbsp;ⓘ", image: bintang },
            { name: "Fitra Kamila", role: "SUKM Olahraga 1&nbsp;&nbsp;ⓘ", image: fitra },
            { name: "Jason Clay", role: "SUKM Olahraga 2&nbsp;&nbsp;ⓘ", image: clay },
            { name: "Ibrahim Zaidan", role: "SUKM Sains & Sosial&nbsp;&nbsp;ⓘ", image: ibra },
        ],
        roleDescriptions: {
            "SUKM Seni Budaya 1&nbsp;&nbsp;ⓘ": "Bertanggung jawab mengawasi J-Cafe, KataK, Let's Dance, TRACCE, dan Qorie.",
            "SUKM Seni Budaya 2&nbsp;&nbsp;ⓘ": "Bertanggung jawab mengawasi Mufomic, Obscura, Ulson, USO, dan U-Toys.",
            "SUKM Olahraga 1&nbsp;&nbsp;ⓘ": "Bertanggung jawab mengawasi Capoeira, Fortius, Lions Basketball, Lions Volleyball, dan Spectre.",
            "SUKM Olahraga 2&nbsp;&nbsp;ⓘ": "Bertanggung jawab mengawasi Lions Badminton, Lions Futsal, Taekwondo, dan Tenis Meja.",
            "SUKM Sains & Sosial&nbsp;&nbsp;ⓘ": "Bertanggung jawab mengawasi GDC, Mapala, Rencang, Robotic, UESC, dan UMN PC.",
        },
    },
    SULSO: {
        title: "SULSO",
        subtitle: "Supervisor Lembaga Semi Otonom",
        description: "<span>SULSO</span> bertanggung jawab dalam membimbing dan mengawasi kinerja maupun daya cipta dari masing-masing LSO, agar program kerja yang telah ditentukan dapat berjalan dan terlaksana dengan baik.",
        images: [fotosulso, fotosulso2],
        element: elementSULSO,
        members: [
            { name: "Indira Sukma", role: "SULSO 1&nbsp;&nbsp;ⓘ", image: dira },
            { name: "Alicia Dindya", role: "SULSO 2&nbsp;&nbsp;ⓘ", image: cia },
        ],
        roleDescriptions: {
            "SULSO 1&nbsp;&nbsp;ⓘ": "Bertanggung jawab mengawasi U-Biz, U-Store, dan Rumpin. Selain itu, SULSO 1 juga mengawasi bazaar.",
            "SULSO 2&nbsp;&nbsp;ⓘ": "Bertanggung jawab mengawasi Duta Anti Narkoba, Kompas Corner, dan UMN Medical Center.",
        },
    },
};

export default DivisiData;