import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { deleteAlumno } from "../../services/data";

export default function ButtonDelete({ idAlumno, updateTableF }) {
  const handleClick = async () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este alumno?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) { // Si se confirma la eliminación en el Swal se procede a eliminar el alumno
        deleteAlumno(idAlumno).then((res) => {
          if (res === "true") {
            Swal.fire("Eliminado", "El alumno ha sido eliminado", "success");
            updateTableF();
          } else {0
            Swal.fire(
              "Error",
              "Ha ocurrido un error al eliminar el alumno",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <IconButton
      variant="contained"
      color="error"
      onClick={handleClick}
    >
        <DeleteIcon />
    </IconButton>
  );
}
