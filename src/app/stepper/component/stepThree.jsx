import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form } from 'reactstrap';
import TextInput from '@/component/textInput';

export default function StepThree({
  myCallback,
  panNumberError,
  panNameError,
  panCardError,
  addressProofFrontError,
  addressProofBackError,
  handleThreeStepSubmit
}) {
  return (
    <Form onSubmit={handleThreeStepSubmit}>
      <Row>
        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"text"}
            label={"PAN Number*"}
            error={panNumberError}
            placeholder={"Enter PAN Number"}
            name={"panNumber"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"text"}
            className="uppercase"
            uppercase={true}
            label={"Enter name as per PAN*"}
            error={panNameError}
            placeholder={"Enter name as per PAN"}
            name={"panName"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"file"}
            label={"Upload PAN Card*"}
            error={panCardError}
            placeholder={"Upload PAN Card"}
            name={"panCard"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"file"}
            label={"Address Proof (Front)"}
            error={addressProofFrontError}
            placeholder={"Upload Address Proof (Front)"}
            name={"addressProofFront"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col xl={4} md={6} sm={12}>
          <TextInput
            type={"file"}
            label={"Address Proof (Back)"}
            error={addressProofBackError}
            placeholder={"Upload Address Proof (Back)"}
            name={"addressProofBack"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

      </Row>
    </Form>
  )
}

StepThree.propTypes = {
  myCallback: PropTypes.func.isRequired,
  handleThreeStepSubmit: PropTypes.func.isRequired,
  panNumberError: PropTypes.string,
  panNameError: PropTypes.string,
  panCardError: PropTypes.string,
  addressProofFrontError: PropTypes.string,
  addressProofBackError: PropTypes.string
};
