fetch("https://api.disneyapi.dev/character")
    .then(response => response.json())
    .then(data=>{
        const shorterData = data.data.slice(0,5)
        const dataList = document.getElementById("film")
        const htmlString = shorterData.map((film)=>
            `<li>character name:${film.name}   films:${film.films} </li>`).join(' ')
       return dataList.innerHTML = htmlString
        }) 