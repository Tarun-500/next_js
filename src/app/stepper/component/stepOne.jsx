import React from 'react'
import PropTypes from 'prop-types';
import { Row, Col, Form, Button } from 'reactstrap'
import TextInput from '@/component/textInput'

export default function StepOne({
    handleFirstStepSubmit,
    mobileError,
    myCallback,
    isOtpVerified,
    myCallbackTwo,
    otpError,
    handleRegistrationSubmit
}) {
    return (
        <Row>
            <Col xl={6}>
                <Form>
                    <TextInput
                        type={"text"}
                        label={"Enter Mobile No*"}
                        error={mobileError}
                        placeholder={"Enter Mobile Number"}
                        name={"mobile"}
                        onChange={(e) => myCallback(e)}
                    />
                    {!isOtpVerified && (
                        <Button color={"primary"} onClick={handleRegistrationSubmit}> Get Otp </Button>
                    )}
                </Form>
                {isOtpVerified && (
                    <>
                        <TextInput
                            label={"Enter OTP*"}
                            type={"text"}
                            error={otpError}
                            placeholder={"Enter Otp"}
                            name={"otp"}
                            onChange={(e) => myCallbackTwo(e)}
                        />
                        <Button color={"primary"} onClick={handleFirstStepSubmit}> Verify Otp </Button>
                    </>
                )}
            </Col>
        </Row>
    )
}

StepOne.propTypes = {
    handleFirstStepSubmit: PropTypes.func.isRequired,
    handleRegistrationSubmit: PropTypes.func.isRequired,
    myCallbackTwo: PropTypes.func.isRequired,
    myCallback: PropTypes.func.isRequired,
    isOtpVerified: PropTypes.bool.isRequired,
    mobileError: PropTypes.string.isRequired,
    otpError: PropTypes.string.isRequired,
};
