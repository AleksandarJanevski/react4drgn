import { BUY_CAKE,RESTOCK_CAKES } from './../constants/CakeConstants';

const initialState = {
    cakes: 10,
    message: undefined
}


const CakeReducer = (state = initialState, action) => {

    switch (action.type) {
        case BUY_CAKE:
            if (state.cakes - action.payload < 0) {
                return {
                    ...state,
                    message: `You cannot buy ${action.payload} cakes, Not enough cakes left to buy only ${state.cakes} left`
                }
            }
            else {
                return {
                    ...state,
                    cakes: state.cakes - action.payload,
                    message:undefined
                }           //10       -       1
            }
        case RESTOCK_CAKES:
            return{
                ...state,
                cakes: action.payload,
                message: undefined
            }


        default: return state;
    }
}


export default CakeReducer;