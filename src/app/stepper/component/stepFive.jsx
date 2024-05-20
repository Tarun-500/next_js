import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form } from 'reactstrap';
import TextInput from '@/component/textInput';

const StepFive = ({
  myCallback,
  bankAccountHolderIfscError,
  bankAccountHolderNameError,
  bankAccountHolderNumberError,
  confirmAccountNumberError,
  handleFiveStepSubmit
}) => {
  return (
    <Form  onSubmit={handleFiveStepSubmit}>
      <Row>
        <Col md={6} sm={12}>
          <TextInput
            type={"text"}
            label={"Bank Account Holder IFSC*"}
            error={bankAccountHolderIfscError}
            placeholder={"Enter IFSC Code"}
            name={"bankAccountHolderIfsc"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col md={6} sm={12}>
          <TextInput
            type={"text"}
            label={"Bank Account Holder Name*"}
            error={bankAccountHolderNameError}
            placeholder={"Enter Account Holder Name"}
            name={"bankAccountHolderName"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col md={6} sm={12}>
          <TextInput
            type={"text"}
            label={"Bank Account Holder Number*"}
            error={bankAccountHolderNumberError}
            placeholder={"Enter Account Number"}
            name={"bankAccountHolderNumber"}
            onChange={(e) => myCallback(e)}
          />
        </Col>

        <Col md={6} sm={12}>
          <TextInput
            type={"text"}
            label={"Confirm Account Number*"}
            error={confirmAccountNumberError}
            placeholder={"Confirm Account Number"}
            name={"confirmAccountNumber"}
            onChange={(e) => myCallback(e)}
          />
        </Col>
      </Row>
    </Form>
  );
};

StepFive.propTypes = {
  myCallback: PropTypes.func.isRequired,
  handleFiveStepSubmit: PropTypes.func.isRequired,
  bankAccountHolderIfscError: PropTypes.string,
  bankAccountHolderNameError: PropTypes.string,
  bankAccountHolderNumberError: PropTypes.string,
  confirmAccountNumberError: PropTypes.string,
};

export default StepFive;
