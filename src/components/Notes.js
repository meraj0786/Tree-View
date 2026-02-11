
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 3,
};

function Notes({ node, setTree }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(node.note);


    const updateNote = (tree, id, newLabel) =>
        tree.map((n) => {
            if (n.id === id) {
                return { ...n, note: newLabel };
            }
            return n.children
                ? { ...n, children: updateNote(n.children, id, newLabel) }
                : n;
        });


    return (
        <div>
            <IconButton onClick={handleOpen} sx={{ p: 0 }}>
                <VisibilityIcon sx={{ fontSize: 20, color: "grey" }} />
            </IconButton>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{ width: 'fit-content', padding: '2px 4px', fontSize: 'large', background: 'beige' }}>
                        {node.label}
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2, }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Notes"
                            sx={{ width: '100%' }}
                            multiline
                            onChange={(e) => setValue(e.target.value)}
                            rows={4}
                            defaultValue={value}
                            onBlur={() => {
                                setTree((t) => updateNote(t, node.id, value));
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setTree((t) => updateNote(t, node.id, value));
                                }
                                if (e.key === "Escape") {
                                    setValue(node.label);
                                }
                            }}
                        />
                    </Typography>
                </Box>
            </Modal>

        </div>
    )
}

export default Notes