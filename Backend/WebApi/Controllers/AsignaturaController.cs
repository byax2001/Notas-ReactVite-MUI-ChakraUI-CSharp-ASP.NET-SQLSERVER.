using backend.Models;
using backend.Operaciones;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class AsignaturaController : ControllerBase
    {
        AsignaturaDAO asignaturaDAO = new AsignaturaDAO();
        public IHttpContextAccessor httpContext;
        public AsignaturaController(IHttpContextAccessor _httpContext)
        {
            httpContext = _httpContext;
        }

        [Authorize]
        [HttpGet("asign")]
        public List<Asignatura> GetAsignaturas()
        {
            try { 
                var token = httpContext.HttpContext.Request.Headers["Authorization"].FirstOrDefault();
                var usuario = new TokenJwtDAO(token).getUsuario();
                var asignaturas = asignaturaDAO.getAsignaturas(usuario);
                return asignaturas;
            }
            catch(Exception e)
            {
                return [];
            }
        }

    }
}
