import { Link } from "react-router-dom";
import { Button, Grid, GridItem, Box } from "@chakra-ui/react";

export default function HeaderPage() {
  /*
    const breakpoints = {
        base: "0em", // Øpx
        sm: "30em", // ~480px
        md: "48em", // ~768px
        1g: "62em", // ~992px
        x1: "80em", // ~1280px
        "2xl": "96em", // ~1536px
        }
    */
  return (
    <Box
      as="header"
      bg="blue.500"
      p={4}
      color="white"
      width="100%" // Ocupa todo el ancho de la pantalla
      boxShadow="md"
      mb={2}
    >
      {/* El templateColumns es una propiedad de Grid que permite definir el número de columnas que tendrá el grid segun el tamaño
    de la pantalla. En este caso se define que en pantallas pequeñas se tendrá una sola columna y en pantallas medianas se tendrán
    3 columnas */}
      {/* Esto junto con el colspan permite definir el tamaño de las columnas en cada tamaño de pantalla de los elementos
    haciendo mas personalizable el diseño responsivo */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(4, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(3,1fr)",
        }} // Configuración de columnas responsivas
        gap={4}
        justifySelf={{ base: "center", sm: "auto", md: "auto", lg: "auto" }} // Alineación horizontal
        alignItems="center"
      >
        {/* Sección de Links */}
        <GridItem colSpan={{ base: 1, sm: 2, md: 3, lg: 2 }}>
          <Box display="flex" gap={4}>
            <Link
              to="/Home"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "semibold",
              }}
            >
              Listado
            </Link>
            <Link
              to="/create"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "semibold",
              }}
            >
              Nuevo
            </Link>
          </Box>
        </GridItem>

        {/* Botón de cerrar sesión */}
        <GridItem
          colSpan={{ base: 1, sm: 2, md: 1, lg: 1 }}
          justifySelf={{ base: "center", sm: "end", md: "end" }}
        >
          <Button
            bg={"navy"}
            color={"white"}
            colorScheme="red"
            variant="subtle"
            size="xl"
            _active={{
              transform: "translateY(4px)", // Desplazamiento hacia abajo
            }}
            transition="transform 0.2s ease-out" // Suaviza el desplazamiento
          >
            Cerrar Sesión
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}
