<template>
  <div class="hello">
    <header class="top-box">
        <span></span>
        <h1>喜欢</h1>
    </header>
    <section class="hello-box">
        <input type="checkbox" id="J_nav_radio"/>
            <label for="J_nav_radio" class="top-nav-bar"><i class="iconfont J_nav_icon">&#xe673;</i></label>
            <div class="top-nav"><span>喜欢你就点我吧</span></div>
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
    </section>

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
      },
        innerObj: {

        },
      picNum: 0
    }
  },
  computed: {
    picSrc(){
        //return require('../assets/imgs/person_' + this.$store.state.picNum + '.jpg');
        return require('../assets/imgs/person_' + (this.innerObj.picNew || this.picNum) + '.jpg');
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
  created(){
    this.fetchData();
    console.log('created');
  },
  watch: {
    '$route': 'fetchData'
  },

  mounted(){
    //绑定滑动事件
    console.log('mounted');
    this.touchMove();
    this.$root.eventHub.$on('angela_gogogo', (str)=>{
        //debugger
        console.log(str);
        this.loveNum ++;
    });
  },

  methods: {
    fetchData(){
          this.picNum = this.$route.params.id;
    },
      loveHate(){
          console.log(1);
          //this.$set(this.innerObj, 'picNew', 1);
          //this.innerObj.picNew = 1;
          this.innerObj = Object.assign({}, this.innerObj, {picNew: 1});
      },
    loveHate2(e){
        let target = e.target;
        console.log(target.innerHTML);
        if(target.className === 'love'){
            //this.$store.dispatch('addLoveNum');
            this.$router.push({
                name: 'Hello',
                params: {
                    id: this.getPicId()
                }
            });
        }else if(target.className === 'hate'){
            //this.$store.dispatch('addHateNum');
            /*
            this.$router.push({
                            name: 'Hello',
                            params: {
                                id: this.getPicId()
                            }
                        });*/
            this.$router.push({
                name: 'Personal'
            });
        }else{}
    },
    getPicId(){
                //更换图片
                let num = this.picNum;
                if(num < 2){
                    num ++;
                }else{
                    num = 0;
                }
                return num;
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
.hello-box{
    margin-top: 0.88rem;
    width: 100%;
}
.love-hate{
    display: flex;
    justify-content: space-between;
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
.img-box{
    width: 6rem;
    height: 8rem;
    margin: 0.3rem auto;
}
.hello-img{
    width: 100%;
    height: 100%;
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
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
}
.top-nav-bar{
    width: .46rem;
    height: .46rem;
    position: fixed;
    top: 0.21rem;
    right: 0.16rem;
}
.top-nav-bar span{
    width: 0.46rem;
    height: 0.46rem;
}
#J_nav_radio{
    width: 0.46rem;
    height: 0.46rem;
    opacity: 0;
    z-index: 3;
    position: absolute;
    left: 0;
    right: 0;

}
#J_nav_radio:checked ~ .top-nav{
    height: 1rem;
}
#J_nav_radio:checked + .top-nav-bar{
    color: #c70034;
}
.J_nav_icon{
    font-size: 0.46rem;
}
</style>
