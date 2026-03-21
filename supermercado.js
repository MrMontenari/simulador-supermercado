// Categorias
const hortifruti = "Hortifruti"
const padaria = "Padaria"
const acougue = "Açougue"
const higiene = "Higiene"
const frios = "Frios"
const mercearia = "Mercearia"
const bebidas = "Bebidas"
const limpeza = "Limpeza"


let produtos = [
    {
        codigo: 1,
        nome: "Banana (1KG)",
        categoria: hortifruti,
        preco: 5.98,
        estoque: 28,
    },
    {
        codigo: 2,
        nome: "Morango",
        categoria: hortifruti,
        preco: 3.98,
        estoque: 49,
    },
    {
        codigo: 3,
        nome:"Pera",
        categoria: hortifruti,
        preco: 3.98,
        estoque: 48,
    },
    {
        codigo: 4,
        nome: "Pêssego",
        categoria:hortifruti,
        preco: 5.50,
        estoque:150,
    },
    {
        codigo: 5,
        nome: "Uva",
        categoria: hortifruti,
        preco: 2.30,
        estoque: 50,
    },
    {
        codigo: 6,
        nome: "Pães",
        categoria: padaria,
        preco: 0.50,
        estoque: 30
    },
    {
        codigo: 7,
        nome: "Bolo de chocolate",
        categoria: padaria,
        preco: 4,
        estoque: 15,
    },
    {
        codigo: 8,
        nome: "Pão de Queijo",
        categoria: padaria,
        preco: 2,
        estoque: 20,
    },
    {
        codigo: 9,
        nome: "Bolo de Morango",
        categoria: padaria,
        preco: 2,
        estoque: 25,
    },
    {
        codigo: 10,
        nome: "Torta de Limão",
        categoria: padaria,
        preco: 3.45,
        estoque: 12,
    },

]

// Exibir nosso catalogo de produtos
function exibirCatalogo(){
    console.log("Temos no nosso catalogo:")
    produtos.forEach((produto) => {
        console.log(produto.codigo + " | " + produto.nome + " | " + produto.categoria + " | " + "R$" +produto.preco.toFixed(2) + " | " + "Em estoque: " + produto.estoque) 
    })
 }

// Carrinho
let carrinho = [

]

// Adiciona produtos ao carrinho
function adicionarProduto(codigo, quantidade){
    let produto = produtos.find((p) => p.codigo === codigo)

     produto.estoque -= quantidade

    carrinho.push({
        produto: produto,
        quantidade: quantidade,
    })


}

// Remover produto do carrinho
function removerProduto(codigo, quantidade){
    let produto = produtos.find((p) => p.codigo === codigo)

    produto.estoque += quantidade

   carrinho = carrinho.filter((item) => item.produto.codigo !== codigo)

    }

// Mostra o carrinho
function exibirCarrinho(){
    console.log("Seu carrinho contém: ")
    carrinho.forEach((carrinho) => {
        console.log(carrinho.quantidade + " | " + carrinho.nome + " | " + carrinho.preco + " | " + carrinho.categoria + " | " + carrinho.codigo)
    })
}

//Calcacular total no carrinho
function calcularTotal(){
    
}

// Zona das funções -----------------------------------------------------------------------------------------------------------------------------------------------
exibirCatalogo()

    //Mostra o que tem no carrinho
exibirCarrinho()

        // Adiconar produto ao carrinho
        adicionarProduto(9, 2)
        console.log(carrinho)
        console.log(produtos[8].estoque)

        // Remover produto do carrinho 
        removerProduto(9, 2)
        console.log(carrinho)
        console.log(produtos[8].estoque)
        
