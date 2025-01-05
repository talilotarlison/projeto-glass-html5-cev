
function calcularTotal(){
    let totalPagar = document.getElementById("totalPagar");
    let quantidadeProduto = document.getElementById("quantidade");
    let valorProdutoUnidade = 1500.00;
    let totalPagarCompra = parseInt(quantidadeProduto.value) * valorProdutoUnidade;
    totalPagar.value = parseFloat(totalPagarCompra).toFixed(2);
}