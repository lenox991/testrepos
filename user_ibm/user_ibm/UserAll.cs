using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace user_ibm
{
    public class UserAll
    {
        public int id { get; set; }
        public string name { get; set; }
        public string username { get; set; }
        public string email { get; set; }
       
        public addres address { get; set; }

       public string phone { get; set; }
       public string website { get; set; }
       public company1 company { get; set; }
       
        public class company1
        {
            public string name { get; set; }
            public string catchPhrase { get; set; }
            public string bs { get; set; }
        }

        public class addres
        {
                      
            public string street { get; set; }
            public string suite { get; set; }
            public string city { get; set; }
            public string zipcode { get; set; }
            public geolocad geo { get; set; }

            public class geolocad
            {
                public string lat { get; set; }
                public string lng { get; set; }
            }
        }
    }
}
