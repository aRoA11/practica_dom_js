const products = [
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

let content = document.querySelector('.tarjetas')
for (const product of products) {
  let container = document.createElement('article')
  container.classList.add('maps')
  container.innerHTML = `<img src='${product.image}' alt="${product.name} Map" class="productImg">
  <p class="productName">${product.name}</p>
  <p class="productPrice">Price: ${product.price}</p>
  <p class="producSeller">Seller: ${product.seller}</p>`
  content.appendChild(container)
}
