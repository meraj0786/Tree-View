import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import EdatingLabel from "./EdatingLabel";
import AddIcon from '@mui/icons-material/Add';
import DeleteNode from "./DeleteNode";
import Notes from "./Notes";

const INDENT = 40;

const levelColors = [
    "bg-blue-400",
    "bg-green-400",
    "bg-lime-400",
    "bg-orange-400",
    "bg-purple-400"
];

const toggleCollapse = (tree, id) =>
    tree.map((node) => {
        if (node.id === id) {
            return { ...node, collapsed: !node.collapsed };
        }
        if (node.children) {
            return { ...node, children: toggleCollapse(node.children, id) };
        }
        return node;
    });

const addChild = (tree, parentId) =>
    tree.map((node) => {
        if (node.id === parentId) {
            return {
                ...node,
                children: [
                    ...(node.children || []),
                    {
                        id: crypto.randomUUID(),
                        label: "New Level",
                        code: String.fromCharCode(node.code.charCodeAt(0) + 1),
                        collapsed: false,
                        children: []
                    }
                ]
            };
        }
        if (node.children) {
            return { ...node, children: addChild(node.children, parentId) };
        }
        return node;
    });

export default function TreeNode({ node, level, isLast, setTree }) {
    const { setNodeRef, attributes, listeners, transform, transition } = useSortable({ id: node.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        marginLeft: level * INDENT
    };

    return (
        <div ref={setNodeRef} style={style} className="relative">

            {/* vertical line */}
            {level > 0 && (
                <div
                    className={`absolute left-[14px] top-0 border-l-2 border-dashed border-gray-300 ${isLast ? "h-1/2" : "h-full"
                        }`}
                />
            )}

            <div className="relative flex items-center mt-4">

                {/* horizontal connector */}
                {level > 0 && (
                    <div className="absolute left-[14px] top-1/2 w-6 border-t-2 border-dashed border-gray-300" />
                )}

                {/* card */}
                <div className="ml-10 inline-flex items-center gap-2 bg-white rounded-xl shadow-md px-2 py-1">

                    {/* drag handle ONLY */}
                    <div
                        {...attributes}
                        {...listeners}
                        className="cursor-grab text-gray-400 px-1"
                    >
                        ☰
                    </div>

                    {/* circle */}
                    <div
                        className={`h-7 w-7 rounded-full text-white text-sm font-bold flex items-center justify-center ${levelColors[level % levelColors.length]
                            }`}
                    >
                        {node.code}
                    </div>

                    {/* Label */}
                    <EdatingLabel node={node} setTree={setTree} />

                    {/* collapse */}
                    {node.children?.length > 0 && (
                        <button
                            onClick={() => setTree((t) => toggleCollapse(t, node.id))}
                            className="text-xs px-1"
                        >
                            {node.collapsed ? "▶" : "▼"}
                        </button>
                    )}

                    {/* View Notes */}
                    <Notes node={node} setTree={setTree}/>

                    {/* Delete Node */}
                    <DeleteNode setTree={setTree} node={node}/>

                    {/* add */}
                    <button
                        onClick={() => setTree((t) => addChild(t, node.id))}
                        className="rounded border text-gray-500 hover:bg-gray-100"
                    >
                        <AddIcon  color="success" sx={{ fontSize: 20 }}/>
                    </button>
                </div>
            </div>

            {/* children */}
            {!node.collapsed &&
                node.children?.map((child, index) => (
                    <TreeNode
                        key={child.id}
                        node={child}
                        level={level + 1}
                        isLast={index === node.children.length - 1}
                        setTree={setTree}
                    />
                ))}
        </div>
    );
}
