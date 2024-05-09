
let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`

fetch(url)
    .then(res => res.json())
    .then(dataobj => {
        let html = `<div class="row justify-content-center">`
        console.log(dataobj)
        console.log(dataobj.drinks[0])

        for(let datos of dataobj.drinks) {
            //console.log(datos.idDrink)
            html += `<div class="col-3 mt-3 mb-3 ms-1 border border-primary rounded">
                        <img src="${datos.strDrinkThumb}" class="img-fluid rounded">
                        <h6 class="text-center fw-bold"> ${datos.strCategory} - ${datos.strGlass} </h6>
                        <p> ${datos.strInstructionsES} </p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> ${datos.strIngredient1} </li>
                            <li class="list-group-item"> ${datos.strIngredient2} </li>
                            <li class="list-group-item"> ${datos.strIngredient3} </li>
                        </ul>
                        <p class="text-center"> <a href="${datos.strDrinkThumb}"> Enlace de Imagen </a> </p>
                        
                    </div>`
                    
        }
       

        html += `</div>`
         
        document.getElementById("charContent").innerHTML = html
        
    })

// https://thecocktaildb.com/api.php