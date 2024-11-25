using backend.Models;
using backend.Operaciones;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    //[Route("api/[controller]")] de preferencia eliminar el [controller] para que la url sea http://localhost:XXXX/api/endpoints
    [Route("api")]
    [ApiController]
    public class ProfesorController : ControllerBase
    {
        // Crear una instancia de ProfesorDAO para poder utilizar sus métodos
        ProfesorDAO profesorDAO = new ProfesorDAO();

        [HttpPost("login")]
        public string login([FromBody] Profesor profesor)
        {
            var prof = profesorDAO.login(profesor.Usuario, profesor.Pass);
            if(prof != null)
            {
                return prof.Nombre;
            }
            return null;
        }
    }
}
