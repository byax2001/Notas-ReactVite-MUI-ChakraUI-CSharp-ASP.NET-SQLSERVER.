import React from "react";
import HeaderPage from "../Header/Header";
import { Box, Container } from "@mui/material";

export default function BasePage({ bodyPage }) {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Ocupa el 100% de la pantalla
        minWidth: "100vw", // Asegura que el Box ocupe toda la anchura
        bgcolor: "white", // Fondo blanco
        display: "flex",
        padding: 0,
        flexDirection: "column", // Asegura una distribución adecuada
      }}
    >
      <HeaderPage />
      {bodyPage}
    </Box>
  );
}