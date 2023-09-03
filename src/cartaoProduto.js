import { adicionarAoCarrinho } from "./menucarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
for (const produtoCatalogo of catalogo) {

    const cartaoProduto = `<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-md shadow-slate-400 rounded-lg group ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}' id="card-produto-${produtoCatalogo.id}">
    <img 
    src="./assets/img/${produtoCatalogo.imagem}" 
    alt="Produto 1."
    class="group-hover:scale-105 duration-300 my-1 rounded-lg"
    />
    <p class="text-sm">${produtoCatalogo.marca}</p>
    <p class="text-sm">${produtoCatalogo.nome}</p>
    <p class="text-sm">$${produtoCatalogo.preco}</p>
    <button id="add to bag-${produtoCatalogo.id}" class="bg-stone-950 hover:bg-stone-800 text-slate-200"><i class="fa-sharp fa-solid fa-cart-plus"></i></button>
    </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
   
}
    for (const produtoCatalogo of catalogo) {
        document.getElementById(`add to bag-${produtoCatalogo.id}`).addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
    }

}