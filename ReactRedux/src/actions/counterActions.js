export const counterIncrement = () =>{
    return{
        type: 'INCREMENT'
    };
}
export const counterDecrement = () =>{
    return{
        type: 'DECREMENT'
    };
}

export const counterClear = () =>{
    return{
        type: 'CLEAR'
    };
}
export const counterSet = (receivedNumber) =>{
    return{
        type: 'SET',
        payload: receivedNumber
    };
}