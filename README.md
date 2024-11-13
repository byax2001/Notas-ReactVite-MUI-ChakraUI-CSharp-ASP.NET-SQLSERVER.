# Pagina-CSharp-ASP.NET-REACT-SQLSERVER
Pagina donde se utilizan las tecnologias de C# y Asp.net como backend, React como frontend y Sql Server como base de datos

## Frontend (React - Vite - Mui)

### Instalar React y Vite
1. Para iniciar una proyecto con react vite ejecutar el siguiente comando en la terminal, reemplazando ``nombre_minusculas`` por el nombre de tu proyecto::

```
npm create vite@latest nombre_minusculas
````
2. En el asistente de Vite, elegir las siguientes opciones:

- **Framework**: React
- **Librería de JavaScript**: JavaScript + SWC

>NOTA: SWC (Speedy Web Compiler) es un compilador de JavaScript y TypeScript altamente optimizado. En React con Vite, se usa para transformar código más rápidamente, mejorando el rendimiento en el desarrollo y la compilación de aplicaciones.

3. Una vez creado el proyecto, navegar al directorio del proyecto y ejecuta:

```
npm i
```
### Instalar Mui
Página oficial [Material UI](https://mui.com/material-ui/getting-started/installation)

1. Ejecutar el siguiente comando en el directorio del proyecto creado con Vite:

```
npm install @mui/material @emotion/react @emotion/styled
```

2. Para un mayor control en la edición de estilos, instalar también Styled Components:
```
npm install @mui/material @mui/styled-engine-sc styled-components
```

3. Instalar la libreria de iconos proporcionada por Mui (opcional)

```
npm install @mui/icons-material
```
4. La tipografía Roboto es recomendada para MUI y se instala con:

```
npm install @fontsource/roboto
```
5. Posteriormente agregar estas importaciones en ``main.jsx`` para configurar la tipografía:

```
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

![image](https://github.com/user-attachments/assets/3d11b9d5-5f6f-49bc-8cb3-2e4075010445)

### Instalación de ``CssBaseline`` para Resetear Estilos del Navegador
CssBaseline es una herramienta proporcionada por Material UI para resetear los estilos predeterminados del navegador y asegurar que los estilos aplicados no sean afectados por la configuración del navegador. Para añadirlo al proyecto agregar la siguiente importación:

``` 
import { CssBaseline} from '@mui/material 
```

![image](https://github.com/user-attachments/assets/cf821ff7-0da5-493e-b8a0-753b83b212a5)

### Instalación de MUI Lab y React Router
1. Para obtener acceso a componentes experimentales de MUI, instalar Mui Lab:

```
npm i @mui/lab
```

2. Para manejar rutas en el proyecto, instalar react-router-dom:

```
npm i react-router-dom
```