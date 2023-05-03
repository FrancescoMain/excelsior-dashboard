import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IFormInput } from "./AddReservation/type";
import { DataCont, ResContainer } from "./style";
import Table from "./components/Table/Table";

export default function Content() {
  const navigate = useNavigate();
  const [data, setData] = useState<IFormInput[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycby4KQP5E8AUiFiZu2bX9tZud50YaOITj-Bo7R8rL0V8VbR5aCh9QQUhLbpUWhLsFhep/exec"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: "block" }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: "default" },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  navigate("/excelsior-dashboard/add-reservation");
                }}
                variant="contained"
                sx={{ mr: 1 }}
              >
                +
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
          <Table data= {data}/>
    </Paper>
  );
}
