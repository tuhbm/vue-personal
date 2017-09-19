var one = new Vue({
  el:'#app-one',
  data:{
    title:'Vue App One'
  },
  methods:{},
  computed:{
    greet:function(){
      return 'Hello from app one :)'
    }
  }
});
var two = new Vue({
  el:'#app-two',
  data:{
    title:'Vue App Two'
  },
  methods:{
    changTitle:function(){
      one.title = "Title changed";
    }
  },
  computed:{
    greet:function(){
      return 'Hello from app two whooo!:)'
    }
  }
});

two.title = "Changed from outside";