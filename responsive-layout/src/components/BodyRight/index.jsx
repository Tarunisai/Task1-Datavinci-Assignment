import { useState,useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { IoMdRefresh } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "./index.css";

function BodyRight() {
    const [showPopup, setShowPopup] = useState(false);

    const popupRef = useRef(null);

  // Close popup if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);
  return (
      <div className="body-right">
        <div className="right-con1">
        <h2>Manuka Honey</h2>
        <h3>
          UMF<sup className="TM">TM</sup> <span className="highlight">24+</span>
          <br />
          MGO <span className="highlight">1122+</span>
        </h3>
        <div className="info-popup-con">
          <button
            className="info-btn"
            onClick={() => setShowPopup(!showPopup)}
          >
            <FiInfo size={18} /> What is UMF and MGO?
          </button>
          {showPopup && (
            <div className="popup-box" ref={popupRef}>
              <div className="box">
                <p className="box-des"><strong>UMF</strong> is the strength and purity rating of Manuka</p>
                <div className="box-scale-con">
                  <p className="b1 scale"> 10+</p>
                  <p className="b2 scale"> 15+</p>
                  <p className="b3 scale"> 20+</p>
                  <p className="b4 scale"> 24+</p>
                  <p className="b5 scale"> 26+</p>
                  <p className="b6 scale"> 28+</p>
                  <p className="b7 scale"> 30+</p>
                </div>
                <p className="box-des">The higher the number, the greater the potency and rarity of Manuka honey.</p>
              </div>
              <div className="box">
                <p className="box-des"><strong>MGO</strong> is the key natural compound that gives Manuka honey its special antibacterial strength.</p>
                <div className="box-scale-con">
                  <p className="b1 scale"> 263+</p>
                  <p className="b2 scale"> 514+</p>
                  <p className="b3 scale"> 829+</p>
                  <p className="b4 scale" > 1122+</p>
                  <p className="b5 scale"> 1282+</p>
                  <p className="b6 scale"> 1450+</p>
                  <p className="b7 scale"> 1620+</p>
                </div>
                <p className="box-des">The higher the number, the higher the antibacterial properties in the honey.</p>
              </div>
              <button className="close-bt" onClick={() => setShowPopup(false)}>Close</button>
            </div>
          )}
        </div>
        <div className="subtitle-reviews-con">
            <p className="subtitle">The Optimiser</p>
              <div className="reviews">
                <div className="hearts">
                    <FaHeart/><FaHeart/><FaHeart/><FaHeart/><FaHeart/>
                </div>
                <span className="count">825 REVIEWS</span>
              </div>
        </div>
        
        <p className="description">
          For those times in life when quality comes first. This pure UMF™ 24+
          Manuka Honey is powerfully active, sourced from wild and rugged
          locations around Aotearoa New Zealand and great for almost all uses.
          It has a full, delicious flavour and your body will love you for it.
        </p>
        </div>
        <div className="b1-imgs-con">
          <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img1_cjhlun.png" alt="b1-img1" className="b1-img" />
          <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img2_bpsikf.png" alt="b1-img2" className="b1-img" />
          <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img3_j9bemz.png" alt="b1-img3" className="b1-img" />
          <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img4_nb007a.png" alt="b1-img4" className="b1-img" />
          <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img5_hwioys.png" alt="b1-img5" className="b1-img" />
          <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img6_p6plp6.png" alt="b1-img6" className="b1-img" />
        </div>
        <div className="varaints-con">
            <p>SIZE (SELECT ONE)</p>
            <p>Variant 125g | 4.4oz</p>
            <div className="variants-img-con">
                <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756635743/variant_img1_enc4gp.png" alt="var-img-1" className="var-img bor-img"/>
                <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756635743/variant_img2_jouvwz.png" alt="var-img-2" className="var-img"/>
                <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756635743/variant_img3_imjzuq.png" alt="var-img-3" className="var-img"/>
                <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756635743/variant_img4_bbx5yj.png" alt="var-img-4" className="var-img"/>
                <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756635744/variant_img5_txfqn7.png" alt="var-img-5" className="var-img"/>
                <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756635744/variant_img6_cminhn.png" alt="var-img-6" className="var-img"/>
                <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756635744/variant_img7_sh7u4e.png" alt="var-img-7" className="var-img"/>
            </div>
        </div>
        <div className="payments-con">
            <p>PAYMENT OPTIONS (SELECT ONE)</p>
            <div className="inner-payments-con">
                <div className="purchase-save-con">
                <div className="purchase-con">
                    <p>One time <br/>purchase</p>
                    <p>$55.88 <br/> USD</p>
                </div>
                <div className="save-con">
                     <p>Subscribe & save <br/>20%</p>
                     <p>$44.70 <br/>USD</p>
                </div>
                </div>
                <button className="sub-bt"><IoMdRefresh size={20}/>What is a Subscription?</button>
            </div>   
        </div>
        <div className="quantity-con">
            <p>SELECT QUANTITY</p>
            <div className="car-quan-con">
                <div className="quan-con">
                <button className="quan-bt">-</button>
                <p>1</p>
                <button className="quan-bt">+</button>
                </div>
                <button className="add-bt">ADD TO CART</button>
            </div>
        </div>
        <div className="beauty-bundle-con">
            <div className="arrow-con">
                <IoIosArrowBack/>
                <h3>Beauty Bundle</h3>
                <IoIosArrowForward/>
            </div>
            <div className="cart-bundle-con">
                <div className="img-con">
                  <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756642597/cart_img1_lvqdvm.png" alt="cart-img1" className="cart-img"/>
                  <p className="img-con-p">UMF 20+</p>
                  <p className="quan-gr">250g <IoMdArrowDropdown/></p>
                </div>
                <p className="plus">+</p>
                <div className="img-con">
                  <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756642598/cart_img2_vffz2l.png" alt="cart-img1"  className="cart-img"/>
                  <p className="img-con-p">UMF 24+</p>
                  <p className="quan-gr">250g <IoMdArrowDropdown/></p>
                </div>
                <p className="plus">+</p>
                <div className="img-con">
                  <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756642598/cart_img3_cs096p.png" alt="cart-img1"  className="cart-img"/>
                  <p className="img-con-p">Wooden Spoon</p>
                </div>
                <div className="price-con">
                    <p>
                       <span className="price1">$478.5 USD</span>
                       <span className="price2">$430.88 USD</span>
                       <span className="price3">Save 10%</span>
                    </p>
                    <button className="add-cart-bt">ADD BUNDLE TO CART</button>
                </div>
            </div>
        </div>
        <div className="footer">
        <div className="footer-img-con">
            <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756647750/footer_clr_img_m7yotz.png" alt="color" className="color-img"/>
            <p>  Colorclub members earn upto
            <span className="number">56</span>
              rewards points when buy this item. Sign up or log in
            </p>
       </div>
        <div className="delivery-con">
            <div className="delivery-con1">
                <p className="footer-titles">DELIVERY</p>
                <p className="footer-titles">FREE DELIVERY ON ORDERS OVER $30</p>
            </div>
            <div className="delivery-con2">
                <p className="footer-titles">ESTIMATED DELIVERY DATE</p>
                <p className="footer-titles">Jun 9 - Jun 13 to</p>
            </div>
        </div>
        <hr/>
        <div className="after-pay-con">
            <p>AFTER PAY</p>
            <p>or 4 interest-free payments of $13.97 with
                <span className="dollar-sign">$</span><span className="bold-title">Afterpay</span>
                <FiInfo size={18} className="info-sym"/>
            </p>
        </div>
        <hr/>
        <div className="umf-con">
            <p>UMF<sup>TM</sup>SCALE</p>
            <div className="scale-con">
                <p className="umf-1">UMF<sup>TM</sup> 10+</p>
                <p className="umf-2">UMF<sup>TM</sup> 15+</p>
                <p className="umf-3">UMF<sup>TM</sup> 20+</p>
                <p className="umf-4">UMF<sup>TM</sup> 24+</p>
                <p className="umf-5">UMF<sup>TM</sup> 26+</p>
                <p className="umf-6">UMF<sup>TM</sup> 28+</p>
                <p className="umf-7">UMF<sup>TM</sup> 30+</p>
            </div>
            <input type="range" min="0" max="100" defaultValue={50}  class="slider" />
            <div class="taste-profile">
                <p>Clean & Intense</p>
                <p>Bold & Intense</p>
            </div>
            <div className="mobile-view">
              <p>CRENDTIALS</p>
              <div className="mobile-b1-imgs-con">
                <div className="mobile-inner-b1-imgs-con">
                 <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img1_cjhlun.png" alt="b1-img1" className="b1-img" />
                 <h5>UMF</h5>
                 <p> The UMF Grading system appraises natural markers found in manuka honey and assures purity and quality .</p>
                </div>
                <div className="mobile-inner-b1-imgs-con">
                  <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img2_bpsikf.png" alt="b1-img2" className="b1-img" />
                  <h5>Non-GMO </h5>
                  <p> Our honey is certified and in compliance with the Non-GMO Project Standard.</p>
                </div>
                <div className="mobile-inner-b1-imgs-con">
                <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img3_j9bemz.png" alt="b1-img3" className="b1-img" />
                <h5>Glyphosate free</h5>
                <p>Every batch of our honey is tested in independent laboratories to ensure it is glyphosate free.</p>
                </div>
                <div className="mobile-inner-b1-imgs-con">
                <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img4_nb007a.png" alt="b1-img4" className="b1-img" />
                <h5>Halal</h5>
                <p>Certified by FIANZ The Federation of Islamic Associations of New Zealand(Inc). </p>
                </div>
                <div className="mobile-inner-b1-imgs-con">
                <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img5_hwioys.png" alt="b1-img5" className="b1-img" />
                <h5> Fernmark</h5>
                <p> We are FernMark accredited and approved by the NZ Government as a trusted exporter</p>
                </div>
                <div className="mobile-inner-b1-imgs-con">
                <img src="https://res.cloudinary.com/ddvwvwais/image/upload/v1756621474/body_img6_p6plp6.png" alt="b1-img6" className="b1-img" />
                <h5>MGO certified </h5>
                <p> Our independent certification shows you the exact MGO levels in our manuka honey</p>
                </div>
              </div>
              <button className="find-bt">FIND OUT MORE</button>
            </div>

        </div>
    </div>
      </div>
  );
}

export default BodyRight;
