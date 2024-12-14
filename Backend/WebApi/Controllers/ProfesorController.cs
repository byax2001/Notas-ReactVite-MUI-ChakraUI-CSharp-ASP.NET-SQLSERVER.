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
        public IConfiguration _configuration;

        public ProfesorController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Crear una instancia de ProfesorDAO para poder utilizar sus métodos
        ProfesorDAO profesorDAO = new ProfesorDAO();

        [HttpPost("login")]
        public AuthResponse login([FromBody] Profesor profesor)
        {
            var prof = profesorDAO.login(profesor.Usuario, profesor.Pass);
            if(prof != null)
            {
                string token = new TokenJwtDAO(_configuration, prof).GetToken();
                return new AuthResponse(_status: true, _token: token);
            }
            return new AuthResponse(_status: false, _token: "credenciales incorrectas");
        }

        // Con JSON Convert la toma de variables seria de la siguiente manera 
        // [HttpPost("login")]
        // public string login([FromBody] JObject profesor)
        // {
        //     var prof = profesorDAO.login(profesor.Usuario, profesor.Pass);
        //     if(prof != null)
        //     {
        //         return prof.Usuario;
        //     }
        //     return "no existe";
        // }
        // Para usar JObject se debe agregar la libreria Newtonsoft.Json, dicha librera se puede agregar desde el NuGet Package Manager

    }
}
