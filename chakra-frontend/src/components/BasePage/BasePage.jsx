import React from "react";
import HeaderPage from "../Header/Header";
import { Container, Box } from "@chakra-ui/react";

export default function BasePage({ bodyPage }) {
  return (
    //PARA ESTOS CASOS SE USA BOX Y NO CONTAINER YA QUE CONTAINER CUENTA CON UN PADDING QUE NO DEJA QUE EL HIJO OCUPA TODO EL ESPACIO
    //DE ESTA FORMA SE PUEDE ASEGURAR QUE EL HIJO OCUPA TODO EL ESPACIO
    <Box
      minHeight="100vh" // Ocupa el 100% de la pantalla
      minWidth="100vh" // Asegura que el Box ocupe toda la altura
      bg="white" // Fondo blanco
      display="flex"
      padding={0}
      flexDirection="column" // Añadido para asegurar una distribución adecuada
    >
      <HeaderPage />
      {bodyPage}
    </Box>
  );
}
