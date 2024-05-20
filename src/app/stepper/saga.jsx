'use client';
import { put, call, takeLatest } from "redux-saga/effects";
import {
    vehicleListService,
    vehiclePostService,
    registrationService,
    otpService,
    kycService,
    stateService,
    cityService,
    detailsService,
    bankService
} from "../../service/apiService"
import { StepperActions, StepperTypes } from "./reducer";
import { createNotification } from "@/component/toast";


// _____ vehicle list _____
function* vehicleListSaga() {
    try {
        const response = yield call(vehicleListService);
        if (response.status === 200) {
            yield put(StepperActions.vehicleListSuccess(response.data));
        } else {
            yield put(StepperActions.vehicleListFailed(response.data));
        }
    } catch (error) {
        yield put(StepperActions.vehicleListFailed(error));
    }
}

// _____ State list _____
function* stateSaga() {
    try {
        const response = yield call(stateService);
        if (response.status === 200) {
            yield put(StepperActions.stateSuccess(response.data));
        } else {
            yield put(StepperActions.stateFailed(response.data));
        }
    } catch (error) {
        yield put(StepperActions.stateFailed(error));
    }
}

// _____ city list _____
function* citySaga(action) {
    const data = action.param;
    try {
        const response = yield call(cityService, data);
        if (response.status === 200) {
            yield put(StepperActions.citySuccess(response.data));
        } else {
            yield put(StepperActions.cityFailed(response.data));
        }
    } catch (error) {
        yield put(StepperActions.cityFailed(error));
    }
}

// _______  Mobile registration ______ 
function* registrationSaga(action) {
    try {
        const data = action.param;
        const response = yield call(registrationService, data);
        if (response.status === 200) {
            yield put(StepperActions.registrationSuccess(response?.data));
            createNotification("success", response?.data?.message);
        } else {
            yield put(StepperActions.registrationFailed(response.data));
            createNotification("error", response?.data?.message);
        }
    } catch (error) {
        yield put(StepperActions.registrationFailed(error));
        createNotification("error", response?.data?.message);
    }
}

// _______  Opt Verification ______ 
function* otpSaga(action) {
    try {
        const data = action.param;
        const response = yield call(otpService, data);
        if (response.status === 200) {
            yield put(StepperActions.otpSuccess(response.data));
            yield put({ type: "OTP_VERIFIED_SUCCESSFULLY" });
            createNotification("success", response?.data?.message);
            localStorage.setItem("token", response?.data.token)
        } else {
            yield put(StepperActions.otpFailed(response.data));
            createNotification("error", response?.data?.message);
        }
    } catch (error) {
        yield put(StepperActions.otpFailed(error));
        createNotification("error", error?.response?.data?.message);
    }
}



// _______  Kyc Verification ______ 
function* kycSaga(action) {
    try {
        const data = action.param;
        const formData = new FormData();
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                formData.append(key, data[key]);
            }
        }
        if (!formData.has('mobile')) {
            formData.append('mobile', action.param.mobile);
        }

        const response = yield call(kycService, formData);
        if (response.status === 200) {
            yield put(StepperActions.kycSuccess(response.data));
            createNotification("success", response?.data?.message);
        } else {
            yield put(StepperActions.kycFailed(response.data));
            createNotification("error", response?.data?.message);
        }
    } catch (error) {
        yield put(StepperActions.kycFailed(error));
        createNotification("error", error?.response?.data?.message);
    }
}


// _______  personal details Verification ______ 
function* detailsSaga(action) {
    console.log('action', action)
    const formData = new FormData();
    formData.append('type', action?.param?.type);
    formData.append('companyName', action?.param?.companyName);
    formData.append('firstName', action?.param?.firstName);
    formData.append('mobile2', action?.param?.mobile2);
    formData.append('lastName', action?.param?.lastName);
    formData.append('email', action?.param?.email);
    formData.append('password', action?.param?.password);
    formData.append('gstNumber', action?.param?.gstNumber);
    formData.append('address1', action?.param?.address1);
    formData.append('address2', action?.param?.address2);
    formData.append('pinCode', action?.param?.pinCode);
    formData.append('stateId', action?.param?.stateId);
    formData.append('cityId', action?.param?.cityId);
    try {
        const response = yield call(detailsService, formData);
        if (response.status === 200) {
            yield put(StepperActions.detailsSuccess(response.data));
            createNotification("success", response?.data?.message);
        } else {
            yield put(StepperActions.detailsFailed(response.data));
            createNotification("error", response?.data?.message);
        }
    } catch (error) {
        yield put(StepperActions.detailsFailed(error));
        createNotification("error", error?.response?.data?.message);
    }
}



// _______  Bank details Verification ______ 
function* bankSaga(action) {
    console.log('action', action)
    const formData = new FormData();
    formData.append('bankAccountHolderIfsc', action?.param?.bankAccountHolderIfsc);
    formData.append('bankAccountHolderName', action?.param?.bankAccountHolderName);
    formData.append('bankAccountHolderNumber', action?.param?.bankAccountHolderNumber);

    try {
        const response = yield call(bankService, formData);
        if (response.status === 200) {
            yield put(StepperActions.detailsSuccess(response.data));
            createNotification("success", response?.data?.message);
            action.param.router.push("/");
        } else {
            yield put(StepperActions.detailsFailed(response.data));
            createNotification("error", response?.data?.message);

        }
    } catch (error) {
        yield put(StepperActions.detailsFailed(error));
        createNotification("error", error?.response?.data?.message);
    }
}



// _______ Post Vehicle details ______ 
function* vehiclePostSaga(action) {
    try {
        const data = action.param;
        const response = yield call(vehiclePostService, data);
        if (response.status === 200) {
            yield put(StepperActions.vehiclePostSuccess(response.data));
        } else {
            yield put(StepperActions.vehiclePostFailed(response.data));
        }
    } catch (error) {
        yield put(StepperActions.vehiclePostFailed(error));
        createNotification("error", error?.response?.data?.message);
    }
}

export default function* stepperRootWacher() {
    yield takeLatest(StepperTypes.VEHICLE_LIST_REQUEST, vehicleListSaga);
    yield takeLatest(StepperTypes.VEHICLE_POST_REQUEST, vehiclePostSaga);
    yield takeLatest(StepperTypes.REGISTRATION_REQUEST, registrationSaga);
    yield takeLatest(StepperTypes.OTP_REQUEST, otpSaga);
    yield takeLatest(StepperTypes.KYC_REQUEST, kycSaga);
    yield takeLatest(StepperTypes.STATE_REQUEST, stateSaga);
    yield takeLatest(StepperTypes.CITY_REQUEST, citySaga);
    yield takeLatest(StepperTypes.DETAILS_REQUEST, detailsSaga);
    yield takeLatest(StepperTypes.BANK_REQUEST, bankSaga);
}
