"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProdutos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://fakestoreapi.com/products/category/jewelery');
        const data = yield response.json();
        MostrarProdutos(data);
        console.log(data);
    });
}
fetchProdutos();
function MostrarProdutos(produtos) {
    console.table(produtos);
    produtos.forEach((item) => {
        let estrelas = item.rating.rate;
        let rate = "";
        // 🤍🤍🤍❤️❤️ 
        if (estrelas < 1) {
            rate = "🤍🤍🤍🤍🤍";
        }
        else if (estrelas >= 1 && estrelas < 2) {
            rate = "❤️🤍🤍🤍🤍";
        }
        else if (estrelas >= 2 && estrelas < 3) {
            rate = "❤️❤️🤍🤍🤍";
        }
        else if (estrelas >= 3 && estrelas < 4) {
            rate = "❤️❤️❤️🤍🤍";
        }
        else if (estrelas >= 4 && estrelas < 5) {
            rate = "❤️❤️❤️🤍🤍";
        }
        else if (estrelas >= 5) {
            rate = "❤️❤️❤️❤️❤️";
        }
        document.body.innerHTML += `
           
           <div data-id="${item.id}">
               
                <h2>${item.title}</h2>
                <img src="${item.image}" width="100px" />
                <p>${item.rating.rate + rate}</p>

            
           </div>
           
        
        `;
    });
}
