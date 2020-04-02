window.onload = function any_function_name()
{

function carregarDados(){
    $.getJSON( "./js/test.json", function( data ) {
        var array = [];
        console.log(data);
       

        for (let index = 0; index < 8; index++) {
            const arr = data[index];
            array.push({name: arr.productName, Id: arr.productId, imgUrl: arr.items[0].images[0].imageUrl, price : arr.items[0].sellers[0].commertialOffer.Price, description: arr.metaTagDescription});
            
        }
        for (let i = 0; i < array.length; i++) {

            const listElement = document.querySelector('#lista-instrumentos');

            const a = array[i];
            var item = document.createElement('li');
            listElement.appendChild(item);
            var imgItem = document.createElement('img');
            imgItem.setAttribute('src', a.imgUrl);
            item.appendChild(imgItem);
            var textName = document.createElement('h4');
            textName.textContent = a.name;
            item.appendChild(textName);
            var textDesc = document.createElement('p');
            textDesc.innerHTML = a.description;
            item.appendChild(textDesc);
            var price = document.createElement('span');
            price.textContent = a.price;
            item.appendChild(price);
        }
        
    });
}
carregarDados();
};


