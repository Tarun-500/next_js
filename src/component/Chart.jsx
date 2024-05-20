"use client";
import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Need help? We are here 24/7.Our team is super friendly',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 
const generateFakeData = () => {
    return labels.map(() => Math.floor(Math.random() * 2001) - 1000);
};

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: generateFakeData(),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: generateFakeData(),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function Chart() {
    return (
        <section className='py-5 chart_sec'>
            <Container>
                <Row>
                    <Col xs={12} md={3} lg={3} className="mb-4">
                        <Card className='h-100'>
                            <CardBody>
                                <h2>
                                    Fast Websites, Always
                                </h2>
                                <p className='para-1'>
                                    Your website will load super fast because we use the latest
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={6} className="mb-4">
                        <Card className='h-100'>
                            <CardBody>
                                <Line options={options} data={data} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} lg={3} className="mb-4">
                        <Card className='h-100'>
                            <CardBody>
                                <h2>
                                    Help When You Need It
                                </h2>
                                <p className='para-1'>
                                    {"Need help? We're here 24/7. Our team is super friendly"}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="mb-4">
                        <Card>
                            <CardBody>
                                <h2>
                                    Keep Your Website Safe
                                </h2>
                                <p className='para-1'>
                                  `${"We've got a bunch of security tools to make sure your website stays safe from bad stuff"}`
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="mb-4">
                        <Card>
                            <CardBody>
                                <h2>
                                    Great Service, Affordable Prices
                                </h2>
                                <p className='para-1'>
                                    We give you a lot for your money. Big websites or small, we have a plan that fits your budget and gives you everything you need.
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
