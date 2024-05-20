import { createActions } from "reduxsauce";

export const { Types: StepperTypes, Creators: StepperActions } = createActions({
    vehicleListRequest: ["param"],
    vehicleListSuccess: ["res"],
    vehicleListFailed: ["error"],

    vehiclePostRequest: ["param"],
    vehiclePostSuccess: ["res"],
    vehiclePostFailed: ["error"],

    registrationRequest: ["param"],
    registrationSuccess: ["res"],
    registrationFailed: ["error"],

    otpRequest: ["param"],
    otpSuccess: ["res"],
    otpFailed: ["error"],

    kycRequest: ["param"],
    kycSuccess: ["res"],
    kycFailed: ["error"],

    stateRequest: ["param"],
    stateSuccess: ["res"],
    stateFailed: ["error"],

    cityRequest: ["param"],
    citySuccess: ["res"],
    cityFailed: ["error"],

    detailsRequest: ["param"],
    detailsSuccess: ["res"],
    detailsFailed: ["error"],

    bankRequest: ["param"],
    bankSuccess: ["res"],
    bankFailed: ["error"],
});

export const initialState = {
    loading: false,
    error: "",
    vehicleListResponse: null,
    vehiclePostResponse: null,
    registrationResponse: null,
    otpResponse: null,
    stateResponse: null,
    kycResponse: null,
    cityResponse: null,
    detailsResponse: null,
    bankResponse: null,
    otpVerifiedSuccessfully: false,

};

export const StepperReducer = (state = initialState, action) => {
    switch (action.type) {
        case StepperTypes.VEHICLE_LIST_REQUEST:
        case StepperTypes.VEHICLE_POST_REQUEST:
        case StepperTypes.REGISTRATION_REQUEST:
        case StepperTypes.OTP_REQUEST:
        case StepperTypes.KYC_REQUEST:
        case StepperTypes.STATE_REQUEST:
        case StepperTypes.CITY_REQUEST:
        case StepperTypes.DETAILS_REQUEST:
        case StepperTypes.BANK_REQUEST:
            return {
                ...state,
                loading: true,
                error: "",
            };

        case StepperTypes.VEHICLE_LIST_SUCCESS:
            return {
                ...state,
                vehicleListResponse: action.res,
                loading: false,
            };

        case StepperTypes.VEHICLE_POST_SUCCESS:
            return {
                ...state,
                vehiclePostResponse: action.res,
                loading: false,
            };

        case StepperTypes.REGISTRATION_SUCCESS:
            return {
                ...state,
                registrationResponse: action.res,
                loading: false,
            };

        case StepperTypes.OTP_SUCCESS:
            return {
                ...state,
                otpResponse: action.res,
                loading: false,
            };

        case StepperTypes.STATE_SUCCESS:
            return {
                ...state,
                stateResponse: action.res,
                loading: false,
            };

        case StepperTypes.CITY_SUCCESS:
            return {
                ...state,
                cityResponse: action.res,
                loading: false,
            };

        case StepperTypes.DETAILS_SUCCESS:
            return {
                ...state,
                detailsResponse: action.res,
                loading: false,
            };
        case StepperTypes.BANK_SUCCESS:
            return {
                ...state,
                bankResponse: action.res,
                loading: false,
            };

        case StepperTypes.VEHICLE_LIST_FAILED:
        case StepperTypes.VEHICLE_POST_FAILED:
        case StepperTypes.REGISTRATION_FAILED:
        case StepperTypes.OTP_FAILED:
        case StepperTypes.KYC_FAILED:
        case StepperTypes.STATE_FAILED:
        case StepperTypes.CITY_FAILED:
        case StepperTypes.DETAILS_FAILED:
        case StepperTypes.BANK_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        case "OTP_VERIFIED_SUCCESSFULLY":
            return {
                ...state,
                otpVerifiedSuccessfully: true,
            };

        default:
            return state;
    }
};

