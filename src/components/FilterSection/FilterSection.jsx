import { useState } from "react";
import checkbox from "/src/assets/Checkbox.png";
import ArrowLeft from "/src/assets/arrow-left.png";

// eslint-disable-next-line react/prop-types
const FilterSection = ({ filterTab, filterRef }) => {
  const [dropdownvalue, setDropdownvalue] = useState("");

  const dropDownHandler = (value) => {
    if (dropdownvalue !== value) {
      setDropdownvalue(value);
    } else {
      setDropdownvalue("");
    }
  };
  return (
    <div
      className={filterTab ? "filter-tab" : "filter-tab hide-element"}
      ref={filterRef}
    >
      <div className="filter-inner-div customizble">
        <img src={checkbox} alt="checkbox" />
        <span>CUSTOMIZBLE</span>
      </div>
      <div
        className="filter-option-common-container ideal-for-container"
        onClick={() => dropDownHandler("ideal-for")}
      >
        <div className="filter-option-common ideal-for">
          <span>IDEAL FOR</span>
          <img
            src={ArrowLeft}
            alt="DropDownIcon"
            className={
              dropdownvalue === "ideal-for"
                ? "filter-options-dropdown rotate-up"
                : "filter-options-dropdown rotate-down"
            }
          />
        </div>
        <span>All</span>
        {dropdownvalue === "ideal-for" && (
          <div className="filter-expand-dropdown">
            <spna className="unselect">Unselect all</spna>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Men</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Women</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Baby & Kids</span>
            </div>
          </div>
        )}
      </div>
      <div
        className="filter-option-common-container occasion-container"
        onClick={() => dropDownHandler("occasion")}
      >
        <div className="filter-option-common occasion">
          <span>occasion</span>
          <img
            src={ArrowLeft}
            alt="DropDownIcon"
            className={
              dropdownvalue === "occasion"
                ? "filter-options-dropdown rotate-up"
                : "filter-options-dropdown rotate-down"
            }
          />
        </div>
        <span>All</span>
        {dropdownvalue === "occasion" && (
          <div className="filter-expand-dropdown">
            <spna className="unselect">Unselect all</spna>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Men</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Women</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Baby & Kids</span>
            </div>
          </div>
        )}
      </div>
      <div
        className="filter-option-common-container work-container"
        onClick={() => dropDownHandler("work")}
      >
        <div className="filter-option-common work">
          <span>Work</span>
          <img
            src={ArrowLeft}
            alt="DropDownIcon"
            className={
              dropdownvalue === "work"
                ? "filter-options-dropdown rotate-up"
                : "filter-options-dropdown rotate-down"
            }
          />
        </div>
        <span>All</span>
        {dropdownvalue === "work" && (
          <div className="filter-expand-dropdown">
            <spna className="unselect">Unselect all</spna>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Men</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Women</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Baby & Kids</span>
            </div>
          </div>
        )}
      </div>
      <div
        className="filter-option-common-container fabric-container"
        onClick={() => dropDownHandler("fabric")}
      >
        <div className="filter-option-common fabric">
          <span>Fabric</span>
          <img
            src={ArrowLeft}
            alt="DropDownIcon"
            className={
              dropdownvalue === "fabric"
                ? "filter-options-dropdown rotate-up"
                : "filter-options-dropdown rotate-down"
            }
          />
        </div>
        <span>All</span>
        {dropdownvalue === "fabric" && (
          <div className="filter-expand-dropdown">
            <spna className="unselect">Unselect all</spna>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Men</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Women</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Baby & Kids</span>
            </div>
          </div>
        )}
      </div>
      <div
        className="filter-option-common-container segment-container"
        onClick={() => dropDownHandler("segment")}
      >
        <div className="filter-option-common segment">
          <span>Segment</span>
          <img
            src={ArrowLeft}
            alt="DropDownIcon"
            className={
              dropdownvalue === "segment"
                ? "filter-options-dropdown rotate-up"
                : "filter-options-dropdown rotate-down"
            }
          />
        </div>
        <span>All</span>
        {dropdownvalue === "segment" && (
          <div className="filter-expand-dropdown">
            <spna className="unselect">Unselect all</spna>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Men</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Women</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Baby & Kids</span>
            </div>
          </div>
        )}
      </div>
      <div
        className="filter-option-common-container suitable-for-container"
        onClick={() => dropDownHandler("suitable-for")}
      >
        <div className="filter-option-common suitable-for">
          <span>suitable for</span>
          <img
            src={ArrowLeft}
            alt="DropDownIcon"
            className={
              dropdownvalue === "suitable-for"
                ? "filter-options-dropdown rotate-up"
                : "filter-options-dropdown rotate-down"
            }
          />
        </div>
        <span>All</span>
        {dropdownvalue === "suitable-for" && (
          <div className="filter-expand-dropdown">
            <spna className="unselect">Unselect all</spna>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Men</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Women</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Baby & Kids</span>
            </div>
          </div>
        )}
      </div>
      <div
        className="filter-option-common-container raw-materials-container"
        onClick={() => dropDownHandler("raw-materials")}
      >
        <div className="filter-option-common raw-materials">
          <span>raw materials</span>
          <img
            src={ArrowLeft}
            alt="DropDownIcon"
            className={
              dropdownvalue === "raw-materials"
                ? "filter-options-dropdown rotate-up"
                : "filter-options-dropdown rotate-down"
            }
          />
        </div>
        <span>All</span>
        {dropdownvalue === "raw-materials" && (
          <div className="filter-expand-dropdown">
            <spna className="unselect">Unselect all</spna>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Men</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Women</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Baby & Kids</span>
            </div>
          </div>
        )}
      </div>
      <div
        className="filter-option-common-container pattern-container"
        onClick={() => dropDownHandler("pattern")}
      >
        <div className="filter-option-common pattern">
          <span>Pattern</span>
          <img
            src={ArrowLeft}
            alt="DropDownIcon"
            className={
              dropdownvalue === "pattern"
                ? "filter-options-dropdown rotate-up"
                : "filter-options-dropdown rotate-down"
            }
          />
        </div>
        <span>All</span>
        {dropdownvalue === "pattern" && (
          <div className="filter-expand-dropdown">
            <spna className="unselect">Unselect all</spna>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Men</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Women</span>
            </div>
            <div className="category-option">
              <img src={checkbox} alt="checkbox" />
              <span className="category-name">Baby & Kids</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
