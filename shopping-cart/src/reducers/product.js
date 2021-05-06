const initialState = [
    {
        id : 1,
        name :"Iphone X",
        image:"https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
        discription :"Made by Apple",
        price : 1000 ,  
        inventory :10 ,
        rating :4 
    },
    {
        id : 2,
        name :"Samsung Galaxy S21 Ultra",
        image:"https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-den-600x600-1-200x200.jpg",
        discription :"Made by Samsung",
        price : 1200 ,  
        inventory :15 ,
        rating :3
    },
    {
        id : 3,
        name :"LG V50 ThinQ",
        image:"https://cdn.tgdd.vn/Products/Images/42/199012/lg-v50-thinq-1-600x600.jpg",
        discription :"Made by LG Electronux",
        price : 800 ,  
        inventory : 5 ,
        rating : 5
    }
]

const product = (state= initialState , action ) =>{
    switch(action.types){
        default : return [...state]
    }

}
export default product;