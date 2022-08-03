let url = 'https://pokeapi.co/api/v2/pokemon/'
function pokeapi(nombre) {
  fetch(`${url}${nombre}`)
    .then((Response) => Response.json())
    .then((datos) => {
      console.log(datos)
      console.log(datos.name)
      imageFront(datos)
     
    })
}

/* pokeapi(1)
pokeapi(2)
pokeapi(3) */

function imageFront(datos) {
  let div1 = document.createElement('div')
  let div2 = document.createElement('div')
  let contenedor = document.getElementById('contenedor')

  contenedor.className = 'cardPoke'
  div2.className = 'itemType'
  div1.className = 'itemPoke'
  
  let img = document.createElement('img')
  let link = document.createElement('a')
  link.append(img)
  link.href = `link.html`
  img.src = `${datos.sprites.front_default}`
  img.addEventListener('click', (e) => {
    //e.preventDefault()
    div2.remove()
   setLocalStorage(datos)
    console.log("guardando...")
    console.log(e)
    console.log(datos)
  })
  div1.append(link)
  div1.append(div2)
  contenedor.append(div1)
  div2.prepend(datos.name.toUpperCase() + ' ')

  /* datos.types.forEach((element) => {
    div1.append(element.type.name + ' ')
  }) */
  
}

function ima() {
  for (let i = 1; i < 50; i++) {
    pokeapi(i)
  }
}
ima()
function setLocalStorage(datos) {
  localStorage.setItem('pokeDatos',JSON.stringify(datos) )
}
var guardado = localStorage.getItem('pokeDatos');
 var local = JSON.parse(guardado) 

console.log(local)
let nombre = document.getElementById("nombrePokemon")
let imgenPrincipal = document.getElementById("imgenPrincipal")
console.log(local.types[0].type.name)

nombre.innerText = `${local.name.toUpperCase()}`
/* nombrePokemon.append("ss") */
imgenPrincipal.src = `${local.sprites.other.dream_world.front_default}`
console.log(local.sprites.front_default)


let statss = document.getElementById("stats")
///////////////
local.stats.forEach(element => {
  console.log(element.stat.name + " " + element.base_stat)
  let ol = document.createElement("lu");
  let divBar = document.createElement("div");

  
  divBar.className = "divBarStyles"
  ol.append(`${element.stat.name.toUpperCase()}`);
  ol.append(divBar)
  statss.append(ol)
  divBar.setAttribute("style", `width: ${element.base_stat}%;color:white;height: 4%;margin-bottom:0.1em;padding: 0.5em;background-color: green;align-content:end;font-size:large;`)
 divBar.append(`${element.base_stat}%`)
 statss.className = "stats"

})

/* let pic1 = document.getElementById("pic1")
let pic2 = document.getElementById("pic2")
let pic3 = document.getElementById("pic3")
let pic5 = document.getElementById("pic5")


pic1.src = `${local.sprites.other.home.front_default}`
pic2.src = `${local.sprites.front_default}`
pic3.src = `${local.sprites.other.home.front_shiny}`
pic5.src = `${local.sprites.other.dream_world.front_default}`



console.log(local.sprites.other.officialartwork.front_default)


 */

