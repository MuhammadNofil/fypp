import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(true);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="text-center">
          <Box sx={style}>
            <Button size="large" variant="contained" color="success">
              ASK A QUESTION
            </Button>
            <Button size="large" variant="contained" sx={{ marginTop: "10px" }}>
              ANSWER THE QUESTIONS
            </Button>
          </Box>
        </div>
      </Modal>
    </>
  );
}
