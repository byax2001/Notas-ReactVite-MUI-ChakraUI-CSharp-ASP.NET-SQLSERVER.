# React + Vite + Chakra UI

React + Vite, junto con Chakra UI, proporcionan una combinación poderosa para crear aplicaciones web modernas y responsivas. Chakra UI facilita el diseño con componentes accesibles y personalizables, mientras que Vite optimiza el desarrollo con una experiencia rápida y eficiente.

## Recursos
Para conocer más sobre los componentes de Chakra UI, visita la página oficial de [Chakra UI](https://www.chakra-ui.com/docs/components/concepts/overview).

---

## Diseño Responsive con Grid

El diseño responsivo permite que la interfaz se adapte a diferentes tamaños de pantalla. Con Chakra UI, el componente `Grid` proporciona una forma sencilla y flexible de lograrlo.

### SimpleGrid
`SimpleGrid` es una variante de `Grid`. SimpleGrid es un componente simplificado del sistema de cuadrícula de Chakra UI. Su propósito principal es manejar layouts con columnas de ancho uniforme, aplicando de manera automática propiedades como espaciado y responsividad. Es ideal para diseños que no necesitan configuraciones detalladas por columna.
En el siguiente ejemplo se usa SimpleGrid para crear un formulario compacto y responsivo, ideal para ingresar datos como calificaciones. La cantidad de columnas cambia según el tamaño de pantalla.

```jsx
import { Input, Button, SimpleGrid, GridItem } from "@chakra-ui/react";

export default function ResponsiveForm() {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 4 }}
      spacing={4}
      p={4}
      border="1px solid #ccc"
      borderRadius="md"
    >
      <GridItem>
        <Input placeholder="Descripción" size="sm" />
      </GridItem>
      <GridItem>
        <Input placeholder="Nota" type="number" size="sm" />
      </GridItem>
      <GridItem>
        <Input
          placeholder="Porcentaje"
          type="number"
          size="sm"
          onInput={(e) => {
            if (e.target.value > 100) {
              e.target.value = 100;
            }
          }}
        />
      </GridItem>
      <GridItem>
        <Button colorScheme="blue" w="full">
          Agregar
        </Button>
      </GridItem>
    </SimpleGrid>
  );
}
```

### Grid
`Grid` es más versátil y permite definir configuraciones avanzadas como el número de columnas, el espaciado, y cómo las columnas cambian de tamaño en diferentes puntos de ruptura (breakpoints).

En un `Grid`, cada instancia representa una fila, mientras que un `GridItem` representa una columna dentro de esa fila. Esta relación facilita la creación de layouts organizados y responsivos.

#### Breakpoints en Chakra UI
Los breakpoints permiten establecer configuraciones adaptativas para distintos tamaños de pantalla:
- **Tamaños disponibles:** `base`, `sm`, `md`, `lg`, `xl`, `2xl`.

#### Propiedades Útiles de Grid
- **`templateColumns`:** Define el número de columnas y su distribución. Por defecto, las pantallas se dividen en 12 espacios, pero se puede personalizar para que cada elemento ocupe, por ejemplo, 2, 3 o más columnas.
- **`colSpan`:** Especifica el número de columnas que un elemento debe ocupar, respetando la configuración definida en `templateColumns`.
- **`gap`:** Controla el espaciado entre las filas y columnas.
- **`justifySelf` y `alignItems`:** Ajustan la alineación horizontal y vertical de los elementos dentro del grid.

#### Ejemplo de Código

```jsx
import { Link } from "react-router-dom";
import { Button, Grid, GridItem, Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import school from "./components/school.png";

export default function HeaderPage() {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Box as="header" bg="blue.500" p={4} color="white" width="100%" boxShadow="md" mb={2}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(4, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        alignItems="center"
      >
        {/* Links de navegación */}
        <GridItem colSpan={{ base: 1, sm: 2, md: 3, lg: 2 }}>
          <Box display="flex" gap={4} alignItems="center">
            <Image src={school} alt="school" maxHeight="50px" />
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
              to="/regAl"
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
        <GridItem colSpan={{ base: 1, sm: 2, md: 1, lg: 1 }} justifySelf="end">
          <Button
            bg="navy"
            color="white"
            colorScheme="red"
            size="md"
            _active={{ transform: "translateY(4px)" }}
            transition="transform 0.2s ease-out"
            onClick={cerrarSesion}
          >
            Cerrar Sesión
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}
```

---

## Diseño Responsivo en Formularios

Para manejar datos dinámicos como calificaciones, el componente `Grid` facilita la distribución de campos de entrada y botones de acción de manera responsiva.

#### Ejemplo con Formulario para Calificaciones

```jsx
<Grid
  templateColumns={{
    base: "repeat(1, 1fr)",
    sm: "repeat(4, 1fr)",
    md: "repeat(10, 1fr)",
    lg: "repeat(10, 1fr)",
  }}
  gap={4}
  alignItems="center"
>
  <GridItem colSpan={{ base: 1, sm: 2, md: 3, lg: 3 }}>
    <Input placeholder="Descripción" size="sm" />
  </GridItem>
  <GridItem colSpan={{ base: 1, sm: 2, md: 3, lg: 3 }}>
    <Input placeholder="Nota" size="sm" type="number" />
  </GridItem>
  <GridItem colSpan={{ base: 1, sm: 2, md: 3, lg: 3 }}>
    <Input
      placeholder="Porcentaje"
      size="sm"
      type="number"
      onInput={(e) => {
        if (e.target.value > 100) {
          e.target.value = 100;
        }
      }}
    />
  </GridItem>
  <GridItem colSpan={{ base: 1, sm: 2, md: 1, lg: 1 }} justifySelf="center">
    <Button colorScheme="blue">Agregar</Button>
  </GridItem>
</Grid>
```


