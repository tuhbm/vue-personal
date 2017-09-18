new Vue({
  el: '#app',
  data: {
    name: '태균',
    job: '프론트엔드개발자zzz',
    website: 'https://tuhbm.github.io',
    websiteTag:'<a href="https://tuhbm.github.io">블로그바로가기</a>'
  },
  methods: {
    greet: function (time) {
      return '안녕하세요 좋은 ' + time + '입니다.';
      // return '안녕하세요';
    }
  }
});
//
new Vue({
  el: '#vue-app2',
  data: {
    age:29,
    x:0,
    y:0
  },
  methods: {
    add:function(inc){
      this.age+=inc;
    },
    minus:function(dec){
      this.age-=dec;
    },
    updataXY:function(event){
      // console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;

    },
    click: function(){
      alert('You clicked me');
    }
  }
});
new Vue({
  el:'#vue-app3',
  data:{

  },
  methods:{
    logName:function(){
      console.log('콘솔이벤트실행');
    },
    logAge:function(){
      console.log('You entered your age');
    }
  }
});


