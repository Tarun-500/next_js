'use client';
import Image from 'next/image'
import React from 'react'
import Logo from '../../public/logo.png'
import { Container, Row, Col, } from 'reactstrap'
import '../app/globals.css'
export default function Footer() {

    const hosting = [
        "Web Hosting",
        "Professional Web Hosting",
        "VPS Hosting",
        "Cloud Hosting",
        "CyberPanel Hosting"
    ];
    const vps = [
        "VPS Plans",
        "Features",
        "Control Panel",
        "Scalability Options",
        "Security Measures",
    ];
    const domain = [
        "Domain Name Search",
        "Domain Transfer",
        "Free Domain",
        "XYZ Domain"
    ];
    const websiteBuilder = [
        "Tools",
        "Template",
        "Portfolio",
        "Tutorial",
    ];
    const legal = [
        "Privacy Policy",
        "Terms of Conditions",
        "Cookie Policy"
    ];


    return (
        <footer className="footer">
            <Container>
                <Row className="py-5">
                    <Col className="col-6 col-md-4 col-lg-3 col-xl-2">
                        <Image
                            src={Logo}
                            alt="Vercel Logo"
                            width={120}
                            className="mb-3"
                            height={'auto'}
                            priority
                        />
                    </Col>
                    <Col className="col-6 col-md-4 col-lg-3 col-xl-2">
                        <h4>Hosting</h4>
                        <ul>
                            {hosting.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </Col>

                    <Col className="col-6 col-md-4 col-lg-3 col-xl-2">
                        <h4>VPS</h4>
                        <ul>
                            {vps.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </Col>

                    <Col className="col-6 col-md-4 col-lg-3 col-xl-2">
                        <h4>Domain</h4>
                        <ul>
                            {domain.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </Col>

                    <Col className="col-6 col-md-4 col-lg-3 col-xl-2">
                        <h4>Website Builder</h4>
                        <ul>
                            {websiteBuilder.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </Col>

                    <Col className="col-6 col-md-4 col-lg-3 col-xl-2">
                        <h4>Legal</h4>
                        <ul>
                            {legal.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </Col>

                    <Col className="" xs={12}>
                        <hr className="w-100 bg-light border-light" />
                    </Col>
                    <Col sm={6} className={"text-center text-sm-start"}>
                        <p className="para-1"> Springfield,  8831  United States </p>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <p className="para-1"> LightBox  © 2023 </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
