import React, { useState } from "react";
import BasePage from "../../components/BasePage/BasePage";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormErrorIcon,
} from "@chakra-ui/form-control";
import {
  Box,
  Button,
  Input,
  Heading,
  Container,
  Center,
  Image,
  Text,
} from "@chakra-ui/react";

const FormAlumno = () => {
    const handleSubmit = (e) => {};
  
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
          <Center flexDirection="column"> {/* Cambiado para apilar elementos verticalmente */}
            <Heading size="4xl" mb={3}>
              Registrar Alumno
            </Heading>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}> {/* Ajustar ancho del formulario */}
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
              <FormControl id="matr" mb="4">
                <Input type="text" name="matr" placeholder="Matrícula" />
              </FormControl>
  
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
