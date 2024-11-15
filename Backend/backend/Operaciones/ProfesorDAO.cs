using backend.Context;
using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Operaciones
{
    public class ProfesorDAO
    {
        public CalificacionesPContext context = new CalificacionesPContext();
        public Profesor login(string user, string pass)
        {
            var profesor = context.Profesors.Where(profesor => profesor.Usuario == user && profesor.Pass == pass).FirstOrDefault();
            return profesor;
        }
    }
}
