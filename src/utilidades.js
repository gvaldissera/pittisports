export const catalogo = [
    {
        id: "1",
        nome: "Jeans Jacket",
        marca: "Pittisports",
        preco: 70,
        imagem: "product-1.jpg",
        feminino: true,
    },
    {
        id: "2",
        nome: "Cream Down Jacket",
        marca: "Pittisports",
        preco: 110,
        imagem: "product-2.jpg",
        feminino: true,
    },
    {
        id: "3",
        nome: "Brown Down Jacket",
        marca: "Pittisports",
        preco: 90,
        imagem: "product-3.jpg",
        feminino: true,
    },
    {
        id: "4",
        nome: "Leather Jacket",
        marca: "Pittisports",
        preco: 100,
        imagem: "product-4.jpg",
        feminino: true,
    },
    {
        id: "5",
        nome: "Black Down Jacket",
        marca: "Pittisports",
        preco: 110,
        imagem: "product-5.jpg",
        feminino: true,
    },
    {
        id: "6",
        nome: "Black Down Vest",
        marca: "Pittisports",
        preco: 80,
        imagem: "product-6.jpg",
        feminino: false,
    },
    {
        id: "7",
        nome: "White Bunny Hug Sweatshirt",
        marca: "Pittisports",
        preco: 70,
        imagem: "product-7.jpg",
        feminino: false,
    },
    {
        id: "8",
        nome: "Pink Jacket",
        marca: "Pittisports",
        preco: 70,
        imagem: "product-8.jpg",
        feminino: true,
    },
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find(p => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);
    
    const elementoArticle = document.createElement("article");
    const articleClasses = ["flex", "bg-slate-100", "rounded-lg", "p-1", "relative", "mb-2", "w-96"];
    
    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass)
    }


    const cartaoProdutoCarrinho = `        
    <img src="./assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg"/>
  <div class="p-2 flex flex-col justify-between">
    <p class="text-stone-950 text-sm">${produto.nome}</p>
    <p class="text-stone-400 text-xs">Size: S</p>
    <p class="text-stone-950 text-sm">$${produto.preco}</p>
  </div>
<div class="flex text-stone-950 items-end absolute bottom-0 right-2 text-lg">
        <p id="quantidade-${produto.id}"class="ml-2">${quantidadeProduto}</p>
</div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

}