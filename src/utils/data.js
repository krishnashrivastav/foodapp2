import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/fi1.png";

export const heroData = [
    {id : 1, name : 'Icecream', decp : 'Chocolate & Vanilla', price : '5.25', imageSrc : I1 },
    {id : 2, name : 'Fruits', decp : 'Fresh Strawberries', price : '15', imageSrc : F1 },
    {id : 3, name : 'Chicken Kebab', decp : 'Mixed Kebab Plate', price : '14.75', imageSrc : C3 },
    {id : 4, name : 'Fish Dish', decp : 'Fish Kebab', price : '23.50', imageSrc : Fi1 },
];

export const categories = [
    {
        id: 1,
        c_name: "Chicken",
        urlParamName: "chicken", 
    },
    {
        id: 2,
        c_name: "Curry",
        urlParamName: "curry", 
    },
    {
        id: 3,
        c_name: "Rice",
        urlParamName: "rice", 
    },
    {
        id: 4,
        c_name: "Fish",
        urlParamName: "fish", 
    },
    {
        id: 5,
        c_name: "Fruits",
        urlParamName: "fruits", 
    },
    {
        id: 6,
        c_name: "Icecreams",
        urlParamName: "icecreams", 
    },
    {
        id: 7,
        c_name: "Soft Drinks",
        urlParamName: "drinks", 
    }
]