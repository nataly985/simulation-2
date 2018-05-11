const initialState={
    name: '',
    addres: '',
    city: '',
    state: '',
    zipcode: ''
}

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRES";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";

function reducer(state= initialState, action){
    switch(action.type){
        case FIRST_STEP:
        return Object.assign( {}, state, {first: action.payload});
        case SECOND_STEP:
        return Object.assign( {}, state, {first: action.payload});
        case THIRD_STEP:
        return Object.assign( {}, state, {first: action.payload});
        Default:
        return state;
    }
}

export function firstStep(){
    return{
        type: FIRST_STEP,
        payload: first,
    }
}
export function secondStep(){
    return{
        type:SECOND_STEP,
        payload: second,
    }
}
export function thirdStep(){
    return{
        type: THIRD_STEP,
        payload: third,
    }
}

export default Reducer;