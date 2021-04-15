import Home from "./home";
import About from "./about"
import Login from "./login";
const Routes =[
    {
        path :"/home",
        component :Home,
        exact :true ,
    },
    {
        path :"/about",
        component: About,
    },
    {
        path:"/",
        component : Login,
        exact :true
    }
]

 export default Routes; 