import USDFlag from "/src/assets/USDFlag.png";
import instagram from "/src/assets/Insta.png";
import linkdin from "/src/assets/mdi_linkedin.png";
import ArrowDown from "/src/assets/arrow-right.png";
import { useState } from "react";

const AppFooter = () => {
  const [footerDropDown, setFooterDropDown] = useState(false);
  const [dropdownValue, setDropDownValue] = useState("");

  const dropDownHandler = (value) => {
    if (dropdownValue !== value) {
      setDropDownValue(value);
      setFooterDropDown(true);
    } else {
      setFooterDropDown(false);
      setDropDownValue("");
    }
  };

  return (
    <footer className="app-footer">
      <div className="upper-footer">
        <div className="left-side">
          <span className="upper-left-heading white">Be the first to know</span>
          <span className="upper-left-para x-sm-hide-element">
            Sign up for updates from mettā muse.
          </span>
          <span className="upper-left-para outer-hide">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </span>
          <div className="input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="right-side x-sm-hide-element">
          <span className="upper-right-heading white">CONTACT US</span>
          <span className="upper-right-number">+44 221 133 5360</span>
          <span className="upper-right-email">customercare@mettamuse.com</span>
          <span className="upper-right-heading white">Currency</span>
          <div className="upper-right-number img-flag">
            <img src={USDFlag} alt="US Flag" className="flag" />
            <span className="dot"></span>
            <span className="USD">USD</span>
          </div>
          <span className="upper-right-x-small-text">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </span>
        </div>
        <div className="outer-hide right-side right-side-sm">
          <span className="upper-right-heading white">CALL US</span>
          <span className="upper-right-number">
            +44 221 133 5360 <span className="dot"></span>{" "}
            customercare@mettamuse.com
          </span>
        </div>
        <div className="outer-hide right-side right-side-sm">
          <span className="upper-right-heading white">Currency</span>
          <div className="upper-right-number img-flag">
            <img src={USDFlag} alt="US Flag" className="flag" />
            <span className="dot"></span>
            <span className="USD">USD</span>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="lower-left-side x-sm-hide-element">
          <div className="left--left-side">
            <span className="lowercase white">mettā muse</span>
            <div className="options-lower">
              <span className="options">About Us</span>
              <span className="options">Stories</span>
              <span className="options">Artisans</span>
              <span className="options">Boutiques</span>
              <span className="options">Contact Us</span>
              <span className="options">EU Compliances Docs</span>
            </div>
          </div>
          <div className="left--right-side">
            <span className="white">Quick Links</span>
            <div className="options-lower">
              <span className="options">Orders & Shipping</span>
              <span className="options">Join/Login as a Seller</span>
              <span className="options">Payment & Pricing</span>
              <span className="options">Return & Refunds</span>
              <span className="options">FAQs</span>
              <span className="options">Privacy Policy</span>
              <span className="options">Terms & Conditions</span>
            </div>
          </div>
        </div>
        <div className="lower-right-side x-sm-hide-element">
          <div className="follow">
            <span className="white">Follow Us</span>
            <div className="follow-img">
              <img src={instagram} alt="Instagram" />
              <img src={linkdin} alt="Linkdin" />
            </div>
          </div>
          <div className="payment">
            <div>
              <span className="lowercase white">mettā muse</span>
              <span className="white"> Accepts</span>
            </div>
            <div className="payment-img">
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/google_pay.svg?v=1645265500"
                  alt="G Pay"
                />
              </div>
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/master.svg?v=1645265500"
                  alt="mastercard"
                />
              </div>
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/paypal.svg?v=1645265500"
                  alt="paypal"
                />
              </div>
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/amex.svg?v=1645263493"
                  alt="amax"
                />
              </div>
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/apple_pay.svg?v=1645265500"
                  alt="apple pay"
                />
              </div>
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/shop_pay.svg?v=1645265500"
                  alt="shop pay"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lower-first outer-hide">
          <div className="lower-dropdown-outer">
            <div
              className="lower-dropdown"
              onClick={() => dropDownHandler("metta muse")}
            >
              <span className="lowercase white">mettā muse</span>
              <img
                src={ArrowDown}
                alt="Dropdown"
                className={
                  dropdownValue === "metta muse" ? "rotate-up" : "rotate-down"
                }
              />
            </div>
            {dropdownValue === "metta muse" && footerDropDown && (
              <div className="options-lower">
                <span className="options">About Us</span>
                <span className="options">Stories</span>
                <span className="options">Artisans</span>
                <span className="options">Boutiques</span>
                <span className="options">Contact Us</span>
                <span className="options">EU Compliances Docs</span>
              </div>
            )}
          </div>
        </div>
        <div className="lower-first outer-hide">
          <div className="lower-dropdown-outer">
            <div
              className="lower-dropdown"
              onClick={() => dropDownHandler("Quick Links")}
            >
              <span className="white">Quick Links</span>
              <img
                src={ArrowDown}
                alt="Dropdown"
                className={
                  dropdownValue === "Quick Links" ? "rotate-up" : "rotate-down"
                }
              />
            </div>
            {dropdownValue === "Quick Links" && footerDropDown && (
              <div className="options-lower">
                <span className="options">Orders & Shipping</span>
                <span className="options">Join/Login as a Seller</span>
                <span className="options">Payment & Pricing</span>
                <span className="options">Return & Refunds</span>
                <span className="options">FAQs</span>
                <span className="options">Privacy Policy</span>
                <span className="options">Terms & Conditions</span>
              </div>
            )}
          </div>
        </div>
        <div className="lower-first outer-hide">
          <div className="lower-dropdown-outer">
            <div
              className="lower-dropdown"
              onClick={() => dropDownHandler("Follow Us")}
            >
              <span className="white">Follow Us</span>
              <img
                src={ArrowDown}
                alt="Dropdown"
                className={
                  dropdownValue === "Follow Us" ? "rotate-up" : "rotate-down"
                }
              />
            </div>
            {dropdownValue === "Follow Us" && footerDropDown && (
              <div className="follow-img for-sm-follow">
                <img src={instagram} alt="Instagram" />
                <img src={linkdin} alt="Linkdin" />
              </div>
            )}
          </div>
        </div>
        <div className="lower-first outer-hide bordernone">
          <div className="payment">
            <div>
              <span className="lowercase white">mettā muse</span>
              <span className="white"> Accepts</span>
            </div>
            <div className="payment-img">
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/google_pay.svg?v=1645265500"
                  alt="G Pay"
                />
              </div>
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/master.svg?v=1645265500"
                  alt="mastercard"
                />
              </div>
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/paypal.svg?v=1645265500"
                  alt="paypal"
                />
              </div>
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/amex.svg?v=1645263493"
                  alt="amax"
                />
              </div>
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/apple_pay.svg?v=1645265500"
                  alt="apple pay"
                />
              </div>
              <div className="payment-img--img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0852/6398/files/shop_pay.svg?v=1645265500"
                  alt="shop pay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span className="copyright-text">
          Copyright © 2023 mettamuse. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default AppFooter;
