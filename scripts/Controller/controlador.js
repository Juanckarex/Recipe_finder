import { getComments } from "../APIRequest/request.js";
import {saveSession,saveLocal,clearSession} from "../DB/saveData.js";
import { addOptions } from "./listControl.js";

const apiUrl = "https://dummyjson.com/recipes";

async function useInfo(){

    const data = await getComments(apiUrl);
    
    if(data && data.recipes){
        let comentarios = data.recipes;
        console.log("Arreglo de objs JS comentarios:",comentarios);

        comentarios.forEach((recipes) => {

            addOptions("usuarios-picker",recipes.name);
            let nameRecipes = JSON.stringify(recipes.name);
            let Recipes = JSON.stringify(recipes);
            saveSession(nameRecipes,Recipes);
            
        });

    }
    else{
        console.error("Error, ningun comentario fue encontrado")
    }

}

function showRecipesInScreen() {
    let select = document.getElementById("usuarios-picker");
    let value = JSON.stringify(select.value);

    let recipes = JSON.parse(sessionStorage.getItem(value))
    console.log(recipes);

    let div = document.getElementById("infoDiv");
    div.innerHTML = recipes.ingredients;

    let ingredients = JSON.parse(localStorage.getItem(value))

    let divv = document.getElementById("infoDivv");
    divv.innerHTML = recipes.instructions;
}

document.getElementById("usuarios-picker").addEventListener("change",showRecipesInScreen);

useInfo();

