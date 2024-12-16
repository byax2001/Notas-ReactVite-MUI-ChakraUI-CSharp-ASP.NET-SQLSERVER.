# Pagina de Notas React-Vite-MUI-ChakraUI CSharp-ASP.NET-REACT-SQLSERVER
Se desarrollará una página web utilizando C# y ASP.NET para el backend, React para el frontend y SQL Server como base de datos. El proyecto incluirá dos versiones del frontend, ambas creadas con React Vite: una implementará Material-UI (MUI) y la otra Chakra UI. Se comparara el rendimiento y estilo de ambas tecnologias.


# Índice

## Introducción
- [Descripción del proyecto](#descripción-del-proyecto)

## Frontend
- [Frontend con `React`, `Vite` y `Material-UI (MUI)`](#frontend-react-vite-y-material-ui)
  - [Instalar React y Vite](#instalar-react-y-vite)
  - [Instalar MUI](#instalar-mui)
  - [Instalación de `CssBaseline` para resetear estilos](#instalación-de-cssbaseline-para-resetear-estilos-del-navegador)
  - [Instalación de MUI Lab y React Router](#instalación-de-mui-lab-y-react-router)
  - [Diseño Responsivo](#diseño-responsive-material-ui)
- [Frontend con `React`, `Vite` y `Chakra UI`](#frontend-react-vite-y-chakra-ui)
  - [Instalar `Chakra UI`](#instalar-chakra-ui)
  - [Iconos en `Chakra`](#iconos-en-chakra)
  - [Formularios con `Chakra UI`](#formularios-con-chakra-ui)
  - [Tablas en `Chakra UI`](#tablas-en-chakra-ui)
  - [Diseño Responsivo](#diseño-responsive-chakra)

## Backend
- [Configuración del proyecto base](#base-del-proyecto)
- [Librerías y dependencias](#librerias-y-dependencias)
- [Pasos para instalar y configurar la API](#pasos-para-instalar-y-configurar-la-api)
  - [Explicación de la API y sus componentes](#explicación-de-la-api-y-componentes)
  - [Agregar un nuevo Modelo](#agregar-un-nuevo-modelo)
  - [Agregar un nuevo Controlador](#agregar-un-nuevo-controlador)
  - [Agregar un Nuevo Servicio](#agregar-un-nuevo-servicio)
  - [Swagger para probar endpoints](#página-de-swagger-para-probar-endpoints)
  - [Formas de crear un endpoint](#formas-de-crear-un-endpoint)
- [Configuración de CORS](#configuración-de-cors-en-la-api)
- [Aplicación de Seguridad JWT](#jwt)
   - [Variables de Entorno para los Tokens](#variables-de-entorno-para-los-tokens)
   - [Instalación de Paquetes para JWT](#instalacion-de-paquetes-para-jwt)
   - [Filtro para Validacion de Tokens](#filtro-para-validacion-de-tokens)
   - [Creacion de Tokens](#creacion-de-tokens)
   - [Proteccion de Rutas con JWT](#proteccion-de-rutas-con-jwt)
- [Leer y Manipular Token JWT en Backend](#leer-y-manipular-token-en-backend)
   - [Extraer Token del Header Authorization](#extraer-token-del-header-authorization)
   - [Manipular Token](#manipular-token)
      - [Limpiar Token](#limpiar-el-token)
      - [Obtener información del Token](#extraer-informacion-del-token)
- [Errores de Versiones y Actualización del Backend](#errores-de-versiones-y-actualizacion-del-backend)

## Descripción del Proyecto
El proyecto consistirá en el desarrollo de una página web donde un profesor podrá iniciar sesión y gestionar un listado de alumnos asignados a las asignaturas que imparte. Para cada matrícula, el profesor tendrá la opción de eliminarla, agregar tareas con sus respectivas calificaciones, y editar la información del alumno. Además, podrá crear nuevos alumnos e indicar directamente a qué asignatura se matricularán. A continuación, se presentarán algunos ejemplos de la interfaz.

![Login](https://github.com/user-attachments/assets/5600a315-7559-4ec8-809a-e2e0d0c4aef7)
![Home](https://github.com/user-attachments/assets/bab88b9b-fe46-48c0-857c-1269b232779e)
![Regis](https://github.com/user-attachments/assets/7ab362d1-ab15-48bc-a19a-ff562b2a2ecc)
![Editar](https://github.com/user-attachments/assets/a8b5b857-3c66-420d-838f-3cd08817306a)
![cali](https://github.com/user-attachments/assets/8cb72802-b352-4500-8746-bd3e99130892)
![EliminarMatriculacion](https://github.com/user-attachments/assets/3b46abee-f7ff-434f-afd8-b0efd4cbcec3)

---
---

## Frontend `React Vite` y `Material UI`

### Instalar React y Vite
---
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
4. Elimina la configuración predeterminada de App.css y index.css en la carpeta src, ya que podría interferir con el resultado esperado de Chakra UI. Puedes reemplazar el contenido del archivo index.css o en App.css con lo siguiente:
```css
#root {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
```
   - **Root**:
      - **`padding: 0` y `margin: 0`**: Elimina cualquier margen o relleno por defecto en el contenedor `#root`, que es el contenedor principal donde se monta toda la aplicación en React.
      - **`min-height: 100vh`**: Asegura que el contenedor `#root` ocupe al menos el 100% de la altura de la ventana del navegador, lo que garantiza que siempre cubra toda la pantalla.
      - **`width: 100%`**: Hace que el contenedor `#root` ocupe todo el ancho disponible de la pantalla.

   - **Body**:
      - **`margin: 0` y `padding: 0`**: Elimina cualquier margen o relleno por defecto en el `body` para evitar desplazamientos o espacios extra alrededor del contenido.
      - **`display: flex`**: Configura el `body` como un contenedor `flexbox`, lo que facilita la alineación de los elementos dentro de él.
      - **`place-items: center`**: Usa esta propiedad de flexbox para centrar los elementos hijos (en este caso, los componentes de React) tanto horizontal como verticalmente. Es equivalente a usar `justify-content: center` y `align-items: center` al mismo tiempo.
      - **`min-width: 320px`**: Establece un ancho mínimo de 320 píxeles para el `body`, asegurando que el diseño sea accesible incluso en dispositivos pequeños.
      - **`min-height: 100vh`**: Asegura que el `body` ocupe al menos la altura completa de la ventana del navegador.








### Instalar Mui
---
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

```jsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

![image](https://github.com/user-attachments/assets/3d11b9d5-5f6f-49bc-8cb3-2e4075010445)

### Instalación de ``CssBaseline`` para Resetear Estilos del Navegador
---
CssBaseline es una herramienta proporcionada por Material UI para resetear los estilos predeterminados del navegador y asegurar que los estilos aplicados no sean afectados por la configuración del navegador. Para añadirlo al proyecto agregar la siguiente importación:

```jsx 
import { CssBaseline} from '@mui/material 
```

![image](https://github.com/user-attachments/assets/cf821ff7-0da5-493e-b8a0-753b83b212a5)

### Instalación de MUI Lab y React Router
---
1. Para obtener acceso a componentes experimentales de MUI, instalar Mui Lab:

```
npm i @mui/lab
```

2. Para manejar rutas en el proyecto, instalar react-router-dom:

```
npm i react-router-dom
```

### Diseño Responsive Material UI
Para más detalles sobre el diseño responsivo implementado con Material UI, consultar el [README de Diseño Responsivo Material UI](https://github.com/byax2001/Notas-ReactVite-MUI-ChakraUI-CSharp-ASP.NET-SQLSERVER./tree/main/mui-frontend)


---
---

## Frontend `React Vite` y `Chakra UI`
### Instalar Chakra UI
1. Ejecuta el siguiente comando en la raíz del proyecto para instalar Chakra UI y sus dependencias necesarias:
```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
2. Elimina la configuración por defecto en los archivos App.css y index.css en la carpeta src, ya que puede interferir con el resultado que genera Chakra UI. Puedes reemplazar su contenido por lo siguiente en index.css o App.css:
```css
#root {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
```
3. Configura el `ChakraProvider` y el sistema en el archivo `main.jsx` de la siguiente manera:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
```
### Iconos en Chakra
**Comando para instalar la librería de iconos** (opcional):

  ```bash
  npm i react-icons
  ```
Para ver la libreria de iconos revisar su pagina oficial [React-Icons](https://react-icons.github.io/react-icons/)

### Formularios con Chakra UI:
Para usar formularios con Chakra UI seguir los siguientes pasos:
1. Instalar la librería de control de formularios:
```bash
npm i @chakra-ui/form-control
```
2. Importa los componentes necesarios de la siguiente forma:
```jsx
import {
   FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,
   FormErrorIcon,
} from "@chakra-ui/form-control"
```
### Tablas en Chakra UI:
Para manejar tablas en tu proyecto con Chakra UI, puedes optar por una biblioteca externa como React Data Table Component, ya que la versión actual de Chakra UI no cuenta con soporte completo para tablas estilizadas de manera nativa.
1. Ejecuta el siguiente comando para instalar la biblioteca:
```bash
npm i react-data-table-component
```
2. Utiliza el siguiente import para incorporar los componentes necesarios en tu proyecto:
```jsx
import DataTable from "react-data-table-component";
```
Con esta solución, puedes crear tablas con funcionalidades avanzadas como paginación, ordenamiento y personalización de estilos.

---

### Diseño Responsive Chakra:
Para más detalles sobre el diseño responsivo implementado con Chakra UI, consultar el [README de Diseño Responsivo Chakra UI](https://github.com/byax2001/Notas-ReactVite-MUI-ChakraUI-CSharp-ASP.NET-SQLSERVER./tree/main/mui-frontend)



---
---

## Backend (ASP.NET Core)

### Base del proyecto

> **NOTA IMPORTANTE**: Para simplificar el proceso, se puede crear directamente el componente Web API. Esto elimina la necesidad de trabajar con múltiples proyectos. Además, al ejecutar el comando para configurar el ORM Entity Framework y conectar el backend con la base de datos, se generarán automáticamente las carpetas como `Models`, `Controllers`, entre otras, dentro del mismo componente de la API. Si se desea seguir este enfoque, se puede omitir los pasos iniciales y proceder directamente a la creación de la API y la instalación de las librerías necesarias.

1. Selecciona la opción `Nuevo Proyecto` y busca  y escoge `Biblioteca de Clases`.
2. Asigna un nombre al proyecto, define su ubicación y crea una solución (la solución será el nombre de la carpeta que se generará como backend, así como el archivo ejecutable `.sln`).
3. Hacer clic en `Crear`.
4. Crea un gitignore usando el siguiente comando en la raiz del nuevo proyecto:

```Powershell
dotnet new gitignore --force
```


### Librerias y Dependencias
---
1. Haz clic derecho sobre el proyecto en Visual Studio y selecciona `Administrar Paquetes NuGet`.
2. Ve a la pestaña `Examinar` de la nueva ventana.
3. Busca e instala las siguientes librerías para conectar con SQL Server:

```
Microsoft.Entityframeworkcore
Microsoft.Entityframeworkcore.Design
Microsoft.Entityframeworkcore.SqlServer
Microsoft.Entityframeworkcore.Tools

```
4. Para conectar SQL Server con ASP.NET a través de Entity Framework y generar clases para las tablas de la base de datos, utiliza la siguiente cadena de conexión:
- Haz clic en el menú `Herramientas` en Visual Studio.
- Selecciona `Administrador de Paquetes NuGet`.
- Abre la `Consola del Administrador de Paquetes`.
- Escribe el siguiente comando (sin los corchetes `[]` y respetando las mayúsculas y minúsculas):

  ```
  Scaffold-DbContext "Server=[Escribir_Servidor]; Encrypt=False; DataBase=[Escribir_BaseDeDatos]; Trust Server Certificate=true; User Id=[Escribir_Usuario]; Password=[Escribir_Contraseña]; MultipleActiveResultSets=true" Microsoft.EntityFrameworkCore.SqlServer -ContextDir "[Escribir_Carpeta_Contexto]" -OutPutDir "[Escribir_Carpeta_Modelos]"
  ```

- En caso de que no se utilice contraseña, el comando sería:

  ```
  Scaffold-DbContext "Server=(Elnombredetuserver); Encrypt=False; DataBase=(Nombredelabasededatosquecreaste);Integrated Security=true" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models
  ```

- Con este comando se generarán dos carpetas:
  - **Context**: Contendrá las clases de contexto.
  - **Models**: Contendrá las clases correspondientes a las tablas de la base de datos. Estas clases también pueden servir como modelos para estructurar las respuestas de los endpoints de la API (Como respuestas Json). Si la respuesta de una consulta es compleja o contiene diversos atributos, será necesario crear un nuevo modelo que refleje la estructura deseada.

- Agregar un Nuevo Modelo
   - Hacer clic derecho en la carpeta definida como **Models**.
   - Seleccionar la opción **Agregar > Clase**.
   - Asignar un nombre representativo al modelo y posteriormente hacer clic en **Agregar**.

> NOTA: Recordar cambiar la clase creada del Modelo de `internal` a `public`

### Pasos para Instalar y Configurar la API
---
La API REST, encargada de recibir y responder a las solicitudes, no se crea automáticamente al configurar un proyecto con una `Biblioteca de Clases`. Por lo tanto, debe agregarse manualmente como un proyecto adicional.

1. **Crear la API en ASP.NET Core Web API**
   - Hacer clic derecho en el proyecto.
   - Seleccionar la opción **Agregar > Nuevo Proyecto**.
   - Eligir `ASP.NET Core Web API` como tipo de proyecto.
   - Dejar las opciones por defecto y haz clic en **Crear**.

2. **Establecer la API como Proyecto de Inicio**
   - Hacer clic derecho sobre el proyecto de la API que acabas de crear.
   - Seleccionar **Establecer como proyecto de Inicio** para que Visual Studio compile y ejecute esta API al iniciar el proyecto.

3. **Agregar Referencia del Proyecto Base en la API**
   - Hacer clic derecho sobre el proyecto de la API.
   - Seleccionar **Agregar > Referencia del proyecto**.
   - Marcar el proyecto base (backend) y haz clic en **Aceptar** para agregar la referencia.

### Explicación de la API y Componentes
---

1. **Archivo `Program.cs`**
   - Este archivo es el punto de entrada donde se ejecuta la API y se configuran ajustes iniciales.

2. **Archivos de Ejemplo (`WeatherForecast.cs` y `WeatherForecastController.cs`)**
   - Estos archivos, ubicados en la carpeta `Controllers`, son ejemplos generados por defecto y es recomendable eliminarlos para mantener la estructura de la API limpia.

3. **Carpeta `Controllers`**
   - En esta carpeta se definen los controladores, los cuales establecen los endpoints de la API (los puntos de acceso o rutas de la API).

4. **Página de Swagger para Probar Endpoints**
   - Al ejecutar el backend, se abrirá la página de Swagger en `https://localhost:XXXX/swagger/index.html`. Algunos navegadores pueden alertar que esta página es riesgosa, pero Swagger es una herramienta similar a Postman que permite probar los endpoints.

   ![image](https://github.com/user-attachments/assets/305846bb-bb93-40ff-8613-2cc55a283f47)

### **Agregar un Nuevo Modelo**
- Hacer clic derecho en la carpeta definida como Models.
- Seleccionar la opción Agregar > Clase.
- Asignar un nombre representativo al modelo y posteriormente hacer clic en Agregar.

> NOTA: Recordar cambiar la clase creada del Modelo de `internal` a `public`

### **Agregar un Nuevo Controlador**
   - Hacer clic derecho en la carpeta `Controllers`, seleccionar **Agregar > Controlador**.
   - Eligir **API > Controlador de API en blanco**. Esto creará una plantilla similar a la siguiente:

   ![image](https://github.com/user-attachments/assets/2301c0c7-8efd-4f4d-bb43-72527f3d4394)

   > **Nota:** La URL de los endpoints incluirá, en este caso, `/api` seguido del nombre del controlador, de modo que las rutas se verán como `http://localhost:XXXX/api/controlador/[endpoint]`, en caso se desee que la ruta no tenga el apartado del nombre del controlador eliminar `/[controller]` para que las rutas queden como `http://localhost:XXXX/api/[endpoint]`.

### **Agregar un Nuevo Servicio**
- **Clic derecho en la carpeta para Servicios > Agregar Clase > C#**
> NOTA: Recordar cambiar la clase creada del Modelo de `internal` a `public`

### **Formas de Crear un Endpoint**

   - **Primera Forma**  
     La URL del endpoint será `http://localhost:XXXX/api/[NombreControladorSinController]/[endpoint]`.  
     En este caso, el nombre del controlador determina parte de la ruta, y el nombre del método define el segmento final.

     ```csharp
      [Route("api/[controller]")] // "api" seguido del nombre del controlador define la URL base.
      [ApiController]
      public class PruebaController : ControllerBase
      {
         [HttpGet("prueba")] // Define el endpoint como "http://localhost:XXXX/api/Prueba/prueba"
         public string prueba()
         {
            return "Hola Mundo";
         }
      }
     ```

   - **Segunda Forma**  
     En esta forma, la URL del endpoint es más personalizada, eliminando la dependencia del nombre del controlador. La URL será `http://localhost:XXXX/api/[endpoint]`.

     ```csharp
      [Route("api")] // Define una ruta fija, independiente del nombre del controlador.
      [ApiController]
      public class PruebaController : ControllerBase
      {
         [HttpGet("prueba")]// Define el endpoint como "http://localhost:XXXX/api/prueba"
         public string prueba()
         {
            return "Hola Mundo";
         }
      }
     ```
> **Nota:** En ambos casos, se puede ajustar las rutas según las necesidades utilizando atributos como `[Route]` y `[HttpGet]`. Recordar que "api" es un prefijo común para diferenciar los endpoints de la API.

7. **Verificación de Endpoints a Través de Swagger**
   - Se puede consultar todos los endpoints de la API en la página generada automáticamente por Visual Studio al ejecutar la API.

   ![image](https://github.com/user-attachments/assets/9196c355-7e5d-422a-a5e0-66f584e76698)

   > **Nota:** Si no seve el botón **Execute** en la página de Swagger, hacer clic en **Try out** para habilitar la opción de prueba.


### Configuración de CORS en la API

Para habilitar CORS (Cross-Origin Resource Sharing) en tu API, sigue estos pasos:

1. Abre el archivo `Program.cs` de tu proyecto API.

2. Agrega las siguientes líneas de código para configurar y habilitar CORS:

   ```csharp
   // Configuración de CORS
   builder.Services.AddCors(policyBuilder => policyBuilder.AddDefaultPolicy
      (policy => policy.WithOrigins("*").AllowAnyHeader().AllowAnyMethod()));

   app.UseCors(); // Habilitar CORS
   ```
3.El archivo `Program.cs` debe quedar de la siguiente manera:

```csharp
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Configuracion de CORS
builder.Services.AddCors(policyBuilder => policyBuilder.AddDefaultPolicy
    (policy => policy.WithOrigins("*").AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(); //Habilitar CORS

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
```
>NOTA: El valor "*" permite el acceso desde cualquier origen. Si se desea limitar los orígenes permitidos, se debe de reemplazar con un listado específico de URLs. Por ejemplo: .WithOrigins("https://example.com", "https://anotherexample.com").
---

### APPSetting y Variables de Entorno
Las variables de entorno se configuran en el archivo `appsettings.json`. Aquí se definen parámetros clave que la aplicación necesita para funcionar, como cadenas de conexión, configuraciones de servicios y valores sensibles como claves secretas o tokens. 

![AppSetting](https://github.com/user-attachments/assets/ce1c6f12-2a4d-445b-80f7-7df1e173a0ef)

Un ejemplo típico es:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=mi_base_de_datos;User Id=usuario;Password=contraseña;"
  },
  "JwtSettings": {
    "SecretKey": "clave_secreta_muy_segura",
    "Issuer": "https://miapi.com",
    "Audience": "https://miapi.com"
  }
}
```




---

## JWT

El sistema JWT asegura que los endpoints de la API sean accesibles únicamente para usuarios autenticados mediante un proceso de login, otorgando un token que será validado en cada solicitud.

### Variables de Entorno para los Tokens

1. **Crear una llave privada**  
   Genera una clave privada, preferiblemente un texto complejo difícil de deducir, como un hash SHA-256. Puedes usar la herramienta [Online Converter](https://hash.online-convert.com/es/generador-sha256) para convertir un texto en un hash. Copia el resultado hexadecimal y úsalo como clave secreta. Ejemplo:  
   ```json
   "SecretKey": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
   ```

2. **Issuer**  
   Define la URL base donde se están publicando las APIs. Esto identifica el emisor del token. Ejemplo:  
   ```json
   "Issuer": "http://localhost:7200"
   ```

3. **Audience**  
   Indica el público objetivo que puede usar los tokens emitidos. Esto asegura que el token sea válido solo para las aplicaciones o servicios permitidos. Ejemplo:  
   ```json
   "Audience": "http://localhost:7200"
   ```

4. **Subject**  
   Define el propósito o el contexto del token, indicando su uso principal en la aplicación. Puede ser útil para identificar el alcance del token. Ejemplo:  
   ```json
   "Subject": "Autenticación de usuarios"
   ```
---

### Instalacion de Paquetes para JWT

Para el correcto funcionamiento del sistema JWT se deben instalar los siguientes paquetes mediante NuGet:

1. **Microsoft.AspNetCore.Authentication.JwtBearer**: Para manejar la autenticación basada en JWT de modo que sus metodos permitiran construir un filtro que identificara si un token es valido o no en el archivo `Program.cs`.  
2. **Microsoft.Extensions.Configuration.Binder**: Para acceder a configuraciones desde `appsettings.json`, las cuales serian variables de ambiente.  
3. **Microsoft.EntityFrameworkCore.Tools** (si aún no se ha instalado).  
4. **Newtonsoft.Json**: Para trabajar con JSON de forma mas simple.  
5. **Swashbuckle.AspNetCore** y **Swashbuckle.AspNetCore.Swagger**: Para generar documentación Swagger.  

---

### Filtro para Validacion de Tokens
En la sección de construcción del builder en el archivo `Program.cs`, antes de ejecutar `builder.Build()`, se deben agregar los servicios de autenticación y definir los parámetros de validación de tokens. El código a incluir es el siguiente:

```csharp
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
    options =>
    {
        options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
        {
            ValidateIssuer = true, // Habilita la validación del emisor del token.
            ValidateAudience = true, // Habilita la validación del público objetivo del token.
            ValidateLifetime = true, // Verifica si el token ha expirado.
            ValidateIssuerSigningKey = true, // Valida la clave utilizada para firmar el token.
            ValidIssuer = builder.Configuration["Jwt:Issuer"], // Configura el emisor válido, obtenido del archivo appsettings.json.
            ValidAudience = builder.Configuration["Jwt:Audience"], // Configura el público válido, obtenido del archivo appsettings.json.
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])) // Define la clave secreta.
        };
    });
```



 A través de builder.configuration se obtienen las variables de ambiente configuradas en archivo `appsettings.json` necesarias para la configuración del JWT. Un ejemplo del contenido requerido es:

```json
{
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft.AspNetCore": "Warning"
        }
    },
    "AllowedHosts": "*",
    "Jwt": {
        "Key": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", // Clave secreta para firmar el token.
        "Issuer": "https://localhost:7085", // Emisor del token.
        "Audience": "https://localhost:7085", // Público objetivo del token.
        "Subject": "apiWebJWT" // Contexto del token, puede ser útil para identificar su propósito.
    }
}
```
Para que la autenticación JWT sea efectiva, se debe habilitar en la canalización de middleware de la aplicación. Esto se realiza agregando el siguiente código entre `app.UseHttpsRedirection()` y `app.UseAuthorization()`:

```csharp

app.UseHttpsRedirection();

app.UseAuthentication(); //<-----------

app.UseAuthorization();

```

- **`app.UseAuthentication()`**: Habilita el middleware que verifica las credenciales enviadas por el cliente. Es necesario para validar los tokens JWT en cada solicitud.

- **`app.UseAuthorization()`**: Se encarga de validar que el usuario autenticado tenga los permisos necesarios para acceder a un recurso específico.
---

### Creacion de Tokens

La generación de un token JWT (JSON Web Token) es un proceso central en la autenticación y autorización de aplicaciones web. En este caso la clase `TokenJwtDAO` se encarga de generar un token JWT utilizando las configuraciones definidas en el archivo `appsettings.json`. Esta clase incluye:

- **Dependencias principales**: 
  - **`IConfiguration`**: Permite acceder a los valores de configuración.
  - **`Profesor`**: Representa al usuario autenticado, cuyos datos se incluirán como *claims* en el token.
  - **`Jwt`**: Modelo creado para estructurar las variable definida en `appsettings.json`.

**Definición del modelo `Jwt`:**

```csharp
namespace backend.Models
{
    // Modelo para simplificar el acceso a configuraciones JWT
    public class Jwt
    {
        public string Key { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public string Subject { get; set; }
    }
}
```
**Código de la Clase `TokenJwtDAO`:**

```csharp
public class TokenJwtDAO
{
    private IConfiguration iconfiguration;
    private Profesor profesor;
    public TokenJwtDAO(IConfiguration configuration, Profesor _profesor) {
        iconfiguration = configuration;
        profesor = _profesor;
    }

    public string GetToken()
    {
        // Para hacer esto es necesario instalar la librería Microsoft.Extensions.Configuration.Binder
        // La cual permite acceder a los datos del appsettings.json desde cualquier parte del proyecto
        var jwt = iconfiguration.GetSection("Jwt").Get<Jwt>();
        Console.WriteLine("LA KEY ES: ");
        Console.WriteLine(jwt.Key);
        var claims = new[]{
            new Claim(JwtRegisteredClaimNames.Sub,jwt.Subject), // OPCIONAL
            new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()), // OPCIONAL
            new Claim(JwtRegisteredClaimNames.Iat,DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64), // OPCIONAL
            // Lo siguiente es para agregar un claim personalizado
            new Claim("usuario",profesor.Usuario), 
        };
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key)); 
        var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: jwt.Issuer, // OPCIONAL
            audience: jwt.Audience, // OPCIONAL
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(30), // El token expira en 30 minutos
            signingCredentials: signIn
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
```
- **Claims**: 
  - Los *claims* son declaraciones sobre una entidad (por ejemplo, un usuario). Pueden incluir información estándar como:
    - `JwtRegisteredClaimNames.Sub`: Identificador del sujeto del token.
    - `JwtRegisteredClaimNames.Jti`: Identificador único del token.
    - `JwtRegisteredClaimNames.Iat`: Marca temporal que indica cuándo fue emitido el token.
  - También pueden definirse *claims* personalizados, como `"usuario"`, que representa un atributo del usuario autenticado.

- **Key (`jwt.Key`)**:
  - Es la clave secreta utilizada para firmar el token. Debe mantenerse segura y se configura en el archivo `appsettings.json`.
  - Ejemplo en `appsettings.json`:
    ```json
    {
        "Jwt": {
            "Key": "clave_secreta_12345",
            "Issuer": "https://localhost:7085",
            "Audience": "https://localhost:7085",
            "Subject": "apiWebJWT"
        }
    }
    ```

- **SymmetricSecurityKey**: Utiliza la clave secreta (`jwt.Key`) para garantizar la integridad del token.
- **SigningCredentials**: Define el algoritmo de firma utilizado para proteger el token. En este caso, se utiliza `HmacSha256`.
- **Tiempo de Expiración (`expires`)**: Define cuánto tiempo será válido el token antes de expirar. En el ejemplo, se establece en 30 minutos.
- **Instancia del Token**: Se genera utilizando `JwtSecurityToken` y se escribe como una cadena de texto utilizando `JwtSecurityTokenHandler`.


---

### Proteccion de Rutas con JWT
Para proteger los endpoints, utiliza el atributo `[Authorize]`. Este atributo valida automáticamente si el token enviado en la solicitud es válido. Si no lo es, devuelve un error 401.

**Ejemplo:**

```csharp
[Authorize] // Este endpoint solo será accesible si el usuario proporciona un token válido.
[HttpGet("infoalumno")]
public Alumno InfoAlumno(int id)
{
    var alumno = alumnoDAO.seleccionarAlumno(id);
    return alumno;
}
```

- **[Authorize]** Permite proteger recursos específicos para que solo sean accesibles por usuarios autenticados.

- No se debe aplicar **[Authorize]** en endpoints que sean públicos, como los de login o registro, ya que impediría a los usuarios no autenticados acceder a ellos.

--- 

### Leer y Manipular Token en Backend

### Extraer Token del Header Authorization

Antes de construir la aplicación (`var app = builder.Build()`), es necesario agregar la siguiente configuración en el archivo `Program.cs`:

```csharp
builder.Services.AddHttpContextAccessor(); //Para poder acceder al HttpContext desde cualquier parte del proyecto
```
En el controlador donde se desee obtener el token, agregar lo siguiente:

```csharp
public IHttpContextAccessor httpContext;

public NameController(IHttpContextAccessor _httpContext)
{
    httpContext = _httpContext;
}

```
Dentro de cada endpoint donde se desea utilizar, obtener el token como string con el siguiente código:

```csharp
var token = httpContext.HttpContext.Request.Headers["Authorization"].FirstOrDefault();
```
### Manipular Token
#### Limpiar el token
Para eliminar el prefijo "Bearer " del token:

```csharp
 public string getTokenAuth()
 {
     if (!string.IsNullOrEmpty(token) && token.StartsWith("Bearer "))
     {
         return token.Replace("Bearer ", "");
     }
     throw new UnauthorizedAccessException("Token no válido o no proporcionado.");
 }
```
---

#### Extraer informacion del token
Para extraer el usuario del token:

```csharp
 public string getUsuario()
 {
     try
     {
         var token = getTokenAuth();
         var tokenHandler = new JwtSecurityTokenHandler();
         if (tokenHandler.CanReadToken(token))
         {
             var jwtToken = tokenHandler.ReadJwtToken(token);
             var usuarioClaim = jwtToken.Claims.FirstOrDefault(c => c.Type == "usuario");
             return usuarioClaim?.Value ?? throw new UnauthorizedAccessException("Usuario no encontrado en el token.");
         }
         throw new UnauthorizedAccessException("Token inválido.");
     }
     catch (Exception ex)
     {
         throw new UnauthorizedAccessException("Error al procesar el token.", ex);
     }
 }
```

---
### Uso de Newtonsoft.Json para manejo de JSON de forma sencilla

Con `JSON Convert`, la toma de variables en una petición común se realizaría de la siguiente manera:

```csharp
[HttpPost("login")]
public string Login([FromBody] JObject profesor)
{
    var prof = profesorDAO.Login(profesor.Usuario, profesor.Pass);
    if (prof != null)
    {
        return prof.Usuario;
    }
    return "no existe";
}
```
Para utilizar `JObject`, se debe agregar la librería `Newtonsoft.Json`. Se puede instalar esta librería desde el `NuGet Package Manager`.

---



### Errores de Versiones y Actualizacion del Backend

En el caso de que el backend esté dando errores de versión, o ya no se puedan instalar librerías en NuGet porque la versión .NET del proyecto está desactualizada, realiza lo siguiente:

1. Verificar si no hay alguna actualización nueva por realizar en Visual Studio a través de la opción `Ayuda` > `Buscar Actualizaciones`.

2. **Instalar el Upgrade Assistant**  
   Desarrollado por Microsoft para actualizar proyectos de una versión .NET antigua a una actual:
   - Ingresar el siguiente comando en la terminal de `Herramientas` > `Administrador de Paquetes NuGet` > `Consola de Administrador de Paquetes`:
      ```powershell
      dotnet tool install -g upgrade-assistant
      ```
   - Abrir PowerShell y navegar al directorio central del proyecto (hacer clic derecho en la solución > `Abrir en explorador`).
   - Dependiendo de cuántos paquetes existan, realizar el siguiente procedimiento (en este caso hay 3):
      ![PaquetesProyecto](https://github.com/user-attachments/assets/e498eedc-2242-49f2-b56c-c41caea2671a)
      1. Ingresar al directorio del paquete.
      2. Escribir `ls` y revisar el contenido, busca el archivo con la extensión `.csproj`.
      3. Escribir el siguiente comando:
         ```powershell
         upgrade-assistant upgrade .\name_paquete.csproj
         ```
      4. Aparecerá el siguiente menú:
         ![MenuUpgrade](https://github.com/user-attachments/assets/fadfc0d1-238e-49ce-a863-b692386a0c33)
      5. Escoger la opción `framework.inplace` y luego escribir la tecla "y" y presionar Enter. Dejar que el proceso continúe, realizar esto con cada paquete que exista.