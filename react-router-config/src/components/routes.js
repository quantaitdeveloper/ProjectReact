import Home from "./home";
import About from "./about"
const Routes =[
    {
        path :"/home",
        component :Home,
        exact :true ,
    },
    {
        path :"/about",
        component: About,
    }
]

 export default Routes; 