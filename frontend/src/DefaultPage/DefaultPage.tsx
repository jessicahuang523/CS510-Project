import './DefaultPage.css';
import React, {useState, useEffect} from "react";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Axios from 'axios';
// import { InputText } from 'primereact/inputtext';
// import "primereact/resources/themes/lara-light-indigo/theme.css";  
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';           
// import 'primeicons/primeicons.css';
function DefaultPage(props: any) {
    const [selectedIngrediants, setSelectedIngrediants] = useState<string[]>([]);
    const OnClickViewDetails = () => {
        console.log(selectedIngrediants);
        if(selectedIngrediants.length != 0) {
          const ingredient = selectedIngrediants[0].split(": ")[1];
          props.setIngredients(ingredient);
        }
        props.setPageState(1);
    }
    return (
        <div className="DefaultPage">
          {/* <div className="title">Default Page</div> */}
          <DataTable value={props.recipeContent} selectionMode={'checkbox'} selection={selectedIngrediants} onSelectionChange={(e: any) => setSelectedIngrediants(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
              <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
              <Column header="Ingrediant" body={(rowData: string) => <>{rowData}</>}></Column>
              {/* <Column field="quantity" header="Quantity"></Column> */}
          </DataTable>
          <Button label="View Details" onClick={() => OnClickViewDetails()} />
         </div>
  );
}

export default DefaultPage;