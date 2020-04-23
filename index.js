var app = new Vue({
  el: '#app',
  data: {
    message: 'たらこ',
    pSize: '40px',
    soldout: 'たぬき',
    isCapital: true,
    kotae: '選択してください',
    kaisuu: '１回',
    color: '#000000',
    red: 0,
    green: 0,
    see: true,
    blue: 0,
    stock: 10,
    answer: [],
    point: { x: 0, y: 0},
    year: (new Date()).getFullYear(),
    price: 9080,
    show: true,
    arrival_date: null,
    min_date: null,
    width: window.innerWidth,
    height: window.innerHeight,
    products: [
      {code: 'A01', name: 'プロダクトA'},
      {code: 'B01', name: 'プロダクトB'},
      {code: 'C01', name: 'プロダクトC'},
    ]
  },
  created: function () {
    addEventListener('resize', this.resizeHandler);
    addEventListener('mousemove', this.mousemoveHandler);
    var dt = new Date();
    dt.setDate(dt.getDate() + 1);
    this.arrival_date = this.formatDate(dt);
    this.min_date = this.arrival_date;
  },
  beforeDestroy: function() {
    removeEventListener('resize', this.resizeHandler);
    removeEventListener('mousemove', this.mousemoveHandler);
  },
  methods: {
    now1: function() {
      return (new Date()).toLocaleDateString();
    },
    onDeleteItem: function() {
      this.stock--;
    },
    formatDate: function(dt) {
      var y = dt.getFullYear();
      var m = ('00' + (dt.getMonth()+1)).slice(-2);
      var d = ('00' + dt.getDate()).slice(-2);
      var result = y + '-' + m + '-' + d;
      return result;
    },
    resizeHandler: function($event) {
      this.width = $event.target.innerWidth;
      this.height = $event.target.innerHeight;
    },
    yearInputHandler: function($event) {
      this.year = $event.target.value;
    },
    mousemoveHandler: function($event) {
      this.point.x = $event.clientX;
      this.point.y = $event.clientY;
    }
  },
  filters: {
    number_format: function(val){
      return val.toLocaleString();
    },
    unit: function(val) {
      return val + '円';
    }
  },
  watch: {
    stock: function(newStock, oldStock) {
      if (newStock == 0) {
        this.soldout = '売り切れ';
      }
    },
    statusMessage: function() {
      console.log('商品のステータスが変化しました。');
    },
    colorElement: function(newRGB, oldRGB) {
      var r = ('00' + newRGB[0].toString(16).toUpperCase()).slice(-2);
      var g = ('00' + newRGB[1].toString(16).toUpperCase()).slice(-2);
      var b = ('00' + newRGB[2].toString(16).toUpperCase()).slice(-2);
      this.color = '#' + r + g + b;
    },
    color: function(newColor, oldColor) {
      this.red = parseInt(newColor.substr(1,2), 16);
      this.green = parseInt(newColor.substr(3,2), 16);
      this.blue = parseInt(newColor.substr(5,2), 16);
    }
  },
  computed: {
    isUrudoshi: function() {
      if ((this.year%4 == 0) && (this.year%100 != 0) ||
      (this.year%400 == 0)) {
        return true;
      } else {
        return false;
      }
    },
    colorElement: function() {
      return [this.red, this.green, this.blue];
    },
    now2: function() {
      return (new Date()).toLocaleDateString();
    },
    selection: function() {
      return this.answer.join();
    },
    statusMessage: function() {
      if (this.stock == 0) {
        return 'うりきれ';
      }
      return '';
    }
  }

});
