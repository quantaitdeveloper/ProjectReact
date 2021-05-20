import Home from "./components/Home";
import ProductList from "./components/productlist/ProductList";


export const routes= [
    {
        path : "/home",
        component : Home,
        exact : true
    },
    {
        path : "/products",
        component : ProductList ,
        exact : true
    },
   
]