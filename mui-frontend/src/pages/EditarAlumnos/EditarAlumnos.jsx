import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BasePage from "../../components/BasePage/BasePage";
import {
  Box,
  Button,
  Input,
  Typography,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import Swal from "sweetalert2";
import { getAlumno, actualizarAlumno } from "../../services/data";

const FormAlumno = () => {
  const [stateForm, setStateForm] = useState(true);
  const token = sessionStorage.getItem("token");
  const params = useParams();
  const [alumno, setAlumno] = useState({
    id: 0,
    dni: "",
    nombre: "",
    direccion: "",
    edad: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dni, nombre, dir, edad, email } = Object.fromEntries(
      new FormData(e.target)
    );
    const editAlum = {
      id: alumno.id, // Se mantiene el id del alumno y se actualizan los demas campos
      dni: dni,
      nombre: nombre,
      direccion: dir,
      edad: edad===""?0:edad,
      email: email,
    };
    console.log(editAlum);

    actualizarAlumno(editAlum, token).then((resultado) => {
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Alumno Editado",
          text: "El alumno ha sido editado exitosamente",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo editar el alumno",
        });
      }
    });
    setStateForm(!stateForm);
  };

  const fillAlumnoInfo = () => {
    const idalumno = params.idalumno;
    getAlumno(idalumno).then(setAlumno);
    
  };

  useEffect(() => {
    fillAlumnoInfo();
  }, [stateForm]);

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Editar Alumno
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="DNI"
              name="dni"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder={alumno.dni}
              focused //Para poner el label arriba
            />
            <TextField
              label="Nombre"
              name="nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder={alumno.nombre}
              focused
            />
            <TextField
              label="Dirección"
              name="dir"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder={alumno.direccion}
              focused
            />
            <TextField
              label="Edad"
              name="edad"
              type="number"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder={String(alumno.edad)}
              focused={true}
            />
            <TextField
              label="Correo Electrónico"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder={alumno.email}
              focused
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              Editar
            </Button>
          </form>
          <Button onClick={()=>console.log(alumno)}>clic</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default function EditarAlumnos() {
  return <BasePage bodyPage={<FormAlumno />} />;
}
