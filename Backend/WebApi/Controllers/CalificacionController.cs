using backend.Models;
using backend.Operaciones;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class CalificacionController : ControllerBase
    {
        //Declarar el objeto que contiene los metodos a utilizar en el controlador
        CalificacionesDAO caliDAO = new CalificacionesDAO();



        //Obtener todas las calificaciones de una matricula (Tareas, Ejercicios, Examenes, etc)
        [Authorize] //Solo se puede acceder a este metodo si se tiene un token valido
        [HttpGet("calificaciones")]
        public List<Calificacion> calificacions(int idmatricula)
        {
            return caliDAO.GetCalificaciones(idmatricula);
        }

        //Ingresar una calificacion
        [Authorize] //Solo se puede acceder a este metodo si se tiene un token valido
        [HttpPost("calificaciones")]
        public Boolean ingresarCalificacion([FromBody] Calificacion calificacion)
        {
            return caliDAO.InsertarCalificacion(calificacion);
        }
        //eliminar una calificacion
        [HttpDelete("calificaciones")]
        [Authorize] //Solo se puede acceder a este metodo si se tiene un token valido
        public Boolean eliminarCalificacion(int id)
        {
            return caliDAO.EliminarCalificacion(id);
        }
    }
}
