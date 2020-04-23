Vue.filter('number_format', function(val) {
  return val.toLocaleString();
});
var app = new Vue ({
  el: '#app',
  data: {
    count: 6,
    showSaleItem: false,
    showDelvFree: false,
    sortOrder: 1,
    products: [],
    isError: false,
    message: ''
  },
  created: function() {
    var url = '/Users/morispring/code/code_room/item.js';
    $.ajax({
      url : url,
      type: 'GET',
      dataType: 'jsonp',
      jsonp: 'callback',
      jsonpCallback: 'items'
    })
    .done(function(data, textStatus, jqXHR) {
      this.products = data;
    }.bind(this))
    .fail(function(jqXHR, textStatus, errorThrown) {
      this.isError = true;
      this.message = '商品リストの読み込みに失敗しました。';
    }.bind(this));
  },
  watch: {
    showSaleItem: function(newVal, oldVal) {
      console.log('showSaleItemウォッチャーが呼び出されました');
    },
    showDelvFree: function(newVal, oldVal) {
      console.log('showDelvFreeウォッチャーが呼び出されました');
    }
  },
  computed: {
    filteredList: function () {
      var newList = [];
      for (var i=0; i<this.products.length; i++) {
        var isShow = true;
        if (this.showSaleItem && !this.products[i].isSale) {
          isShow = false;
        }
        if (this.showDelvFree && this.products[i].delv > 0) {
          isShow = false;
        }
        if (isShow) {
          newList.push(this.products[i]);
        }
        if (this.sortOrder == 1) {
        } 
        else if (this.sortOrder == 2) {
          newList.sort(function(a,b) {
            return a.price - b.price;
          });
        }
      }
      return newList;
    }
  }
});