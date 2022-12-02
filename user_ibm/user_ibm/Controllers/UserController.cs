using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net;
using Microsoft.AspNetCore.Cors;

namespace user_ibm.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        
        UserAll _obj = new UserAll();

        private string Alljson()
        {
            string jsonString = "";
            string url = @"https://jsonplaceholder.typicode.com/users";
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            Stream stream =  response.GetResponseStream();
            using (StreamReader reader = new StreamReader(stream))
            {
                var json = reader.ReadToEnd();
               
                jsonString=json;
            }
            
            return jsonString;
        }
        
        [HttpGet]
        [Route ("AllUser")]
        public UserAll[] UserGet()
        {

            List<UserAll> alluser =  JsonConvert.DeserializeObject<List<UserAll>>(Alljson()); 
            

            return alluser.ToArray();
        }
    }
}
