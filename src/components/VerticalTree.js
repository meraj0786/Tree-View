import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import TreeNode from "./TreeNode";
import { findAndRemove, insertAsChild, isDescendant } from '../HelperFunction'

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
  const [dragOverId, setDragOverId] = useState(null);
  // eslint-disable

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragOver={({ over }) => {
        setDragOverId(over?.id || null);
      }}
      onDragEnd={({ active, over }) => {
        if (!over) return;
        if (active.id === over.id) return;

        setTree((tree) => {
          // ❌ prevent dropping parent inside its own child
          if (isDescendant(tree, active.id, over.id)) {
            return tree;
          }

          const { nodes, removed } = findAndRemove(tree, active.id);
          if (!removed) return tree;

          return insertAsChild(nodes, over.id, removed);
        });
      }}
    >
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
