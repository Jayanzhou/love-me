/**
 * Created by jayan on 2017/3/20.
 */
import * as types from './mutation-types'

export default{
    addLoveNum({commit, state}){
        commit({
            type: types.ADD_LOVE_NUMBER
        });

    },
    addHateNum({commit, state}){
        commit({
            type: types.ADD_HATE_NUMBER
        });

    }
}
/*
export const addLoveNum = ({commit, state})=>{
    commit({
        type: types.ADD_LOVE_NUMBER
    });

}

export const addHateNum = ({commit, state})=>{
    commit({
        type: types.ADD_HATE_NUMBER
    });

}*/
