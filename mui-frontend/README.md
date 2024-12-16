# 📖 **Sistema de Diseño Responsivo con Material UI**

Este documento explica cómo crear interfaces responsivas utilizando **Material UI** y su sistema de **Grid**. Veremos dos enfoques:

1. **Grid container como filas (rows) y Grid items como columnas.**
2. **Grid container con Grid items de 12 columnas como filas.**

Además, se aplicarán estilos dinámicos utilizando `useTheme` para adaptar la posición de elementos según el tamaño de la pantalla.

---

## 🚀 **Conceptos Básicos del Grid de Material UI**

El sistema de **Grid** de Material UI se basa en **12 columnas**. Cada `Grid item` ocupa un número de columnas especificado (de 1 a 12).

### **Componentes clave**:
- `Grid container`: Actúa como **fila** principal donde se colocan los items.
- `Grid item`: Representa cada elemento hijo que ocupa un espacio específico.

### **Ejemplo Básico**:

```jsx
import { Grid, Box } from "@mui/material";

function EjemploBasico() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Box bgcolor="primary.main" color="white" p={2}>
          Columna 1
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Box bgcolor="secondary.main" color="white" p={2}>
          Columna 2
        </Box>
      </Grid>
    </Grid>
  );
}

export default EjemploBasico;
```

---

## 🧩 **1. Grid Container como Filas y Grid Items como Columnas**

Aquí usamos **`Grid container`** como la fila principal, y **`Grid item`** representa las columnas dentro de cada fila.

### **Ejemplo: Layout de Encabezado con Links y Botón**

```jsx
import { Link } from "react-router-dom";
import { Button, Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function HeaderPage() {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{ bgcolor: "primary.main", p: 2, color: "white", width: "100%" }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
        }}
      >
        {/* Links */}
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to="/Home" style={{ color: "white" }}>Home</Link>
            <Link to="/regAl" style={{ color: "white" }}>Nuevo</Link>
          </Box>
        </Grid>

        {/* Botón */}
        <Grid item xs={12} sm={4} sx={{ textAlign: "right" }}>
          <Button variant="contained" color="error">
            Cerrar Sesión
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
```

### **Explicación**:
- `container`: Crea una fila que contiene los elementos.
- `item`: Cada elemento ocupa columnas según el tamaño de pantalla (`xs`, `sm`).

---

## 📏 **2. Grid Items de 12 Columnas como Filas**

Aquí usamos `Grid item` que ocupa **12 columnas completas** para actuar como una fila. Luego, dentro de cada fila, colocamos más `Grid items` que actúan como columnas.

### **Ejemplo: Formulario de Alumno Responsivo**

```jsx
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";

function FormularioAlumno() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      {/* Fila principal */}
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Editar Alumno
          </Typography>

          {/* Fila de Inputs */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Nombre" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Edad" variant="outlined" type="number" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="DNI" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Correo" variant="outlined" type="email" />
            </Grid>
          </Grid>

          {/* Botón */}
          <Button variant="contained" color="primary" fullWidth style={{ marginTop: "1rem" }}>
            Guardar
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default FormularioAlumno;
```

### **Explicación**:
1. La primera fila (`Grid item` de 12 columnas) actúa como contenedor.
2. Dentro colocamos otros **Grid items** que representan las columnas:
   - `xs={12}`: Ocupa todo el ancho.
   - `sm={6}`: Divide en dos columnas en pantallas medianas.

---

## 🎨 **Estilos Responsivos con `useTheme`**

El hook `useTheme` permite ajustar estilos dinámicos según los **breakpoints** de Material UI.

### **Ejemplo**:

```jsx
import { Box, useTheme } from "@mui/material";

function ResponsiveBox() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 2,
        [theme.breakpoints.up("md")]: {
          backgroundColor: "primary.main",
          color: "white",
        },
        [theme.breakpoints.down("md")]: {
          backgroundColor: "secondary.main",
          color: "black",
        },
      }}
    >
      Cambia de color según el tamaño de la pantalla.
    </Box>
  );
}
```

---

## 📝 **Conclusión**

Utilizando **Grid container** y **Grid items**, junto con los breakpoints de **Material UI**, podemos diseñar interfaces completamente responsivas. Este sistema es flexible y permite estructurar filas y columnas de manera eficiente, adaptándose a distintos tamaños de pantalla.

### 📚 **Referencia**:
- [Documentación de Material UI Grid](https://mui.com/components/grid/)
- [Breakpoints en Material UI](https://mui.com/customization/breakpoints/)