import axios from 'axios'
const { ipcRenderer } = window.require("electron");
let expressAPI:string
let expressPort: string
let versionNumber: string
//NPM Imports

//App Locations to be updated to ENV locaitons
ipcRenderer.send('variable-request', ['expressPort', "appVersion"]);
ipcRenderer.on('variable-reply', function (event:any, args:string[]) {
  versionNumber = args[1]
  expressPort = args[0];
  expressAPI = `http://localhost:${expressPort}`;
});

axios.interceptors.request.use(async config => {
  config.headers.token = "This Could be set to add some Auth to your requests"
  return config
 }, (error) => {
  console.log("error")
  return
 })

export const fetchSomeData = async () => {
  try {
    console.log(expressAPI)
    const test = await axios.post(`${expressAPI}/users`,{firstName: 'Blake', lastName: 'Wiley'})
    return test.data
  } catch (err) {
    console.log(err);
  }
};

export const getVersionDetail = () => {
  return versionNumber
}



