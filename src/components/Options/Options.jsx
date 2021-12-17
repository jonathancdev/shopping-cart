import React, { useRef } from "react";

const Options = ({ children, cats, setFilterOption, setSortOption }) => {
  const filterUl = useRef();
  const refs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  const catKeys = Object.keys(cats);

  //filter select
  const handleFilterChange = (e) => {
    //set filter arguments in routes
    let cat = e.target.parentElement.getAttribute("data-cat");
    if (cat === "brands") {
      cat = "brand";
    } else if (cat === "color") {
      cat = "type";
    }
    const subcat = e.target.value.toLowerCase();
    setFilterOption([cat, subcat]);

    //set active and reset unselected
    refs.current.forEach((select) =>
      select.current.className.includes("active")
        ? select.current.classList.remove("active")
        : null
    );
    e.target.classList.add("active");
    refs.current.forEach((select) =>
      !select.current.className.includes("active")
        ? (select.current.selectedIndex = 0)
        : null
    );
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  //   //sort buttons
  //   const handleClick = (e) => {
  //     const childrenArray = Array.from(e.target.parentElement.children);
  //     childrenArray.forEach((li) =>
  //       li.className.includes("active") ? li.classList.remove("active") : null
  //     );
  //     e.target.classList.add("active");
  //     const sortBy = e.target.getAttribute("data-sort");
  //     setSortOption(sortBy);
  //   };

  return (
    <div className="options">
      <div className="filter">
        <ul ref={filterUl} className="filter__list">
          {catKeys.map((item, i) => (
            <li key={i} className="filter__item">
              <label className="filter__label" for="filter-select">
                {item}
              </label>
              {/* need div to use for data-cat */}
              <div data-cat={item} className="filter-data">
                <select
                  ref={refs.current[i]}
                  onChange={handleFilterChange}
                  className="filter__select"
                >
                  {/* blank first option */}
                  <option className="filter__option" value="">
                    {" "}
                  </option>
                  {cats[item].map((x) => (
                    <option className="filter__option" value={x}>
                      {x.toLowerCase()}
                    </option>
                  ))}
                </select>
                <span class="focus"></span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sort">
        <ul className="sort__list">
          <label className="sort__label" for="sort-select">
            sort by:
          </label>
          {/* need div to use for data-cat */}

          <div className="sort-data">
            <select onChange={handleSortChange} className="sort__select">
              <option className="sort__option" value="nameasc" key="nameasc">
                name a to z
              </option>
              <option className="sort__option" value="namedesc" key="namedesc">
                name z to a
              </option>
              <option className="sort__option" value="priceasc" key="priceasc">
                price low to high
              </option>
              <option
                className="sort__option"
                value="pricedesc"
                key="pricedesc"
              >
                price high to low
              </option>
            </select>
            <span class="focus"></span>
          </div>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Options;
