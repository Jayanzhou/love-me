/**
css3 load动画
*/

<template>
    <section class="load-box">
        <div>
            <div class="piston">
                <div class="rotator"></div>
                <div class="block">
                    L
                    <div class="arm"></div>
                </div>
            </div>
            <div class="piston">
                <div class="rotator"></div>
                <div class="block">
                    O
                    <div class="arm"></div>
                </div>
            </div>
            <div class="piston">
                <div class="rotator"></div>
                <div class="block">
                    A
                    <div class="arm"></div>
                </div>
            </div>
            <div class="piston">
                <div class="rotator"></div>
                <div class="block">
                    D
                    <div class="arm"></div>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
    
</script>
<style scoped>

    .load-box{
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, coral, tomato);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Oswald', sans-serif;
        font-size: 30px;
        font-weight: 700;
        color: #444;
        text-shadow: 0px -1px 1px rgba(0,0,0,.7), 0px 1px 1px rgba(255,255,255,.4);
    }
    .load-box>*:first-child{
        width: 80%;
        display: flex;
        justify-content: space-around;
    }
    .piston{
        width:50px;
        height: 150px;
        background: rgba(0,0,0,0.1);
        -webkit-border-radius:5px 5px 25px 25px;
        -moz-border-radius:5px 5px 25px 25px;
        border-radius:5px 5px 25px 25px;
        position: relative;
        z-index:0;
    }
    .load-box .rotator{
        width: 50px;
        height: 50px;
        -webkit-border-radius:50%;
        -moz-border-radius:50%;
        border-radius:50%;
        border: 10px solid rgba(0,0,0,0.1);
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .load-box .block{
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #555;
        border-radius: 5px;
        position: absolute;
        left: 0;
        top: 0;
        animation: block-go 1.2s cubic-bezier(.5,0,.5,1) infinite;
        //z-index: 2;
    }
    .load-box .piston:nth-child(1) .block{
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }
    .load-box .piston:nth-child(2) .block{
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
    }
    .load-box .piston:nth-child(3) .block{
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
    }
    .load-box .piston:nth-child(4) .block{
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
    }
    /*block动画*/
    @keyframes block-go {
        0%{
            top: 0;
        }
        50%{
            top: 30px;
        }
        100%{
            top: 0;
        }
    }
    @-o-keyframes block-go {
        0%{
            top: 0;
        }
        50%{
            top: 30px;
        }
        100%{
            top: 0;
        }
    }
    @-webkit-keyframes block-go {
        0%{
            top: 0;
        }
        50%{
            top: 30px;
        }
        100%{
            top: 0;
        }
    }
    .piston .arm{
        position: absolute;
        width: 15px;
        height: 105px;
        background: #555;
        top: 50%;
        left: 50%;
        margin-left: -7.5px;
        z-index: -1;
        border-radius: 5px;
        animation: arm-go 1.2s linear infinite;
        animation-delay: inherit;
        transform-origin: center 10px;
        box-shadow: inset 0 -18px 0 rgba(0,0,0,.2);
    }
    .piston .arm:after{
        content: '';
        display: block;
        width: 12px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 1.5px;
    }
    @keyframes arm-go {
        0%{
            transform: rotate(0deg);
        }
        25%{
            transform: rotate(-18deg);
        }
        50%{
            transform: rotate(0deg);
        }
        75%{
            transform: rotate(18deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    @-o-keyframes arm-go {
        0%{
            top: 0;
        }
        50%{
            top: 30px;
        }
        100%{
            top: 0;
        }
    }
    @-webkit-keyframes arm-go {
        0%{
            top: 0;
        }
        50%{
            top: 30px;
        }
        100%{
            top: 0;
        }
    }
</style>