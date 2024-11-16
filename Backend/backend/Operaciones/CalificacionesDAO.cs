using backend.Context;
using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Operaciones
{
    public class CalificacionesDAO
    {
        CalificacionesPContext context = new CalificacionesPContext();
        //Obtener todas las calificaciones de una matricula
        public List<Calificacion> GetCalificaciones(int idmatricula)
        {
            var calificaciones = context.Calificacions.Where(c => c.MatriculaId.Equals(idmatricula)).ToList();
            return calificaciones;
        }

        //Ingresar una calificacion
        public Boolean InsertarCalificacion(Calificacion calificacion)
        {
            
            try
            {
                context.Calificacions.Add(calificacion);
                context.SaveChanges();
                return true;
            }catch (Exception ex)
            {
                return false;
            }
        }

        //Eliminar una calificacion
        public Boolean EliminarCalificacion(int id)
        {
            try
            {
                var calificacion = context.Calificacions.Where(c=> c.Id.Equals(id)).FirstOrDefault();
                if (calificacion != null)
                {
                    context.Calificacions.Remove(calificacion);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
            catch(Exception ex)
            {
                return false;
            }
        }

    }
}
