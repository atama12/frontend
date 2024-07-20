import React from 'react'
import { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link"
import { Container, Nav, NavItem } from 'reactstrap';

const Layout = (props) => {
  return (
    <div>
        <Head>
            <title>フードデリバリーサービス</title>        
        </Head>
        <header>

            <Nav className="navvar navbar-dark bg-dark">
                <NavItem>
                    <Link href="/" className='navbar-brand'>
                        ホーム
                    </Link>
                </NavItem>
                <NavItem className='ml-auto'>
                    <Link href="/login" className='navbar-brand'>
                        サインイン
                    </Link>
                </NavItem>
                <NavItem >
                    <Link href="/register" className='navbar-brand'>
                        サインアップ
                    </Link>
                </NavItem>
            </Nav>
        </header>
        <Container>{props.children}</Container>
    </div>
  )
}

export default Layout