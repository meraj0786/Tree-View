function findAndRemove(nodes, id) {
    let removed;
    const filtered = nodes.filter((node) => {
        if (node.id === id) {
            removed = node;
            return false;
        }
        if (node.children) {
            const result = findAndRemove(node.children, id);
            if (result.removed) {
                removed = result.removed;
                node.children = result.nodes;
            }
        }
        return true;
    });
    return { nodes: filtered, removed };
}

function insertAsChild(nodes, parentId, nodeToInsert) {
    return nodes.map((node) => {
        if (node.id === parentId) {
            return {
                ...node,
                children: [...(node.children || []), nodeToInsert]
            };
        }
        if (node.children) {
            return {
                ...node,
                children: insertAsChild(node.children, parentId, nodeToInsert)
            };
        }
        return node;
    });
}


function isDescendant(nodes, parentId, childId) {
    for (let node of nodes) {
        if (node.id === parentId) {
            return containsId(node.children, childId);
        }
        if (node.children) {
            if (isDescendant(node.children, parentId, childId)) {
                return true;
            }
        }
    }
    return false;
}

function containsId(nodes, id) {
    if (!nodes) return false;

    for (let node of nodes) {
        if (node.id === id) return true;
        if (node.children && containsId(node.children, id)) {
            return true;
        }
    }
    return false;
}



export { findAndRemove, insertAsChild, isDescendant }