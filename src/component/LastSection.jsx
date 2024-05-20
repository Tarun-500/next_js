"use client";
import React from 'react';
import { Container, Row, Col, Button, Card, CardBody } from 'reactstrap';
import NorthEast from "../../public/north_east.png"
import { FaCaretDown } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const cardData = [
    {
        price: '2.62',
        type: 'Premium',
        features: 'Prioritizing top-tier performance'
    },
    {
        price: '8.62',
        type: 'Business',
        features: 'Prioritizing top-tier performance'
    },
    {
        price: '8.62',
        type: 'Gold',
        features: 'Prioritizing top-tier performance'
    }
];
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const cardData2 = [
    {
        title: "Never a downtime. Peace of mind.",
        name: "Name Surname",
        position: "Position, Company name"
    },
    {
        title: "Switched to Bytebites. No regrets.",
        name: "Name Surname",
        position: "Position, Company name"
    },
    {
        title: "Fast, reliable, affordable.",
        name: "Name Surname",
        position: "Position, Company name"
    }
    ,
    {
        title: "Top-notch support. Always helpful.",
        name: "Name Surname",
        position: "Position, Company name"
    }
];
const renderCards = () => {
    return cardData2?.map((card, index) => (
        <Card key={index} className='slider_card'>
            <CardBody>
                <h5 className='mb-3'>{card.title}</h5>
                <p className='para-1 mb-1'>{card.name}</p>
                <p className='para-1'>{card.position}</p>
            </CardBody>
        </Card>
    ));
};


const LastSection = () => {
    return (
        <>
            <section className='py-5 last_sec'>
                <Container>
                    <Row className='mb-5'>
                        <Col md={6} className="text-center text-md-start">
                            <h2>
                                What Our Clients Say
                            </h2>
                        </Col>
                        <Col md={6} className="text-center text-md-end">
                            <p className="para-1"> Crafted Hosting Solutions for Every Need </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className=''>
                            <Carousel responsive={responsive}
                                autoPlay={true}
                                infinite={true}
                                rewind={true}
                                arrows={false}
                                centerMode={true}
                                autoPlaySpeed={3000}
                            >
                                {renderCards()}
                            </Carousel>
                        </Col>
                        <Col className=''>
                            <Carousel responsive={responsive}
                                autoPlay={true}
                                infinite={true}
                                rewind={true}
                                arrows={false}
                                centerMode={true}
                                autoPlaySpeed={5000}
                            >
                                {renderCards()}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container className="plan_sec">
                    <Row className='mb-5'>
                        <Col md={6} className="text-center text-md-start">
                            <h2>
                                The Perfect - <br />
                                Web Hosting Plan
                            </h2>
                        </Col>
                        <Col md={6} className="text-center text-md-end">
                            <p className="para-1">Crafted Hosting Solutions for Every Need </p>
                        </Col>
                    </Row>

                    <Row className='justify-content-center mb-5'>
                        {cardData.map((card, index) => (
                            <Col sm={6} md={6} lg={4} key={index} className='card_box'>
                                <Card className="plan_card mb-4">
                                    <CardBody>
                                        <div className='d-flex align-items-baseline text-light py-4'>
                                            <p className='mb-0'> $ </p>
                                            <h2 className='mb-0'>{card.price} </h2>
                                            <p className='mb-0'> /month </p>
                                        </div>
                                        <Col xs={12}>   <hr className="border-light" /> </Col>
                                        <Row className='mb-5'>
                                            <Col xs={6}>
                                                <p className='para-2'>{card.type}</p>
                                            </Col>
                                            <Col xs={6}>
                                                <p className='para-1 text-end'>{card.features}</p>
                                            </Col>
                                        </Row>
                                        <button className="btn btn-outline-secondary rounded-pill w-100 py-3"> Add to Chart </button>
                                        <Row className='mt-3'>
                                            <Col className='col-6'>
                                                <p className='para-2'>Features</p>
                                            </Col>
                                            <Col className='col-6 text-end'>
                                                <FaCaretDown className='para-2' />
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <div className="text-center">
                        <h2 className="mb-4">Don’t see what you looking for?</h2>
                        <button className="btn btn-outline-secondary rounded-pill"> Contact sales agent </button>
                    </div>
                </Container>
            </section>
            <section className="mt-5 last-sec">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div>
                                <h2 className="text-uppercase text-white">
                                    Ready to Experience<br />
                                    Exceptional Hosting?
                                </h2>
                                <p className="hero-p mx-w-300">
                                    We provide the best hosting and domain services for all your needs with unlimited support services
                                </p>
                                <Button className="btn btn-new mt-3">
                                    Get Started now
                                    <img src={NorthEast} className="ms-2" alt="" />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default LastSection;
