'use client'
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Container, Card, CardBody, Col, Row } from 'reactstrap';
import StepOne from './component/stepOne';
import StepTwo from './component/stepTwo';
import StepThree from './component/stepThree';
import StepFour from './component/stepFour';
import StepFive from './component/stepFive'; 
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

import { StepperActions } from './reducer';
import { useDispatch, useSelector } from "react-redux";
import OverlayLoader from './component/loader';

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter(); 

  const [activeStep, setActiveStep] = useState(0);
  const [registrationMobile, setRegistrationMobile] = useState("");
  const [cityValue, setCityValue] = useState(null);
  const [stateValue, setStateValue] = useState(null);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const panRegex = /^[A-Z]{5}\d{4}[A-Z]{1}$/;
  const { vehicleListResponse, registrationResponse, otpResponse, stateResponse, cityResponse, loading, detailsResponse } = useSelector((state) => state.StepperReducer);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  // const handleNext = async () => {
  //   if (activeStep === 0) {
  //     await validation.handleSubmit();
  //     if (!validation.errors.mobile && isOtpVerified) {
  //       setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //       dispatch(StepperActions.vehicleListRequest());
  //     }
  //     return;
  //   }


  // }; 
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getVehicle = (e) => {
    dispatch(StepperActions.vehicleListRequest());
  };

  useEffect(() => {
    if (otpResponse) {
      setActiveStep(1);
      getVehicle();
    }
  }, [otpResponse]);

  const handleVehicleSelect = (e) => {
    setSelectedVehicles(e);
  }

  const handleRegistrationSubmit = (e) => {
    validation.handleSubmit();
  };

  const validation = useFormik({
    initialValues: {
      mobile: "",
    },

    validationSchema: Yup.object({
      mobile: Yup.string()
        .required('Mobile number is required')
        .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
    }),

    onSubmit: async (values) => {
      try {
        setIsOtpVerified(true)
        setRegistrationMobile(values.mobile);
        dispatch(
          StepperActions.registrationRequest({
            mobile: values?.mobile,
          })
        );
      } catch (error) {
        console.error(error);
      }
    },
  });


  const handleFirstStepSubmit = (e) => {
    validationOtp.handleSubmit();
  }
  const validationOtp = useFormik({
    initialValues: {
      mobile: "",
      orderId: "",
      otp: "",
    },

    validationSchema: Yup.object({
      otp: Yup.string()
        .required('Otp number is required')
        .matches(/^\d{6}$/, 'Opt must be 6 digits'),
    }),

    onSubmit: async (values) => {
      try {
        dispatch(
          StepperActions.otpRequest({
            mobile: registrationMobile,
            orderId: registrationResponse.orderId,
            otp: values?.otp,
          })
        );
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleThreeStepSubmit = async (e) => {
    const errors = await kycValidation.validateForm();
    kycValidation.handleSubmit();
    if (Object.keys(errors).length === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    dispatch(StepperActions.stateRequest());
  }

  const kycValidation = useFormik({
    initialValues: {
      panNumber: "",
      panCard: "",
      addressProofFront: "",
      addressProofBack: "",
      panName: ""
    },

    validationSchema: Yup.object().shape({
      panNumber: Yup.string()
        .matches(panRegex, 'Invalid PAN number format')
        .required('PAN number is required'),
      panName: Yup.string().required('Name as per PAN is required'),
      panCard: Yup.string(),
      addressProofFront: Yup.string(),
      addressProofBack: Yup.string(),
    }),

    onSubmit: async (values) => {
      try {
        dispatch(
          StepperActions.kycRequest({
            panNumber: values.panNumber,
            panCard: values.panCard,
            addressProofFront: values.addressProofFront,
            addressProofBack: values.addressProofBack,
            panName: values.panName
          })
        );
      } catch (error) {
        console.error(error);
      }
    },
  });

  const selectedStateValue = (e) => {
    setStateValue(e.value)
    dispatch(StepperActions.cityRequest({ stateId: e.value }));
  }
  const selectedCityValue = (e) => {
    setCityValue(e.value)
  }

  const handleFourStepSubmit = async () => {
    const errors = await detailsValidation.validateForm();
    detailsValidation.handleSubmit();
    if (Object.keys(errors).length === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const detailsValidation = useFormik({
    initialValues: {
      type: '',
      companyName: '',
      firstName: '',
      mobile2: '',
      lastName: '',
      email: '',
      password: '',
      gstNumber: '',
      address1: '',
      address2: '',
      pinCode: '',
      stateId: stateValue,
      cityId: cityValue,
    },

    validationSchema: Yup.object().shape({
      companyName: Yup.string().when('type', {
        is: '1',
        then: Yup.string().required('Company Name is required'),
      }),
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      address1: Yup.string().required('Address is required'),
      pinCode: Yup.string()
        .matches(/^[0-9]{6}$/, 'Invalid pin code')
        .required('Pin Code is required'),
    }),
    onSubmit: async (values) => {
      console.log('values', values)
      try {
        dispatch(
          StepperActions.detailsRequest({
            type: 0,
            companyName: values.companyName,
            firstName: values.firstName,
            mobile2: values.mobile2,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            gstNumber: values.gstNumber,
            address1: values.address1,
            address2: values.address2,
            pinCode: values.pinCode,
            stateId: stateValue,
            cityId: cityValue,
          })
        );
      } catch (error) {
        console.error(error);
      }
    },
  });



  const handleFiveStepSubmit = async () => {
    bankValidation.handleSubmit();
  };

  const bankValidation = useFormik({
    initialValues: {
      bankAccountHolderIfsc: '',
      bankAccountHolderName: '',
      bankAccountHolderNumber: '',
    },

    validationSchema: Yup.object().shape({
      bankAccountHolderIfsc: Yup.string()
        .required('IFSC code is required')
        .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Invalid IFSC code'),
      bankAccountHolderName: Yup.string()
        .required('Account holder name is required')
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name cannot be more than 50 characters long'),
      bankAccountHolderNumber: Yup.string()
        .required('Account number is required')
        .matches(/^\d{9,18}$/, 'Account number must be between 9 and 18 digits'),
      confirmAccountNumber: Yup.string()
        .oneOf([Yup.ref('bankAccountHolderNumber'), null], 'Account numbers must match')
        .required('Please confirm your account number'),
    }),

    onSubmit: async (values) => {
      console.log('values', values)
      try {
        dispatch(
          StepperActions.bankRequest({
            bankAccountHolderIfsc: values.bankAccountHolderIfsc,
            bankAccountHolderName: values.bankAccountHolderName,
            bankAccountHolderNumber: values.bankAccountHolderNumber,
            router,
          })
        );
      } catch (error) {
        console.error(error);
      }
    },
  });

  const steps = [
    {
      component: <StepOne
        handleFirstStepSubmit={handleFirstStepSubmit}
        handleRegistrationSubmit={handleRegistrationSubmit}
        mobileError={validation.errors.mobile}
        myCallback={validation.handleChange}

        myCallbackTwo={validationOtp.handleChange}
        otpError={validationOtp.errors.otp}
        isOtpVerified={isOtpVerified}
      />,
      id: 1,
      label: "Login"
    },
    {
      component: <StepTwo
        vehicleListResponse={vehicleListResponse}
        onVehicleSelect={handleVehicleSelect}
      />,
      id: 2,
      label: "Vehicle Category"
    },
    {
      component: <StepThree
        myCallback={kycValidation.handleChange}
        panNumberError={kycValidation.errors.panNumber}
        panNameError={kycValidation.errors.panName}
        panCardError={kycValidation.errors.panCard}
        addressProofFrontError={kycValidation.errors.addressProofFront}
        addressProofBackError={kycValidation.errors.addressProofBack}
        handleThreeStepSubmit={handleThreeStepSubmit}
      />, id: 3, label: "Kyc"
    },
    {
      component: <StepFour
        stateResponse={stateResponse}
        cityResponse={cityResponse}
        selectedStateValue={selectedStateValue}
        selectedCityValue={selectedCityValue}
        handleFourStepSubmit={handleFourStepSubmit}
        myCallback={detailsValidation.handleChange}
        companyNameError={detailsValidation?.errors?.companyName}
        firstNameError={detailsValidation.errors.firstName}
        lastNameError={detailsValidation.errors.lastName}
        emailError={detailsValidation.errors.email}
        passwordError={detailsValidation.errors.password}
        pinCodeError={detailsValidation.errors.pinCode}
        address1Error={detailsValidation.errors.address1}
        confirmPasswordError={detailsValidation.errors.confirmPassword}
      />, id: 4, label: "Personal Details"
    },
    {
      component: <StepFive
        handleFiveStepSubmit={handleFiveStepSubmit}
        myCallback={bankValidation.handleChange}
        bankAccountHolderIfscError={bankValidation?.errors?.bankAccountHolderIfsc}
        bankAccountHolderNameError={bankValidation?.errors?.bankAccountHolderName}
        bankAccountHolderNumberError={bankValidation?.errors?.bankAccountHolderNumber}
        confirmAccountNumberError={bankValidation?.errors?.confirmAccountNumber}
      />, id: 5, label: "Bank Details"
    },
  ];

  return (
    <Container className="my-5">
      {loading && <OverlayLoader />}
      <Card className="border-0 bg-light py-5">
        <CardBody>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
              {steps.map((step, index) => (
                <Step key={step.id}>
                  <StepLabel>{step.label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Row>
              <Col xs="12" className="mb-4 py-5 px-4">
                {steps[activeStep]?.component}
              </Col>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                {activeStep > 0 && activeStep > 1 && (
                  <Button
                    color="inherit"
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    variant="outlined"
                  >
                    Back
                  </Button>
                )}
                <Box sx={{ flex: '1 1 auto' }} />

                {activeStep !== 0 && (
                  <Button
                    onClick={() => {
                      if (activeStep === 2) {
                        handleThreeStepSubmit();
                      } else if (activeStep === 1) {
                        dispatch(StepperActions.vehiclePostRequest({
                          mobile: registrationMobile,
                          vehicleId: selectedVehicles
                        }));
                        setActiveStep(2)
                      }
                      else if (activeStep === 3) {
                        handleFourStepSubmit();
                      } 
                      else if (activeStep === 4) {
                        handleFiveStepSubmit();
                      }
                      else {
                        handleNext()
                      }
                    }}
                    disabled={activeStep === 1 && selectedVehicles.length < 1}
                    variant="contained">
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                )}


              </Box>
            </Row>
          </Box>
        </CardBody>
      </Card>
    </Container>
  );
}
