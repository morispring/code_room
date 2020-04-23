// var btnLoad = document.querySelector('#load');
var url = '/Users/morispring/code/code_room/item.js';

$('#load').on('click', clickHandler);
function clickHandler(event) {
  $.ajax({
    url : url,
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'items'
  })
  .done(function(data, textStatus, jqXHR) {
    console.log('通信が成功しました。');
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log('通信が失敗しました');
  });
}

// function updateScreen(products) {
//   $('#result').empty();
//   var list = '';
//   for (var i=0; i<products.length; i++ ) {
//     list += '<div>';
//     list += '商品ID:' + products[i].id;
//     list += ' 商品名:' + products[i].name;
//     list += ' 料金:' + products[i].price;
//     list += ' 画像パス:' + products[i].image;
//     list += ' 送料:' + products[i].delv;
//     list += ' セール対象:' + products[i].isSale;
//     list += '</div>';
//   }
//   $('#result').append(list);
// }


// btnLoad.addEventListener('click', function(event) {
//   var xmlHttpRequest = new XMLHttpRequest();
//   xmlHttpRequest.onreadystatechange = function () {
//     if (this.readyState == 4 /*&& this.status == 200*/) {
//       var products = this.response;
//       var result = document.querySelector('#result');
//       result.textContent = '';
//       for (var i=0; i<products.length; i++ ) {
//         var text = '商品ID:' + products[i].id;
//         text += ' 商品名:' + products[i].name;
//         text += ' 料金:' + products[i].price;
//         text += ' 画像パス:' + products[i].image;
//         text += ' 送料:' + products[i].delv;
//         text += ' セール対象:' + products[i].isSale;
//         var div = document.createElement('div');
//         div.textContent = text;
//         result.appendChild(div);
//       }
//     }
//   };
//   xmlHttpRequest.responseType = 'json';
//   xmlHttpRequest.open('GET', 'products.json');
//   xmlHttpRequest.send();
// });