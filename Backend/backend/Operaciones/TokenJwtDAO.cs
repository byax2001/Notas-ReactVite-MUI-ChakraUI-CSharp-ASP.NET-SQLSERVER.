using backend.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace backend.Operaciones
{
   
    public class TokenJwtDAO
    {
        private IConfiguration iconfiguration;
        private Profesor profesor;
        public TokenJwtDAO(IConfiguration configuration, Profesor _profesor) {
            iconfiguration = configuration;
            profesor = _profesor;
        }

        public string GetToken()
        {
            //Para hacer esto es necesario instalar la libreria Microsoft.Extensions.Configuration.Binder
            //La cual permite acceder a los datos del appsettings.json desde cualquier parte del proyecto
            var jwt = iconfiguration.GetSection("Jwt").Get<Jwt>();
            Console.WriteLine("LA KEY ES: ");
            Console.WriteLine(jwt.Key);
            var claims = new[]{
                new Claim(JwtRegisteredClaimNames.Sub,jwt.Subject), //OPCIONAL
                new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()), //OPCIONAL
                new Claim(JwtRegisteredClaimNames.Iat,DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64), //OPCIONAL
                //Lo siguiente es para agregar un claim personalizado, se puede agregar lo que se considere necesario
                new Claim("usuario",profesor.Usuario),
                //Se pueden agregar más claims si se considera necesario
                
            };
            //jwt.Key es la llave que se encuentra en el appsettings.json y que se proporciona para la creación del token
            //esta key se creo manualmente y se puede cambiar por cualquier otra
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            
            var token = new JwtSecurityToken(
                issuer: jwt.Issuer, //OPCIONAL
                audience: jwt.Audience, //OPCIONAL
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(30), //El token expira en 30 minutos, es opcional
                signingCredentials: signIn
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}
