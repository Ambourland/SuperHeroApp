// https://akabab.github.io/superhero-api/api/all.json

// We must make a function that will get all superheros from the link above.

const getAllSuperHeros = async () => {
    try {
        
        const res = await fetch("https://akabab.github.io/superhero-api/api/all.json")
        return res.json()
        
    }catch(error){
        console.error(error)
    }console.log(res)
}

getAllSuperHeros()

export  {getAllSuperHeros}