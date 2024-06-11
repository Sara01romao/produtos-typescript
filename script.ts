
interface Rate {
    rate:number,
    count: number
}

interface Produto{
    id: number;
    title: string;
    category:string;
    price: number;
    image: string;
    description:number;
    rating: Rate
}


async function fetchProdutos() {
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
    const data = await response.json()

    MostrarProdutos(data)

    console.log(data)
}


fetchProdutos()


function MostrarProdutos(produtos:Produto[]){
    
    console.table(produtos)


    produtos.forEach((item) => {

       

        let estrelas = item.rating.rate;
        

       

        let rate = "";
        // 🤍🤍🤍❤️❤️ 

        if(estrelas < 1){
            rate = "🤍🤍🤍🤍🤍" 
        } else if(estrelas >=1 && estrelas < 2){
             rate = "❤️🤍🤍🤍🤍"
        }else if(estrelas >=2 && estrelas < 3){
             rate = "❤️❤️🤍🤍🤍"
        }else if(estrelas >=3 && estrelas < 4){
            rate = "❤️❤️❤️🤍🤍"
        }else if(estrelas >=4 && estrelas < 5){
            rate = "❤️❤️❤️🤍🤍"
        }else if(estrelas >= 5 ){
            rate = "❤️❤️❤️❤️❤️"

        

        }
         

        
        document.body.innerHTML += `
           
           <div data-id="${item.id}">
               
                <h2>${item.title}</h2>
                <img src="${item.image}" width="100px" />
                <p>${item.rating.rate + rate}</p>

            
           </div>
           
        
        `
    });
    

}



