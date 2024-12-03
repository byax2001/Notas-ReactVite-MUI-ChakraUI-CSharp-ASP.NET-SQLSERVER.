import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { login } from "../../services/data"; // Se importa asi ya que a la exportacion del login no se le puso "default" de extra
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
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormErrorIcon,
} from "@chakra-ui/form-control";
import notes from "./image/notes.png";
import { CiLogin } from "react-icons/ci";
import Swal from 'sweetalert2'


export default function Login() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { usuario, pass } = Object.fromEntries(new FormData(e.target));
    const response = await login(usuario, pass);
    if(response=="no existe"){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrectos',
      })
    }else{
      navigate("/Home");
      // Guardar el usuario en el sessionStorage
      // La diferencia entre sessionStorage y localStorage es que el primero se borra al cerrar la pestaña
      // mientras que el segundo se mantiene guardado hasta que se borre manualmente o se borren los datos del navegador
      // sessionStorage es util para mantener la sesion activa mientras se navega por la pagina
      // En este caso se prefirio usar SessionStorage
      sessionStorage.setItem("user",response);

      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Inicio de sesión exitoso',
      })
    }

  }

  return (
    <Container
      minHeight="100vh" // Ocupa el 100% de la pantalla
      minWidth="100vh" // Asegura que el Box ocupe toda la altura
      bg="white" // Fondo blanco
      display="flex"
      justifyContent="center"
      //alignItems="center" // Se puede de esta forma o con el componente Center <-------------------------
      flexDirection="column" // Añadido para asegurar una distribución adecuada
    >
      <Center>
        <Box
          w="100%"
          maxW="400px"
          p="6"
          borderRadius="md"
          boxShadow="lg"
          bg="white"
        >
          <Center>
            <Image src={notes} alt="notes" maxHeight={"100px"} />
          </Center>
          <Center>
            <Heading size={"5xl"} mb={3}>
              Iniciar Sesión
            </Heading>
          </Center>
          <form onSubmit={handleSubmit}>
            <FormControl id="usuario" mb="4">
              <FormLabel>
                {" "}
                <Text fontSize={"xl"} fontWeight={"semibold"} mb={1}>
                  Usuario
                </Text>
              </FormLabel>
              <Input
                name="usuario"
                type="text"
                placeholder="Ingresa tu usuario"
                color="black"
              />
            </FormControl>
            <FormControl id="pass" mb="4">
              <FormLabel>
                <Text fontSize={"xl"} fontWeight={"semibold"} mb={1}>
                  Contraseña
                </Text>
              </FormLabel>
              <Input
                name="pass"
                type="password"
                placeholder="Ingresa tu contraseña"
                color="black"
                mb={2}
              />
            </FormControl>
            <Button
              type="submit"
              variant="surface"
              width="100%"
              _active={{
                transform: "translateY(4px)", // Desplazamiento hacia abajo
              }}
              transition="transform 0.2s ease-out" // Suaviza el desplazamiento
            >
              <CiLogin />
              Iniciar Sesión
            </Button>
          </form>
        </Box>
      </Center>
    </Container>
  );
}
