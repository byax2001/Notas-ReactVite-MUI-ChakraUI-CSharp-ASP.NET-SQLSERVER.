import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from "@mui/material";
import BasePage from "../../components/BasePage/BasePage";
import { addCalificacion, getCalificaciones, deleteCalificacion } from "../../services/data";

const CalificacionesTable = ({ data, updateTableF, idMatr }) => {
  const [calificacionReal, setCalificacionReal] = useState(0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar esta calificación?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCalificacion(id).then((resp) => {
          if (resp) {
            Swal.fire("Calificación eliminada", "La calificación ha sido eliminada correctamente.", "success");
            updateTableF();
          } else {
            Swal.fire("Error", "No se ha podido eliminar la calificación.", "error");
          }
        });
      }
    });
  };

  useEffect(() => {
    let notaReal = 0;
    data.forEach((calificacion) => {
      notaReal += (calificacion.nota * calificacion.porcentaje) / 100;
    });
    setCalificacionReal(notaReal);
  }, [data]);

  return (
    <Box p={5}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Descripción</TableCell>
              <TableCell>Nota</TableCell>
              <TableCell>Porcentaje</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>{row.nota}</TableCell>
                <TableCell>{row.porcentaje}%</TableCell>
                <TableCell align="center">
                  <Button
                    color="error"
                    onClick={() => handleDelete(row.id)}
                    startIcon={<DeleteIcon />}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2}>
        <Typography variant="h6" align="center">
          Nota Real: {calificacionReal.toFixed(2)}
        </Typography>
      </Box>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Descripción"
            id="newDescripcion"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Nota"
            id="newNota"
            type="number"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Porcentaje"
            id="newPorcentaje"
            type="number"
            variant="outlined"
            size="small"
            inputProps={{ max: 100 }}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const descripcion = document.getElementById("newDescripcion").value;
              const nota = parseInt(document.getElementById("newNota").value);
              const porcentaje = parseInt(document.getElementById("newPorcentaje").value);

              if (descripcion && !isNaN(porcentaje) && porcentaje <= 100) {
                const calificacion = {
                  descripcion,
                  nota,
                  porcentaje,
                  matriculaid: idMatr,
                };
                addCalificacion(calificacion);
                updateTableF();
                Swal.fire("Calificación añadida", "La calificación ha sido añadida correctamente.", "success");
              } else {
                Swal.fire("Error", "Por favor, completa los campos correctamente.", "error");
              }
            }}
          >
            Agregar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default function CalificarAlumnos() {
  const [calificaciones, setCalificaciones] = useState([]);
  const [updateCalificaciones, setUpdateCalificaciones] = useState(false);
  const navigate = useNavigate();
  const [idMatricula, setIdMatricula] = useState(0);
  const params = useParams();

  useEffect(() => {
    setIdMatricula(params.idmatricula);
    fillCalificaciones(params.idmatricula);
  }, [updateCalificaciones]);

  const fillCalificaciones = (idmatricula) => {
    getCalificaciones(idmatricula).then(setCalificaciones);
  };

  return (
    <BasePage
      bodyPage={<CalificacionesTable data={calificaciones} updateTableF={() => setUpdateCalificaciones(!updateCalificaciones)} idMatr={idMatricula} />}
    />
  );
}
