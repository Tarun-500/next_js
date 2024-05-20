import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import TextInput from '@/component/textInput';
import Select from 'react-select';

const StepFour = ({
  myCallback,
  companyNameError,
  gstNumberError,
  firstNameError,
  lastNameError,
  emailError,
  mobile2Error,
  passwordError,
  confirmPasswordError,
  address1Error,
  address2Error,
  pinCodeError,
  stateResponse,handleFourStepSubmit,
  cityResponse,
  selectedStateValue,
  selectedCityValue,
}) => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [showCompanyFields, setShowCompanyFields] = useState(false);

  const stateOptions = stateResponse?.data?.map((state) => ({
    value: state.value,
    label: state.label,
  }));

  const handleChangeState = (selectedState) => {
    setSelectedState(selectedState);
    selectedStateValue(selectedState);
  };

  const handleChangeCity = (selectedCity) => {
    setSelectedCity(selectedCity);
    selectedCityValue(selectedCity)
  };

  const handleRadioChange = (e) => {
    setShowCompanyFields(e.target.value === '1');
  }; 

  return (
    <Form  onSubmit={handleFourStepSubmit}>
      <Row>
        <Col xs={12}>
          <FormGroup check inline>
            <Label check>
              <Input type="radio" name="type" id="inlineRadio1" value="0" defaultChecked onChange={handleRadioChange} />
              Individual
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input type="radio" name="type" id="inlineRadio2" value="1" onChange={handleRadioChange} />
              Corporate
            </Label>
          </FormGroup>
        </Col>

        {showCompanyFields && (
          <>
            <Col xl={4} md={6} sm={12}>
              <TextInput
                type={"text"}
                label={"Company Name*"}
                error={companyNameError}
                placeholder={"Enter Company Name"}
                name={"companyName"}
                onChange={(e) => myCallback(e)}
              />
            </Col>

            <Col xl={4} md={6} sm={12}>
              <TextInput
                type={"text"}
                label={"GST No"}
                error={gstNumberError}
                placeholder={"Enter GST Number"}
                name={"gstNumber"}
                onChange={(e) => myCallback(e)}
              />
            </Col>
          </>
        )}

        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"text"}
            label={"First Name*"}
            error={firstNameError}
            placeholder={"Enter First Name"}
            name={"firstName"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"text"}
            label={"Last Name*"}
            error={lastNameError}
            placeholder={"Enter Last Name"}
            name={"lastName"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"email"}
            label={"Email*"}
            error={emailError}
            placeholder={"Enter Email"}
            name={"email"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"text"}
            label={"Secondary Mobile no."}
            error={mobile2Error}
            placeholder={"Enter Secondary Mobile no."}
            name={"mobile2"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"password"}
            label={"Password*"}
            error={passwordError}
            placeholder={"Enter Password"}
            name={"password"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"password"}
            label={"Confirm Password*"}
            error={confirmPasswordError}
            placeholder={"Enter Confirm Password"}
            name={"confirmPassword"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col lg={6} sm={12}>
          <TextInput
            type={"text"}
            label={"Address 1"}
            error={address1Error}
            placeholder={"Enter address "}
            name={"address1"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col lg={6} sm={12}>
          <TextInput
            type={"text"}
            label={"address2*"}
            error={address2Error}
            placeholder={"Enter address"}
            name={"address2"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"text"}
            label={"Pincode*"}
            error={pinCodeError}
            placeholder={"Enter pincode"}
            name={"pinCode"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <Label htmlFor='state'>State</Label>
          <Select
            id="state"
            value={selectedState}
            onChange={handleChangeState}
            options={stateOptions}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <Label htmlFor='city'>City</Label>
          <Select
            id="city"
            value={selectedCity}
            onChange={handleChangeCity} 
            options={cityResponse?.data?.map(city => ({ value: city.value, label: city.label })) || []}
          />
        </Col>
      </Row>
    </Form>
  );
};


StepFour.propTypes = {
  myCallback: PropTypes.func.isRequired,
  handleFourStepSubmit: PropTypes.func.isRequired,
  companyNameError: PropTypes.string,
  gstNumberError: PropTypes.string,
  firstNameError: PropTypes.string,
  lastNameError: PropTypes.string,
  emailError: PropTypes.string,
  mobile2Error: PropTypes.string,
  passwordError: PropTypes.string,
  confirmPasswordError: PropTypes.string,
  address1Error: PropTypes.string,
  address2Error: PropTypes.string,
  pinCodeError: PropTypes.string,
  stateResponse: PropTypes.arrayOf(PropTypes.object),
  cityResponse: PropTypes.arrayOf(PropTypes.object),
  selectedStateValue: PropTypes.func,
};

export default StepFour;
