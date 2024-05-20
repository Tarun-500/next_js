import { api } from "./utils";
import UriConstant from "./constant";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const formHeaders = () => ({
  Accept: "application/json",
  Authorization: `Bearer ${localStorage.getItem('token')}`,
});

export const vehicleListService = () =>
  api.get(UriConstant.VEHICLE + UriConstant.OPTIONS);


export const stateService = () =>
  api.get(UriConstant.CLIENT + UriConstant.STATE + UriConstant.OPTIONS);

export const cityService = (params) => {
  const queryString = new URLSearchParams(params).toString();
  return api.get(UriConstant.CLIENT + UriConstant.CITY + UriConstant.OPTIONS + "?" + queryString);
};

export const registrationService = (body) =>
  api.post(UriConstant.OTP_SERVICE + UriConstant.SEND, body);


export const otpService = (body) =>
  api.post(UriConstant.BUYER_LOGIN, body);


export const vehiclePostService = (body) =>
  api.post(UriConstant.BUYER + UriConstant.STEP_ONE, body, { headers });


export const kycService = (formData) =>
  api.post(UriConstant.BUYER + UriConstant.STEP_TWO, formData, { headers: formHeaders() });


export const detailsService = (formData) =>
  api.post(UriConstant.BUYER + UriConstant.STEP_THREE, formData, { headers});


export const bankService = (formData) =>
  api.post(UriConstant.BUYER + UriConstant.STEP_FOUR, formData, { headers});


