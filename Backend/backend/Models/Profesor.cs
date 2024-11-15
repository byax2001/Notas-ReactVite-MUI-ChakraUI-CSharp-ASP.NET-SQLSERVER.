using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Profesor
{
    public string Usuario { get; set; } = null!;

    public string Pass { get; set; } = null!;

    public string? Nombre { get; set; } = null!;//Con el signo de interrogación colocado después del tipo de dato, se indica que el campo puede ser nulo
                                                //Esto sirve para crear elementos Profesor sin necesidad de asignar un valor a este campo
                                                //Por ejemplo para un login solo se necesita el usuario y la contraseña y este campo no es necesario
    public string? Email { get; set; } = null!;

    public virtual ICollection<Asignatura> Asignaturas { get; set; } = new List<Asignatura>();
}
