<template>
    <article class="jay-index-box">
        <div class="hello_img">
            < img :class="{rotate:music.play,pause:music.pause}" :src="rotateImgUrl">
            < img class="music-btn" :src="music.img_url" @click="musicPlay">
        </div>
        <p class="msg_class">{{msg}}</p >
        <ul class="login-sign">
            <li><p >Login</p></li>
            <li><p >Sign</p></li>
        </ul>
        <audio :src="audioElSrc" autoplay="" id="music_index"></audio>
    </article>

</template>

<script>
    export default{
        name: 'Index',
        data(){
            return {
                msg: 'Welcome, my friends',
                rotateImgUrl: require('../assets/img/flower_index.jpg'),
                music: {
                    play: true,
                    pause: false,
                    img_url: require('../assets/img/pause.png')
                },
                audioElSrc: require('../assets/music/together.mp3'),
                audioEl: null
            }
        },
        mounted(){
            this.audioEl = document.getElementById('music_index');
        },
        methods: {
            musicPlay(){
                if(this.music.play){
                    this.music.play = false;
                    this.music.pause = true;
                    this.music.img_url = require('../assets/img/play.png');
                    this.audioEl.pause();
                }else{
                    this.music.play = true;
                    this.music.pause = false;
                    this.music.img_url = require('../assets/img/pause.png');
                    this.audioEl.play();
                }
            }
        }
    }
</script>

<style scoped>

    article{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    img{
        width: 5rem;
        height: 5rem;
    }
    p{
        width: 100%;
    }
    .msg_class{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        font-size: 0.5rem;
        color: #de553a;
    }
    .hello_img{
        width: 6rem;
        height: 6rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hello_img img{
        border-radius: 50%;
    }
    .hello_img .rotate{
        animation: rotate 30s infinite linear;
    }
    .hello_img .pause{
        -webkit-animation-play-state: paused;
        -moz-animation-play-state: paused;
        -o-animation-play-state: paused;
        animation-play-state: paused;
    }
    .hello_img .music-btn{
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -0.8rem;
        margin-top: -0.8rem;
        width: 1.6rem!important;
        height: 1.6rem!important;
    }
    .login-sign li a{
        text-decoration: none;
    }
    @keyframes rotate {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
</style>