using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Models
{
    public class AlumnoAsignatura
    {
        // Esto sera util para una consulta inner join
        // Seleccionar el nombre del alumno y el nombre de la asignatura
        // los modelos entonces sirven para hacer consultas mas complejas y no solo para insertar, actualizar, eliminar y seleccionar
        // por lo tanto los modelos son una representación de la tabla resultante de una consulta
        // en donde cada atributo del modelo es una columna de la tabla resultante
        public string NombreAlumno { get; set; }
        public string NombreAsignatura { get; set; }
    }
}
