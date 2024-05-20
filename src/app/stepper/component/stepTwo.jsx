import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { IoBicycle } from "react-icons/io5";
import { MdOutlineElectricRickshaw, MdFrontLoader } from "react-icons/md";
import { FaCar, FaTractor, FaBusAlt, FaTruck } from "react-icons/fa";

export default function StepTwo({ vehicleListResponse, onVehicleSelect }) {
  const [selectedVehicles, setSelectedVehicles] = useState([]);

  useEffect(() => {
    onVehicleSelect(selectedVehicles);
  }, [selectedVehicles, onVehicleSelect]);

  const handleInputChange = (id) => {
    if (selectedVehicles.includes(id)) {
      setSelectedVehicles(selectedVehicles.filter((vehicleId) => vehicleId !== id));
    } else {
      setSelectedVehicles([...selectedVehicles, id]);
    }
  };

  const vehicleBox = [
    {
      label: "2 Wheelers",
      icon: <IoBicycle />
    },
    {
      label: "3 Wheelers",
      icon: <MdOutlineElectricRickshaw />
    },
    {
      label: "4 Wheelers",
      icon: <FaCar />
    },
    {
      label: "Commercial Vehicles",
      icon: <FaBusAlt />
    },
    {
      label: "Construction Equipment",
      icon: <MdFrontLoader />
    },
    {
      label: "Farm Equipment",
      icon: <FaTractor />
    },
    {
      label: "Insurance Salvage Vehicles",
      icon: <FaTruck />
    }
  ];

  const combinedData = vehicleListResponse?.data?.map(vehicle => {
    const matchedVehicle = vehicleBox.find(v => v.label === vehicle.label);
    return {
      value: vehicle.value,
      label: vehicle.label,
      icon: matchedVehicle ? matchedVehicle.icon : null
    };
  });

  return (
    <Row>
      <Col xs="12" className="mb-4">
        <p className="mb-4 fw-bold">Select the category of the vehicle(s) that you want.</p>
      </Col>

      {combinedData?.map((vehicle) => (
        <Col sm={6} md={3} key={vehicle.value} className="mb-3">
          <Card className="h-100">
            <label htmlFor={`vehicle-${vehicle.value}`} className={`${selectedVehicles.includes(vehicle.value) ? 'bg-primary text-light' : ''} cursor-pointer w-100 h-100`}>
              <CardBody className="d-flex flex-column align-items-center justify-content-center gap-2">
                <input
                  type="checkbox"
                  id={`vehicle-${vehicle.value}`}
                  checked={selectedVehicles.includes(vehicle.value)}
                  onChange={() => handleInputChange(vehicle.value)}
                  hidden
                />
                <span className="display-1">{vehicle.icon}</span>
                <h6 className="mb-0 fw-semibold">{vehicle.label}</h6>
              </CardBody>
            </label>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

StepTwo.propTypes = {
  vehicleListResponse: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  onVehicleSelect: PropTypes.func.isRequired
};
