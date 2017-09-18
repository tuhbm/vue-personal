new Vue({
  el:'#app',
  data:{
    name:'',
    age:''
  },
  methods:{
    logName: function(){
      console.log('입력한 이름');
    },
    logAge: function(){
      console.log('입력한 나이');
    }
  }
});