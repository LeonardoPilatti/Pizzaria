const c = (el)=> document.querySelector(el);  /// ele já está me retornando "document.querySelector"
const cs = (el)=> document.querySelectorAll(el);  /// para simplificar todos os querySelectorAll 


pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);  /// esse cloneNode(true) pega o item e tudo o que esá dentro dele, no caso, pega o pizza-item e tudo o que está dentro dele;
  
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = item.price;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

  c('.pizza-area').append( pizzaItem );  /// esse .append é para adicionar mais um item igual, pois se colocar somente o .innerHTML, ele irá substituir cada vez;
})