// See https://aka.ms/new-console-template for more information
using backend.Operaciones;

Console.WriteLine("Hello, World!");
AlumnoDAO alumnos = new AlumnoDAO();

// Prueba de select * from Alumnos
var allalumnos = alumnos.SeleccionarTodos();
foreach (var alumno in allalumnos)
{
    Console.WriteLine(alumno.Nombre);
}

// Prueba select * from alumnos where id = ?
var alumnoSelect = alumnos.seleccionarAlumno(15);
if(alumnoSelect != null)
{
    Console.WriteLine("\n" + alumnoSelect.Nombre.ToString());
}
else
{
    Console.WriteLine("\nNo existe dicho alumno");
}

// Prueba de inserción
/*
if (alumnos.InsertarAlumno("405A", "Josue", "Amatitlan", 18, "jsoue@gmail.com"))
{
    Console.WriteLine("Se realizo la inserción correctamente");
}
else
{
    Console.WriteLine("La inserción fallo al realizarse");
}
*/

// Prueba de actualización
/*
if (alumnos.ActualizarAlumno(15, "405A", "Josue", "Amatitlan", 18, "josue@gmail.com"))
{
    Console.WriteLine("Se realizo la actualización correctamente");
}
else
{
    Console.WriteLine("La actualización fallo al realizarse");
}
*/

// Prueba de actualización con campos nulos
/*
if (alumnos.ActualizarAlumno(15, "405A", "Josue", "Amatitlan", 18,""))
{
    Console.WriteLine("Se realizo la actualización correctamente");
}
else
{
    Console.WriteLine("La actualización fallo al realizarse");
}
*/

// Prueba de eliminación
/*
if (alumnos.eliminarAlumno(15))
{
    Console.WriteLine("Se realizo la eliminación correctamente");
}
else
{
    Console.WriteLine("La eliminación fallo al realizarse");
}
*/

// Prueba de inner join
var alumnosAsignaturas = alumnos.alumnoAsignaturas();
foreach (var alumnoAsignatura in alumnosAsignaturas)
{
    Console.WriteLine(alumnoAsignatura.NombreAlumno + " " + alumnoAsignatura.NombreAsignatura);
}