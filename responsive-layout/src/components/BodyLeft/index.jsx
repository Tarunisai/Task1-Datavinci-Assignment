import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./index.css";

function BodyLeft() {
  return (
    <div className="body-left-con">
      <div className="arrows-img-con">
        <button className="arrow left"><IoIosArrowBack/></button>
        <img
          src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756568247/desktop__main_img_qz5ege.png" 
          alt="Manuka Honey"
          className="product-img"
        />
        <img
          src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756697012/mobile_main_img_taxkfy.png" 
          alt="Manuka Honey"
          className="mobile-product-img"
        />
        <button className="arrow right"><IoIosArrowForward/></button>
      </div>
      <div className="imgs-con">
        <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756633940/left_img1_w711wb.png" alt="img1"/>
        <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756633939/left_img2_odzkyk.png" alt="img2"/>
        <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756633940/left_img3_z4xcno.png" alt="img3"/>
        <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756633940/left_img4_ckmawu.png" alt="img4"/>
        <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756633940/left_img5_uuhrsx.png" alt="img5"/>
        <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756633940/left_img6_yixbwk.png" alt="img6"/>
        <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756633940/left_img7_gkf6ch.png" alt="img7"/>
      </div>
    </div>
  );
}

export default BodyLeft;
