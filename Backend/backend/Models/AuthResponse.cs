using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Models
{
    public class AuthResponse
    {

        public AuthResponse(bool _status, string _token) {
            status = _status;
            token = _token;
        }
        public bool status { get; set; }
        public string token { get; set; }
    }
}
