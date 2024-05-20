import { fork } from "redux-saga/effects";

import stepperSaga from '../app/stepper/saga'

export default function* rootSaga() {
    yield fork(stepperSaga);
}
