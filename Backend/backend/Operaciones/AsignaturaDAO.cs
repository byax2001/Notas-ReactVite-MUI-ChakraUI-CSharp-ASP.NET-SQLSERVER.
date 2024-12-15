using backend.Context;
using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Operaciones
{
    public class AsignaturaDAO
    {
        CalificacionesPContext context = new CalificacionesPContext();

        //Obtener todas las asignaturas que posee un profesor
        public List<Asignatura> getAsignaturas(string profesor)
        {
            var asignaturas = context.Asignaturas.Where(a => a.Profesor == profesor).ToList<Asignatura>();
            return asignaturas;
        }
    }
}
