import React from "react";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "../../app/data";
import styles from "./TreeViewComponent.module.scss";

const nodesData = {};

const renderTree = (nodes) => {
  nodesData[nodes.key] = nodes;
  if (nodes?.children?.length > 0)
    return (
      <TreeItem
        key={nodes.key}
        nodeId={nodes.key}
        label={nodes.name}
        style={{ whiteSpace: "nowrap" }}
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
};

const TreeViewComponent = ({ setSelectedParent }) => {
  return (
    <>
      <div className={styles.container}>
        <h2>Родительские элементы</h2>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          onNodeFocus={(event, nodeId) => setSelectedParent(nodesData[nodeId])}
        >
          {renderTree(data[0])}
        </TreeView>
      </div>
    </>
  );
};

export default TreeViewComponent;
