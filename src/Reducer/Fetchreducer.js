import React from 'react';

export const initialState = {
    data: [],
    loading: false,
    error: false,

}
export const ACTION_FETCH = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_FAIL: "FETCH_FAIL",
    FINALLY: "FINALLY"


}
export const axiosReducer = (state, action) => {
    switch (action.type) {

        case ACTION_FETCH.FETCH_START:
            return {
                data: [],
                loading: true,
                error: false
            };

        case ACTION_FETCH.FETCH_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: false
            };

        case ACTION_FETCH.FETCH_FAIL:
            return {
                data: [],
                loading: false,
                error: false,

            }
        case ACTION_FETCH.FINALLY:
            return {

                data: [],
                loading: false,
                error: false
            }
        default:
            return state;

    }


}
export const ACTION_TYPES = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
    reset: "RESET"
}
export const initialCounter = {count: 0}
export const counterReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.increment:
            return {count: state.count++}
        case ACTION_TYPES.decrement:
            return {count: state.count--}
        case ACTION_TYPES.reset:
            return {count: state.count = 0}
        default:
            return state;

    }


}