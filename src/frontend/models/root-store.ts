//NPM Imports
import { types, flow, Instance } from 'mobx-state-tree';

//Internal Imports
import {fetchSomeData} from '../providers/Services'

export const RootStoreModel = types 
  .model('RootStore', {
    testData: types.string
  })
  .views((self) => {
    return {
      get showMeSomeData() {
        return `I have written Out your Test Data: ${self.testData}`
      },
    };
  })
  .actions((self) => {
    return{
      //Example of Asycn Funciton
      useDataFromAPI: flow(function* useDataFromAPI() {
        console.log("In Store")
        //yeild is an equivelent of Await
        const newString = yield fetchSomeData()
        self.testData = newString.firstName
      }),
      //Example Function with a typed paramaeter
      changeMyData(myString:string) {
        self.testData = myString
      }
    };
  });

  //This exports a Rootstore Type to use in typescript
  export type RootStore = Instance<typeof RootStoreModel>;
  export const setupRootStore = async () => {
    const rs: RootStore = RootStoreModel.create({testData: "Lifepoint Is Great"})
    console.log("Root Store Initilizing")
    return rs
  }