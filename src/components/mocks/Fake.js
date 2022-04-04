
  const productos  = [
    { id:'01',
      nombre: "Camisa Blanca",
      stock: 5,
      initial:1,
      precio: 13000,
      description: "Camisa de manga corta, de color blanco, con mangas y bolsillos",
      img: 'https://w7.pngwing.com/pngs/24/545/png-transparent-t-shirt-sleeve-clothing-collar-shoulder-white-tshirt-tshirt-white-active-shirt.png',
      category:'remeras'
    },
    {
      id:'02',
      nombre: "Zapatos ",
      stock: 2,
      initial:1,
      precio: 26000,
      description: "Zapatos de color negro",
      img : 'https://e7.pngegg.com/pngimages/88/948/png-clipart-shoe-shoes-brown-leather-thumbnail.png',
      category: 'zapatos'
    },
    {
      id:'03',
      nombre: "Cinto",
      stock: 10,
      initial:1,
      precio: 2000,
      description: "Cinto de color negro",
      img : 'https://w7.pngwing.com/pngs/920/15/png-transparent-belt-buckles-product-design-belt-belt-buckle-black-belt-buckles.png',
      category: 'cintos'
    }
  ]


  
 export const getProducts = new Promise((resolve, reject) => {
  //acciones
  let condition=true;
  if (condition) {
    setTimeout (() => { 
      resolve(productos)
    }, 3000)
    
  } else{
    reject('Error')
  }
}) 

