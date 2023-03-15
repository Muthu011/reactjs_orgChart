import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";

const Chart = () => {
  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 8px;
    display: inline-block;
    border: 1px solid red;
  `;
  const data = [
    {
      name: "John Doe",
      title: "CEO",
      children: [
        {
          name: "Jane Doe",
          title: "COO",
          children: [
            {
              name: "Bob Smith",
              title: "CFO",
            },
            {
              name: "Alice Johnson",
              title: "CTO",
            },
          ],
        },
        {
          name: "Mark Johnson",
          title: "CIO",
          children: [
            {
              name: "Karen Smith",
              title: "VP of Sales",
            },
            {
              name: "Tom Lee",
              title: "VP of Marketing",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={<StyledNode>{`${data[0].name}`}</StyledNode>}
      >
        <TreeNode label={<StyledNode>Child 1</StyledNode>}>
          <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
        </TreeNode>
        <TreeNode label={<StyledNode>Child 2</StyledNode>}>
          <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
            <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
            <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
          </TreeNode>
        </TreeNode>
        <TreeNode label={<StyledNode>Child 3</StyledNode>}>
          <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
          <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
        </TreeNode>
      </Tree>
    </div>
  );
};

export default Chart;
