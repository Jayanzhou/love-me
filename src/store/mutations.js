/**
 * Created by jayan on 2017/3/20.
 */
import * as types from './mutation-types'

export default{
    [types.ADD_LOVE_NUMBER](state){
        state.loveNum ++;
        //更换图片
        if(state.picNum < 2){
            state.picNum ++;
        }else{
            state.picNum = 0;
        }

    },
    [types.ADD_HATE_NUMBER](state){
        state.hateNum ++;
        //更换图片
        if(state.picNum < 2){
            state.picNum ++;
        }else{
            state.picNum = 0;
        }

    }
}