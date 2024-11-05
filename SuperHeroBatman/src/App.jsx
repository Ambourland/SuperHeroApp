import { useState, useEffect } from "react";
import { getAllSuperHeros } from "./utils/apis"
import './App.css'
import SuperHeroList from "./Components/SuperHeroList";

function App() {
  const [superHeros, setSuperHeros] = useState([]);



  // the useEffect takes 2 parameter/arguments. a callback function and a dependecies array.
  //The callback function is the function that will tun when the page loads.
  // the dependecies array is where we put the state variables that useEffect will watch. When that state variable is changed it will run the callback function.
  // when the array is empty it will only tun once on a page load.
  useEffect(() => {
    getAllSuperHeros().then((res) => {
      setSuperHeros(res)
    });
  }, []);


  return (
    <>
      <h1>SuperHeros</h1>
      <SuperHeroList />
      {superHeros.map((item) => {
        return <h2 key={item.id}>{item.name}</h2>
      })}
    </>
  )
}



export default App
