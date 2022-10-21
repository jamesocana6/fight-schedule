import './public/style.css';
import Main from './Pages/Main';
import { useEffect, useState } from 'react';
import Filter from './Components/Filter';
import Header from './Components/Header';

function App() {
  //localStorage.clear()
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  let allFights = [];
  const [fights, setFights] = useState(null);

  const URL = "http://localhost:4000/"
  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setFights(data);
    allFights = data;
  }
  const [unselectedOrgs, setUnselectedOrgs] = useState(null);

  useEffect(() => { getData().then(() => { if (fights != null) filterSchedule() }) }, [unselectedOrgs]);

  const addWatchlist = (event) => {
    //if no items in the watchlist, push closest tr to localStorage and add className = fav
    if (watchlist.length === 0) {
      event.target.closest("tr").setAttribute("class", "fav");
      watchlist.push(event.target.closest("tr").innerText.split("\t"));
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    } else {
      let fightNames = []
      for (let fight of watchlist) {
        fightNames.push(fight[4])
      }
      // console.log(fightNames)
      if (event.target.closest("tr").getAttribute("class") === "fav") {
        event.target.closest("tr").removeAttribute("class");
        // console.log("INDEX OF ",fightNames.indexOf(event.target.closest("tr").innerText.split("\t")[event.target.closest("tr").innerText.split("\t").length-1]))
        // console.log("INCLUDES ",fightNames.includes(event.target.closest("tr")[4]))
        watchlist.splice(fightNames.indexOf(event.target.closest("tr").innerText.split("\t")[event.target.closest("tr").innerText.split("\t").length-1]), 1);
      } else {
        event.target.closest("tr").setAttribute("class", "fav");
        watchlist.push(event.target.closest("tr").innerText.split("\t"));
      }

    }
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    // console.log(watchlist);
  }

  function filterSchedule() {
    let allFilteredFights = [];
    //Let of instead of Let in. let in returns groups as 0, 1, 2
    for (let group of allFights) {
      let filteredFights = group.filter((fight) => {
        if (unselectedOrgs.length === 0) {
          return true
        } else {
          return !unselectedOrgs.includes(fight.org);
        }
      })
      allFilteredFights.push(filteredFights);
    }
    setFights(allFilteredFights);
  }

  return (
    <div className="App">
      <Header />
      <Filter setUnselectedOrgs={setUnselectedOrgs} />
      <Main fights={fights} addWatchlist={addWatchlist} watchlist={watchlist} />
    </div>
  );
}

export default App;
