import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

const Header = ({ title, description, setTitle, setDescription }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Paper elevation={2} className="border-8 border-t-violet-700 p-3">
        <TextField
          defaultValue={title}
          onBlur={(e) => setTitle(e.target.value)}
          variant="standard"
          placeholder="Form Title"
          name="title"
          sx={{ mb: 3 }}
          className="mb-3"
          fullWidth
        />
        <TextField
          name="description"
          defaultValue={description}
          onBlur={(e) => setDescription(e.target.value)}
          variant="standard"
          placeholder="Form Description"
          fullWidth
          sx={{ mb: 2 }}
          multiline
          rows={2}
        />
      </Paper>
    </Box>
  );
};

export default Header;
