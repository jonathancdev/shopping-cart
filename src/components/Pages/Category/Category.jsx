import React, { useEffect } from "react";
import Options from "../../Options/Options";
import ItemPreview from "../../ItemPreview/ItemPreview";

const Category = ({
  match,
  cats,
  items,
  addToCart,
  setSortOption,
  setFilterOption,
}) => {
  useEffect(() => {
    //set filter and sort to original values when unmounted
    return () => {
      setSortOption(null);
      setFilterOption(null);
    };
  }, []);

  const parse = (param) => {
    let parsed = "";
    switch (param) {
      case "brands":
        parsed = "brand";
        break;
      case "color":
        parsed = "type";
        break;
      case "black-and-white":
        parsed = "black and white";
        break;
      case "color-negative":
        parsed = "color negative";
        break;
      case "color-all":
        parsed = ["color negative", "slide"];
        break;
      default:
        parsed = param;
    }
    return parsed;
  };

  const category = parse(match.params.category);
  const subcategory = parse(match.params.subcategory);

  const filterItems = () => {
    const itemCat = category;
    const itemSub = subcategory;
    if (typeof itemSub !== "object") {
      const filtered = items.filter(
        (item) => item[itemCat].toLowerCase() === itemSub
      );
      return filtered;
    } else {
      const filtered = items.filter(
        (item) =>
          item[itemCat].toLowerCase() === itemSub[0] ||
          item[itemCat].toLowerCase() === itemSub[1]
      );
      return filtered;
    }
  };

  const catItems = filterItems();

  return (
    <div className="page">
      <div className="category">
        <Options
          cats={cats}
          setSortOption={setSortOption}
          setFilterOption={setFilterOption}
        ></Options>
        <div className="shop-path">
          shop / {category != "type" ? category : "color"} /{" "}
          {typeof subcategory === "string" ? subcategory : "color & slide"}
        </div>
        {catItems.length > 0 ? (
          <div className="shop-grid">
            {catItems.map((item) => (
              <ItemPreview
                item={item}
                addToCart={addToCart}
                key={item.uniqueId}
              />
            ))}
          </div>
        ) : (
          <div className="fallback category">
            <p className="fallback__text">no items match</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
