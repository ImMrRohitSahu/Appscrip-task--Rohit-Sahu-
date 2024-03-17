import { useEffect, useRef, useState } from "react";
import Products from "../Products/Products";
import ArrowLeft from "/src/assets/arrow-left.png";
import CheckedIcon from "/src/assets/Vector.png";

const ProductList = () => {
  const [filterTab, setFilterTab] = useState(false);
  const [recommendedTab, setRecommendedTab] = useState(false);
  const [recommended, setRecommended] = useState("RECOMMENDED");
  const recommendedRef = useRef(null);
  const filterRef = useRef(null);

  const filterTabHandler = () => {
    setFilterTab(!filterTab);
    setRecommendedTab(false);
  };

  const recommendedHandler=()=>{
    setRecommendedTab(!recommendedTab);
    if(window.innerWidth<768){
      setFilterTab(false)
    }
  }

  // Effect to close the filter tab when adjusting screen size or scrolling
  useEffect(() => {
    const handleResizeScroll = () => {
      if (window.innerWidth < 768) {
        setFilterTab(false);
      }
    };
    window.addEventListener("resize", handleResizeScroll);
    return () => {
      window.removeEventListener("resize", handleResizeScroll);
    };
  }, []);

  // Effect to close the recommended dropdown when adjusting screen size or scrolling
  useEffect(() => {
    const handleResizeScroll = () => {
      setRecommendedTab(false);
    };
    window.addEventListener("resize", handleResizeScroll);
    window.addEventListener("scroll", handleResizeScroll);
    return () => {
      window.removeEventListener("resize", handleResizeScroll);
      window.removeEventListener("scroll", handleResizeScroll);
    };
  }, []);

  return (
    <main>
      <div className="hideshow-container">
        <div className="total-item-hide-show sm-hide-element">
          <span>3425 ITEMS</span>
          <div className="hide-show">
            <img
              src={ArrowLeft}
              alt="HideFilter"
              className={filterTab ? "left-arrow-hide" : "right-arrow-hide"}
            />
            {filterTab ? (
              <span onClick={() => setFilterTab(false)}>HIDE FILTER</span>
            ) : (
              <span onClick={() => setFilterTab(true)}>SHOW FILTER</span>
            )}
          </div>
        </div>
        <div className="filter-section hide-element" onClick={filterTabHandler}>
          <span>FILTER</span>
        </div>
        <div
          className="recommended-section"
          ref={recommendedRef}
          onClick={recommendedHandler}
        >
          <span>{recommended}</span>
          <img
            src={ArrowLeft}
            alt="recommended-dropdown"
            className={recommendedTab ? "recommended-dropdown-img rotate-up" : "recommended-dropdown-img rotate-down"}
          />
        </div>
        {recommendedTab && (
          <div className="recommended-tab">
            <span
              className={recommended === "RECOMMENDED" ? "text-bold" : ""}
              onClick={() => setRecommended("RECOMMENDED")}
            >
              {recommended === "RECOMMENDED" && (
                <img src={CheckedIcon} alt="CheckedIcon" className="checked" />
              )}
              RECOMMENDED
            </span>
            <span
              className={recommended === "NEWEST FIRST" ? "text-bold" : ""}
              onClick={() => setRecommended("NEWEST FIRST")}
            >
              {recommended === "NEWEST FIRST" && (
                <img src={CheckedIcon} alt="CheckedIcon" className="checked" />
              )}
              NEWEST FIRST
            </span>
            <span
              className={recommended === "POPULAR" ? "text-bold" : ""}
              onClick={() => setRecommended("POPULAR")}
            >
              {recommended === "POPULAR" && (
                <img src={CheckedIcon} alt="CheckedIcon" className="checked" />
              )}
              POPULAR
            </span>
            <span
              className={recommended === "HIGH TO LOW" ? "text-bold" : ""}
              onClick={() => setRecommended("HIGH TO LOW")}
            >
              {recommended === "HIGH TO LOW" && (
                <img src={CheckedIcon} alt="CheckedIcon" className="checked" />
              )}
              PRICE: HIGH TO LOW
            </span>
            <span
              className={recommended === "LOW TO HIGH" ? "text-bold" : ""}
              onClick={() => setRecommended("LOW TO HIGH")}
            >
              {recommended === "LOW TO HIGH" && (
                <img src={CheckedIcon} alt="CheckedIcon" className="checked" />
              )}
              PRICE: LOW TO HIGH
            </span>
          </div>
        )}
      </div>
      <Products
        filterTab={filterTab}
        filterRef={filterRef}
      />
    </main>
  );
};

export default ProductList;
