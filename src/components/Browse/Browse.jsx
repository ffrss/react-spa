import React, { useState } from "react";
import ChildList from "../ChildList/ChildList";
import styles from "./Browse.module.scss";
import TreeViewComponent from "../TreeViewComponent/TreeViewComponent";

const Browse = () => {
  const [selectedParent, setSelectedParent] = useState(null);
  return (
    <>
      <h1>Страница является приватной</h1>
      <div className={styles.container}>
        <TreeViewComponent setSelectedParent={setSelectedParent} />
        <ChildList selectedParent={selectedParent} />
      </div>
    </>
  );
};

export default Browse;
