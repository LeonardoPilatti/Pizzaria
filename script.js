const c = (el)=> document.querySelector(el);  /// ele já está me retornando "document.querySelector"
const cs = (el)=> document.querySelectorAll(el);  /// para simplificar todos os querySelectorAll 


pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);  /// esse cloneNode(true) pega o item e tudo o que esá dentro dele, no caso, pega o pizza-item e tudo o que está dentro dele;
  
  pizzaItem.querySelector('.pizza-item--img img').src = item.img
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;  /// toFixed(2) para ter duas casas após a virgula;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    
    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1;
    }, 200)

  });


  c('.pizza-area').append( pizzaItem );  /// esse .append é para adicionar mais um item igual, pois se colocar somente o .innerHTML, ele irá substituir cada vez;
})

/// parei na parte 4;   https://alunos.b7web.com.br/curso/javascript/compra-de-pizzas-parte-5