import React, { useState, useEffect } from "react";

const ChildList = ({ selectedParent }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredChildren, setFilteredChildren] = useState([]);

  useEffect(() => {
    if (selectedParent) {
      // Фильтрация дочерних элементов по поисковому запросу
      const filteredChildren = selectedParent.children.filter((child) =>
        child.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Сортировка дочерних элементов по имени
      const sortedChildren = filteredChildren.sort((a, b) => {
        if (sortOrder === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });

      setFilteredChildren(sortedChildren);
    }
  }, [selectedParent, searchQuery, sortOrder]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <h2>Список дочерних элементов</h2>

      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Поиск по имени"
      />

      <select value={sortOrder} onChange={handleSortOrderChange}>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>

      {filteredChildren.map((child) => (
        <div key={child.key}>{child.name}</div>
      ))}
    </div>
  );
};

export default ChildList;
