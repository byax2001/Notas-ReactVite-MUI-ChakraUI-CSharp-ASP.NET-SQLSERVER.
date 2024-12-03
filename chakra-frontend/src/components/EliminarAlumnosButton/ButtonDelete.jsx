import React from "react";
import { MdDelete } from "react-icons/md";
import { Button } from "@chakra-ui/react";
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
      if (result.isConfirmed) {
        deleteAlumno(idAlumno).then((res) => {
          if (res==="true") {
            Swal.fire("Eliminado", "El alumno ha sido eliminado", "success");
            updateTableF();
          } else {
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
    <Button colorScheme="red" onClick={handleClick}>
      <MdDelete /> Eliminar
    </Button>
  );
}
