// Import Participant model
Participant = require("../model/participantModel");
Session = require("../model/sessionModel");

var ip = [
  "36.81.8.39",
  "115.178.245.1",
  "120.188.87.161",
  "182.2.70.49",
  "36.82.16.96",
  "182.1.113.100",
  "36.72.212.123",
  "180.242.214.231",
  "182.2.41.152",
  "182.0.198.123",
  "36.65.160.63",
  "182.2.40.27",
  "36.74.208.155",
  "182.2.71.32",
  "182.0.237.81",
  "103.79.154.187",
  "114.5.109.44",
  "182.2.37.131",
  "120.188.74.160",
  "182.2.39.180"
];

// Handle index actions
exports.index = function (req, res) {
  
  Participant.get(function (err, participants) {
    if (err) {
      return res.json({
        status: "error",
        message: err,
      });
    }

    participants = [].concat(participants).reverse();

    return res.json({
      status: "success",
      message: "Participant Added Successfully",
      data: participants,
    });
  });
};

// Handle search actions
exports.search = function (req, res) {
  
  Participant.find(
    {
      name: {
        $regex: req.params.name,
      },
    },
    function (err, participants) {
      if (err) {
        return res.json({
          status: "error",
          message: err,
        });
      }

      participants = [].concat(participants).reverse();

      return res.json({
        status: "success",
        message: "Participant Added Successfully",
        data: participants,
      });
    }
  );
};

// Handle index actions
exports.indexByPage = async function (req, res) {
  
  var page = req.params.page;
  try {
    var totalParticipant = await Participant.count();
    var participants = await Participant.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    return res.json({
      status: "success",
      message: "Participant Added Successfully",
      data: {
        participants: participants,
        totalPage: Math.ceil(totalParticipant / 10),
      },
    });
  } catch (err) {
    return res.send(err);
  }
};

// Handle view actions
exports.view = function (req, res) {
  Participant.findById(req.params.id, function (err, participant) {
    if (err) return res.send(err);
    return res.json({
      message: "participants Detail Loading...",
      data: participant,
    });
  });
};

// Handle create actions
exports.new = function (req, res) {

  var participants = [
  {
    "nim": 23010119140237,
    "name": "Aan Lukman Khakim",
    "email": "aanlukmankhakim@students.undip.ac.id"
  },
  {
    "nim": 23010120140246,
    "name": "Abdullah Maulana Fakih",
    "email": "maulanafakih133@students.undip.ac.id"
  },
  {
    "nim": 23010120140087,
    "name": "Abdurobi Zuhdi Mutawakil",
    "email": "zuhdimutawakil@students.undip.ac.id"
  },
  {
    "nim": 23010120140185,
    "name": "Abidah Salma Shalihah",
    "email": "abidahsalmashalihah@students.undip.ac.id"
  },
  {
    "nim": 23010119130104,
    "name": "Abimanyu Handaka",
    "email": "abimanyuhandaka@students.undip.ac.id"
  },
  {
    "nim": 23010119140061,
    "name": "Achmad Hanif Khairullah",
    "email": "ahk27@students.undip.ac.id"
  },
  {
    "nim": 23010120140284,
    "name": "Adam Hanafi",
    "email": "adamhanafi@students.undip.ac.id"
  },
  {
    "nim": 23010119130164,
    "name": "Adam Satriapratama Nasution",
    "email": "adamsatriapn@students.undip.ac.id"
  },
  {
    "nim": 23010120140193,
    "name": "Ade Citra Defi",
    "email": "adecitradefi@students.undip.ac.id"
  },
  {
    "nim": 23010120140259,
    "name": "Adelita Rahmah Kusumaningrum",
    "email": "adelitarahmah@students.undip.ac.id"
  },
  {
    "nim": 23010120140257,
    "name": "Adri Arga Saputra",
    "email": "adriargasaputra@students.undip.ac.id"
  },
  {
    "nim": 23010119140288,
    "name": "Ahmad Nur Fatoni",
    "email": "ahmadnurfatoni@students.undip.ac.id"
  },
  {
    "nim": 23010117140013,
    "name": "Ahmad Rais Fauzi",
    "email": "raisfauzi@students.undip.ac.id"
  },
  {
    "nim": 23010120130197,
    "name": "Al Riza Karunia",
    "email": "alrizakarunia@students.undip.ac.id"
  },
  {
    "nim": 23010120120033,
    "name": "Alfa Putri Latifa",
    "email": "alfaputrilatifa@students.undip.ac.id"
  },
  {
    "nim": 23010118130208,
    "name": "Alfiana Listia Rahayu",
    "email": "alfianalistiarahayu@students.undip.ac.id"
  },
  {
    "nim": 23010120140183,
    "name": "Alfiansyah Surya Hartana",
    "email": "alfiansyahsurya@students.undip.ac.id"
  },
  {
    "nim": 23010117130124,
    "name": "Alfin Bariq Al Falah",
    "email": "alfinbariqalfalah@students.undip.ac.id"
  },
  {
    "nim": 23010120130127,
    "name": "Alfina Risqi",
    "email": "alfinarisqi@students.undip.ac.id"
  },
  {
    "nim": 23010120130104,
    "name": "Alief Rahasya Dewa",
    "email": "aliefrahasyadewa@students.undip.ac.id"
  },
  {
    "nim": 23010120140065,
    "name": "Alifan Prida Pratama",
    "email": "alifanpridapratama@students.undip.ac.id"
  },
  {
    "nim": 23010120140079,
    "name": "Alvina Yulia Marfa",
    "email": "alvinayuliamarfa@students.undip.ac.id"
  },
  {
    "nim": 23010120130151,
    "name": "Alza Nur Berliana Putri",
    "email": "alzanurberlianaputri@students.undip.ac.id"
  },
  {
    "nim": 23010119120027,
    "name": "Amanda Aldiani",
    "email": "amandaaldiani@students.undip.ac.id"
  },
  {
    "nim": 23010120130164,
    "name": "Amara Ailsa Shabrina",
    "email": "amaraailsashabrina@students.undip.ac.id"
  },
  {
    "nim": 23010120140167,
    "name": "Ananggadipa Andaru Adi",
    "email": "andaruadi@students.undip.ac.id"
  },
  {
    "nim": 23010119130221,
    "name": "Ananta Putra Kanoko",
    "email": "apk@students.undip.ac.id"
  },
  {
    "nim": 23010119140078,
    "name": "Andhika Citra Sena",
    "email": "andhikacitrasena@students.undip.ac.id"
  },
  {
    "nim": 23010119130153,
    "name": "Anis Nurhidayati",
    "email": "anisnurhidayati@students.undip.ac.id"
  },
  {
    "nim": 23010117140003,
    "name": "Anisa Putri Lestari",
    "email": "anisaputrilestari@students.undip.ac.id"
  },
  {
    "nim": 23010120130212,
    "name": "Anisatya Ning Diah",
    "email": "anisatyand@students.undip.ac.id"
  },
  {
    "nim": 23010119130080,
    "name": "Anita Trihastuti",
    "email": "anitatrihastuti@students.undip.ac.id"
  },
  {
    "nim": 23010119140152,
    "name": "Annisa Dhea Lathifa",
    "email": "annisadhea@students.undip.ac.id"
  },
  {
    "nim": 23010120140248,
    "name": "Annisa Maulita Tri Utami",
    "email": "annisamaulita@students.undip.ac.id"
  },
  {
    "nim": 23010120120003,
    "name": "Ardina Yuka Rachmadea",
    "email": "ardinayukarachmadea@students.undip.ac.id"
  },
  {
    "nim": 23010120130110,
    "name": "Arihna Salsabilla Nahdiana Poetri",
    "email": "arihnasalsabilla@students.undip.ac.id"
  },
  {
    "nim": 23010119140212,
    "name": "Ariq Musaid",
    "email": "ariqmusaid@students.undip.ac.id"
  },
  {
    "nim": 23010120130220,
    "name": "Ashif Dzihni Yudhistira",
    "email": "ashifdzihniy@students.undip.ac.id"
  },
  {
    "nim": 23010117140056,
    "name": "Aspri Lidyawati Sihombing",
    "email": "asprilidya@students.undip.ac.id"
  },
  {
    "nim": 23010120140181,
    "name": "Astika Hapsari",
    "email": "astikahapsari@students.undip.ac.id"
  },
  {
    "nim": 23010120140184,
    "name": "Astri Enggar Ningtyas",
    "email": "astrienggar@students.undip.ac.id"
  },
  {
    "nim": 23010120120020,
    "name": "Atik Santika",
    "email": "atiksantika@students.undip.ac.id"
  },
  {
    "nim": 23010120120044,
    "name": "Aulia Danisa Putri",
    "email": "auliadanisaputri@students.undip.ac.id"
  },
  {
    "nim": 23010120130191,
    "name": "Aulia Riza Aditama",
    "email": "auliariza@students.undip.ac.id"
  },
  {
    "nim": 23010120140200,
    "name": "Azizah Dwi Lestari",
    "email": "azizahlestaa@students.undip.ac.id"
  },
  {
    "nim": 23010120120032,
    "name": "Azka Qolba",
    "email": "azkaqolba@students.undip.ac.id"
  },
  {
    "nim": 23010117140066,
    "name": "Azki Azhari Azmi",
    "email": "azkiazhari@students.undip.ac.id"
  },
  {
    "nim": 23010120140069,
    "name": "Bagus Indramawan",
    "email": "bagusindramawan@students.undip.ac.id"
  },
  {
    "nim": 23010117140020,
    "name": "Bagus Pamuji",
    "email": "baguspamuji@students.undip.ac.id"
  },
  {
    "nim": 23010119140184,
    "name": "Bangun Bagindo Johan",
    "email": "bangunbagindojohan@students.undip.ac.id"
  },
  {
    "nim": 23010120130210,
    "name": "Banu Rizqi Febianzani",
    "email": "banurizqifebianzani@students.undip.ac.id"
  },
  {
    "nim": 23010119140272,
    "name": "Baqiyatus Sholikhah",
    "email": "baqiyatus@students.undip.ac.id"
  },
  {
    "nim": 23010119120009,
    "name": "Bebi Ekklesia Harmoni",
    "email": "bebiekklesia21@students.undip.ac.id"
  },
  {
    "nim": 23010120130105,
    "name": "Berinda Luqmanita Izzeti",
    "email": "berindalizzeti@students.undip.ac.id"
  },
  {
    "nim": 23010119120006,
    "name": "Berliana Putri Aulia Dewi",
    "email": "berlianaputriaulia@students.undip.ac.id"
  },
  {
    "nim": 23010117120068,
    "name": "Beti Cahyaningsih",
    "email": "beticahyaningsih@students.undip.ac.id"
  },
  {
    "nim": 23010119120011,
    "name": "Bhamakerti Mahardika Reswara",
    "email": "bhamakertimahardika@students.undip.ac.id"
  },
  {
    "nim": 23010117130118,
    "name": "Bramasta Kanza Ravikasha",
    "email": "bramastakanzaravikas@students.undip.ac.id"
  },
  {
    "nim": 23010118130189,
    "name": "Casmuti",
    "email": "casmuti@students.undip.ac.id"
  },
  {
    "nim": 23010117130093,
    "name": "Chandrakara Widyan Wiratama",
    "email": "chandrakarawidyanwir@students.undip.ac.id"
  },
  {
    "nim": 23010120140126,
    "name": "Chania Valin Aprilia",
    "email": "chaniavalin@students.undip.ac.id"
  },
  {
    "nim": 23010119130190,
    "name": "Chanifah Listiyana",
    "email": "chanifahlistiyana@students.undip.ac.id"
  },
  {
    "nim": 23010120120046,
    "name": "Cilfira Nisa Ardani",
    "email": "cilfiranisaardani@students.undip.ac.id"
  },
  {
    "nim": 23010120140275,
    "name": "Daffa Zaky Ramadhani",
    "email": "zakyramadhan@students.undip.ac.id"
  },
  {
    "nim": 23010119130070,
    "name": "Daniel Bagus Mada Anthony",
    "email": "danielbagus@students.undip.ac.id"
  },
  {
    "nim": 23010117140048,
    "name": "Dany Ramadhan",
    "email": "danyramadhan@students.undip.ac.id"
  },
  {
    "nim": 23010120120040,
    "name": "Deby Amadius Wijayanti",
    "email": "debyamadiuswijayanti@students.undip.ac.id"
  },
  {
    "nim": 23010120140241,
    "name": "Dedi Herdiyanto",
    "email": "dediherdiyanto12@students.undip.ac.id"
  },
  {
    "nim": 23010120120027,
    "name": "Defi Setiyaningsih",
    "email": "defisetiyaningsih@students.undip.ac.id"
  },
  {
    "nim": 23010120120048,
    "name": "Della Sundari",
    "email": "dellasundari@students.undip.ac.id"
  },
  {
    "nim": 23010120140245,
    "name": "Devintayunia Nuur Aszahra",
    "email": "devintayunia@students.undip.ac.id"
  },
  {
    "nim": 23010119130109,
    "name": "Dewi Ernawati",
    "email": "dewiernawati@students.undip.ac.id"
  },
  {
    "nim": 23010119120012,
    "name": "Dewi Kartika Sari",
    "email": "dewikartikasari@students.undip.ac.id"
  },
  {
    "nim": 23010119130213,
    "name": "Dewi Marliyana Ulfah",
    "email": "dewimarliyana@students.undip.ac.id"
  },
  {
    "nim": 23010120120049,
    "name": "Dian Maharani",
    "email": "dianmhrn@students.undip.ac.id"
  },
  {
    "nim": 23010120120056,
    "name": "Didit Aditya Kurniawan",
    "email": "diditadityakurniawan@students.undip.ac.id"
  },
  {
    "nim": 23010119140173,
    "name": "Dimas Oktaviana",
    "email": "dimasoktaviana62@students.undip.ac.id"
  },
  {
    "nim": 23010119130129,
    "name": "Dinar Wangi Hananti",
    "email": "dinarwangi12@students.undip.ac.id"
  },
  {
    "nim": 23010120140205,
    "name": "Divinia Puspa Khanti",
    "email": "diviniapuspakhanti@students.undip.ac.id"
  },
  {
    "nim": 23010120140258,
    "name": "Dwi Cahyo Kusumo Sari",
    "email": "dwicahyokusumosari@students.undip.ac.id"
  },
  {
    "nim": 23010120130081,
    "name": "Dwi Gunawan",
    "email": "dwigunawan@students.undip.ac.id"
  },
  {
    "nim": 23010119130121,
    "name": "Dwi Isni Nurmaulida",
    "email": "dwiisninurmaulida@students.undip.ac.id"
  },
  {
    "nim": 23010119120035,
    "name": "Dyah Ayu Shofiati",
    "email": "dyahayushofiati@students.undip.ac.id"
  },
  {
    "nim": 23010120130188,
    "name": "Dzulfa Ismaya Witara",
    "email": "dzulfaismayawitara@students.undip.ac.id"
  },
  {
    "nim": 23010118130215,
    "name": "Ela Marina",
    "email": "elamarina@students.undip.ac.id"
  },
  {
    "nim": 23010120140078,
    "name": "Elvita Yazid",
    "email": "elvitayazid@students.undip.ac.id"
  },
  {
    "nim": 23010120120029,
    "name": "Elza Tria Lutvia",
    "email": "elzatrialutvia@students.undip.ac.id"
  },
  {
    "nim": 23010117140014,
    "name": "Ervanny Setyainsan",
    "email": "ervannysetyainsan@students.undip.ac.id"
  },
  {
    "nim": 23010120130228,
    "name": "Eryan Hidayah Ramadhani",
    "email": "eryanhidayahramadhan@students.undip.ac.id"
  },
  {
    "nim": 23010120120030,
    "name": "Eva Nur Afifah",
    "email": "evanurafifah@students.undip.ac.id"
  },
  {
    "nim": 23010120120015,
    "name": "Evana Chiquita Razzani",
    "email": "evanachiquita@students.undip.ac.id"
  },
  {
    "nim": 23010117120058,
    "name": "Ezar Zebadyah",
    "email": "ezarzebadyah@students.undip.ac.id"
  },
  {
    "nim": 23010120140270,
    "name": "Fadil Della Ananda",
    "email": "fadildellaananda@students.undip.ac.id"
  },
  {
    "nim": 23010119130246,
    "name": "Fadila Soria Utami",
    "email": "fadilasoriautami@students.undip.ac.id"
  },
  {
    "nim": 23010118140229,
    "name": "Fahira Ummu Hanifah",
    "email": "fahiraummuhanifah@students.undip.ac.id"
  },
  {
    "nim": 23010120140136,
    "name": "Fanissa Nilam Sari",
    "email": "fanissans@students.undip.ac.id"
  },
  {
    "nim": 23010119130074,
    "name": "Farid Bayu Kumolo",
    "email": "faridbayukumolo@students.undip.ac.id"
  },
  {
    "nim": 23010119140233,
    "name": "Farras Fadhilla Fauzan",
    "email": "farrasfadh@students.undip.ac.id"
  },
  {
    "nim": 23010118140127,
    "name": "Farrel Haidar Rafli",
    "email": "farrelhaidarrafli@students.undip.ac.id"
  },
  {
    "nim": 23010120140073,
    "name": "Fatimah Kurniasih",
    "email": "fatimahkurniasih@students.undip.ac.id"
  },
  {
    "nim": 23010120130177,
    "name": "Fatmawati Faiza",
    "email": "fatmawatifaiza@students.undip.ac.id"
  },
  {
    "nim": 23010120140166,
    "name": "Fauziatul Musyayyadah",
    "email": "fauziatulmusyayyadah@students.undip.ac.id"
  },
  {
    "nim": 23010119140193,
    "name": "Ferri Kristio Sianturi",
    "email": "ferrikristiosianturi@students.undip.ac.id"
  },
  {
    "nim": 23010120140276,
    "name": "Fillah Romadhon Yudistiro",
    "email": "fillahramadhany@students.undip.ac.id"
  },
  {
    "nim": 23010119120042,
    "name": "Fina Nihayatul Khusna",
    "email": "finaniha25@students.undip.ac.id"
  },
  {
    "nim": 23010119130179,
    "name": "Firda Tasya Kamila",
    "email": "firdatasyak@students.undip.ac.id"
  },
  {
    "nim": 23010119130113,
    "name": "Fitri Hastuti",
    "email": "fitrihastuti@students.undip.ac.id"
  },
  {
    "nim": 23010117130159,
    "name": "Fransiscus Graham Chaniaji",
    "email": "grahamchaniaji@students.undip.ac.id"
  },
  {
    "nim": 23010118120050,
    "name": "Fuja Marsa",
    "email": "fujamarsa@students.undip.ac.id"
  },
  {
    "nim": 23010120140077,
    "name": "Grace Shinta Meilana",
    "email": "graceshintameilana@students.undip.ac.id"
  },
  {
    "nim": 23010117120057,
    "name": "Ha Dicky",
    "email": "hadicky@students.undip.ac.id"
  },
  {
    "nim": 23010120120021,
    "name": "Hanif Umar Said",
    "email": "hanifumarsaid@students.undip.ac.id"
  },
  {
    "nim": 23010117120050,
    "name": "Hanifah Kahartyaningrum",
    "email": "hanifahkahartyaningr@students.undip.ac.id"
  },
  {
    "nim": 23010120130211,
    "name": "Hanik Rif`at Mufida",
    "email": "hanikrifatmufida@students.undip.ac.id"
  },
  {
    "nim": 23010119140087,
    "name": "Hashifah Khoirunnuha",
    "email": "hashifahkhoirunnuha@students.undip.ac.id"
  },
  {
    "nim": 23010120140117,
    "name": "Haura Hayya Nur Hermawan",
    "email": "haurahayya@students.undip.ac.id"
  },
  {
    "nim": 23010120120014,
    "name": "Ibnu Achmad Fauzan",
    "email": "ibnuachmadfauzan@students.undip.ac.id"
  },
  {
    "nim": 23010119130260,
    "name": "Ibnu Wijanarko",
    "email": "ibnuwijanarko@students.undip.ac.id"
  },
  {
    "nim": 23010120130202,
    "name": "Ica Navyta Nadasyifa",
    "email": "icanavytanadasyifa@students.undip.ac.id"
  },
  {
    "nim": 23010120140082,
    "name": "Ilma Safira Andani",
    "email": "ilmasafiraandani@students.undip.ac.id"
  },
  {
    "nim": 23010120120008,
    "name": "Indra Fariid Nika Isriyah",
    "email": "indrafariidnika11@students.undip.ac.id"
  },
  {
    "nim": 23010119130280,
    "name": "Intan Claudia Singgi",
    "email": "intanclds@students.undip.ac.id"
  },
  {
    "nim": 23010120130089,
    "name": "Iqbal Pramudya Septiawan",
    "email": "iqbalpramudya@students.undip.ac.id"
  },
  {
    "nim": 23010120140137,
    "name": "Ira Dwi Cahyaningrum",
    "email": "iraacch@students.undip.ac.id"
  },
  {
    "nim": 23010120130222,
    "name": "Irfan Dwi Ristanto",
    "email": "irfandwiristanto@students.undip.ac.id"
  },
  {
    "nim": 23010120120051,
    "name": "Isa Sofia",
    "email": "isasofia@students.undip.ac.id"
  },
  {
    "nim": 23010119130099,
    "name": "Isnaeni Dinda Wulandari",
    "email": "isnaenidinda@students.undip.ac.id"
  },
  {
    "nim": 23010119130124,
    "name": "Istiningsih",
    "email": "istiningsih@students.undip.ac.id"
  },
  {
    "nim": 23010120130129,
    "name": "Istiqomah Mun'amah",
    "email": "istiqomahma@students.undip.ac.id"
  },
  {
    "nim": 23010119130076,
    "name": "Kevin Akbari De Mareto",
    "email": "demaretokevin@students.undip.ac.id"
  },
  {
    "nim": 23010120140063,
    "name": "Kholik Budiman",
    "email": "kholikbudiman@students.undip.ac.id"
  },
  {
    "nim": 23010120130131,
    "name": "Khusnul Khotimah",
    "email": "khusnulkh10@students.undip.ac.id"
  },
  {
    "nim": 23010120130214,
    "name": "Kunti Rafika Maulida",
    "email": "kuntirafika@students.undip.ac.id"
  },
  {
    "nim": 23010120140256,
    "name": "Labiibah Az-zahroh",
    "email": "labiibahazzahroh@students.undip.ac.id"
  },
  {
    "nim": 23010120140229,
    "name": "Laila Nur Hasanah",
    "email": "lailanurhasanah@students.undip.ac.id"
  },
  {
    "nim": 23010120120037,
    "name": "Lauri",
    "email": "lauri@students.undip.ac.id"
  },
  {
    "nim": 23010120120052,
    "name": "Lidya Aviyanti",
    "email": "lidyaaviyanti@students.undip.ac.id"
  },
  {
    "nim": 23010120140102,
    "name": "Mahardika Winasis",
    "email": "mahardikawinasis@students.undip.ac.id"
  },
  {
    "nim": 23010118120018,
    "name": "Masrifah Ayu Ningrum",
    "email": "masrifahayuningrum@students.undip.ac.id"
  },
  {
    "nim": 23010120120053,
    "name": "Maulida Evi Lindawati Putri",
    "email": "maulidaevi@students.undip.ac.id"
  },
  {
    "nim": 23010119130094,
    "name": "Mela Puji Lestari",
    "email": "melapujilestari@students.undip.ac.id"
  },
  {
    "nim": 23010120140260,
    "name": "Miftah Annisa Wardah",
    "email": "miftahannisawardah@students.undip.ac.id"
  },
  {
    "nim": 23010120120038,
    "name": "Mikael Ronald Wijaya 23010120120038",
    "email": "mikaelronaldwijaya@students.undip.ac.id"
  },
  {
    "nim": 23010119130110,
    "name": "Mochamad Kresna Duta Wiriawan",
    "email": "mochamadkresnaduta@students.undip.ac.id"
  },
  {
    "nim": 23010120130196,
    "name": "Mohammad Ainun Najib Nur Rohim",
    "email": "najibnr@students.undip.ac.id"
  },
  {
    "nim": 23010120130161,
    "name": "Mohammad Amar Saifuddin",
    "email": "amarsaifuddin@students.undip.ac.id"
  },
  {
    "nim": 23010119140256,
    "name": "Muchamad Fadli Hasan",
    "email": "fadlihasan@students.undip.ac.id"
  },
  {
    "nim": 23010119130249,
    "name": "Muflik Shofian Affandy",
    "email": "sfandy@students.undip.ac.id"
  },
  {
    "nim": 23010119140136,
    "name": "Muhammad Aulady Rachman",
    "email": "auladyrachman@students.undip.ac.id"
  },
  {
    "nim": 23010120130134,
    "name": "Muhammad Dani Gusnaldi",
    "email": "muhammaddanigusnaldi@students.undip.ac.id"
  },
  {
    "nim": 23010117140051,
    "name": "Muhammad Fauzan Amaldy",
    "email": "fauzanamaldy@students.undip.ac.id"
  },
  {
    "nim": 23010120120035,
    "name": "Muhammad Nabil Hakim",
    "email": "muhammadnabilhakim@students.undip.ac.id"
  },
  {
    "nim": 23010119130203,
    "name": "Muhammad Naufal Nabhan",
    "email": "mnaufalnabhan@students.undip.ac.id"
  },
  {
    "nim": 23010120140269,
    "name": "Muhammad Sigit Nurhadi",
    "email": "muhammadsigitnurhadi@students.undip.ac.id"
  },
  {
    "nim": 23010120130092,
    "name": "Muhammad Tamar Mahara",
    "email": "muhammadtamarmahara@students.undip.ac.id"
  },
  {
    "nim": 23010119130075,
    "name": "Muhammad Thirafi Zihni",
    "email": "muhammadzihni@students.undip.ac.id"
  },
  {
    "nim": 23010118120042,
    "name": "Muhammad Tsalats Taufiqi",
    "email": "walenski@students.undip.ac.id"
  },
  {
    "nim": 23010120140176,
    "name": "Muhammad Yusuf",
    "email": "yusufirst7@students.undip.ac.id"
  },
  {
    "nim": 23010120120024,
    "name": "Muhammad Zahrul Fawaid",
    "email": "muhammadzahrulfawaid@students.undip.ac.id"
  },
  {
    "nim": 23010120130107,
    "name": "Muhammad Zidan Maulana",
    "email": "muhammadzidanmaulana@students.undip.ac.id"
  },
  {
    "nim": 23010120140266,
    "name": "Mutiara Eka Azwi",
    "email": "mutiaraekaazwi@students.undip.ac.id"
  },
  {
    "nim": 23010120140160,
    "name": "Nadilla Dyah Ayu Cahyaningrum",
    "email": "nadilladyahayuc@students.undip.ac.id"
  },
  {
    "nim": 23010120130085,
    "name": "Nadya Marcelina Cinderawati",
    "email": "nadyamarcelina@students.undip.ac.id"
  },
  {
    "nim": 23010120140194,
    "name": "Najwa Mu'taqida Sifa",
    "email": "najwamutaqida@students.undip.ac.id"
  },
  {
    "nim": 23010119120024,
    "name": "Nathiara Aidini Milati Fadillah",
    "email": "nathiaraaidinimilati@students.undip.ac.id"
  },
  {
    "nim": 23010119140106,
    "name": "Naufal Isnanda Ahmad",
    "email": "naufalisnanda@students.undip.ac.id"
  },
  {
    "nim": 23010119130232,
    "name": "Naurah Jilan Ramadhan",
    "email": "naurahjr@students.undip.ac.id"
  },
  {
    "nim": 23010120140098,
    "name": "Ni Made Diah Paramitha",
    "email": "nimadediahparamitha@students.undip.ac.id"
  },
  {
    "nim": 23010117120003,
    "name": "Niar Ulfa Rosenda Putri",
    "email": "niarulfa123@students.undip.ac.id"
  },
  {
    "nim": 23010118140147,
    "name": "Nida Fithrotun Nisa",
    "email": "nidafithrotunnisa@students.undip.ac.id"
  },
  {
    "nim": 23010118130103,
    "name": "Nikomedes Anndhana Engtian K",
    "email": "nikomedesanndhana@students.undip.ac.id"
  },
  {
    "nim": 23010120120022,
    "name": "Noni Anastasya",
    "email": "nonianastasya@students.undip.ac.id"
  },
  {
    "nim": 23010117130131,
    "name": "Novaldi Ferdiansyah Sugandi",
    "email": "novaldifrdsyh@students.undip.ac.id"
  },
  {
    "nim": 23010120140225,
    "name": "Nur Afifah Amin Handayani",
    "email": "nraffh23@students.undip.ac.id"
  },
  {
    "nim": 23010117120064,
    "name": "Oktavian Setyo Nugroho",
    "email": "oktaviannugroho3010@students.undip.ac.id"
  },
  {
    "nim": 23010120140180,
    "name": "Oktaviana Novita Sari",
    "email": "oktavianans@students.undip.ac.id"
  },
  {
    "nim": 23010120120036,
    "name": "Puguh Setiawan",
    "email": "puguhs@students.undip.ac.id"
  },
  {
    "nim": 23010119130262,
    "name": "Pupus Galau Prahara",
    "email": "pupusgalauprahara@students.undip.ac.id"
  },
  {
    "nim": 23010120120009,
    "name": "Rachmalia Maha Dewi",
    "email": "rachmaliamd@students.undip.ac.id"
  },
  {
    "nim": 23010120140152,
    "name": "Rafika Aulia Ramadhani",
    "email": "rafikaauliaramadhani@students.undip.ac.id"
  },
  {
    "nim": 23010120140068,
    "name": "Rafiqo Hafid P",
    "email": "rafiqohafidp@students.undip.ac.id"
  },
  {
    "nim": 23010120140254,
    "name": "Ragil Putri Anggia",
    "email": "ragilputri@students.undip.ac.id"
  },
  {
    "nim": 23010119130089,
    "name": "Rayndra Evan Nizar",
    "email": "rayndraevan@students.undip.ac.id"
  },
  {
    "nim": 23010119140244,
    "name": "Razzaq Dewanata Lukman",
    "email": "razzaqdewanatalukman@students.undip.ac.id"
  },
  {
    "nim": 23010120120019,
    "name": "Reyhan Fatih Kriswinarso",
    "email": "reyhanfkris@students.undip.ac.id"
  },
  {
    "nim": 23010119140133,
    "name": "Ridho Yanuar Azhari",
    "email": "ridhoyanuarazhari@students.undip.ac.id"
  },
  {
    "nim": 23010117140054,
    "name": "Rifo Martio Mulya",
    "email": "rifomartio11@students.undip.ac.id"
  },
  {
    "nim": 23010119130165,
    "name": "Risma Yudiandini",
    "email": "rismayudiandini@students.undip.ac.id"
  },
  {
    "nim": 23010120130146,
    "name": "Rizqi Febriana",
    "email": "rizqifebriana@students.undip.ac.id"
  },
  {
    "nim": 23010118140209,
    "name": "Rizqia Karimah",
    "email": "rizqiakrmh@students.undip.ac.id"
  },
  {
    "nim": 23010118130216,
    "name": "Rizza Nur Aini",
    "email": "rizzanuraini@students.undip.ac.id"
  },
  {
    "nim": 23010120140234,
    "name": "Rosa Devi Aprilia",
    "email": "rosadevi@students.undip.ac.id"
  },
  {
    "nim": 23010119140287,
    "name": "Rosita Rahmawati",
    "email": "rosita1928@students.undip.ac.id"
  },
  {
    "nim": 23010119130077,
    "name": "Ryan Sugeng Adi Saputro",
    "email": "ryansugengadisaputro@students.undip.ac.id"
  },
  {
    "nim": 23010120140252,
    "name": "Saadya Nursilvina Suheri",
    "email": "saadyanursilvinasuhe@students.undip.ac.id"
  },
  {
    "nim": 23010120130198,
    "name": "Sabrina Indra Dewi",
    "email": "sabrinaindradewi@students.undip.ac.id"
  },
  {
    "nim": 23010120140086,
    "name": "Safira Indi Kalista",
    "email": "safiraindikalista@students.undip.ac.id"
  },
  {
    "nim": 23010120130178,
    "name": "Said Mulyana Jati",
    "email": "saidmulyanajati@students.undip.ac.id"
  },
  {
    "nim": 23010120130221,
    "name": "Salsa Bilal Khoiroh",
    "email": "salsabilalkhoiroh@students.undip.ac.id"
  },
  {
    "nim": 23010120140125,
    "name": "Saphira Salwa Hapsari",
    "email": "saphirasalwa@students.undip.ac.id"
  },
  {
    "nim": 23010119120033,
    "name": "Sayyidatul Bayyinah",
    "email": "sayyidatulb@students.undip.ac.id"
  },
  {
    "nim": 23010120120010,
    "name": "Sendy Afriantanto",
    "email": "sendyafriantanto@students.undip.ac.id"
  },
  {
    "nim": 23010119130093,
    "name": "Septiani Purwanika Ayunidya",
    "email": "septianipurwanikaa@students.undip.ac.id"
  },
  {
    "nim": 23010120120047,
    "name": "Septina Nurcahyani",
    "email": "septinanurcahyani@students.undip.ac.id"
  },
  {
    "nim": 23010118140192,
    "name": "Shafina Muthia Ufairah",
    "email": "shafinamuthiaufairah@students.undip.ac.id"
  },
  {
    "nim": 23010120140168,
    "name": "Silvi Susanti",
    "email": "silvisusanti@students.undip.ac.id"
  },
  {
    "nim": 23010120130061,
    "name": "Siti Mukaromah",
    "email": "sitimukaromah@students.undip.ac.id"
  },
  {
    "nim": 23010120120011,
    "name": "Sukma Dewi Rahmawati",
    "email": "sukmadewirahmawati@students.undip.ac.id"
  },
  {
    "nim": 23010119140202,
    "name": "Sultan Naufal Haruni",
    "email": "sultannh@students.undip.ac.id"
  },
  {
    "nim": 23010120130132,
    "name": "Suratman",
    "email": "suuratman@students.undip.ac.id"
  },
  {
    "nim": 23010120140099,
    "name": "Tarisa Rizky Bahtiyar Putri",
    "email": "tarisarbp@students.undip.ac.id"
  },
  {
    "nim": 23010119120030,
    "name": "Tarisa Yulanda May Putri Chilwisana",
    "email": "tarisayulanda@students.undip.ac.id"
  },
  {
    "nim": 23010118120023,
    "name": "Taufiq Raihan Hidayat",
    "email": "taufiqraihanhidayat@students.undip.ac.id"
  },
  {
    "nim": 23010119130247,
    "name": "Tazkiya Khadijatul Majdiyyah",
    "email": "tazkiyakm@students.undip.ac.id"
  },
  {
    "nim": 23010119140142,
    "name": "Thurfah Maghribiyan Imani Asqolani",
    "email": "biyanimani@students.undip.ac.id"
  },
  {
    "nim": 23010117120049,
    "name": "Tia Rizki Andini",
    "email": "tiarizkiandini@students.undip.ac.id"
  },
  {
    "nim": 23010120120057,
    "name": "Tri Lestari",
    "email": "triles@students.undip.ac.id"
  },
  {
    "nim": 23010120120013,
    "name": "Tyas Layli Maulida",
    "email": "tyaslaylimaulida@students.undip.ac.id"
  },
  {
    "nim": 23010120120058,
    "name": "Veronica Agustin",
    "email": "veronicaagustin@students.undip.ac.id"
  },
  {
    "nim": 23010119130083,
    "name": "Vicky Gunawan Dianita Ekaputri",
    "email": "vickygunawandianita@students.undip.ac.id"
  },
  {
    "nim": 23010118120030,
    "name": "Vina Maulidatul Hikmah",
    "email": "vinamaulidatulhikmah@students.undip.ac.id"
  },
  {
    "nim": 23010120120006,
    "name": "Wahyu Eka Saputra",
    "email": "wahyuekasaputra@students.undip.ac.id"
  },
  {
    "nim": 23010118120027,
    "name": "Windar Sintia Rahmawati",
    "email": "windarsintiarahmawat@students.undip.ac.id"
  },
  {
    "nim": 23010119140187,
    "name": "Wiyanto",
    "email": "wiyanto@students.undip.ac.id"
  },
  {
    "nim": 23010120140238,
    "name": "Yeza Ahmad Farhani",
    "email": "yezaahmadfarhani@students.undip.ac.id"
  },
  {
    "nim": 23010120120017,
    "name": "Yodi Mainanto Putra Pratama",
    "email": "yodimainanto@students.undip.ac.id"
  },
  {
    "nim": 23010120140285,
    "name": "Yusyfi Nafisatuz Zahrah",
    "email": "yusyfinafisa@students.undip.ac.id"
  },
  {
    "nim": 23010120130093,
    "name": "Zata Nabilah",
    "email": "zatanabilah@students.undip.ac.id"
  },
  {
    "nim": 23010120140140,
    "name": "Zulfikar Zaflir Fikri",
    "email": "zulfikarfikri3012@students.undip.ac.id"
  },
  {
    "nim": 23020219130080,
    "name": "Adi Rahman",
    "email": "adirahman123@students.undip.ac.id"
  },
  {
    "nim": 23020220120008,
    "name": "Agista Liony Simanjuntak",
    "email": "agistalionysimanjunt@students.undip.ac.id"
  },
  {
    "nim": 23020220140138,
    "name": "Ajeng Nurfatdiah",
    "email": "ajengnurfatdiah@students.undip.ac.id"
  },
  {
    "nim": 23020220140104,
    "name": "Aldy Putra Yulistanto",
    "email": "aldyputrayulistanto@students.undip.ac.id"
  },
  {
    "nim": 23020217120007,
    "name": "Alimah Putri Milania",
    "email": "alimahputrimilania@students.undip.ac.id"
  },
  {
    "nim": 23020219140115,
    "name": "Alisya Shafana Malik",
    "email": "alisyashafanahz@students.undip.ac.id"
  },
  {
    "nim": 23020220140122,
    "name": "Alzaina Fadiya Izzati",
    "email": "alzainafi@students.undip.ac.id"
  },
  {
    "nim": 23020220140111,
    "name": "Ananda Difatimah",
    "email": "anandadifa@students.undip.ac.id"
  },
  {
    "nim": 23020217130039,
    "name": "Andi Fiqri Aulia Artsam",
    "email": "fiqartsam@students.undip.ac.id"
  },
  {
    "nim": 23020220140094,
    "name": "Andini Aulia Putri",
    "email": "andiniaulia@students.undip.ac.id"
  },
  {
    "nim": 23020218130094,
    "name": "Andriana Nur Amelia",
    "email": "andriananuramelia@students.undip.ac.id"
  },
  {
    "nim": 23020220140033,
    "name": "Anggi Chairunnisa",
    "email": "anggiich@students.undip.ac.id"
  },
  {
    "nim": 23020220140081,
    "name": "Anggit Setya Nugraha",
    "email": "anggitsetyanugraha@students.undip.ac.id"
  },
  {
    "nim": 23020217140006,
    "name": "Anggreini Putri Rachmawati",
    "email": "anggreiniputri@students.undip.ac.id"
  },
  {
    "nim": 23020218130086,
    "name": "Annisa Septiana Ranindra",
    "email": "annisaseptianaranind@students.undip.ac.id"
  },
  {
    "nim": 23020220120025,
    "name": "April Lidya Situmorang",
    "email": "aprillidyasitumorang@students.undip.ac.id"
  },
  {
    "nim": 23020220130054,
    "name": "Ardan Daffa Adyatma",
    "email": "ardandaffa@students.undip.ac.id"
  },
  {
    "nim": 23020217130062,
    "name": "Arif Setiawan",
    "email": "arifsetiawan0808@students.undip.ac.id"
  },
  {
    "nim": 23020219130098,
    "name": "Arista Fitri Anggraeni",
    "email": "aristafitrianggraeni@students.undip.ac.id"
  },
  {
    "nim": 23020219140140,
    "name": "Arizka Pradistita",
    "email": "arizkaa110@students.undip.ac.id"
  },
  {
    "nim": 23020220120009,
    "name": "Asih Widyaningrum",
    "email": "asihwidyaningrum@students.undip.ac.id"
  },
  {
    "nim": 23020218130070,
    "name": "Belladina Bilqis Widya",
    "email": "belladinabilqiswidya@students.undip.ac.id"
  },
  {
    "nim": 23020219120012,
    "name": "Defitri Sri Rahayu Ningtyas",
    "email": "defitrisrirahayuning@students.undip.ac.id"
  },
  {
    "nim": 23020218130063,
    "name": "Dewi Padma Laras",
    "email": "dewipadmalaras@students.undip.ac.id"
  },
  {
    "nim": 23020219120009,
    "name": "Dewi Shely Anggita",
    "email": "dewishelyanggita@students.undip.ac.id"
  },
  {
    "nim": 23020217130064,
    "name": "Dewi Silvia Putri",
    "email": "dewisilviaputri@students.undip.ac.id"
  },
  {
    "nim": 23020220140085,
    "name": "Dian Gresianes Hutagalung",
    "email": "diangresianeshutagal@students.undip.ac.id"
  },
  {
    "nim": 23020219130095,
    "name": "Dian Rahmawati",
    "email": "dianrahmaawatii@students.undip.ac.id"
  },
  {
    "nim": 23020219120003,
    "name": "Diaz Fakhri Muhammad",
    "email": "diazfakhri05@students.undip.ac.id"
  },
  {
    "nim": 23020220120019,
    "name": "Difa Eviana Latifa Hanum",
    "email": "difaeviana@students.undip.ac.id"
  },
  {
    "nim": 23020218130081,
    "name": "Dina Nastiti",
    "email": "dinanastiti@students.undip.ac.id"
  },
  {
    "nim": 23020217130032,
    "name": "Dwi Lailatul Isnaini",
    "email": "dwilailatulisnaini@students.undip.ac.id"
  },
  {
    "nim": 23020218130064,
    "name": "Dwita Riska Ramadhani",
    "email": "dwitariskaramadhani@students.undip.ac.id"
  },
  {
    "nim": 23020220140036,
    "name": "Efra Nanda Sinulingga",
    "email": "efranandasinulingga@students.undip.ac.id"
  },
  {
    "nim": 23020219130049,
    "name": "Eko Aryani",
    "email": "ekoaryani@students.undip.ac.id"
  },
  {
    "nim": 23020219130068,
    "name": "Elisabet Meissa Widodo",
    "email": "elisabetmeissa@students.undip.ac.id"
  },
  {
    "nim": 23020218130076,
    "name": "Ella Syal Syabilla",
    "email": "ellasyalsyabilla@students.undip.ac.id"
  },
  {
    "nim": 23020217140015,
    "name": "Endah Nugraheni",
    "email": "endahnugraheni@students.undip.ac.id"
  },
  {
    "nim": 23020220140126,
    "name": "Eriana Dwi Permatasari",
    "email": "erianadwi28@students.undip.ac.id"
  },
  {
    "nim": 23020220130055,
    "name": "Erma Nikita",
    "email": "ermanikita@students.undip.ac.id"
  },
  {
    "nim": 23020220120002,
    "name": "Fadilla Liski Kumalaratri",
    "email": "fadillaliski@students.undip.ac.id"
  },
  {
    "nim": 23020218130052,
    "name": "Fajril Mustaqim",
    "email": "fajrilmustaqim@students.undip.ac.id"
  },
  {
    "nim": 23020218140085,
    "name": "Fany Dwi Ariyani",
    "email": "fanydwiariyani@students.undip.ac.id"
  },
  {
    "nim": 23020219130052,
    "name": "Feby Lulut Mahesti",
    "email": "febylulutmahesti@students.undip.ac.id"
  },
  {
    "nim": 23020219130102,
    "name": "Firgista Shona Azzahra",
    "email": "firgistasa@students.undip.ac.id"
  },
  {
    "nim": 23020220140043,
    "name": "Fito Maharani",
    "email": "fitomaharani@students.undip.ac.id"
  },
  {
    "nim": 23020220120007,
    "name": "Fitriyani",
    "email": "fitfayy@students.undip.ac.id"
  },
  {
    "nim": 23020220130056,
    "name": "Ghilman Ainnudin",
    "email": "ghilmanainnudin@students.undip.ac.id"
  },
  {
    "nim": 23020217140025,
    "name": "Gregorius Sapta Galih W",
    "email": "gregoriussgw@students.undip.ac.id"
  },
  {
    "nim": 23020217140033,
    "name": "Gunawan Indiarto",
    "email": "gunawanindiarto@students.undip.ac.id"
  },
  {
    "nim": 23020218130074,
    "name": "Hajrul Munawaroh",
    "email": "hajrulmunawaroh@students.undip.ac.id"
  },
  {
    "nim": 23020219130120,
    "name": "Hana Cahya Agustin",
    "email": "hanacahyaaa@students.undip.ac.id"
  },
  {
    "nim": 23020220140105,
    "name": "Hapsari Utami",
    "email": "hapsariutami@students.undip.ac.id"
  },
  {
    "nim": 23020219140051,
    "name": "Hasbi Alshabari Nursidqi",
    "email": "hasbinursidqi@students.undip.ac.id"
  },
  {
    "nim": 23020220130090,
    "name": "Helsi Sahira Filanti",
    "email": "helsisahiraf@students.undip.ac.id"
  },
  {
    "nim": 23020220120016,
    "name": "Heppy Nuarita Sianipar",
    "email": "heppynuaritasianipar@students.undip.ac.id"
  },
  {
    "nim": 23020219120014,
    "name": "Hilda Sabrina",
    "email": "hildasabrina@students.undip.ac.id"
  },
  {
    "nim": 23020217130060,
    "name": "Ika Puji Sulistyowati",
    "email": "ikapujisulistyowati@students.undip.ac.id"
  },
  {
    "nim": 23020220140066,
    "name": "Ilham Septianda Saputra",
    "email": "ilhamseptianda@students.undip.ac.id"
  },
  {
    "nim": 23020219140103,
    "name": "Irfan Yusuf Fachrurrozi",
    "email": "irfanyusuf@students.undip.ac.id"
  },
  {
    "nim": 23020220140135,
    "name": "Istiqomah",
    "email": "istiqomah25@students.undip.ac.id"
  },
  {
    "nim": 23020218120032,
    "name": "Ittiba Khurotun Aeni",
    "email": "ittibakhurotunaeni@students.undip.ac.id"
  },
  {
    "nim": 23020219120018,
    "name": "Ivana Rizkya Putri",
    "email": "ivanarizkyaputri@students.undip.ac.id"
  },
  {
    "nim": 23020219120010,
    "name": "Jelly Sinaga",
    "email": "jellysinaga@students.undip.ac.id"
  },
  {
    "nim": 23020218120007,
    "name": "John Amsal Jawak",
    "email": "johnamsal01@students.undip.ac.id"
  },
  {
    "nim": 23020220140032,
    "name": "Josh Stiventino Sembiring",
    "email": "joshstiventino@students.undip.ac.id"
  },
  {
    "nim": 23020219130093,
    "name": "Kamila Firdaus",
    "email": "kamilafirdaus@students.undip.ac.id"
  },
  {
    "nim": 23020218130096,
    "name": "Kartika Indah Sylfani",
    "email": "kartikaindahsylfani@students.undip.ac.id"
  },
  {
    "nim": 23020220130072,
    "name": "Kayana Khansa",
    "email": "kayanakhansa@students.undip.ac.id"
  },
  {
    "nim": 23020218140056,
    "name": "Khaulah Nadhifah",
    "email": "khaulahnadhifah@students.undip.ac.id"
  },
  {
    "nim": 23030116130063,
    "name": "Khodijah Wafia",
    "email": "khodijahwafia@students.undip.ac.id"
  },
  {
    "nim": 23020219140061,
    "name": "Khofifah Indah Kusumastuti",
    "email": "khofifahindahk@students.undip.ac.id"
  },
  {
    "nim": 23020217120003,
    "name": "Kiki Untari",
    "email": "kikiuntari@students.undip.ac.id"
  },
  {
    "nim": 23020218120012,
    "name": "Laili Nuri Hanun",
    "email": "lailihanun@students.undip.ac.id"
  },
  {
    "nim": 23020220140120,
    "name": "Latifah Zulfaa",
    "email": "latifahzulfaa@students.undip.ac.id"
  },
  {
    "nim": 23020218140059,
    "name": "Luqman Kusumo Adhie",
    "email": "luqmankusumoadhie@students.undip.ac.id"
  },
  {
    "nim": 23020220120017,
    "name": "M. Farazandi Arsyadul Ubaid",
    "email": "mfarazandiau@students.undip.ac.id"
  },
  {
    "nim": 23020220120027,
    "name": "Meisya Salvira Putri",
    "email": "meisyasp@students.undip.ac.id"
  },
  {
    "nim": 23020219120019,
    "name": "Merlys Juana Purba",
    "email": "merlysjuanapurba@students.undip.ac.id"
  },
  {
    "nim": 23020220130046,
    "name": "Miutya Arifa Zuyyina",
    "email": "miutyaarifa@students.undip.ac.id"
  },
  {
    "nim": 23020217140022,
    "name": "Muammar Zhafar Aziz",
    "email": "muammarzhafar@students.undip.ac.id"
  },
  {
    "nim": 23020220130058,
    "name": "Muchammad Adi Kurniansyah",
    "email": "muchadi@students.undip.ac.id"
  },
  {
    "nim": 23020220140106,
    "name": "Muhaimin Ar Rasyid",
    "email": "muhaiminarrasyid@students.undip.ac.id"
  },
  {
    "nim": 23020218120021,
    "name": "Muhamad Abid Widitama",
    "email": "muhamadabidwiditama@students.undip.ac.id"
  },
  {
    "nim": 23020218140092,
    "name": "Muhammad Akhlish",
    "email": "muhammadakhlish@students.undip.ac.id"
  },
  {
    "nim": 23020217140003,
    "name": "Muhammad Alfi Dzikron",
    "email": "muhammadalfidzikron@students.undip.ac.id"
  },
  {
    "nim": 23020220130031,
    "name": "Muhammad Arif Maulana",
    "email": "muhammadarifmaulana@students.undip.ac.id"
  },
  {
    "nim": 23020220140123,
    "name": "Muhammad Ariq Nurfalih",
    "email": "ariqnurfalih@students.undip.ac.id"
  },
  {
    "nim": 23020219130050,
    "name": "Muhammad Celvin Rifaldhi",
    "email": "celvinrifaldhi@students.undip.ac.id"
  },
  {
    "nim": 23020217140002,
    "name": "Muhammad Ilyasa Nur",
    "email": "ilyasanf@students.undip.ac.id"
  },
  {
    "nim": 23020218140099,
    "name": "Muhammad Yusuf Fajri",
    "email": "muhammadyusuffajri@students.undip.ac.id"
  },
  {
    "nim": 23020220140039,
    "name": "Mutmainnah",
    "email": "mutmainnah14@students.undip.ac.id"
  },
  {
    "nim": 23020220120014,
    "name": "Nabila Faiha Yasmin",
    "email": "nabilafaihayasmin@students.undip.ac.id"
  },
  {
    "nim": 23020219130087,
    "name": "Nabila Ulfa Constantia",
    "email": "nabilaulfaconstantia@students.undip.ac.id"
  },
  {
    "nim": 23020220120010,
    "name": "Nadya Natalie Smith",
    "email": "nadyasmith@students.undip.ac.id"
  },
  {
    "nim": 23020218130101,
    "name": "Nawangwulan Desikumala",
    "email": "nawangwulandesikumal@students.undip.ac.id"
  },
  {
    "nim": 23020218120036,
    "name": "Ningkarni",
    "email": "ningkarni@students.undip.ac.id"
  },
  {
    "nim": 23020219120022,
    "name": "Nisa Aulia",
    "email": "nisaauliaa09@students.undip.ac.id"
  },
  {
    "nim": 23020219120006,
    "name": "Novi Nuzulul Farikhah",
    "email": "novinuzululfarikhah@students.undip.ac.id"
  },
  {
    "nim": 23020217130057,
    "name": "Nur Aini",
    "email": "nuraini@students.undip.ac.id"
  },
  {
    "nim": 23020220140038,
    "name": "Nurul Aulia Khoerunnisa",
    "email": "aulianurul@students.undip.ac.id"
  },
  {
    "nim": 23020218140097,
    "name": "Olopan M. Limbong",
    "email": "olopanmlimbong@students.undip.ac.id"
  },
  {
    "nim": 23020217130045,
    "name": "Panji Dwi Anggoro",
    "email": "panjidwianggoro@students.undip.ac.id"
  },
  {
    "nim": 23020218130067,
    "name": "Patricia Nava Arsita",
    "email": "patricianavaarsita@students.undip.ac.id"
  },
  {
    "nim": 23020220140127,
    "name": "Pelangi Dian Sakanti",
    "email": "pelangidian@students.undip.ac.id"
  },
  {
    "nim": 23020220120015,
    "name": "Prasasti Rahmiarti",
    "email": "prasastirahmiarti@students.undip.ac.id"
  },
  {
    "nim": 23020219120005,
    "name": "Putri Nurul Khusnaini",
    "email": "putrinurulkhusnaini@students.undip.ac.id"
  },
  {
    "nim": 23020220140079,
    "name": "Raja Samudera",
    "email": "rajasamudera@students.undip.ac.id"
  },
  {
    "nim": 23020218130071,
    "name": "Raphael Gracio Suryanto",
    "email": "raphaelgraciosuryant@students.undip.ac.id"
  },
  {
    "nim": 23020219140092,
    "name": "Rayhan Al Attar",
    "email": "rayhanalattar@students.undip.ac.id"
  },
  {
    "nim": 23020218130046,
    "name": "Renata Wahyu Kurniawardani",
    "email": "renatawahyukurniawar@students.undip.ac.id"
  },
  {
    "nim": 23020217120011,
    "name": "Rohman Rona Gilang Pradana",
    "email": "rohmanrona@students.undip.ac.id"
  },
  {
    "nim": 23020219130122,
    "name": "Rohmatul Syaibani",
    "email": "rsyaibani@students.undip.ac.id"
  },
  {
    "nim": 23020219140091,
    "name": "Salsabila Mumtaz Widiyarso",
    "email": "salsabilamumtazw@students.undip.ac.id"
  },
  {
    "nim": 23020219130029,
    "name": "Sandro Bima Setiawan",
    "email": "sandrobimas@students.undip.ac.id"
  },
  {
    "nim": 23020217140013,
    "name": "Sarah Nurul Hijja",
    "email": "sarahnurulhijja@students.undip.ac.id"
  },
  {
    "nim": 23020219130031,
    "name": "Seno Setoaji",
    "email": "senosetoaji@students.undip.ac.id"
  },
  {
    "nim": 23020220120018,
    "name": "Sephia M. Pasaribu",
    "email": "sephiampasaribu@students.undip.ac.id"
  },
  {
    "nim": 23020220120005,
    "name": "Shyafna Aisyah Ryandjani",
    "email": "shyafnaaisyah@students.undip.ac.id"
  },
  {
    "nim": 23020220130052,
    "name": "Sukma Nurdinah",
    "email": "sukmanurdinah12@students.undip.ac.id"
  },
  {
    "nim": 23020219130040,
    "name": "Suryaningsih",
    "email": "surya123@students.undip.ac.id"
  },
  {
    "nim": 23020217140031,
    "name": "Syafira Aulia Rachmani S",
    "email": "syafirarss@students.undip.ac.id"
  },
  {
    "nim": 23020220120022,
    "name": "Tafrihatush Shifa",
    "email": "tafrihatushshifa@students.undip.ac.id"
  },
  {
    "nim": 23020218130095,
    "name": "Vira Tridestiani",
    "email": "viratridestiani@students.undip.ac.id"
  },
  {
    "nim": 23020217130058,
    "name": "Vivi Anisa",
    "email": "vivianisa@students.undip.ac.id"
  },
  {
    "nim": 23020220140133,
    "name": "Wahyu Agung Prasetyo",
    "email": "wahyuagungprasetyo@students.undip.ac.id"
  },
  {
    "nim": 23020220140030,
    "name": "Wardah Naila Rahmatika",
    "email": "wardahnailarahmatika@students.undip.ac.id"
  },
  {
    "nim": 23020220120024,
    "name": "Wardatuf Diana",
    "email": "wardatufdiana@students.undip.ac.id"
  },
  {
    "nim": 23020218140051,
    "name": "Widaryati",
    "email": "widaryati@students.undip.ac.id"
  },
  {
    "nim": 23020217130059,
    "name": "Widyadhari Dwinanda Putri",
    "email": "widyadharidwinan@students.undip.ac.id"
  },
  {
    "nim": 23020217140027,
    "name": "Yovan Pratama",
    "email": "yovanprtm@students.undip.ac.id"
  },
  {
    "nim": 23020218130061,
    "name": "Yuda Candra Wibowo",
    "email": "yudacandrawibowo@students.undip.ac.id"
  },
  {
    "nim": 23020219130085,
    "name": "Yulita Ariyani",
    "email": "yulitaariyani1701@students.undip.ac.id"
  },
  {
    "nim": 23020218140049,
    "name": "Zahra Millaty",
    "email": "zahramillaty@students.undip.ac.id"
  },
  {
    "nim": 23020217140034,
    "name": "Zherlin Asmoro",
    "email": "zherlinasmoro@students.undip.ac.id"
  },
  {
    "nim": 23020219130086,
    "name": "Zullaekah",
    "email": "zullaekah@students.undip.ac.id"
  },
  {
    "nim": 23020120130061,
    "name": "Adam Achmad Yuqinun",
    "email": "adamyuqinun@students.undip.ac.id"
  },
  {
    "nim": 23020120120004,
    "name": "Adam Permana Nur Saputra",
    "email": "adampermana@students.undip.ac.id"
  },
  {
    "nim": 23020119130040,
    "name": "Adelia Maharani Bramadita",
    "email": "adeliamaharanib@students.undip.ac.id"
  },
  {
    "nim": 23020119130135,
    "name": "Afifafida Herwina",
    "email": "afifafidaherwina@students.undip.ac.id"
  },
  {
    "nim": 23020120140118,
    "name": "Afifah Nurul Nur Hidayah",
    "email": "afifahnurulnurh@students.undip.ac.id"
  },
  {
    "nim": 23020120130107,
    "name": "Aida Fitri Muthia",
    "email": "aidafitrimuthia@students.undip.ac.id"
  },
  {
    "nim": 23020120140062,
    "name": "Aini Fahrum Latifah",
    "email": "ainiifahrum@students.undip.ac.id"
  },
  {
    "nim": 23020118130052,
    "name": "Aisyah Agis Rahmawati",
    "email": "aisyahagisrahmawati@students.undip.ac.id"
  },
  {
    "nim": 23020120140035,
    "name": "Aisyah Hannan Abdullah",
    "email": "aisyahhaa@students.undip.ac.id"
  },
  {
    "nim": 23020120130069,
    "name": "Alexander Glorian Satria Ferditama",
    "email": "alexanderglorian@students.undip.ac.id"
  },
  {
    "nim": 23020118130047,
    "name": "Alexander Jordan",
    "email": "alexjordan@students.undip.ac.id"
  },
  {
    "nim": 23020120120022,
    "name": "Alfian Bahrul Amiq",
    "email": "alfianba@students.undip.ac.id"
  },
  {
    "nim": 23020119140111,
    "name": "Alifiya Rezky",
    "email": "alifiyarezky@students.undip.ac.id"
  },
  {
    "nim": 23020119140059,
    "name": "Amayra Dewi Nur Faiza",
    "email": "amayradewinurfaiza@students.undip.ac.id"
  },
  {
    "nim": 23020119130121,
    "name": "Ananda Faizal Ghufron",
    "email": "anandafaizalg@students.undip.ac.id"
  },
  {
    "nim": 23020120120015,
    "name": "Ananda Salsabilla Fahma Putri",
    "email": "anandasalsabilla@students.undip.ac.id"
  },
  {
    "nim": 23020120130046,
    "name": "Anastasia Kyla Surodjo",
    "email": "kykylaas@students.undip.ac.id"
  },
  {
    "nim": 23020120130063,
    "name": "Andina Puspita Ramadhani",
    "email": "andinaprmdni@students.undip.ac.id"
  },
  {
    "nim": 23020118130040,
    "name": "Andrew Prima Bungaran Sibarani",
    "email": "andrewprima@students.undip.ac.id"
  },
  {
    "nim": 23020120120027,
    "name": "Angelina Emeralda Marito S",
    "email": "angelinaems@students.undip.ac.id"
  },
  {
    "nim": 23020120130060,
    "name": "Angelina Thalia Indriani",
    "email": "angelinathalia@students.undip.ac.id"
  },
  {
    "nim": 23020119130137,
    "name": "Anggun Dwimarlina",
    "email": "anggundwim@students.undip.ac.id"
  },
  {
    "nim": 23020120140039,
    "name": "Anindya Intan Prasrida",
    "email": "anindyaintanprasrida@students.undip.ac.id"
  },
  {
    "nim": 23020118140089,
    "name": "Annisa Findy Nur Jannah",
    "email": "annisafindynurjannah@students.undip.ac.id"
  },
  {
    "nim": 23020119140140,
    "name": "Annisa Peby Amalya",
    "email": "pebypa@students.undip.ac.id"
  },
  {
    "nim": 23020120120016,
    "name": "Annisa Shafa Putri Arini",
    "email": "annisashafaa@students.undip.ac.id"
  },
  {
    "nim": 23020120140131,
    "name": "Aprilia Elok Kusumaning Hapsari",
    "email": "apriliaelok@students.undip.ac.id"
  },
  {
    "nim": 23020120140093,
    "name": "Aretha Eriyanti Setia Putri",
    "email": "arethaesp1005@students.undip.ac.id"
  },
  {
    "nim": 23020119140103,
    "name": "Arif Rizqi Nurwidiyanto",
    "email": "arifrizqin@students.undip.ac.id"
  },
  {
    "nim": 23020118130105,
    "name": "Arina Alfania",
    "email": "arinaalfania@students.undip.ac.id"
  },
  {
    "nim": 23020118140038,
    "name": "Arnetta Devi Maharani",
    "email": "arnettadevimaharani@students.undip.ac.id"
  },
  {
    "nim": 23020119130123,
    "name": "Arviany Fithratin Nisa",
    "email": "arvianyfn@students.undip.ac.id"
  },
  {
    "nim": 23020119130120,
    "name": "Arya Rizky Priyatama",
    "email": "aryarizkypr@students.undip.ac.id"
  },
  {
    "nim": 23020120140086,
    "name": "Assyffa Fadlillah Diyudha",
    "email": "assyffad@students.undip.ac.id"
  },
  {
    "nim": 23020118120007,
    "name": "Astrid Dewanti",
    "email": "astriddewanti@students.undip.ac.id"
  },
  {
    "nim": 23020119130075,
    "name": "Aulia Marasmita",
    "email": "auliamarasmita@students.undip.ac.id"
  },
  {
    "nim": 23020120140085,
    "name": "Aulia Zalfa Nabila",
    "email": "auliazalfanabila@students.undip.ac.id"
  },
  {
    "nim": 23020120130056,
    "name": "Aurel Thessalonica",
    "email": "athessalonica@students.undip.ac.id"
  },
  {
    "nim": 23020119140122,
    "name": "Aurellia Alma Sharatri",
    "email": "aurellialmasharatri@students.undip.ac.id"
  },
  {
    "nim": 23020120140092,
    "name": "Azka Nadiya Dzakiyalizz",
    "email": "azkanadiya25@students.undip.ac.id"
  },
  {
    "nim": 23020119140116,
    "name": "Bagaskara Irvan",
    "email": "bagaskarairvan@students.undip.ac.id"
  },
  {
    "nim": 23020118120032,
    "name": "Belinda Dian Listyaningrum",
    "email": "belindadianlistyanin@students.undip.ac.id"
  },
  {
    "nim": 23020118120022,
    "name": "Bella Pratiwi Rahmawati",
    "email": "bellapratiwirahma@students.undip.ac.id"
  },
  {
    "nim": 23020119130100,
    "name": "Bunga Amallya",
    "email": "bungaamallya@students.undip.ac.id"
  },
  {
    "nim": 23020120120002,
    "name": "Choirini Dewi",
    "email": "choirinidewi@students.undip.ac.id"
  },
  {
    "nim": 23020120120029,
    "name": "Cindy Rahmania",
    "email": "cindyrahmaniaa@students.undip.ac.id"
  },
  {
    "nim": 23020118130043,
    "name": "Daniella Olivia Afri Kusuma",
    "email": "daniellaolivia@students.undip.ac.id"
  },
  {
    "nim": 23020120120003,
    "name": "Dea Yovi Arminta",
    "email": "deayoviarminta@students.undip.ac.id"
  },
  {
    "nim": 23020118130059,
    "name": "Deni Candra Lutfi Amalia",
    "email": "denicandralutfi@students.undip.ac.id"
  },
  {
    "nim": 23020120130051,
    "name": "Desfanti Mutiara Zahira",
    "email": "desfantimutiaraz@students.undip.ac.id"
  },
  {
    "nim": 23020119140038,
    "name": "Dewi Satta Wardah Hani",
    "email": "dewisattawardahhani@students.undip.ac.id"
  },
  {
    "nim": 23020120110036,
    "name": "Dhea Anting Sastra Wardani",
    "email": "dheaanting@students.undip.ac.id"
  },
  {
    "nim": 23020119140053,
    "name": "Dinadi Riska Tiarsono",
    "email": "dinadiriskatiarsono@students.undip.ac.id"
  },
  {
    "nim": 23020119130036,
    "name": "Dinda Yurike Andini",
    "email": "dindayurikeandini@students.undip.ac.id"
  },
  {
    "nim": 23020119130094,
    "name": "Dini Risanti",
    "email": "dinirisanti@students.undip.ac.id"
  },
  {
    "nim": 23020119140133,
    "name": "Diyan Ayu Puspita",
    "email": "diyanayupuspita@students.undip.ac.id"
  },
  {
    "nim": 23020118120025,
    "name": "Dwi Meilani Alifah",
    "email": "dwimeilanialifah@students.undip.ac.id"
  },
  {
    "nim": 23020119130063,
    "name": "Dwinur Chasanah",
    "email": "dwinurchasanah@students.undip.ac.id"
  },
  {
    "nim": 23020118120010,
    "name": "Elly Luthfiyanti",
    "email": "ellyluthfiyanti@students.undip.ac.id"
  },
  {
    "nim": 23020118140057,
    "name": "Elsa Catur Hafidha",
    "email": "elsacaturhafidha@students.undip.ac.id"
  },
  {
    "nim": 23020119120032,
    "name": "Elsa Chris Yudistra Sihite",
    "email": "elsasihite@students.undip.ac.id"
  },
  {
    "nim": 23020118120027,
    "name": "Elva Hariana Puspa",
    "email": "elvaharianap@students.undip.ac.id"
  },
  {
    "nim": 23020119140118,
    "name": "Evan Adrian",
    "email": "evanadrian@students.undip.ac.id"
  },
  {
    "nim": 23020118130077,
    "name": "Fa`zun Sintha Aggriyani",
    "email": "fazunsinthaanggriyan@students.undip.ac.id"
  },
  {
    "nim": 23020118120006,
    "name": "Fadia Aini Ardi",
    "email": "fadiaainiardi@students.undip.ac.id"
  },
  {
    "nim": 23020119130043,
    "name": "Farezza Athalia Ramadhanti",
    "email": "farezzaathalia@students.undip.ac.id"
  },
  {
    "nim": 23020118140062,
    "name": "Farhan Taufiqul Rahman",
    "email": "farhantaufiqulrahman@students.undip.ac.id"
  },
  {
    "nim": 23020119140071,
    "name": "Farrel Ihza Noer Susanto",
    "email": "farrelihzanoers@students.undip.ac.id"
  },
  {
    "nim": 23020120140120,
    "name": "Fathya Salsabila",
    "email": "fathyasalsabila@students.undip.ac.id"
  },
  {
    "nim": 23020120130091,
    "name": "Fatiha Nur Rahma",
    "email": "fatihanurrahma@students.undip.ac.id"
  },
  {
    "nim": 23020120140128,
    "name": "Febrianinta Wardhani",
    "email": "febrianintawardhani@students.undip.ac.id"
  },
  {
    "nim": 23020120130058,
    "name": "Felia Florentina Sentoso",
    "email": "feliaflorentinas@students.undip.ac.id"
  },
  {
    "nim": 23020120120018,
    "name": "Fenya Fatma Santoso",
    "email": "fenyafs@students.undip.ac.id"
  },
  {
    "nim": 23020120140041,
    "name": "Ferdinandus Valent Rian Nugroho",
    "email": "ferdinandus@students.undip.ac.id"
  },
  {
    "nim": 23020120120011,
    "name": "Filzah Amanina Qatrunnada",
    "email": "amanina24@students.undip.ac.id"
  },
  {
    "nim": 23020119140057,
    "name": "Firman Rasyada",
    "email": "firmanrasyada@students.undip.ac.id"
  },
  {
    "nim": 23020120120017,
    "name": "Friska Putri Cahyanti",
    "email": "friskaputri@students.undip.ac.id"
  },
  {
    "nim": 23020120120014,
    "name": "Graceshella Candra Ditya Suwarno",
    "email": "graceshellacandra@students.undip.ac.id"
  },
  {
    "nim": 23020118140066,
    "name": "Haekal Utama Afan",
    "email": "haekalutamaafan@students.undip.ac.id"
  },
  {
    "nim": 23020120140136,
    "name": "Halimah Nisa Septiani",
    "email": "halimahnisaseptiani@students.undip.ac.id"
  },
  {
    "nim": 23020120120026,
    "name": "Haristi Uswatun Nisa",
    "email": "haristiuswatunnisa@students.undip.ac.id"
  },
  {
    "nim": 23020119130044,
    "name": "Hasri Lathifah Ekaputri",
    "email": "hasrilatifah3@students.undip.ac.id"
  },
  {
    "nim": 23020120140113,
    "name": "Helena Paskah Lintangarum",
    "email": "helenapaskah@students.undip.ac.id"
  },
  {
    "nim": 23020120140033,
    "name": "I Gusti Agung Ayu Desinta Linggarcani",
    "email": "desintalinggarcani@students.undip.ac.id"
  },
  {
    "nim": 23020119140083,
    "name": "Ilga Galuh Permatasari",
    "email": "ilgapermata@students.undip.ac.id"
  },
  {
    "nim": 23020120120007,
    "name": "Ilma Muliasari Ramadhaningrum",
    "email": "ilmamuliasariramadha@students.undip.ac.id"
  },
  {
    "nim": 23020118140037,
    "name": "Intan Risviani Istiqfara",
    "email": "intanrisviani@students.undip.ac.id"
  },
  {
    "nim": 23020119140129,
    "name": "Isa Muhammad Adil",
    "email": "muhammadadilisa@students.undip.ac.id"
  },
  {
    "nim": 23020120140133,
    "name": "Jessica Aryani Putri",
    "email": "jessicaaryaniputri@students.undip.ac.id"
  },
  {
    "nim": 23020120130083,
    "name": "Kartini Anggraeni Silalahi",
    "email": "kartinisilalahi@students.undip.ac.id"
  },
  {
    "nim": 23020118130085,
    "name": "Khatami",
    "email": "tamtam@students.undip.ac.id"
  },
  {
    "nim": 23020120130079,
    "name": "Leonardus Ega Wardana",
    "email": "leonardusega@students.undip.ac.id"
  },
  {
    "nim": 23020119130076,
    "name": "Marcelinus Kristiantoro Pratama",
    "email": "marcelinuskp@students.undip.ac.id"
  },
  {
    "nim": 23020119120021,
    "name": "Mardiana",
    "email": "mardiana@students.undip.ac.id"
  },
  {
    "nim": 23020119130047,
    "name": "Maretha Ririt Nurcahyani",
    "email": "marethariritn@students.undip.ac.id"
  },
  {
    "nim": 23020120120006,
    "name": "Melin Dwi Raningsih",
    "email": "melindwiraningsih@students.undip.ac.id"
  },
  {
    "nim": 23020119130078,
    "name": "Melinda Setyani",
    "email": "melindasetyani@students.undip.ac.id"
  },
  {
    "nim": 23020120140068,
    "name": "Meri Andani",
    "email": "meriandani@students.undip.ac.id"
  },
  {
    "nim": 23020118120034,
    "name": "Meylina Putri Vinata",
    "email": "meylinaputrivinata@students.undip.ac.id"
  },
  {
    "nim": 23020118130041,
    "name": "Mochammad Darma Farhan Sanjaya",
    "email": "dafasanjaya@students.undip.ac.id"
  },
  {
    "nim": 23020118130072,
    "name": "Muhamad Rifai",
    "email": "muhamadrifai@students.undip.ac.id"
  },
  {
    "nim": 23020120140073,
    "name": "Muhammad Abi Aditya",
    "email": "muhammadabiaditya@students.undip.ac.id"
  },
  {
    "nim": 23020118130064,
    "name": "Muhammad Ardityo Pranaputra",
    "email": "muhammadardityoprana@students.undip.ac.id"
  },
  {
    "nim": 23020120120020,
    "name": "Muhammad Wildan",
    "email": "wildan1102@students.undip.ac.id"
  },
  {
    "nim": 23020119140067,
    "name": "Mutiara Suci C",
    "email": "mutiarasuci@students.undip.ac.id"
  },
  {
    "nim": 23020118140080,
    "name": "Nabila Azzahra",
    "email": "nabiladebia@students.undip.ac.id"
  },
  {
    "nim": 23020120110037,
    "name": "Nabila Faizatussalma",
    "email": "nabilafaizatussalma@students.undip.ac.id"
  },
  {
    "nim": 23020119140077,
    "name": "Nabila Lathifah Fatmawati",
    "email": "nabilalathifahf@students.undip.ac.id"
  },
  {
    "nim": 23020119140034,
    "name": "Nabila Nahda Wiedy Maharani",
    "email": "nabilanahdawiedymaha@students.undip.ac.id"
  },
  {
    "nim": 23020119130090,
    "name": "Nadya Yunica Alviani",
    "email": "nadyayunica@students.undip.ac.id"
  },
  {
    "nim": 23020120140072,
    "name": "Nafisa Kanaya Valleria",
    "email": "nafisakv@students.undip.ac.id"
  },
  {
    "nim": 23020120120025,
    "name": "Naluri Amella Putri",
    "email": "naluriamellaputri@students.undip.ac.id"
  },
  {
    "nim": 23020118120008,
    "name": "Nathania Maula Bernadine",
    "email": "nathaniamaulab@students.undip.ac.id"
  },
  {
    "nim": 23020120140095,
    "name": "Naura Poetry Nadima Mukti",
    "email": "naurapoetryn@students.undip.ac.id"
  },
  {
    "nim": 23020119140108,
    "name": "Niant Tiara Novanza",
    "email": "nianttiara@students.undip.ac.id"
  },
  {
    "nim": 23020118140045,
    "name": "Niken Pratiwi",
    "email": "nikenpratiwi@students.undip.ac.id"
  },
  {
    "nim": 23020120120023,
    "name": "Nisfa Rama Kamila Handoko",
    "email": "nisfakamila21@students.undip.ac.id"
  },
  {
    "nim": 23020120130101,
    "name": "Nisrina Meylisa Adinny",
    "email": "nisrinameylisaadinny@students.undip.ac.id"
  },
  {
    "nim": 23020119130104,
    "name": "Novia Hidayati Inasa",
    "email": "noviahdytins@students.undip.ac.id"
  },
  {
    "nim": 23020120130057,
    "name": "Nungky Rachma Hannisa",
    "email": "nungkyrachmahannisa@students.undip.ac.id"
  },
  {
    "nim": 23020119120010,
    "name": "Nurul Kharimah",
    "email": "nurulkharimah@students.undip.ac.id"
  },
  {
    "nim": 23020120130064,
    "name": "Priska Tiara Primastuti",
    "email": "priskatiara@students.undip.ac.id"
  },
  {
    "nim": 23020119130037,
    "name": "Purwanti",
    "email": "purwanti@students.undip.ac.id"
  },
  {
    "nim": 23020119140080,
    "name": "Rafael Evan Wiryawan",
    "email": "rafaelevanw@students.undip.ac.id"
  },
  {
    "nim": 23020118130054,
    "name": "Rahayu Kumala Dewi",
    "email": "rahayukumaladewi@students.undip.ac.id"
  },
  {
    "nim": 23020120140142,
    "name": "Rahma Vashti Bethany",
    "email": "rahmavashti@students.undip.ac.id"
  },
  {
    "nim": 23020120120008,
    "name": "Rana Yufita Sari",
    "email": "ranayufitasari@students.undip.ac.id"
  },
  {
    "nim": 23020118120002,
    "name": "Reydilhan Aulia Rahman Marpaung",
    "email": "reydilhanauliarahman@students.undip.ac.id"
  },
  {
    "nim": 23020118120001,
    "name": "Reyna Ayu Nadiana",
    "email": "reynaayunadiana@students.undip.ac.id"
  },
  {
    "nim": 23020120130082,
    "name": "Risna Listianingrum",
    "email": "risnalistianingrum@students.undip.ac.id"
  },
  {
    "nim": 23020120140124,
    "name": "Rizka Amalia",
    "email": "rizkaaml@students.undip.ac.id"
  },
  {
    "nim": 23020120140123,
    "name": "Rizka Amalia Rahayu",
    "email": "rizkamalia22@students.undip.ac.id"
  },
  {
    "nim": 23020120120013,
    "name": "Rizki Amalia Safitri",
    "email": "rizkiamaliasafitri@students.undip.ac.id"
  },
  {
    "nim": 23020119130072,
    "name": "Rosalinda Putri Prasanti",
    "email": "rosalindaptri@students.undip.ac.id"
  },
  {
    "nim": 23020119140055,
    "name": "Salma Zakiyyah Az-zahrah",
    "email": "salmazakiyyah@students.undip.ac.id"
  },
  {
    "nim": 23020120140140,
    "name": "Salsabilla Anandi Kusumowinahyu",
    "email": "salsaanandi@students.undip.ac.id"
  },
  {
    "nim": 23020120140139,
    "name": "Salsanaja Adnabillah Asytata",
    "email": "salsanajaadnabillaha@students.undip.ac.id"
  },
  {
    "nim": 23020120130077,
    "name": "Sania Pascawati",
    "email": "saniapascawati@students.undip.ac.id"
  },
  {
    "nim": 23020119130093,
    "name": "Santiko Aji Pangestu",
    "email": "santikoap@students.undip.ac.id"
  },
  {
    "nim": 23020118140083,
    "name": "Sekar Nur Noviyanti",
    "email": "sekarnurnoviyanti@students.undip.ac.id"
  },
  {
    "nim": 23020120130050,
    "name": "Shahnaz Aisha Abiwardani",
    "email": "shahnazaisha@students.undip.ac.id"
  },
  {
    "nim": 23020120130109,
    "name": "Sheryl Oktavia Atika Putri",
    "email": "sheryloktavia@students.undip.ac.id"
  },
  {
    "nim": 23020119130097,
    "name": "Shilni Aunika",
    "email": "shilniaunika@students.undip.ac.id"
  },
  {
    "nim": 23020120130100,
    "name": "Siti Nurhayati",
    "email": "sitinrhyt@students.undip.ac.id"
  },
  {
    "nim": 23020119130074,
    "name": "Siti Qonita Maharani",
    "email": "sitiqonita@students.undip.ac.id"
  },
  {
    "nim": 23020119130106,
    "name": "Syailla Amalia Putri Kusumawardhani",
    "email": "syaillaamalia@students.undip.ac.id"
  },
  {
    "nim": 23020119140110,
    "name": "Syifa Aulia Zahro",
    "email": "syifaaulia@students.undip.ac.id"
  },
  {
    "nim": 23020120140090,
    "name": "Tasya Hanifah Putri",
    "email": "tasyahanifahputri@students.undip.ac.id"
  },
  {
    "nim": 23020120120019,
    "name": "Taufika Hidayati",
    "email": "taufikahidayati@students.undip.ac.id"
  },
  {
    "nim": 23020120140134,
    "name": "Tegar Agusta Wibawa",
    "email": "tegaragusta9@students.undip.ac.id"
  },
  {
    "nim": 23020120120001,
    "name": "Tharisya Dwi Amarra Emes",
    "email": "tharisyaemes04@students.undip.ac.id"
  },
  {
    "nim": 23020120140143,
    "name": "Tiara Bintang Aurelia",
    "email": "aureliatiara@students.undip.ac.id"
  },
  {
    "nim": 23020120140052,
    "name": "Tiara Putri Khoerushyfa S",
    "email": "tiaraputrikh@students.undip.ac.id"
  },
  {
    "nim": 23020118130058,
    "name": "Tria Septiawati",
    "email": "triaseptiawati@students.undip.ac.id"
  },
  {
    "nim": 23020118120005,
    "name": "Umi Nur Widiyatun",
    "email": "uminw18@students.undip.ac.id"
  },
  {
    "nim": 23020120120012,
    "name": "Utami Dyah Pratiwi",
    "email": "utamidyah@students.undip.ac.id"
  },
  {
    "nim": 23020119140064,
    "name": "Vicky Nurhayati",
    "email": "vickynurhayati@students.undip.ac.id"
  },
  {
    "nim": 23020119130112,
    "name": "Virna Rania Insyira",
    "email": "virnaraniainsyira@students.undip.ac.id"
  },
  {
    "nim": 23020119130128,
    "name": "Vita Angelina",
    "email": "vitaangelina@students.undip.ac.id"
  },
  {
    "nim": 23020118120036,
    "name": "Wasilatun Eka Wulandari",
    "email": "wasilatunekawulandar@students.undip.ac.id"
  },
  {
    "nim": 23020120130054,
    "name": "Yehezkiel Allen Santoso",
    "email": "yehezkielallen@students.undip.ac.id"
  },
  {
    "nim": 23020117140046,
    "name": "Yehezkiel Bobby Slamet",
    "email": "yehezkielbobbyslamet@students.undip.ac.id"
  },
  {
    "nim": 23020118130079,
    "name": "Yeni Ferianto",
    "email": "yeniferianto@students.undip.ac.id"
  },
  {
    "nim": 23020118130049,
    "name": "Zachwa Chairunnisa Robby",
    "email": "zachwachairunnisar@students.undip.ac.id"
  },
  {
    "nim": 23020119120024,
    "name": "Zahra Nafa Aliza",
    "email": "zahranafaaliza@students.undip.ac.id"
  },
  {
    "nim": 23020120140116,
    "name": "Zakhiyatus Syah Diah Dewi Tri",
    "email": "zakhiyatussyahdiahdt@students.undip.ac.id"
  },
  {
    "nim": 23020317110016,
    "name": "Mumtaz Ahnaf Bekti",
    "email": "ahanfbekti@students.undip.ac.id"
  },
  {
    "nim": 23020317120015,
    "name": "Septy Alif Kurnia",
    "email": "septyalifkurnia@students.undip.ac.id"
  },
  {
    "nim": 23020317120026,
    "name": "Bramasta Aditya",
    "email": "bramastaaditya@students.undip.ac.id"
  },
  {
    "nim": 23020317120028,
    "name": "Ice Ayu Miranda",
    "email": "iceayumiranda@students.undip.ac.id"
  },
  {
    "nim": 23020317130041,
    "name": "Waode Resty Septia Anggreny",
    "email": "waoderestyseptiaangg@students.undip.ac.id"
  },
  {
    "nim": 23020317130042,
    "name": "Wahyu Dwi Suci Damayanti",
    "email": "wahyudwisucidamayant@students.undip.ac.id"
  },
  {
    "nim": 23020317130044,
    "name": "Deano Mahardian Sahari",
    "email": "Deamaritaazizah@students.undip.ac.id"
  },
  {
    "nim": 23020317130054,
    "name": "Bilqis Sholihah",
    "email": "bilqissholihah@students.undip.ac.id"
  },
  {
    "nim": 23020317140034,
    "name": "Akbar Rizky Hasim",
    "email": "akbarrhasim@students.undip.ac.id"
  },
  {
    "nim": 23020317140036,
    "name": "Muhammad Ulil Ilmi",
    "email": "lilsgood@students.undip.ac.id"
  },
  {
    "nim": 23020317140039,
    "name": "Dewi Rahmawati Ningrum Sari",
    "email": "dewirahmawatiningrum@students.undip.ac.id"
  },
  {
    "nim": 23020317140046,
    "name": "Rifqy Agil Farid",
    "email": "rifqyagil@students.undip.ac.id"
  },
  {
    "nim": 23020317140054,
    "name": "Winda Ayu Pramesti",
    "email": "windaayupramesti@students.undip.ac.id"
  },
  {
    "nim": 23020317140061,
    "name": "Aina Aulia",
    "email": "ainaaulia@students.undip.ac.id"
  },
  {
    "nim": 23020318120007,
    "name": "Nila Nur Rohmaniyah",
    "email": "nilanurrohmaniyah@students.undip.ac.id"
  },
  {
    "nim": 23020318120008,
    "name": "Nur Asih Jayanti",
    "email": "nurasihjayanti@students.undip.ac.id"
  },
  {
    "nim": 23020318120010,
    "name": "Mita Erliaristi",
    "email": "mitaerliaristi@students.undip.ac.id"
  },
  {
    "nim": 23020318120012,
    "name": "Muhammad Fikry Naufal Azizy",
    "email": "fikrynaufaldemak@students.undip.ac.id"
  },
  {
    "nim": 23020318120017,
    "name": "Rina Safitri",
    "email": "rinasafitri@students.undip.ac.id"
  },
  {
    "nim": 23020318120024,
    "name": "Fella Sufah Aini",
    "email": "fellasufahaini@students.undip.ac.id"
  },
  {
    "nim": 23020318120028,
    "name": "Muslimatun Nafisa",
    "email": "muslimatunnafisa@students.undip.ac.id"
  },
  {
    "nim": 23020318120029,
    "name": "Ichma Butar Butar",
    "email": "ichmabutarbutar@students.undip.ac.id"
  },
  {
    "nim": 23020318130053,
    "name": "Diana Mayasari",
    "email": "dianamayasari@students.undip.ac.id"
  },
  {
    "nim": 23020318130055,
    "name": "Aisyah Nisa  'Ul Fitri",
    "email": "aisyahnisaulfitri@students.undip.ac.id"
  },
  {
    "nim": 23020318130060,
    "name": "Karin Mega Rastradinar",
    "email": "karinrastradinar@students.undip.ac.id"
  },
  {
    "nim": 23020318130061,
    "name": "Sinta Mutia Sari",
    "email": "sintamutiasari@students.undip.ac.id"
  },
  {
    "nim": 23020318130071,
    "name": "Aditya Rafisyuhada",
    "email": "rafisyu@students.undip.ac.id"
  },
  {
    "nim": 23020318130079,
    "name": "Tri Wahyuni",
    "email": "triwahyuni11@students.undip.ac.id"
  },
  {
    "nim": 23020318130081,
    "name": "Nur Ayuningtiyas",
    "email": "nurayuningtiyas@students.undip.ac.id"
  },
  {
    "nim": 23020318130093,
    "name": "Hafidz Rifki Faishal",
    "email": "hafidzrifki3@students.undip.ac.id"
  },
  {
    "nim": 23020319120003,
    "name": "Windi Ayu Eka Ratri",
    "email": "windiayuekaratri@students.undip.ac.id"
  },
  {
    "nim": 23020319120009,
    "name": "Avinda Purwa Adi",
    "email": "avindapurwaadi@students.undip.ac.id"
  },
  {
    "nim": 23020319120010,
    "name": "Nestri Fitriyani",
    "email": "nestrifitriyani@students.undip.ac.id"
  },
  {
    "nim": 23020319120013,
    "name": "Nabiilah Zayyan Salsabilah",
    "email": "nabilazs@students.undip.ac.id"
  },
  {
    "nim": 23020319120020,
    "name": "Tina Pandu Winata",
    "email": "tinapanduwinata@students.undip.ac.id"
  },
  {
    "nim": 23020319120021,
    "name": "Fikri Haikal Hidayat",
    "email": "fikrihaikalhidayat@students.undip.ac.id"
  },
  {
    "nim": 23020319120022,
    "name": "Nur Maulinda Fatmah",
    "email": "nurmaulindafatmah@students.undip.ac.id"
  },
  {
    "nim": 23020319120023,
    "name": "Ayu Tantia Arafah",
    "email": "ayutantiaarafah@students.undip.ac.id"
  },
  {
    "nim": 23020319130039,
    "name": "Theo Adrian Healthon",
    "email": "theoadrian@students.undip.ac.id"
  },
  {
    "nim": 23020319130044,
    "name": "Achmad Fahrul Wahyudi",
    "email": "achmadfahrul@students.undip.ac.id"
  },
  {
    "nim": 23020319130047,
    "name": "Mohammad Arif Ariyanto",
    "email": "mohammadarifariyant@students.undip.ac.id"
  },
  {
    "nim": 23020319130048,
    "name": "Daniel Arief Putra",
    "email": "danielariefputra@students.undip.ac.id"
  },
  {
    "nim": 23020319130052,
    "name": "Chairunnisa",
    "email": "chairunnisa@students.undip.ac.id"
  },
  {
    "nim": 23020319130062,
    "name": "Navisya Fitria Mawarjan",
    "email": "navisyafm@students.undip.ac.id"
  },
  {
    "nim": 23020319130071,
    "name": "Hanifa Aulia Luthfiana",
    "email": "hanifaal@students.undip.ac.id"
  },
  {
    "nim": 23020319130073,
    "name": "Salamah Permatasari",
    "email": "salamahpermatas@students.undip.ac.id"
  },
  {
    "nim": 23020319130075,
    "name": "Wafa Muhammad Rikza",
    "email": "wafa0740@students.undip.ac.id"
  },
  {
    "nim": 23020319130078,
    "name": "Atika Rachmadianti",
    "email": "atikarachmadianti@students.undip.ac.id"
  },
  {
    "nim": 23020319130080,
    "name": "Hanifah Inayanti",
    "email": "hanifahinayanti@students.undip.ac.id"
  },
  {
    "nim": 23020319130083,
    "name": "Yulia Dinda Puspaningtyas",
    "email": "yuliadindapuspa@students.undip.ac.id"
  },
  {
    "nim": 23020319130087,
    "name": "Intan Tsania Putri",
    "email": "intantsania18@students.undip.ac.id"
  },
  {
    "nim": 23020319130092,
    "name": "Alex Priambodo",
    "email": "alexpriambodo5@students.undip.ac.id"
  },
  {
    "nim": 23020319130097,
    "name": "Rania Akmalia",
    "email": "raniaakmalia@students.undip.ac.id"
  },
  {
    "nim": 23020319130099,
    "name": "Intan Larasati",
    "email": "intanlrz@students.undip.ac.id"
  },
  {
    "nim": 23020319130099,
    "name": "Intan Larasati",
    "email": "intanlrz@students.undip.ac.id"
  },
  {
    "nim": 23020319130101,
    "name": "Andi Aisyah Azzahrah",
    "email": "ichaazzahrah@students.undip.ac.id"
  },
  {
    "nim": 23020319130105,
    "name": "Salsabila Yuandari",
    "email": "salsabilayuandari16@students.undip.ac.id"
  },
  {
    "nim": 23020319130108,
    "name": "Yordan Luthfi Dwiyanto",
    "email": "yordanluthfidwiyanto@students.undip.ac.id"
  },
  {
    "nim": 23020319130109,
    "name": "Kansha Fathiya",
    "email": "kanshafathiya@students.undip.ac.id"
  },
  {
    "nim": 23020319130111,
    "name": "Tri Hambudi Utomo",
    "email": "trihambudi@students.undip.ac.id"
  },
  {
    "nim": 23020319130127,
    "name": "Putri Ayu Lestari",
    "email": "putriayulestari@students.undip.ac.id"
  },
  {
    "nim": 23020319140036,
    "name": "Maya Estikasari",
    "email": "mayaestikasari@students.undip.ac.id"
  },
  {
    "nim": 23020319140045,
    "name": "Nabilah Inas Saraswati",
    "email": "nabilahinassaraswati@students.undip.ac.id"
  },
  {
    "nim": 23020319140057,
    "name": "Robith Mahasin Ahmad",
    "email": "robithmahasinahmad@students.undip.ac.id"
  },
  {
    "nim": 23020319140065,
    "name": "Zalfa Salsabila",
    "email": "zalfasalsabila@students.undip.ac.id"
  },
  {
    "nim": 23020319140077,
    "name": "Muhammad Izzy",
    "email": "muhammadizzy@students.undip.ac.id"
  },
  {
    "nim": 23020319140082,
    "name": "Fadhil Anugrah Firdaus",
    "email": "fadhilanugrahfirdaus@students.undip.ac.id"
  },
  {
    "nim": 23020319140102,
    "name": "Rayhan Raffel Reynaldi",
    "email": "rayhanraffel145@students.undip.ac.id"
  },
  {
    "nim": 23020319140106,
    "name": "Talitha Syahada Kusumaningrum",
    "email": "tasyaatalitha@students.undip.ac.id"
  },
  {
    "nim": 23020319140112,
    "name": "Tahsya Fiqi Umamah",
    "email": "tahsyafiqiumamah@students.undip.ac.id"
  },
  {
    "nim": 23020319140121,
    "name": "Sarah Faradhila Ramadhanti",
    "email": "sarahfaradhila@students.undip.ac.id"
  },
  {
    "nim": 23020319140124,
    "name": "Muhammad Rifqi Taqiuddin Rafif",
    "email": "rifqitaqiuddin@students.undip.ac.id"
  },
  {
    "nim": 23020320120001,
    "name": "Yunita Dwi Lestari",
    "email": "yunitadwilestari@students.undip.ac.id"
  },
  {
    "nim": 23020320120002,
    "name": "Himmatul Ummi",
    "email": "himmatulummi3@students.undip.ac.id"
  },
  {
    "nim": 23020320120003,
    "name": "Cut Nurjanah",
    "email": "cutnurjanah@students.undip.ac.id"
  },
  {
    "nim": 23020320120004,
    "name": "M. Baihaqi Erlangga Djati",
    "email": "baihaqierlangga@students.undip.ac.id"
  },
  {
    "nim": 23020320120005,
    "name": "Evarista Putri Damayanti",
    "email": "evaristaputridamayan@students.undip.ac.id"
  },
  {
    "nim": 23020320120007,
    "name": "Tasya Mifdatul Rahma",
    "email": "tasyamifdatulrahma@students.undip.ac.id"
  },
  {
    "nim": 23020320120008,
    "name": "Alya Dwi Atika",
    "email": "alyadwiatika@students.undip.ac.id"
  },
  {
    "nim": 23020320120012,
    "name": "Afiifah Cahya Fadila",
    "email": "fadilaacf@students.undip.ac.id"
  },
  {
    "nim": 23020320120013,
    "name": "Tri Handayani Hamida Lestari",
    "email": "trihandayanihmdlstr@students.undip.ac.id"
  },
  {
    "nim": 23020320120016,
    "name": "Gerry Andrianto Simarmata",
    "email": "gerrysimarmata25@students.undip.ac.id"
  },
  {
    "nim": 23020320120018,
    "name": "Muhammad Wildanul Atqiya",
    "email": "muhammadwildanulatqi@students.undip.ac.id"
  },
  {
    "nim": 23020320120020,
    "name": "Zainab Azzakiyyah",
    "email": "zainabazzakiyyah@students.undip.ac.id"
  },
  {
    "nim": 23020320120021,
    "name": "Arieska Lailly Nugrahini Herawati Prasetyaningrum",
    "email": "arieskalailly@students.undip.ac.id"
  },
  {
    "nim": 23020320120023,
    "name": "Grace Christina Yohanna Situmorang",
    "email": "gracesitumorang@students.undip.ac.id"
  },
  {
    "nim": 23020320120024,
    "name": "Putri Arimbi Enggarbudi",
    "email": "putriarimbie@students.undip.ac.id"
  },
  {
    "nim": 23020320120026,
    "name": "Nathasya Aditha Blessindy Br Marpaung",
    "email": "nathasyamarpaung@students.undip.ac.id"
  },
  {
    "nim": 23020320120027,
    "name": "Sefia Diah Ayu Puji Lestari",
    "email": "sefiadiahayu@students.undip.ac.id"
  },
  {
    "nim": 23020320130035,
    "name": "Ikmal Zul Fikri",
    "email": "ikmalzulfikri@students.undip.ac.id"
  },
  {
    "nim": 23020320130036,
    "name": "Sevina Haninditya Putri",
    "email": "sevinahaninditya@students.undip.ac.id"
  },
  {
    "nim": 23020320130039,
    "name": "Muhammad Mirza Rahuli",
    "email": "mirzarahuli@students.undip.ac.id"
  },
  {
    "nim": 23020320130043,
    "name": "Junius Imanuel Tarigan",
    "email": "juniusimanueltarigan@students.undip.ac.id"
  },
  {
    "nim": 23020320130045,
    "name": "Sekariyanti Wilasasri",
    "email": "sekariyantiwilasasri@students.undip.ac.id"
  },
  {
    "nim": 23020320130048,
    "name": "Dian Wahyu Nugraheni",
    "email": "dianwahyunugraheni@students.undip.ac.id"
  },
  {
    "nim": 23020320130051,
    "name": "Phiera Aura Kartika Dunya",
    "email": "phieraaurakd@students.undip.ac.id"
  },
  {
    "nim": 23020320130055,
    "name": "Muhammad Salafiah",
    "email": "muhammadsalafiah@students.undip.ac.id"
  },
  {
    "nim": 23020320130056,
    "name": "Dea Marita Azizah",
    "email": "deamaritaazizah@students.undip.ac.id"
  },
  {
    "nim": 23020320130057,
    "name": "Khusnul Kotimah",
    "email": "khusnulkotimah@students.undip.ac.id"
  },
  {
    "nim": 23020320130062,
    "name": "Muhammad Hudzaifi Arifin",
    "email": "mhudzaifiarif@students.undip.ac.id"
  },
  {
    "nim": 23020320130065,
    "name": "Mifda Rizqia Zahro",
    "email": "mifdarizqiazahro@students.undip.ac.id"
  },
  {
    "nim": 23020320130066,
    "name": "Muhammad Daffa Pratomo",
    "email": "mdaffapratomo@students.undip.ac.id"
  },
  {
    "nim": 23020320130070,
    "name": "Zahwa Auditha Putri",
    "email": "zahwaaudi@students.undip.ac.id"
  },
  {
    "nim": 23020320130071,
    "name": "Siti Nur Halimah",
    "email": "sitinurhalimah2@students.undip.ac.id"
  },
  {
    "nim": 23020320130073,
    "name": "Fionni Athaya Virginaura",
    "email": "fionniathaya@students.undip.ac.id"
  },
  {
    "nim": 23020320130074,
    "name": "Ahmad Muhammad Maulana",
    "email": "ahmadmuhammadmaulana@students.undip.ac.id"
  },
  {
    "nim": 23020320130075,
    "name": "Annisa Putri Aurora Permata Syarifadila",
    "email": "annisaputriaurora@students.undip.ac.id"
  },
  {
    "nim": 23020320130078,
    "name": "Aryasatia Ramadhan",
    "email": "aryasatiaramadhan@students.undip.ac.id"
  },
  {
    "nim": 23020320130085,
    "name": "Rosalinda Nurhidayah",
    "email": "rosalindanurhidayah@students.undip.ac.id"
  },
  {
    "nim": 23020320130086,
    "name": "Assyifa Fentiyasari",
    "email": "assyifafentiyasari14@students.undip.ac.id"
  },
  {
    "nim": 23020320130093,
    "name": "Gilang Kresna Malik",
    "email": "gilangkresnaa@students.undip.ac.id"
  },
  {
    "nim": 23020320130099,
    "name": "Jerry Candra Irawan",
    "email": "jerrycandrairawan@students.undip.ac.id"
  },
  {
    "nim": 23020320130100,
    "name": "Sheren Adisya Thesaloni",
    "email": "sherenadisya@students.undip.ac.id"
  },
  {
    "nim": 23020320130102,
    "name": "Andara Nuradika Prisanti",
    "email": "andaraprisanti@students.undip.ac.id"
  },
  {
    "nim": 23020320130104,
    "name": "Putri Natasya Manik",
    "email": "putrinm@students.undip.ac.id"
  },
  {
    "nim": 23020320130106,
    "name": "Avis'ad Adyatma",
    "email": "aditadyatma@students.undip.ac.id"
  },
  {
    "nim": 23020320130108,
    "name": "Elsa Yohana Simanullang",
    "email": "elsayohana@students.undip.ac.id"
  },
  {
    "nim": 23020320140037,
    "name": "Bangkit Permata Aji",
    "email": "bangkitpermataaji@students.undip.ac.id"
  },
  {
    "nim": 23020320140038,
    "name": "Jingga Syielfa Choerunnisa",
    "email": "jinggasyielfac@students.undip.ac.id"
  },
  {
    "nim": 23020320140041,
    "name": "Lintang Arum Hafiizhah Putri Aryadi",
    "email": "lintangarum@students.undip.ac.id"
  },
  {
    "nim": 23020320140050,
    "name": "Muhammad Sandika Varma",
    "email": "muhammadsandikavarma@students.undip.ac.id"
  },
  {
    "nim": 23020320140061,
    "name": "Alifianico Prasetyo",
    "email": "alifianicoprasetyo@students.undip.ac.id"
  },
  {
    "nim": 23020320140063,
    "name": "Hanan Kusuma Wiratama",
    "email": "hanankusumawiratama@students.undip.ac.id"
  },
  {
    "nim": 23020320140064,
    "name": "Ria Nurtiasih",
    "email": "rianurtiasih15@students.undip.ac.id"
  },
  {
    "nim": 23020320140067,
    "name": "Dhesti Nurfitriani",
    "email": "dhestinurfitriani@students.undip.ac.id"
  },
  {
    "nim": 23020320140069,
    "name": "Safira Amalia Zahra",
    "email": "safiramaliaz@students.undip.ac.id"
  },
  {
    "nim": 23020320140072,
    "name": "Aliifa Jenica Athaya Natama",
    "email": "aliifajenica@students.undip.ac.id"
  },
  {
    "nim": 23020320140087,
    "name": "Maulida Fitria",
    "email": "maulidafitria@students.undip.ac.id"
  },
  {
    "nim": 23020320140088,
    "name": "Farah Diba",
    "email": "farahdiba03@students.undip.ac.id"
  },
  {
    "nim": 23020320140089,
    "name": "Elen Pertiwi",
    "email": "elenpertiwi@students.undip.ac.id"
  },
  {
    "nim": 23020320140092,
    "name": "Rifqah Wafiyyah Salsabila Rahman",
    "email": "rifqahwafiyyahsr@students.undip.ac.id"
  },
  {
    "nim": 23020320140094,
    "name": "Nilam Fajrina Adhin",
    "email": "nilamfajrina@students.undip.ac.id"
  },
  {
    "nim": 23020320140095,
    "name": "Annisha Hermawanputri",
    "email": "annishahp@students.undip.ac.id"
  },
  {
    "nim": 23020320140098,
    "name": "Ira Rahma Putri Zahrani",
    "email": "raraputri05@students.undip.ac.id"
  },
  {
    "nim": 23020320140109,
    "name": "Ema Adeliana Yunita",
    "email": "emaadelianayunita@students.undip.ac.id"
  },
  {
    "nim": 23020320140113,
    "name": "Antik Fauziah",
    "email": "antikfauziah@students.undip.ac.id"
  },
  {
    "nim": 23020320140115,
    "name": "Faris Muda Iftikar",
    "email": "farisiftikar@students.undip.ac.id"
  },
  {
    "nim": 23020320140117,
    "name": "Anny Farikhah Sufiana",
    "email": "annyfarikhahsufiana@students.undip.ac.id"
  },
  {
    "nim": 23020320140119,
    "name": "Tengku Rafi Khanza Oa",
    "email": "tengkurafikhanzaoa@students.undip.ac.id"
  },
  {
    "nim": 23020320140120,
    "name": "Viona Mayasari",
    "email": "vionamayasari@students.undip.ac.id"
  },
  {
    "nim": 23020320140121,
    "name": "Fauzan Makarim Wirasakti",
    "email": "fauzanmw@students.undip.ac.id"
  },
  {
    "nim": 23020320140122,
    "name": "Agil Anita Sari",
    "email": "agilanitasari@students.undip.ac.id"
  },
  {
    "nim": 23020320140125,
    "name": "Eunike Rotua Simanjuntak",
    "email": "eunikesimanjuntak@students.undip.ac.id"
  },
  {
    "nim": 23020320140126,
    "name": "Putu Amelia Savitha Diana Putri",
    "email": "putuameliasdp@students.undip.ac.id"
  },
  {
    "nim": 23020320140128,
    "name": "Chrissilia Yunia Atmojo",
    "email": "chrissiliayunia@students.undip.ac.id"
  },
  {
    "nim": 23020320140129,
    "name": "Raya Danu Arya Raharjo",
    "email": "rayadanuaryaraharjo@students.undip.ac.id"
  },
  {
    "nim": 23020320140130,
    "name": "Muhammad Ziyad Al Fikri",
    "email": "mziyadalfikri@students.undip.ac.id"
  },
  {
    "nim": 23020320140131,
    "name": "Adam Raihandani Febrian",
    "email": "adamraihan@students.undip.ac.id"
  },
  {
    "nim": 23020320140133,
    "name": "Sekar Arumdani",
    "email": "sekararumdani@students.undip.ac.id"
  },
  {
    "nim": 23020320140135,
    "name": "Riska Wahyu Putri Ageri",
    "email": "riskawpa@students.undip.ac.id"
  },
  {
    "nim": 23020320140136,
    "name": "Anjaraka Alfa Ridzi",
    "email": "anjarakaalfaridzi@students.undip.ac.id"
  },
  {
    "nim": 23020320140137,
    "name": "Selly Tri Lestari",
    "email": "sellytrilestari@students.undip.ac.id"
  },
  {
    "nim": 23020320140141,
    "name": "Juni Juniatini Nur Zahra",
    "email": "junijnzahra@students.undip.ac.id"
  },
  {
    "nim": 23020320140143,
    "name": "Marsha Vania Sayyidina",
    "email": "marshavaniasayyidina@students.undip.ac.id"
  },
  {
    "nim": 23020320140144,
    "name": "Tarisa Rostiana",
    "email": "tarisarostiana@students.undip.ac.id"
  },
  {
    "nim": 23020320140145,
    "name": "Tasya Sherin Sabela",
    "email": "tasyasherinsabela@students.undip.ac.id"
  },
  {                                                                                                         
    "nim": 23020320140146,
    "name": "Fatma Chairunnisa",
    "email": "fatmachairunnisa@students.undip.ac.id"
  }
];

participants.forEach((_participant)=>{
  
  var participant = new Participant();
  participant.name = _participant.name;
  participant.nim = _participant.nim;
  participant.email = _participant.email;
  participant.session.id = "5fe9cc7ef88af802829f398f";
  participant.session.number = 1;    
  participant.session.min = new Date("2021-01-03T07:00:00.000Z");
  participant.session.max = new Date("2021-01-03T17:00:00.000Z");

  // Save and validate
  participant.save(function (err) {
    if (err) res.json(err);

    Session.findById("5fe9cc7ef88af802829f398f", function (err, session) {
      if (err) throw err;
      session.total_participant++;
      Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
        (session) => {
          if (session) {
          } else {
          }
        }
      );
    });
  });

})
};

// Handle update actions
exports.update = function (req, res) {
  

  var moveSession = false;
  var oldSession = {};
  var newSession = {};

  Participant.findById(req.params.id, function (err, participant) {
    if (err) throw err;
    if (participant.session.id != req.body.sessionId) {
      moveSession = true;
      oldSession = participant.session;
      newSession = {
        id: req.body.sessionId,
        number: req.body.sessionNumber,
        start: new Date(req.body.sessionMin),
        end: new Date(req.body.sessionMax),
      };
    }
  });

  Participant.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        nim: req.body.nim,
        email: req.body.email,
        "session.id": req.body.sessionId,
        "session.number": req.body.sessionNumber,
        "session.min": new Date(req.body.sessionMin),
        "session.max": new Date(req.body.sessionMax),
      },
    }
  )
    .then((participant) => {
      if (participant) {
        if (moveSession) {
          Session.findById(newSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant++;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });

          Session.findById(oldSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant--;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });
        }

        return res.json({
          message: "participant updated",
          data: participant,
        });
      } else {
        return res.json({
          message: "participant not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "error",
        data: err,
      });
    });
};

// Handle vote actions
exports.vote = function (req, res) {
  Participant.findOneAndUpdate(
    { _id: req.body.id_participant },
    {
      $set: {
        "voting.id_candidate": req.body.id_candidate,
        "voting.time": Date(),
        "voting.counted": 0,
      },
    }
  )
    .then((participant) => {
      if (participant) {
        return res.json({
          message: "participant voted",
          data: participant,
        });
      } else {
        return res.json({
          message: "participant not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      return res.json({
        message: "error",
        data: err,
      });
    });
};

// Handle delete actions
exports.delete = function (req, res) {
  
  Participant.findById(req.params.id, function (err, participant) {
    if (err) return res.send(err);

    Session.findById(participant.session.id, function (err, session) {
      if (err) throw err;
      session.total_participant--;
      console.log("sessions id:" + session._id);
      Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
        (session) => {
          if (session) {
            Participant.deleteOne(
              {
                _id: req.params.id,
              },
              function (err, participant) {
                if (err) res.send(err);

                return res.json({
                  status: "success",
                  message: "Participant Deleted!",
                });
              }
            );
          } else {
          }
        }
      );
    });
  });
};

// Handle delete actions
exports.force_delete = function (req, res) {
  
  Participant.deleteOne(
    {
      _id: req.params.id,
    },
    function (err, participant) {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Participant Deleted!",
      });
    }
  );
};
