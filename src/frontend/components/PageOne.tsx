import React, { useState } from 'react';
import {  observer } from 'mobx-react';
import { Button } from 'primereact/button';
import { RootStore } from '../models/root-store';
import { useStores } from '../providers/RootStoreProvider';
import { InputText } from 'primereact/inputtext';
// import {fetchSomeData} from '../services/Services';


const PageOne = observer(() => {

  const rootStore: RootStore = useStores();

  const handleUpdateFile = (e: unknown) => {
    rootStore.useDataFromAPI()
  }


  return (
    <div className="text-xl">
          <h1>{rootStore.testData}</h1>
          <Button label="Submit" icon="pi pi-check"  onClick={handleUpdateFile} style={{backgroundColor:'#239AAB'}}/>
    </div>
  );
});

export default PageOne;
