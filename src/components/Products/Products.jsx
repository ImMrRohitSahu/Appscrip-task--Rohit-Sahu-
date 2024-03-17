import FilterSection from "../FilterSection/FilterSection";
import ProductListSection from "../ProductListSection/ProductListSection";

// eslint-disable-next-line react/prop-types
const Products = ({ filterTab, filterRef }) => {
  return (
    <div className="main-container">
      <FilterSection
        filterTab={filterTab}
        filterRef={filterRef}
      />
      <ProductListSection />
    </div>
  );
};

export default Products;
