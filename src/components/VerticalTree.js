import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import TreeNode from "./TreeNode";

const flattenTreeIds = (nodes) => {
  let ids = [];
  nodes.forEach((n) => {
    ids.push(n.id);
    if (n.children && !n.collapsed) {
      ids.push(...flattenTreeIds(n.children));
    }
  });
  return ids;
};

export default function VerticalTree({ data }) {
  const [tree, setTree] = useState(data);

  return (
    <DndContext collisionDetection={closestCenter}>
      <SortableContext
        items={flattenTreeIds(tree)}
        strategy={verticalListSortingStrategy}
      >
        <div className="p-6 bg-gray-50 min-h-screen">
          {tree.map((node, index) => (
            <TreeNode
              key={node.id}
              node={node}
              level={0}
              isLast={index === tree.length - 1}
              setTree={setTree}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
