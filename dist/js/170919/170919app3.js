Vue.component('greeting',{
  template:'<p> Hey threr, I am {{name}}. <button @click="changeName">ChangeName</button></p>',
  data:function(){
    return {
      name:'Yoshi'
    }
  },
  methods:{
    changeName:function(){
      this.name = 'Yoshi'
    }
  }
});

new Vue({
  el:'#app-one',
  data:{

  },
  methods:{},
  computed:{}
});
new Vue({
  el:'#app-two',
  data:{},
  methods:{},
  computed:{}
});