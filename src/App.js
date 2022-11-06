import { useState, useEffect } from 'react';
import './App.css';
function App() {
  const[cocktail, setCocktail]= useState([]);
  useEffect(() =>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((results) => results.json()) 
    .then((data) => {
      setCocktail(data.drinks);
    });
  }, []);

  function onChangeHandle(e){ 
    console.log("e.target.value");
    if(e.target.value === '') {
      window.location.reload(true)
      const tempArr = cocktail;
      setCocktail(tempArr)
      return
    }
    const searchResult =  cocktail.filter(drink => drink.strDrink.toLowerCase().startsWith(e.target.value.toLowerCase()))
    setCocktail(searchResult);
  }
  return (
    <div>
    <h1 class='heading'>Cocktail of the day</h1>
    <input onChange={onChangeHandle} class='search' type='text' placeholder="search for drink"  ></input> 

    <ul>
     {cocktail.map((drink) => {
      const { strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strDrinkThumb, idDrink,strDrink,strCategory,strGlass,strInstructions,strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7  } =drink;
      return (
        <div key={idDrink}>
         <h1  >{strDrink}</h1>
         <img src={strDrinkThumb} alt={strDrink}  ></img>
         <h2  >Glass </h2>
         <p>{strGlass}</p>
         <h2 >Instruction</h2>
         {strInstructions}
          <h2>Drink Type</h2>
     
          
         <p>{strCategory}</p> 
          <h2 >Ingredient</h2>
          <p>{strIngredient1}</p>
          <p>{strIngredient2}</p>
          <p>{strIngredient3}</p>
          <p>{strIngredient4}</p>
          <p>{strIngredient5}</p>
          <p>{strIngredient6}</p>
          <p>{strIngredient7}</p>
          <h2>Instruction</h2>
          <p>{strMeasure1}</p>
          <p>{strMeasure2}</p>
          <p>{strMeasure3}</p>
          <p>{strMeasure4}</p>
          <p>{strMeasure5}</p>
          <p>{strMeasure6}</p>
        </div>
      )

     })}
      </ul>
    </div>

  );
}

export default App;
