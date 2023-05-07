import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import DefaultPage from './DefaultPage/DefaultPage'
import IngredientsPage from './IngredientsPage/IngredientsPage'
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 
import { TabMenu } from 'primereact/tabmenu';                                      
import axios from 'axios';      

function App() {
  // 0 = base recipe + ingredients, 1 = ingredients
  const [pageState, setPageState] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [recipeContent, setRecipeContent] = useState<IngredientList>([]);
  const [ingredients, setIngredients] = useState("");

  const backendAddress = "http://127.0.0.1:5000";

  type IngredientList = string[];
  function mergeIngredientLists(baseRecipeContent: IngredientList, optionalRecipeContent: IngredientList): IngredientList {
    const mergedList: IngredientList = [];
  
    baseRecipeContent.forEach(ingredient => {
      mergedList.push(`Base: ${ingredient}`);
    });
  
    optionalRecipeContent.forEach(ingredient => {
      mergedList.push(`Optional: ${ingredient}`);
    });
  
    return mergedList;
  }

  
  const handleMenuItemClick = (newPageStatus: number) => {
    setPageState(newPageStatus);
  };
  const handleSearch = () => {
    console.log(searchTerm);
    axios.get(backendAddress + "/get_recipe", {
      params: {
        recipe_name: searchTerm
      }
    }).then((response: any) => {
      console.log(response);
      setRecipeContent(mergeIngredientLists(response.data.basic, response.data.optional));
    });
  };

  const items = [
    {label: 'Recipe', 
      icon: 'pi pi-fw pi-search', 
      command: () => handleMenuItemClick(0),
      className: pageState === 0 ? 'active-menu-item' : ''},
    {label: 'Ingredients Details', 
      icon: 'pi pi-fw pi-chart-bar', 
      command: () => handleMenuItemClick(1),
      className: pageState === 1 ? 'active-menu-item' : '',}
  ];
  let page;
  if (pageState === 0) {
    page = <DefaultPage backendAddress= {backendAddress} recipeContent={recipeContent} setIngredients={setIngredients} setPageState={setPageState}/>
  }
  else if (pageState === 1) {
    page = <IngredientsPage backendAddress= {backendAddress} ingredient={ingredients}/>
  }


  return (
    <div className="App">
      <h1>Recipe Helper</h1>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
      <div className="p-inputgroup flex-1" style={{ width: '80%' }}>
            <InputText value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Button label="Search" onClick={handleSearch} />
      </div>
      </div>
      <TabMenu model={items} />
      {page}
    </div>
  );
}

export default App;
