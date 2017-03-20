<template>
<div v-show="isShow">
    <p>
    你喜欢了{{loveNum}}人
    </p>
    <p>
    你讨厌了{{hateNum}}人
    </p>
    <p @click='clickAngela'>Angela</p>
</div>
</template>

<script>
export default {
    data(){
        return {};
    },
    props: ['isShow', 'loveNum', 'hateNum'],
    methods: {
        clickAngela(){
            console.log('Angela click');
            //debugger
            this.$root.eventHub.$emit('angela_gogogo', 'I love Jay!');
        }
    }
};
</script>

<style>

</style>