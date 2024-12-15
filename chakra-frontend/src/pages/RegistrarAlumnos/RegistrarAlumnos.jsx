import React, { useState, useEffect } from "react";
import BasePage from "../../components/BasePage/BasePage";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormErrorIcon,
} from "@chakra-ui/form-control";
import { getAsignaturas, matricularAlumno } from "../../services/data";
import {
  Box,
  Button,
  Input,
  Heading,
  Center
} from "@chakra-ui/react";
import Swal from 'sweetalert2';

const FormAlumno = () => {
  const [asignaturas, setAsignaturas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const {dni, nombre,dir,edad,email,asign} = Object.fromEntries(new FormData(e.target));
   
    if(asign == -1){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Seleccione una asignatura',
      })
      return;
    }
    //Para limpiar el formulario realizar lo siguiente
    let token = sessionStorage.getItem("token");

    // Una forma de manejar el resultado de la promesa seria de esta forma, en dicho caso se deberia convertir la funcion a async
    //const resultado = await matricularAlumno(dni, nombre,dir,edad,email,asign,token)
    
    //Otra forma de manejar el resultado de la promesa seria de esta forma, en dicho caso no hace falta convertir la funcion a async
    //el .then se maneja como un return, donde resultado es el valor que retorna la promesa
    matricularAlumno(dni, nombre,dir,edad,email,asign,token).then((resultado) => {
      if(resultado){
        Swal.fire({
          icon: 'success',
          title: 'Alumno registrado',
          text: 'El alumno ha sido registrado exitosamente',
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo registrar el alumno',
        })
      }
    });
    e.target.reset();
  };

  const fillAsignaturas = async () => {
    let token = sessionStorage.getItem("token");
    getAsignaturas(token).then(setAsignaturas); // Se obtienen las asignaturas, funcion exportada de data.js
  };

  useEffect(() => {
    fillAsignaturas();
  }, []);

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
            Registrar Alumno
          </Heading>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            {/* Ajustar ancho del formulario */}
            <FormControl id="dni" mb="4">
              <Input type="text" name="dni" placeholder="DNI" />
            </FormControl>
            <FormControl id="nombre" mb="4">
              <Input
                type="text"
                name="nombre"
                placeholder="Nombre de Usuario"
              />
            </FormControl>
            <FormControl id="dir" mb="4">
              <Input type="text" name="dir" placeholder="Dirección" />
            </FormControl>
            <FormControl id="edad" mb="4">
              <Input type="number" name="edad" placeholder="Edad" />
            </FormControl>
            <FormControl id="email" mb="4">
              <Input
                type="email"
                name="email"
                placeholder="Correo Electronico"
              />
            </FormControl>



            {/* Sección de asignaturas */}
            <Box
              as="select"
              name="asign"
              width="100%"
              bg="white"
              borderWidth="1px"
              borderColor="gray.300"
              //borderRadius="md"
              padding="1"
              mb={2}
              _hover={{ borderColor: "blue.500" }}
              _focus={{
                borderColor: "blue.500",
                outline: "none",
                boxShadow: "0 0 0 1px blue.500",
              }}
              defaultValue={-1}
            >
              <option value={-1}>
                Seleccione una asignatura
              </option>
              {asignaturas.map((asignatura) => (
                <option key={asignatura.id} value={asignatura.id}>
                  {asignatura.nombre}
                </option>
              ))}
            </Box>
            <Button
              type="submit"
              width="100%" // Ancho del botón ajustado
              _active={{
                transform: "translateY(4px)", // Desplazamiento hacia abajo
              }}
              transition="transform 0.2s ease-out" // Suaviza el desplazamiento
            >
              Registrar
            </Button>
          </form>
        </Center>
      </Box>
    </Center>
  );
};

export default function RegistrarAlumnos({}) {
  return <BasePage bodyPage={<FormAlumno />} />;
}
