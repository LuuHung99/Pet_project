import * as types from './type';

//Dinh nghia cac hanh dong (bao chi lam nhung gi, con lam duoc thi reducer xu ly)
export const incrementCounter = (val) => ({
    type: types.INCREMENT, //mo ta action
    val // Gia tri truyen len

});

export const decrementCounter = (val) => ({
    type: types.DECREMENT,
    val
})