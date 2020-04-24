var app = new Vue({
  el: '#app',
  data: {
    isCapital: true,
    year: (new Date()).getFullYear(),
    name: 'スマホケース',
    price: '1000',
    products: [
      {id: 1, name: 'プロダクトA',price: 1000},
      {id: 2, name: 'プロダクトB',price: 4900},
      {id: 3, name: 'プロダクトC',price: 13400}
    ]
  },
  created: function () {
    // 
  },
  beforeDestroy: function() {
    // 
  },
  methods: {
    priceDown: function () {
      var discount = 0;
      if (this.price - 50 < 500) {
        discount - this.price - 500;
      } else {
        discount = 50;
      }
      if (discount == undefined) discount = 100;
      this.price -= discount;
    }
  },
  filters: {
    // 
  },
  watch: {
    // 
  },
  computed: {
    // 
  }
});


