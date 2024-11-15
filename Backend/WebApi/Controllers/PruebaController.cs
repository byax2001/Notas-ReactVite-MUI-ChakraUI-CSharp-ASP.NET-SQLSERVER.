using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")] //"api" acompaña el nombre del controlador de modo que las url seran http://localhost:XXXX/api/[endpoint]
    [ApiController]
    public class PruebaController : ControllerBase
    {
        [HttpGet()]
        public string Prueba()
        {
            return "Hola Mundo";
        }
    }
}
