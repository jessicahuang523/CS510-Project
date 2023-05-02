import './IngredientsPage.css';
import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Panel } from 'primereact/panel';
        
// import { InputText } from 'primereact/inputtext';
// import "primereact/resources/themes/lara-light-indigo/theme.css";  
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';           
// import 'primeicons/primeicons.css';
function IngredientsPage(props: any) {
    const [content, setContent] = useState('None');
    const [header, setHeader] = useState('Ingredient Name');
    const fetchIngrediantsDetails = () => {
        console.log(props.ingredient);
        axios.get(props.backendAddress + "/get_ingredient_detail", {
          params: {
            ingredient: props.ingredient
          }
        }).then((response: any) => {
          console.log(response);
          setContent(response.data);
          if(props.ingredient.length >= 1){
            setHeader(props.ingredient[0]["ingrediant"]);
          }
        });
      };
      useEffect(() => {
        fetchIngrediantsDetails();
      }, []);
    return (
        <div className="IngredientsPage">
            <Panel header={header}>
                <p className="m-0">
                    {content}
                </p>
            </Panel>
        </div>
  );
}

export default IngredientsPage;