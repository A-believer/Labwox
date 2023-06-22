import footerLogo from "../assets/Logoft.png"
import Header from "../utils/Header"

const Footer = () => {
  return (
    <footer className="font-aeon lg:px-[80px] px-[24px] lg:pt-[160px] pt-[24px] lg:pb-[241px] pb-[145px] bg-black flex flex-col">
      <div>
        <img src={footerLogo} alt="footer-logo w-full h-full" />
      </div>
      <div>
        <div>
          <div><Header text1={`Powering`} text2={`Research`} text3={`Capabilities in Africa`} f1={`36px`} f2={`24px`} tColor={`white`}/></div>
          <div className="text-white lg:text-base text-sm leading-[24px]">
            <p className="font-light">© Labworks Limited, all rights reserved. <br />
              Company number: 08433320 <br />
              Registered office: 2B Awori Close, Akora Villas off <br />
              Adeniyi Jones, Ikeja, Lagos</p>
            <p className="font-thin">
              <span><a href="#privacy">Privacy Policy</a></span>  |  <span><a href="#terms">Terms and Conditions</a></span>
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer