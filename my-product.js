Vue.component('my-product', {
  template: `
  <div>
    <span>{{ name }}</span>:<span>{{price}}</span>
  </div>`,
  props: ['name', 'price']
});