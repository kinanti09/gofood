import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap';

import {Link} from 'react-router-dom';

export default function home() {
  return (
    <div>
      <div>
       <Row>
      <Col sm="3">
        <Card>
          <CardImg top width="100%" src="https://2.bp.blogspot.com/-9VbQNe3H43k/WCm__47giBI/AAAAAAAAKIU/mXN_5_yYoek2I8JUTQQVXkjCLTD9kX1vACLcB/s1600/bitebrands%2B-%2Blogo-perusahaan-makanan-restoran-fast-food-10.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Burger King</CardTitle>
          <CardText>restaurant</CardText>
          <Button color="success" size="lg"><Link to="/menu">Go</Link></Button>{' '}
        </CardBody>
        </Card>
      </Col>


      <Col sm="3">
        <Card>
        <CardImg top width="100%" src="https://4.bp.blogspot.com/-IV-RU_OYcSI/WCm__LVRCMI/AAAAAAAAKII/CNTFc7pKp2obXgoRl86-187xDKZD58UQQCLcB/s1600/bitebrands%2B-%2Blogo-perusahaan-makanan-restoran-fast-food-07.jpg" alt="Card image cap" />
          <CardBody>
          <CardTitle>Baskin Robbins</CardTitle>
          <CardText>restaurant</CardText>
          <Button color="success" size="lg"><Link to="/menu">Go</Link></Button>{' '}
          </CardBody>
        </Card>
      </Col>
      <Col sm="3">
        <Card>
        <CardImg top width="100%" src="https://1.bp.blogspot.com/-7Koro5JxDPw/WCnAGfdJLvI/AAAAAAAAKJw/1oNIRpN1RBwIOSsL-KZ_-1szEURwyn4vQCLcB/s1600/bitebrands%2B-%2Blogo-perusahaan-makanan-restoran-fast-food-33.jpg" alt="Card image cap" />
          <CardBody>
          <CardTitle>Mc Donals</CardTitle>
          <CardText>restaurant</CardText>
          <Button color="success" size="lg"><Link to="/menu">Go</Link></Button>{' '}
          </CardBody>
        </Card>
      </Col>
      <Col sm="3">
        <Card>
        <CardImg top width="100%" src="https://1.bp.blogspot.com/-sJiQLS9irXc/WCnACEmyKzI/AAAAAAAAKIs/56E8gTT5s4EsWIMipt6huZEwPjTmEbdjwCLcB/s1600/bitebrands%2B-%2Blogo-perusahaan-makanan-restoran-fast-food-16.jpg" alt="Card image cap" />
          <CardBody>
          <CardTitle>Domino's pizza</CardTitle>
          <CardText>restaurant</CardText>
          <Button color="success" size="lg"><Link to="/menu">Go</Link></Button>{' '}
          </CardBody>
        </Card>
      </Col>
    </Row>
    </div>
    </div>
  )
}

