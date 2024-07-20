import Link from 'next/link';
import React from 'react'
import { Card, CardImg,CardBody, CardTitle, Col, Row } from 'reactstrap';

const RestaurantList = () => {
  return (
    <Row>
        <Col xs="6" sm="4">
        
            <Card style={{margin:"0 0.5rem 20px 0.5rem"}}>
                <CardImg src="" top={true} style={{height:250}} />
                <CardBody>
                    <CardTitle>Italian restaurant</CardTitle>
                    <CardTitle>イタリアレストランです</CardTitle>
                    <CardTitle></CardTitle>
                </CardBody>
                <div className='card-footer'>
                    <Link className="btn btn-primary" href="/restaurants?id=1" as="/restaurants/1">もっと見る</Link>
                </div>
            </Card>
        </Col>
        <style jsx>
            {`
                
            `}
        </style>
    </Row>
  )
}

export default RestaurantList;