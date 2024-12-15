import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BasePage from "../../components/BasePage/BasePage";
import {
  FormControl,
  FormLabel
} from "@chakra-ui/form-control";
import { getAlumno, actualizarAlumno } from "../../services/data";
import { Box, Button, Input, Heading, Center } from "@chakra-ui/react";
import Swal from "sweetalert2";

const FormAlumno = () => {
  const [stateForm, setStateForm] = useState(true);
  let token = sessionStorage.getItem("token");
  const params = useParams(); // Se obtienen los parametros de la URL
  const [alumno, SetAlumno] = useState({
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
      edad: edad,
      email: email,
    };

    //Para limpiar el formulario realizar lo siguiente
    let token = sessionStorage.getItem("token");

    // Una forma de manejar el resultado de la promesa seria de esta forma, en dicho caso se deberia convertir la funcion a async
    //const resultado = await matricularAlumno(dni, nombre,dir,edad,email,asign,token)

    //Otra forma de manejar el resultado de la promesa seria de esta forma, en dicho caso no hace falta convertir la funcion a async
    //el .then se maneja como un return, donde resultado es el valor que retorna la promesa
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
    setStateForm(!stateForm); // Se actualiza el estado del formulario para que se vuelva a cargar la informacion del alumno
  };

  const fillAlumnoInfo = async () => {
    const idalumno = params.idalumno;
    getAlumno(idalumno).then(SetAlumno);
  };

  useEffect(() => {
    fillAlumnoInfo();
  }, [stateForm]);

  return (
    <Center>
      <Box
        w="100%"
        maxW="400px"
        p="6"
        borderRadius="md"
        boxShadow="lg"
        bg="white"
      >
        <Center flexDirection="column">
          {/* Cambiado para apilar elementos verticalmente */}
          <Heading size="4xl" mb={3}>
            Editar Alumno
          </Heading>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            {/* Ajustar ancho del formulario */}
            <FormControl id="dni" mb="4">
              <FormLabel>DNI</FormLabel>
              <Input
                type="text"
                name="dni"
                placeholder="DNI"
                defaultValue={alumno.dni}
              />
            </FormControl>
            <FormControl id="nombre" mb="4">
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                name="nombre"
                placeholder="Nombre de Usuario"
                defaultValue={alumno.nombre}
              />
            </FormControl>
            <FormControl id="dir" mb="4">
              <FormLabel>Dirección</FormLabel>
              <Input
                type="text"
                name="dir"
                placeholder="Dirección"
                defaultValue={alumno.direccion}
              />
            </FormControl>
            <FormControl id="edad" mb="4">
              <FormLabel>Edad</FormLabel>
              <Input
                type="number"
                name="edad"
                placeholder="Edad"
                defaultValue={alumno.edad}
              />
            </FormControl>
            <FormControl id="email" mb="4">
              <FormLabel>Correo Electrónico</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Correo Electronico"
                defaultValue={alumno.email}
              />
            </FormControl>
            <Button
              type="submit"
              width="100%" // Ancho del botón ajustado
              _active={{
                transform: "translateY(4px)", // Desplazamiento hacia abajo
              }}
              transition="transform 0.2s ease-out" // Suaviza el desplazamiento
            >
              Editar
            </Button>
          </form>
        </Center>
      </Box>
    </Center>
  );
};

export default function EditarAlumnos({}) {
  return <BasePage bodyPage={<FormAlumno />} />;
}
