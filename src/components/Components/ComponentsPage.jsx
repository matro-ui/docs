import React from 'react';
import SearchInput from './SearchInput';
import ComponentsItem from './ComponentsItem';
import s from './index.module.css';
import data from "../../../assets/data/components";


const ComponentsPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(data);
  const [hasItems, setHasItems] = React.useState(true);

  React.useEffect(() => {
    setHasItems(dataHasNonEmptyArray(filteredData));
  }, [filteredData]);

  const handleChange = (event) => {
    const query = event?.target?.value?.toLowerCase() || "";
    setSearchQuery(query);
    filterData(query);
  };

  const filterData = (query) => {
    const filteredData = Object.keys(data).reduce((acc, category) => {
      acc[category] = data[category].filter(item =>
        item.title.toLowerCase().includes(query)
      );
      return acc;
    }, {});

    setFilteredData(filteredData);
  };

  const dataHasNonEmptyArray = (obj) => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (Array.isArray(obj[key]) && obj[key].length > 0)
          return true;
      }
    }
    return false;
  }

  return (
    <div>
      <SearchInput handleChange={handleChange} searchQuery={searchQuery} />

      {Object.keys(filteredData).map(category => {
        const items = filteredData[category];
        if (items.length) {
          return (
            <div className={s.category_group} key={category}>
              <h2 className={s.category_title}>{category.replace("-", " ")}</h2>
              <div className={s.category_items}>
                {items.map(item => <ComponentsItem {...item} key={item.id} />)}
              </div>
            </div>
          );
        }
        return null;
      })}
      {hasItems ? "" : <span className={s.no_items}>No items were found for the specified query: <i>{searchQuery}</i></span>}
    </div>
  );
};

export default ComponentsPage;
