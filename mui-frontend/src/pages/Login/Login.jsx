import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/data"; // Importación del servicio de login
import Grid2 from "@mui/material/Grid2";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Grid,
  Avatar,
} from "@mui/material";
import Swal from "sweetalert2";
import LoginIcon from '@mui/icons-material/Login';
import notes from "./image/notes.png";

export default function Login() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { usuario, pass } = Object.fromEntries(new FormData(e.target));
    const response = await login(usuario, pass);
    if (response.status !== true) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrectos",
      });
    } else {
      navigate("/Home");
      sessionStorage.setItem("token", response.token);

      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Inicio de sesión exitoso",
      });
    }
  }

  return (
    <Grid2
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <Grid container justifyContent="center">
          <Avatar
            alt="Notes Icon"
            src={notes}
            sx={{ height: 80, width: 80, mb: 2 }}
          />
        </Grid>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
        >
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="usuario"
            name="usuario"
            label="Usuario"
            placeholder="Ingresa tu usuario"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            id="pass"
            name="pass"
            label="Contraseña"
            type="password"
            placeholder="Ingresa tu contraseña"
            variant="outlined"
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}
          >
            <LoginIcon/> Iniciar Sesión
          </Button>
        </form>
      </Box>
    </Grid2>
  );
}