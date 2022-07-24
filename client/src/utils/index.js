export const lengthOfCart = ()=>{
    if(localStorage.getItem('cart')){
        return JSON.parse(localStorage.getItem('cart')).length;
    }
    return 0;
}