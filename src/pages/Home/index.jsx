import React, { useState } from "react";
import { Header, Footer, Navbar } from "../../layout";
import { Grid, IconButton, Tooltip } from "@mui/material";
import Nestable from "react-nestable";
import AddCircleOutlineOutlinedIcon, {
  Add,
  InsertCommentOutlined,
} from "@mui/icons-material";
const Index = () => {
  const [title, setTitle] = useState("Untitled Form");
  const [description, setDescription] = useState("");

  return (
    <Grid container spacing={1} direction="row" justifyContent="center">
      <Grid item md={6}>
        <Header
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
      </Grid>
      <Grid item md={1}>
        <Tooltip title="Add Element" aria-label="add-element">
          <IconButton
            aria-label="add-element"
            // onClick={addElement}
            sx={{ position: "sticky", top: 30 }}
          >
            <Add className="rounded-lg shadow-md text-violet-500" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default Index;
