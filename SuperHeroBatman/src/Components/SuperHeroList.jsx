import { getAllSuperHeros } from "../utils/apis"
import { useState, useEffect } from "react";


const SuperHeroList = () => {
    const [hero, setHero] = useState([]);

    useEffect(() => {
        getAllSuperHeros().then((res) => {
            setHero(res)
            console.log(res)
        })
    }, []);

    return (
        <>
        <h1>Hero Image</h1>
            {hero.map((item) => {
                return <h2 key={item.id}>{item.name}<br/><img src={item.images.md}></img></h2>
            })}
        </>


    );

}



export default SuperHeroList