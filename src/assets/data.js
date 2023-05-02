const products = [
      {
        id: '1',name:"Intel Core i9-11900K",price: 599.99,stock: 50,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gezatek.com.ar%2Ftienda%2Fprocesadores-intel%2F2624-micro-intel-core-i9-11900k-8-nucleos--16-threads-ht-11va-gen-lga1200.html&psig=AOvVaw18BjQKprIFpmA808AD0PC1&ust=1682996460657000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCn2cOQ0_4CFQAAAAAdAAAAABAE",
      },
      {
        id:'2',name:"AMD Ryzen 9 5950X",price: 799.99,stock: 30,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Famd-ryzen-5-3600-desktop-processor-6-cores-up-to-4-2ghz-35mb-cache-am4-socket-100-100000031box-23242101248.html&psig=AOvVaw1NHNpjCMQjaQ_igM5nWL6W&ust=1682996498109000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPi53tWQ0_4CFQAAAAAdAAAAABAJ",
      },
      {
        id: "3",name:"NVIDIA GeForce RTX 3090",price: 1499.99,stock: 20,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nvidia.com%2Fen-us%2Fgeforce%2Fgraphics-cards%2F30-series%2Frtx-3090-3090ti%2F&psig=AOvVaw3m9B4kUqLUQl7k7AGGecTN&ust=1682996531407000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjtvOWQ0_4CFQAAAAAdAAAAABAJ",
      },
      {
        id: "4",name:"ASUS ROG Strix Z590-E Gaming",price: 399.99,stock: 40,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gamingpoint.com.ar%2Fmotherboards%2Fintel%2Fmotherboard-asus-rog-strix-z590-e-gaming-wifi-1200-292.html%3Futm_source%3Dhardgamers%26utm_medium%3Dsearch%2520engine&psig=AOvVaw26-VjSsFYo8kjlqA2OqANE&ust=1682996565350000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNj03fWQ0_4CFQAAAAAdAAAAABAE",
      },
      {
        id: "5",name:"G.SKILL Trident Z RGB 32GB DDR4",price: 299.99,stock: 60,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Flistado.mercadolibre.com.ar%2Fg-skill-trident-z&psig=AOvVaw0xCnaFnQJ06CYfCHvx7kcv&ust=1682996596114000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjotISR0_4CFQAAAAAdAAAAABAE",
      },
      {
        id: "6",name:"Samsung 970 EVO Plus 1TB NVMe",price: 199.99,stock: 100,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsung.com%2Fus%2Fcomputing%2Fmemory-storage%2Fsolid-state-drives%2Fssd-970-evo-plus-nvme-m-2-1-tb-mz-v7s1t0b-am%2F&psig=AOvVaw2i1T3hBx1NKrcV6Gx1aR2h&ust=1682996614188000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjq9IyR0_4CFQAAAAAdAAAAABAE",
      },
      {
        id: "7",name:"Corsair RM850x Power Supply",price: 149.99,stock: 50,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.corsair.com%2Fus%2Fen%2FCategories%2FProducts%2FPower-Supply-Units%2FPower-Supply-Units-Advanced%2FRMx-Series-White%2Fp%2FCP-9020188-NA&psig=AOvVaw2d99iJIooeKaKujaKQRRku&ust=1682996642813000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPD2vpqR0_4CFQAAAAAdAAAAABAE",
      },
      {
        id: "8",name:"Seagate BarraCuda 4TB HDD",price: 119.99,stock: 75,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FSeagate-BarraCuda-Internal-Drive-3-5-Inch%2Fdp%2FB07D9C7SQH&psig=AOvVaw1GSEU3BGFi5WKBGigwcNUx&ust=1682996677976000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJitu6uR0_4CFQAAAAAdAAAAABAE",
      },
      {
        id: "9",name:"NZXT Kraken X63 Liquid Cooler",price: 149.99,stock: 25,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-1104448793-nzxt-kraken-x63-280mm-rl-krx63-01-aio-rgb-cpu-liquid-coo-_JM&psig=AOvVaw1WiDYw9lvXIQzrTetX1Oma&ust=1682996693017000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKihxLKR0_4CFQAAAAAdAAAAABAE",
      },
      {
        id: "10",name:"Fractal Design Meshify C Case",price: 99.99,stock: 80,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fractal-design.com%2Fproducts%2Fcases%2Fmeshify%2Fmeshify-c%2F&psig=AOvVaw3S1v0QpOCPjmHPt1hbdGFN&ust=1682996716627000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDF7b2R0_4CFQAAAAAdAAAAABAE",
      }
    ]
  
    export const getProducts = () => {
     return Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 600)
    })
  }
  export const getProductsById = (id) => {
    return Promise((resolve,reject) => {
      setTimeout(() => {
        const product = products.find(product => product.id === id)
        product ? resolve(product) : reject('Product not found')
      }, 600)
    })
  }
  export const getProductsByCategory = (categoryId) => {
    return Promise((resolve,reject) => {
      setTimeout(() => {
        const productsFiltered = products.filter(product => product.categoryId === categoryId)
        productsFiltered.length > 0 ? resolve(productsFiltered) : reject('Product not found')
      }, 600)
    })
  }



