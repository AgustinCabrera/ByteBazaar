import product1 from "./products/1.png";
import product2 from "./products/2.png";
import product3 from "./products/3.png";
import product4 from "./products/4.png";
import product5 from "./products/5.jpg";
import product6 from "./products/6.png";
import product7 from "./products/7.jpg";
import product8 from "./products/8.jpg";
const products = [
      {
        id: 1,
        name:"IPhone 13 Pro Max",
        price: 999,
        stock: 50,
        img: product1,
        detail: "Silver 128GB",
        categoryId: 'Smartphone',
      },
      {
        id: 2,
        name:" Macbook Pro ",
        price:  1999,
        stock: 12,
        detail:"Space Grey 512GB",
        img: product2,
        categoryId: 'Laptop',
      },
      {
        id: 3,
        name:"Sony XM4 Headphones",
        price: 250,
        detail:"Black headphones with noise cancelling",
        stock: 20,
        img: product3,
        categoryId: 'Headphones',
      },
      {
        id: 4,
        name:"Asus ROG Phone 5",
        price: 228,
        stock: 40,
        img: product4,
        detail:"Black 128GB",
        categoryId: 'Smartphone',
      },
      {
        id: 5,
        name:"S23 Ultra",
        price: 999,
        stock: 8,
        img: product5,
        detail:"Black 128GB 8GB RAM",
        categoryId: 'Smartphone',
      },
      {
        id: 6,
        name:"Airpods",
        price: 130,
        stock: 65,
        img: product6,
        detail:"White Airpods",
        categoryId: 'Headphones',
      },
      {
        id: 7,
        productName: "Iphone XR",
        price: 350,
        detail:"Blue 500 GB",
        stock: 20,
        categoryId: 'Smartphone',
        productImage: product7,
      },
      {
        id: 8,
        name:"Asus Vivobook",
        price: 730,
        stock: 50,
        img: product8,
        detail:"Silver 512GB",
        categoryId: 'Laptop',
      }
    ]
  
    export const getProducts = () => {
     return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 600)
    })
  }
  export const getProductsById = (id) => {
    return new  Promise((resolve,reject) => {
      setTimeout(() => {
        const product = products.find(product => product.id === id)
        product ? resolve(product) : reject('Product not found')
      }, 600)
    })
  }
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        const productsFiltered = products.filter(product => product.categoryId === categoryId)
        productsFiltered.length > 0 ? resolve(productsFiltered) : reject('Product not found')
      }, 600)
    })
  }



