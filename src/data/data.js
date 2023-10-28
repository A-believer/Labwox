/* eslint-disable no-undef */
import p1 from "../assets/serv2.png"
import p2 from "../assets/serv3.png"
import p3 from "../assets/serv4.png"
import p4 from "../assets/serv5.png"


import cv2 from "../assets/cv2.png"
import cv4 from "../assets/cv4.png"
import cv6 from "../assets/cv6.png"

import message from "../assets/message.png"
import location from "../assets/location.png"
import phone from "../assets/phone.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
    },
  {
    id: "testlisting",
    title: "Tests Listing",
  },
   {
    id: "chemxpert",
    title: "ChemXPERT",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "resources",
    title: "Resources",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const products = [
  
  {id: 1,
  header: "Pollutant Analysis",
  bgColor: "orange",
  btnText: "Order Tests",
  route: "testlisting",
  imgSrc: p1,
  btnBgColor: "white",
  btnTextColor: "blackii",
  textColor: "white",
    subtext: "white",
    description: "Analyse a variety of chemical pollutants in environmental media and other matrices.",
  services: "At Labwox, we understand the critical importance of monitoring and managing environmental pollutants to ensure the safety of our planet and the well-being of its inhabitants. Our laboratory business specializes in providing comprehensive testing services for a wide range of environmental pollutants"
  },

  {id: 2,
  header: "Nutritional Analysis",
  bgColor: "blackii",
  btnText: "Order Tests",
  route: "testlisting",
  imgSrc: p2,
  btnBgColor: "white",
  btnTextColor: "blackii",
  textColor: "white",
    subtext: "white",
    description: "Foods require rigorous testing to determine their nutritional content.",
  services: "At Labwox, we specialize in providing comprehensive testing services to uncover the nutritional composition of a wide range of food and beverage products. Our mission is to empower individuals, food manufacturers, health professionals, and researchers with accurate and detailed nutritional information"
  },

  {id: 3,
  header: "Phytochemical Analysis",
  bgColor: "yellowiv",
  btnText: "Order Tests",
  route: "testlisting",
  imgSrc: p3,
  btnBgColor: "blackii",
  btnTextColor: "white",
  textColor: "blackii",
    subtext: "blackii",
    description: "Obtain qualitative and quantitative information about bioactive plant compounds.",
  services: "At Labwox, we specialize in providing comprehensive testing services for phytochemicals, unlocking the secrets of the plant kingdom to advance your research and development endeavors. Labwox offers a wide range of tests to identify, quantify, and characterize phytochemicals found in plants. Whether you're studying flavonoids, alkaloids, polyphenols, or any other phytochemical class, our advanced laboratory facilities are equipped to meet your specific research needs."
  },

   {id: 4,
  header: "ChemXpert Training",
  bgColor: "greenii",
  btnText: "Learn More",
  route: "chemxpert",
  imgSrc: p4,
  btnBgColor: "white",
  btnTextColor: "blackii",
  textColor: "white",
    subtext: "white",
    description: "The primary goal of ChemXPERT is to empower academics with the practical skills and in-depth knowledge required to excel intheir specialized areas of analytical chemistry."
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



