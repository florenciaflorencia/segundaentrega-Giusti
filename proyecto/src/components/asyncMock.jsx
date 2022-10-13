const products = [
    {
        id: '1', 
        name: 'BOWL DE VIDRIO', 
        price: 3600, 
        category: 'PRODUCTOS', 
        img: "/imagenes/bazar1.jpg", 
        stock: 10,
    },
    { 
        id: '2',
        name: 'BOWL BASE DE COLOR X 3', 
        price: 10000, 
        category: 'PRODUCTOS', 
        img: "/imagenes/bazar6.jpg", 
        stock: 10, 
    },
    {
        id: '3', 
        name: 'BOWL BASE DE COLOR', 
        price: 3500, 
        category: 'PRODUCTOS', 
        img: "/imagenes/bazar3.jpg", 
        stock: 10, 
},
{ 
        id: '4', 
        name: 'TABLA', 
        price: 1500, 
        category: 'PRODUCTOS', 
        img: "/imagenes/bazar2.jpg", 
        stock: 10, 
},
{ 
        id: '5', 
        name: 'MOLDE DE HELADOS COLORES', 
        price: 2500, 
        category: 'PRODUCTOS', 
        img: "../imagenes/helad1.jpg", 
        stock: 10, 
}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
    
