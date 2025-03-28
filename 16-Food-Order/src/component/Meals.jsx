import {useEffect, useState} from "react";
import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
const requestConfig={}
export default function Meals(){
    const {data:loadMeals,isLoading,error}=useHttp(
        'http://localhost:3000/meals',
        requestConfig,
        [])
    if (isLoading){
        return <p>Loading...</p>
    }
    if (error){
        return <Error title='Failed to fetch meals' message={error}></Error>
    }
    return (
        <ul id="meals">
            {
                loadMeals.map((meal)=>(
                    <MealItem key={meal.id} meal={meal}/>
                )
        )}</ul>
    )
}