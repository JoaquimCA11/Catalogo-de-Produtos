const productList = document.getElementById('prod-list');
const ordenarForm = document.getElementById('ordenar-form');

fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => {
    const renderizarProdutos = (produtos) => {
        productList.innerHTML = '';
    produtos.forEach(products => {
        const product = document.createElement('li');
        product.innerHTML = `<strong>Produto:</strong> ${products.title} <br> 
        <strong>Preço:</strong> ${products.price} <br> 
        <img src="${products.image}"> <br> 
        <strong>Nota:</strong> ${products.rating.rate} 
        <strong>Avaliações:</strong> ${products.rating.count}`;
        productList.appendChild(product);
    });
};

renderizarProdutos(data);

ordenarForm.addEventListener('submit', event => {
    event.preventDefault();
    const ordenar = document.getElementById('ordenar').value;
    switch(ordenar){
        case 'rating': data.sort((a,b) => b.rating.rate - a.rating.rate);
        break;
        case 'preco-menor': data.sort((a,b) => a.price - b.price);
        break;
        case 'preco-maior': data.sort((a,b) => b.price - a.price);
        break;
    }
renderizarProdutos(data);
    });
})

.catch(error => console.error('Erro:', error));