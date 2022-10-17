import './public/style.css';
import Main from './Pages/Main';
import { useEffect, useState } from 'react';

function App() {

  const [ state, setState ] = useState(null)

  const URL = "http://localhost:4000/"
  const getData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setState(data);
    //console.log(data)
  }

  useEffect(() => {getData()}, [])

  return (
    <div className="App">
      <Main fights={state}/>
    </div>
  );
}

export default App;
