<template>
  <div class="hello">
    <div class="img-box">
        <img :src="picSrc" class="hello-img"/>
    </div>
    <p class="notice">喜欢左划，讨厌右划</p>
    <div class="love-hate" @click="loveHate">
        <div>
            <p class="love">LOVE</p>
        </div>
        <div>
            <p class="hate">HATE</p>
        </div>
    </div>
    <notice :isShow="isShow" :loveNum="loveNum" :hateNum="hateNum"></notice>
  </div>
</template>

<script>
import Notice from './Notice'

export default {
  name: 'hello',
  data () {
    return {
      isShow: true,
      touchPoint: {
        startX: 0,
        startY: 0,
        moveEndX: 0,
        moveEndY: 0
      }
    }
  },
  computed: {
    picSrc(){
        return require('../assets/imgs/person_' + this.$store.state.picNum + '.jpg');
    },
    loveNum(){
        return this.$store.state.loveNum;
    },
    hateNum(){
        return this.$store.state.hateNum;
    }
  },
  components: {
    Notice
  },
  mounted(){
    //绑定滑动事件
    this.touchMove();
    this.$root.eventHub.$on('angela_gogogo', (str)=>{
        //debugger
        console.log(str);
        this.loveNum ++;
    });
  },

  methods: {
    loveHate(e){
        let target = e.target;
        console.log(target.innerHTML);
        if(target.className === 'love'){
            this.$store.dispatch('addLoveNum');
        }else if(target.className === 'hate'){
            this.$store.dispatch('addHateNum');
        }else{}
    },
    touchMove(){
        let imgBox = document.getElementsByClassName('img-box')[0];

        imgBox.addEventListener('touchstart', (e)=>{
                    e.preventDefault();
                    debugger
                    this.touchPoint.startX = e.originalEvent.changedTouches[0].pageX;
                    this.touchPoint.startY = e.originalEvent.changedTouches[0].pageY;
                }, false);
        imgBox.addEventListener('touchend', (e)=>{
                   e.preventDefault();
                   debugger
                   this.touchPoint.moveEndX = e.originalEvent.changedTouches[0].pageX;
                   this.touchPoint.moveEndY = e.originalEvent.changedTouches[0].pageY;
                   let X = this.touchPoint.moveEndX - this.touchPoint.startX;
                   let Y = this.touchPoint.moveEndY - this.touchPoint.startY;
                   if(Math.abs(X) > Math.abs(Y) && X > 0){//left 2 right
                        console.log('left 2 right');
                   }else if(Math.abs(X) > Math.abs(Y) && X < 0){//right 2 left
                        console.log('right 2 left');
                   }else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
                        console.log("top 2 bottom");
                   }else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
                        console.log("bottom 2 top");
                   }else{
                        console.log("just touch");
                   }
               }, false);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.love-hate{
    display: flex;
    justify-content: space-between;
    width: 70%;
}
.love-hate div{
    flex: 1;
    display: flex;
    justify-content: center;
}
.love-hate p{
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border-radius: 50%;
}
.hello-img{
    width: 300px;
    height: 400px;
}
.love{
    background: green;
    color: red;
}
.hate{
    background: gray;
    color: #ffffff;
}
.notice{
    color: gray;
}
</style>
