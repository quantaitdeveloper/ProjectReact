import Home from "./home";
import Product from "./products"
import Services from "./services";
const Routes =[  
    {
        path:"/",
        component : Home,
        exact :false
    },
    {
        path :"/product",
        exact :true ,
        component: Product,
    },
    {
        path:"/services",
        component : Services,
        exact :true
    }
   
]

 export default Routes; 