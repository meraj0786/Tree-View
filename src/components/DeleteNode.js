import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function DeleteNode({setTree, node}) {

    const handleDelete = (tree, nodeId) =>
        tree
          .filter((n) => n.id !== nodeId)
          .map((n) =>
            n.children
              ? { ...n, children: handleDelete(n.children, nodeId) }
              : n
          );
      
    return (
        <div>
            <button className='rounded border text-gray-500 hover:bg-gray-100' onClick={() => {
                setTree((t) => handleDelete(t, node.id));
            }
            }>
                <DeleteForeverIcon color='Danger' sx={{ fontSize: 20, color: '#ff1760' }} />
            </button>
        </div>
    )
}

export default DeleteNode