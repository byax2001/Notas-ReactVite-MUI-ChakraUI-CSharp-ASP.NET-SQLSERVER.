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
        public List<Alumno> SeleccionarTodos()
        {
            var alumnos = context.Alumnos.ToList<Alumno>();
            return alumnos;

        }

        public Alumno seleccionarAlumno(int id)
        {
            var alumno = context.Alumnos.Where(alumno => alumno.Id == id).FirstOrDefault();
            return alumno;
        }

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

        public Boolean eliminarAlumno(int id)
        {
            try
            {
                Alumno a = seleccionarAlumno(id);
                if (a != null)
                {
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

        public List<AlumnoAsignatura> alumnoAsignaturas()
        {
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

    }

    
}
