const maps = [
  {
    name: 'Forgotten Crossroads',
    price: '30 geos',
    seller: 'Cornifer',
    image: './recursos/Forgotten_Crossroads_Map.jpg'
  },
  {
    name: 'Greenpath',
    price: '60 geos',
    seller: 'Cornifer',
    image: './recursos/Greenpath_Map.jpg'
  },
  {
    name: 'Fungal Wastes',
    price: '75 geos',
    seller: 'Cornifer',
    image: './recursos/Fungal_Wastes_Map.jpg'
  },
  {
    name: 'City of Tears',
    price: '90 geos',
    seller: 'Cornifer',
    image: './recursos/City_of_Tears_Map.jpg'
  },
  {
    name: 'Deepnest',
    price: '38 geos',
    seller: 'Cornifer',
    image: './recursos/Deepnest_Map.jpg'
  },

  {
    name: 'Ancient Basin',
    price: '112 geos',
    seller: 'Cornifer',
    image: './recursos/Ancient_Basin_Map.jpg'
  },
  {
    name: 'Resting Grounds',
    price: '75 geos',
    seller: 'Cornifer',
    image: './recursos/Resting_Grounds_Map.jpg'
  },
  {
    name: "Kingdom's Edge",
    price: '112 geos',
    seller: 'Cornifer',
    image: './recursos/Kingdoms_Edge_Map.jpg'
  },
  {
    name: 'Crystal Peak',
    price: '112 geos',
    seller: 'Cornifer',
    image: './recursos/Crystal_Peak_Map.jpg'
  },
  {
    name: 'Howling Cliffs',
    price: '75 geos',
    seller: 'Cornifer',
    image: './recursos/Howling_Cliffs_Map.jpg'
  },
  {
    name: 'Fog Canyon',
    price: '150 geos',
    seller: 'Cornifer',
    image: './recursos/Fog_Canyon_Map.jpg'
  },
  {
    name: 'Royal Waterways',
    price: '75 geos',
    seller: 'Cornifer',
    image: './recursos/Area_de_Canales_Reales.jpg'
  },
  {
    name: "Queen's Gardens",
    price: '150 geos',
    seller: 'Cornifer',
    image: './recursos/Gueens_Garden_Map.jpg'
  }
]
// Header
const header = document.querySelector('header')
header.innerHTML = `
<img src="./recursos/cornifer.PNG" alt="logo-cornifer">
<h1>The Map Burrow</h1>`
// Tarjetas
let content = document.querySelector('.products')
for (const map of maps) {
  let container = document.createElement('article')
  container.classList.add('tarjetas')
  container.innerHTML = `<img src='${map.image}' alt="${map.name} Map" class="productImg">
   <p id="name" class="product">${map.name}</p>
    <p id="price" class="product">Price: ${map.price}</p>
    <p id="seller" class="product">Seller: ${map.seller}</p>
    <button id="button" class="product">comprar</button>
   `
  content.appendChild(container)
}

// Barra de búsqueda
//buscador
const search = document.querySelector('.search')
search.innerHTML = `
<article>
  <label for="buscar">Buscar:</label>
  <input class= 'hola' type="text" id="buscar" placeholder="Buscar..." oninput="filtrarMapas()"></article>
`

function filtrarMapas() {
  const inputBusqueda = document.getElementById('buscar').value.toLowerCase()
  const contenedorMapas = document.querySelector('.products')
  contenedorMapas.innerHTML = ''

  const mapasFiltrados = maps.filter((mapa) =>
    mapa.name.toLowerCase().includes(inputBusqueda)
  )

  mapasFiltrados.forEach((mapa) => {
    let container = document.createElement('article')
    container.classList.add('buscados')
    container.innerHTML = `
      <img src='${mapa.image}' alt="${mapa.name} Map" class="productImg">
      <p id="name" class="product">${mapa.name}</p>
    <p id="price" class="product">Price: ${mapa.price}</p>
    <p id="seller" class="product">Seller: ${mapa.seller}</p>
    <button id="button" class="product">comprar</button>
    `
    contenedorMapas.appendChild(container)
  })
}
//ordenar
search.innerHTML += `<div> <label for="ordenar">Ordenar por:</label>
<select id="ordenar">
  <option value="default">Por defecto</option>
  <option value="asc">Precio: Menor a mayor</option>
  <option value="desc">Precio: Mayor a menor</option>
  <option value="az">Nombre: A-Z</option>
  <option value="za">Nombre: Z-A</option>
</select> </div>
`
document.getElementById('ordenar').addEventListener('change', function () {
  const criterio = this.value

  let mapasOrdenados = [...maps]
  if (criterio === 'asc') {
    mapasOrdenados.sort((a, b) => parseInt(a.price) - parseInt(b.price))
  } else if (criterio === 'desc') {
    mapasOrdenados.sort((a, b) => parseInt(b.price) - parseInt(a.price))
  } else if (criterio === 'az') {
    mapasOrdenados.sort((a, b) => a.name.localeCompare(b.name))
  } else if (criterio === 'za') {
    mapasOrdenados.sort((a, b) => b.name.localeCompare(a.name))
  }

  renderizarMapas(mapasOrdenados)
})

function renderizarMapas(mapas) {
  let content = document.querySelector('.products')
  content.innerHTML = ''

  for (const map of mapas) {
    let container = document.createElement('article')
    container.classList.add('tarjetas')
    container.innerHTML = `<img src='${map.image}' alt="${map.name} Map" class="productImg">
      <p id="name" class="product">${map.name}</p>
      <p id="price" class="product">Price: ${map.price}</p>
      <p id="seller" class="product">Seller: ${map.seller}</p>
      <button id="button" class="product">Comprar</button>`

    content.appendChild(container)
  }
}
