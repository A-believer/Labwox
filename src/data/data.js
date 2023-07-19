// import p1 from "../assets/serv1.png"
import p2 from "../assets/serv2.png"
import p3 from "../assets/serv3.png"
import p4 from "../assets/serv4.png"

// import cv1 from "../assets/cv1.png"
import cv2 from "../assets/cv2.png"
// import cv3 from "../assets/cv3.png"
import cv4 from "../assets/cv4.png"
// import cv5 from "../assets/cv5.png"
import cv6 from "../assets/cv6.png"

import message from "../assets/message.png"
import location from "../assets/location.png"
import phone from "../assets/phone.png"

export const navLinks = [
  {
    id: "/about",
    title: "About",
    },
  {
    id: "/testlisting",
    title: "Tests Listing",
  },
  {
    id: "/services",
    title: "Services",
  },
  {
    id: "/resources",
    title: "Resources",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const products = [
  {
  id: 1,
  header: "Pollutant Analysis",
  bgColor: "orange",
  imgSrc: p2,
  btnBgColor: "white",
  btnTextColor: "blackii",
  textColor: "white",
    subtext: "white",
  description: "Analyse a variety of chemical pollutants in environmental media and other matrices."
  },
  {
  id: 2,
  header: "Nutritional Analysis",
  bgColor: "blackii",
  imgSrc: p3,
  btnBgColor: "white",
  btnTextColor: "blackii",
  textColor: "white",
    subtext: "white",
  description: "Foods require rigorous testing to determine their nutritional content."
  },
  {
  id: 3,
  header: "Phytochemical Analysis",
  bgColor: "white",
  imgSrc: p4,
  btnBgColor: "blackii",
  btnTextColor: "white",
  textColor: "blackii",
    subtext: "blackii",
  description: "Obtain qualitative and quantitative information about bioactive plant compounds."
  },
]

export const blogFeed = [
  {
    id: 1,
    title: "Photochemical Analysis",
    subtext: "How to Carry out Bleeding From Oragnoplasmic Substances",
  },
  {
    id: 2,
    title: "Photochemical Analysis",
    subtext: "How to Carry out Bleeding From Oragnoplasmic Substances",
  },
  {
    id: 3,
    title: "Photochemical Analysis",
    subtext: "How to Carry out Bleeding From Oragnoplasmic Substances",
  },
  
]

export const faqsList = [
  {
    id: 1, 
    question: "Is Labwox a laboratory?",
    answer: " No Labwox is not a laboratory but it partners with several laboratories and aggregates their services on its online platform."
  },
  {
    id: 2, 
    question: " How long does it take to obtain test results?",
    answer: "This depends on factors specific to each order but typical turnaround times fall between 2 - 4 weeks."
  }
]


export const corevaluesapi = [
   {
    id: 2,
    img: cv2,
    name: "Innovation",
    message: "We embrace new technologies and approaches to analytical chemistry, and are committed to continuously improving our practices and services."
  },
   
    {
    id: 4,
    img: cv4,
    name: "Excellence",
    message: "We are dedicated to continuous learning and improvement, and we hold ourselves to the highest standards of quality and professionalism."
  },
   {
    id: 6,
    img: cv6,
    name: "Timeliness",
    message: "We understand that time is of the essence when it comes to research, and we strive to provide prompt responses and short turnaround times for our analyses."
  },
  
]


export const contactapi = [
  {
    id: 1,
    imgsrc: message,
    text: "Chat With Us",
    subtext: "Our friendly team is here to help",
    subtext2: null,
    contactinfo: "hi@labwox.com",
    w: 6,
    h: 6
  },
  {
    id: 2,
    imgsrc: location,
    text: "Visit Us",
    subtext: "Come say hello to us at our office",
    subtext2: null,
    contactinfo: "2B Awori Close, Akora Villas off Adeniyi Jones, Ikeja, Lagos",
    w: 6,
    h: 7
  },
  {
    id: 3,
    imgsrc: phone,
    text: "Call Us",
    subtext: "Mon-Friday 8am-8p.m",
    subtext2: "Saturday - 9am to 2pm",
    contactinfo: "(+234)8090870364",
    w: 5,
    h: 6
  },
]

export const category = ["Nutritional Analysis", "Photochemical Analysis", "Pollutants Analysis"]

export const productsapi = [
  {
    id: "VIT1Q1",
    name: "Analysis of Vitamins in Food and Drinks",
    price: "#25,000.00",
    category: "Nutritional Analysis",
    parameter: "FAME",
    feature: "1,1,1-Trichloroethane Bromochloromethane Bromobenzene+2-Chlorotoluene cis-1-3-Dichloropropene 1,2-Dibromomethane Naphthalene 1,1,2,2,Tetrechloroethane 1,2-dichlorobenzene+n-Butylbenzene 1,4-Dichlorobenzene Bromodichloromethane n-propylbenzene+tert-Butylbenzene 1,3-Dichlorobenzene Hexachlorobutadiene+1,2,4,-Trichlorobenzene m,p-Xylene Bromoform 1,2-Dichloropropane 1,2,3-Trichlorobenzene Dibromomethane 1,2-Dibromo-3-chloropropane Tetrachloroethene + 1,3-Dichloropropane 1,1,2-Trichloroethene+trans-1,3-Dichloropropane o-xylene+Styrene Chloroform 1,1-Dichloroethene Chlorobenzene Ethylbenzene cis-1,2-Dichloroethene+2,2-Dichloropropane Dibromochloromethane+1,3-Dichloropropane Methylene Chloride trans-1,2-Dichlorethene+1,1-Dichloroethane Trichloethene Carbon tetrachloride+1,1-Dichloropropene Benzene+1,2-Dichloroethane 1,2,3-Trichloropropane Isopropylbenzene 1,3,5-Trimethylbenzene+4-chlorotoluene",
    equipment: "Agilent 1100 HPLC"
  },
   {
    id: "VIT1Q2",
    name: "Analysis of Vitamins in Food and Drinks",
    price: "#20,000.00",
    category: "Photochemical Analysis",
    parameter: "FAME",
    feature: "1,1,1-Trichloroethane Bromochloromethane Bromobenzene+2-Chlorotoluene cis-1-3-Dichloropropene 1,2-Dibromomethane Naphthalene 1,1,2,2,Tetrechloroethane 1,2-dichlorobenzene+n-Butylbenzene 1,4-Dichlorobenzene Bromodichloromethane n-propylbenzene+tert-Butylbenzene 1,3-Dichlorobenzene Hexachlorobutadiene+1,2,4,-Trichlorobenzene m,p-Xylene Bromoform 1,2-Dichloropropane 1,2,3-Trichlorobenzene Dibromomethane 1,2-Dibromo-3-chloropropane Tetrachloroethene + 1,3-Dichloropropane 1,1,2-Trichloroethene+trans-1,3-Dichloropropane o-xylene+Styrene Chloroform 1,1-Dichloroethene Chlorobenzene Ethylbenzene cis-1,2-Dichloroethene+2,2-Dichloropropane Dibromochloromethane+1,3-Dichloropropane Methylene Chloride trans-1,2-Dichlorethene+1,1-Dichloroethane Trichloethene Carbon tetrachloride+1,1-Dichloropropene Benzene+1,2-Dichloroethane 1,2,3-Trichloropropane Isopropylbenzene 1,3,5-Trimethylbenzene+4-chlorotoluene",
    equipment: "Agilent 2200 HPLC"
  },
    {
    id: "VIT1Q3",
    name: "Analysis of Vitamins in Food and Drinks",
    price: "#30,000.00",
    category: "Pollutants Analysis",
    parameter: "FAME",
    feature: "1,1,1-Trichloroethane Bromochloromethane Bromobenzene+2-Chlorotoluene cis-1-3-Dichloropropene 1,2-Dibromomethane Naphthalene 1,1,2,2,Tetrechloroethane 1,2-dichlorobenzene+n-Butylbenzene 1,4-Dichlorobenzene Bromodichloromethane n-propylbenzene+tert-Butylbenzene 1,3-Dichlorobenzene Hexachlorobutadiene+1,2,4,-Trichlorobenzene m,p-Xylene Bromoform 1,2-Dichloropropane 1,2,3-Trichlorobenzene Dibromomethane 1,2-Dibromo-3-chloropropane Tetrachloroethene + 1,3-Dichloropropane 1,1,2-Trichloroethene+trans-1,3-Dichloropropane o-xylene+Styrene Chloroform 1,1-Dichloroethene Chlorobenzene Ethylbenzene cis-1,2-Dichloroethene+2,2-Dichloropropane Dibromochloromethane+1,3-Dichloropropane Methylene Chloride trans-1,2-Dichlorethene+1,1-Dichloroethane Trichloethene Carbon tetrachloride+1,1-Dichloropropene Benzene+1,2-Dichloroethane 1,2,3-Trichloropropane Isopropylbenzene 1,3,5-Trimethylbenzene+4-chlorotoluene",
    equipment: "Agilent 2200 HPLC"
  }
]