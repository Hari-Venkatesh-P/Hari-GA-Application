import {SET_PROFILE_DETAILS, RESET_PROFILE_DETAILS} from "../actions/profileActions"

const initialState = {
    profile : {}
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case RESET_PROFILE_DETAILS:
            return { ...state, profile : {} }; 
      case SET_PROFILE_DETAILS:
        return { ...state, profile: action.payload };
      default:
        return state;
    }
};