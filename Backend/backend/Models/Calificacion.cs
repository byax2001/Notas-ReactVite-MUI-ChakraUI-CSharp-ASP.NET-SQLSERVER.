using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Calificacion
{
    public int Id { get; set; }

    public string Descripcion { get; set; } = null!;

    public float Nota { get; set; }

    public int Porcentaje { get; set; }

    public int MatriculaId { get; set; }
    //Esta variable es para la relación con la tabla Matricula, es decir, una calificación pertenece a una matrícula
    //y una matrícula tiene muchas calificaciones, por lo que se usa el signo de interrogación para indicar que puede ser nulo
    // los campos importantes se encuentran arriba
    public virtual Matricula? Matricula { get; set; } = null!;
}
