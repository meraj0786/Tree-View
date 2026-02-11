import React, { useState } from 'react'

function EdatingLabel({ node, setTree }) {

    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(node.label);

    const updateLabel = (tree, id, newLabel) =>
        tree.map((n) => {
            if (n.id === id) {
                return { ...n, label: newLabel };
            }
            return n.children
                ? { ...n, children: updateLabel(n.children, id, newLabel) }
                : n;
        });


    return (
        <>
            {
                editing ? (
                    <input className="text-sm border rounded px-1 outline-none focus:ring"
                        value={value}
                        autoFocus
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={() => {
                            setTree((t) => updateLabel(t, node.id, value));
                            setEditing(false);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setTree((t) => updateLabel(t, node.id, value));
                                setEditing(false);
                            }
                            if (e.key === "Escape") {
                                setValue(node.label);
                                setEditing(false);
                            }
                        }}
                    />
                ) : (
                    <span
                        className="text-sm cursor-text"
                        onDoubleClick={() => setEditing(true)}
                    >
                        {node.label}
                    </span>
                )}
        </>
    )
}

export default EdatingLabel