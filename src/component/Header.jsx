"use client";
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { useRouter } from "next/navigation";

import React, { useState } from 'react';
import Logo from '../../public/logo.png'
import {
  Button,
  Collapse, NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Input,
  Form,
} from 'reactstrap';
import Link from 'next/link';

function Example() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Container>
      <nav className="navbar navbar-expand-lg">
        <Link href="/">
          <Image
            src={Logo}
            alt="Vercel Logo"
            width={120}
            height={'auto'}
            priority
          />
        </Link>
        <button className="navbar-toggler bg-transparent border-0 outline-0 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars />
        </button>
        <div className="collapse navbar-collapse p-3" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown me-3">
              <Link className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hosting
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/">Option 1</Link></li>
                <li><Link className="dropdown-item" href="/">Option 2</Link></li>
                <li><Link className="dropdown-item" href="/">Option 3</Link></li>
              </ul>
            </li>

            <li className="nav-item me-3">
              <Link className="nav-link" href="#"> VPS </Link>
            </li>

            <li className="nav-item dropdown me-3">
              <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Website Builder
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/">Option 1</Link></li>
                <li><Link className="dropdown-item" href="/">Option 2</Link></li>
                <li><Link className="dropdown-item" href="/">Option 3</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Domain
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/">Option 1</Link></li>
                <li><Link className="dropdown-item" href="/">Option 2</Link></li>
                <li><Link className="dropdown-item" href="/">Option 3</Link></li>
              </ul>
            </li>


          </ul>
          <Button className="btn btn-dark border-1 border d-flex align-items-center justify-content-center me-3 mb-3 mb-lg-0">
            <MdLanguage className='me-2' />  Eng
          </Button>
          <Button className="btn btn-purple" onClick={() => { router.push("/stepper") }}>
            Sign Up
          </Button>
        </div>
      </nav>
    </Container>
  );
}

export default Example;