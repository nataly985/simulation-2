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
        case UPDATE_NAME:
        return Object.assign({}, state, {name: action.payload});
        case UPDATE_ADDRESS:
        return Object.assign({}, state, {address: action.payload});
        case UPDATE_CITY:
        return Object.assign({}, state, {city: action.payload});
        case UPDATE_STATE:
        return Object.assign({}, state, {state: action.payload});
        case UPDATE_ZIPCODE:
        return Object.assign({}, state, {zipcode: action.payload});
        Default:
        return state;
    }
}

export function updateName(){
    return{
        type: UPDATE_NAME,
        payload: name,
    }
}
export function updateAddress(){
    return{
        type: UPDATE_ADDRESS,
        payload: address,
    }
}
export function updateCity(){
    return{
        type: UPDATE_CITY,
        payload: city,
    }
}
export function updateState(){
    return{
        type: UPDATE_STATE,
        payload: state
    }
}
export function updateZipcode(){
    return{
        type: UPDATE_ZIPCODE,
        payload: zipcode,
    }
}

export default Reducer;