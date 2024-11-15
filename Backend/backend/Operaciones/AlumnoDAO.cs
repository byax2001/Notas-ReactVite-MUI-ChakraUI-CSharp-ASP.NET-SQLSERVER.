using backend.Context;
using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Operaciones
{
    public class AlumnoDAO
    {
        public CalificacionesPContext context = new CalificacionesPContext();
        //Obtener todos los alumnos
        public List<Alumno> SeleccionarTodos()
        {
            var alumnos = context.Alumnos.ToList<Alumno>();
            return alumnos;

        }
        //Seleccionar un alumno por id
        public Alumno seleccionarAlumno(int id)
        {
            var alumno = context.Alumnos.Where(alumno => alumno.Id == id).FirstOrDefault();
            return alumno;
        }
        //Seleccionar un alumno por DNI
        public Alumno seleccionarAlumnoPorDNI(string dni)
        {
            var alumno = context.Alumnos.Where(alumno => alumno.Dni == dni).FirstOrDefault();
            return alumno;
        }
        //Insertar un alumno
        public Boolean InsertarAlumno(string dni, string nombre, string direccion, int edad, string email)
        {
            try
            {
                Alumno a = new Alumno();
                a.Dni = dni;
                a.Nombre = nombre;
                a.Direccion = direccion;
                a.Edad = edad;
                a.Email = email;
                context.Alumnos.Add(a);
                context.SaveChanges();//Guardar Estado de tabla luego de Inserción
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        //Actualizar información de un alumno
        public Boolean ActualizarAlumno(int id, string dni, string nombre, string direccion, int edad, string email)
        {
            try
            {
                Alumno a = seleccionarAlumno(id);
                if (a != null)
                {
                    // Utilizando operador ternario para verificar si los campos no son nulos
                    a.Dni = !string.IsNullOrEmpty(dni) ? dni : a.Dni;
                    a.Nombre = !string.IsNullOrEmpty(nombre) ? nombre : a.Nombre;
                    a.Direccion = !string.IsNullOrEmpty(direccion) ? direccion : a.Direccion;
                    a.Edad = edad > 0 ? edad : a.Edad;

                    // Verificar si el email no es nulo, si no es nulo se asigna a la variable a.Email
                    // Usando if sin corchetes
                    if (!string.IsNullOrEmpty(email))
                        a.Email = email;

                    // Guardar cambios en la base de datos
                    context.SaveChanges();
                    return true;
                }
                return false;

            }
            catch (Exception ex)
            {
                return false;
            }
        }
        //Eliminar un alumno
        public Boolean eliminarAlumno(int id)
        {
            try
            {
                Alumno a = seleccionarAlumno(id);
                if (a != null)
                {
                    var matriculas = context.Matriculas.Where(m => m.AlumnoId.Equals(id));
                    // se proceden a eliminar las notas de las matriculas
                    foreach (Matricula m in matriculas)
                    {
                        var calificaciones = context.Calificacions.Where(c => c.MatriculaId == m.Id);
                        //con RemoveRange se pueden eliminar varios elementos a la vez de una tabla los cuales se encuentran en una lista
                        context.Calificacions.RemoveRange(calificaciones);
                        context.SaveChanges();
                    }
                    // se procede a eliminar las matriculas
                    context.Matriculas.RemoveRange(matriculas);
                    context.SaveChanges();
                    // se procede a eliminar el alumno
                    context.Alumnos.Remove(a);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        //Obtener todas las asignaturas de cada alumno
        public List<AlumnoAsignatura> alumnoAsignaturas()
        {
            /*
                El siguiente codigo emula este script:
                select a.nombre, asig.nombre, asig.creditos from alumno a
                inner join matricula m on m.alumnoId = a.id
                inner join asignatura asig on m.asignaturaId = asig.id;
             */
            var query = from alumno in context.Alumnos
                        join matricula in context.Matriculas on alumno.Id equals matricula.AlumnoId
                        join asignatura in context.Asignaturas on matricula.AsignaturaId equals asignatura.Id
                        select new AlumnoAsignatura
                        {
                            NombreAlumno = alumno.Nombre,
                            NombreAsignatura = asignatura.Nombre
                        };
            return query.ToList();
        }
        //Obtener todos los alumnos de un profesor
        public List<AlumnosProfesor> alumnosPorProfesor(string user)
        {
            var alumnos = from a in context.Alumnos
                          join m in context.Matriculas on a.Id equals m.AlumnoId
                          join asig in context.Asignaturas on m.AsignaturaId equals asig.Id
                          where asig.Profesor == user
                          select new AlumnosProfesor // Aqui se crea el objeto de tipo AlumnosProfesor
                          {
                              Id = a.Id,
                              Dni = a.Dni,
                              Nombre = a.Nombre,
                              Direccion = a.Direccion,
                              Edad = a.Edad,
                              Email = a.Email,
                              Asignatura = asig.Nombre
                          }; // Sera como una tabla respuesta de la consulta y para este caso sera parte de la respuesta json

            return alumnos.ToList();

        }
        //Matricular un alumno a una asignatura, si el alumno no existe se crea
        public Boolean crear_Matricular(string dni, string nombre, string direccion, int edad, string email, int asignaturaId)
        {

            
            try
            {
                Alumno a = seleccionarAlumnoPorDNI(dni);
                if (a == null)
                {
                    InsertarAlumno(dni, nombre, direccion, edad, email);
                    a = seleccionarAlumnoPorDNI(dni);
                }
                //Matricular
                Matricula m = new Matricula();
                m.AlumnoId = a.Id;
                m.AsignaturaId = asignaturaId;
                context.Matriculas.Add(m);
                context.SaveChanges();

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }

    
}
