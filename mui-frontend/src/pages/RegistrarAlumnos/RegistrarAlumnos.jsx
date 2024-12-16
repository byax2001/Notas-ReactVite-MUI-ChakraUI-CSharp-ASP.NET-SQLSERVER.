import React, { useState, useEffect } from "react";
import BasePage from "../../components/BasePage/BasePage";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Container,
  Avatar,
  FormControl,
} from "@mui/material";
import { getAsignaturas, matricularAlumno } from "../../services/data";
import Swal from "sweetalert2";

const FormAlumno = () => {
  const [asignaturas, setAsignaturas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dni = formData.get("dni");
    const nombre = formData.get("nombre");
    const dir = formData.get("dir");
    const edad = formData.get("edad");
    const email = formData.get("email");
    const asign = formData.get("asign");

    if (asign === "-1") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Seleccione una asignatura",
      });
      return;
    }

    const token = sessionStorage.getItem("token");
    matricularAlumno(dni, nombre, dir, edad, email, asign, token).then((resultado) => {
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Alumno registrado",
          text: "El alumno ha sido registrado exitosamente",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo registrar el alumno",
        });
      }
    });
    e.target.reset();
  };

  const fillAsignaturas = async () => {
    const token = sessionStorage.getItem("token");
    getAsignaturas(token).then(setAsignaturas);
  };

  useEffect(() => {
    fillAsignaturas();
  }, []);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Avatar
        sx={{ bgcolor: "primary.main", width: 56, height: 56, mb: 2 }}
        alt="Alumno"
      />
      <Typography variant="h4" component="h1" gutterBottom>
        Registrar Alumno
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
        <TextField
          fullWidth
          margin="normal"
          label="DNI"
          name="dni"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Nombre"
          name="nombre"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Dirección"
          name="dir"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Edad"
          name="edad"
          type="number"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Correo Electrónico"
          name="email"
          type="email"
          variant="outlined"
        />
        <FormControl fullWidth margin="normal">
          <TextField
            select
            label="Asignatura"
            name="asign"
            defaultValue="-1"
            variant="outlined"
          >
            <MenuItem value="-1">Seleccione una asignatura</MenuItem>
            {asignaturas.map((asignatura) => (
              <MenuItem key={asignatura.id} value={asignatura.id}>
                {asignatura.nombre}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, py: 1.5 }}
        >
          Registrar
        </Button>
      </Box>
    </Container>
  );
};

export default function RegistrarAlumnos() {
  return <BasePage bodyPage={<FormAlumno />} />;
}