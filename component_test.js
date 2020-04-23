var app = new Vue({
  el: '#app',
  data: {
    isCapital: true,
    year: (new Date()).getFullYear(),
    products: [
      {code: 'A01', name: 'プロダクトA'},
      {code: 'B01', name: 'プロダクトB'},
      {code: 'C01', name: 'プロダクトC'},
    ]
  },
  created: function () {
    // 
  },
  beforeDestroy: function() {
    // 
  },
  methods: {
    // 
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


