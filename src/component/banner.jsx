"use client";
import React from 'react';
import Image from 'next/image';
import styles from '../app/globals.css';
import Frame7 from '../../public/Frame 107.png';
import NorthImg from '../../public/north_east.png';
import LogoOne from '../../public/Fictional company logo.png'
import LogoTwo from '../../public/Fictional company logo-1.png'
import LogoThree from '../../public/Fictional company logo-2.png'
import LogoFour from '../../public/Fictional company logo-3.png'
import LogoFive from '../../public/Fictional company logo-4.png'
import LogoSix from '../../public/Fictional company logo-5.png'
import { Container, Row, Col, Button } from 'reactstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
const Banner = () => {
    return (
        <>
            <section className={"hero"}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xl-9">
                            <div className={"heading"}>
                                <h1>Click<span>.</span></h1>
                                <h1>deploy<span>.</span></h1>
                                <h1>thrive<span>.</span></h1>
                            </div>
                        </div>
                        <div className="col-md-4  col-xl-3">
                            <p className={"hero-p py-4"}>
                                We provide the best hosting and domain services for all your needs with unlimited support services.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-md-end justify-content-center">
                        <div>
                            <div className={"check-list"}>
                                <p>
                                    <Image src={Frame7} alt="Free Domain" width={24} height={24} /> Free Domain
                                </p>
                            </div>
                            <div className={"check-list"}>
                                <p>
                                    <Image src={Frame7} alt="Free website migration" width={24} height={24} /> Free website migration
                                </p>
                            </div>
                            <div className={"check-list"}>
                                <p>
                                    <Image src={Frame7} alt="24/7 customer support" width={24} height={24} /> 24/7 customer support
                                </p>
                            </div>
                            <button className={`btn btn-new mt-3`}>
                                Get Started now
                                <Image src={NorthImg} className="ms-2" alt="Get Started" width={16} height={16} />
                            </button>
                        </div>
                    </div>
                    <div className={`mt-5 pt-5 logos}`}>
                        <Carousel responsive={responsive}
                            autoPlay={true}
                            infinite={true}
                            rewind={true}
                            arrows={false}
                            centerMode={true}
                            autoPlaySpeed={3000}
                        >
                            <div>
                                <Image src={LogoOne} alt="Company Logo" />
                            </div>
                            <div>
                                <Image src={LogoTwo} alt="Company Logo" />
                            </div>
                            <div>
                                <Image src={LogoThree} alt="Company Logo" />
                            </div>
                            <div>
                                <Image src={LogoFour} alt="Company Logo" />
                            </div>
                            <div>
                                <Image src={LogoFive} alt="Company Logo" />
                            </div>
                            <div>
                                <Image src={LogoSix} alt="Company Logo" />
                            </div>
                        </Carousel>

                    </div>
                </div>
            </section>
            <section className="my-5">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4} xl={3} className="mb-3">
                            <div className="web">
                                <h2>35,000</h2>
                                <p className="hero-p">Websites Already Thriving with Us!</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={8} xl={9}>
                            <div className="web-2">
                                <Col lg={6}>
                                    <h2>
                                        Experience the power of speed with our cutting-edge hosting infrastructure
                                    </h2>
                                    <Button outline color="dark" className="rounded-pill border text-white">
                                        Read our story
                                    </Button>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Banner;
