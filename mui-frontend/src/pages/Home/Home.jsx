import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  CircularProgress,
} from "@mui/material";
import ButtonDelete from "../../components/EliminarAlumnosButton/ButtonDelete";
//import { MdDelete, MdDownloadDone } from "react-icons/md";
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import EditIcon from '@mui/icons-material/Edit';

//import { FaEdit } from "react-icons/fa";
import { getAlumnosProfesor } from "../../services/data";
import BasePage from "../../components/BasePage/BasePage";
import Swal from "sweetalert2";

const TableAlumns = ({ data, updateTableF, navigate }) => {
  const handleEdit = (id) => {
    navigate(`/editAl/${id}`);
  };

  const handleCalificar = (matriculaId) => {
    navigate(`/calificar/${matriculaId}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este alumno?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lógica para eliminar el alumno
        updateTableF();
      }
    });
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Lista de Alumnos
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>DNI</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Edad</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Asignatura</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.dni}</TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.direccion}</TableCell>
                <TableCell>{row.edad}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.asignatura}</TableCell>
                <TableCell align="center">
                  <Grid container spacing={1} justifyContent="center">
                    <Grid item>
                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(row.id)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton
                        color="secondary"
                        onClick={() => handleCalificar(row.matriculaId)}
                      >
                        <FileDownloadDoneIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <ButtonDelete idAlumno={row.id} updateTableF={updateTableF} />
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default function Home() {
  const [updateTable, setUpdateTable] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [updateTable]);

  const fetchData = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      getAlumnosProfesor(token).then(setData);
    }
  };

  return (
    <BasePage
      bodyPage={
        <TableAlumns
          data={data}
          updateTableF={() => setUpdateTable(!updateTable)}
          navigate={navigate}
        />
      }
    />
  );
}