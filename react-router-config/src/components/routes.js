import Home from "./home";
import About from "./about"

import Services from "./services";
const Routes =[  
    {
        path:"/",
        component : Home,
        exact :false
    },
    {
        path :"/about",
        exact :true ,
        component: About,
    },
    {
        path:"/services",
        component : Services,
        exact :true
    }
   
]

 export default Routes; 