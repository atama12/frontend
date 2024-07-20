import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import RestaurantList from "../components/RestaurantsList/index"
import { Alert, Button, Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col>
            <div className="search">
              <InputGroup>
                <InputGroupText>探す</InputGroupText>
                <Input placeholder="itaria"></Input>
              </InputGroup>

            </div>
            <RestaurantList />
          </Col>
        </Row>
        <style jsx>
          {`
          .search{
            margin:20px;          
          `


        }</style>
      </div>
    </>
  )
}
