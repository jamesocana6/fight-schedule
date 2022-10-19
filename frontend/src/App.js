import './public/style.css';
import Main from './Pages/Main';
import { useEffect, useState } from 'react';
import Filter from './Components/Filter';
import Header from './Components/Header';

function App() {

  const [ fights, setFights ] = useState(null)

  const URL = "http://localhost:4000/"
  const getData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setFights(data);
  }
  const [ unselectedOrgs, setUnselectedOrgs ] = useState(null)

  useEffect(() => {getData().then(() => filterSchedule())}, [unselectedOrgs])

  function filterSchedule() {
    if (fights != null) {
      let allFilteredFights = [];
      //Let of instead of Let in. let in returns groups as 0, 1, 2
      for (let group of fights) {
          let filteredFights = group.filter((fight) => {
              if(unselectedOrgs.length === 0) {
                  return true
              } else {
                  return !unselectedOrgs.includes(fight.org)
              }
          })
          allFilteredFights.push(filteredFights)
      }
      setFights(allFilteredFights);
    }
  }
  //set button or dropdown to filter by Org
  // each button with .filter and then join the arrays together using

  return (
    <div className="App">
      <Header/>
      <Filter setFights={setFights} filterSchedule={filterSchedule} setUnselectedOrgs={setUnselectedOrgs}/>
      <Main fights={fights}/>
    </div>
  );
}

export default App;
