import React, { Component } from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap';

 
export default class menu extends Component {


  state = {
    angka : 5000
  }

  Tambah = () => {
    this.setState({
      angka: this.state.angka + 5000
    })
  }
  Kurang = () => {
    this.setState({
      angka: this.state.angka - 5000
    })
  }

  render() {
    return (
      <div>
        

         <Row>
      <Col sm="3" >
        <Card>
          <CardImg top width="100%" src="https://i.pinimg.com/564x/b9/12/8f/b9128f47d444a087fdacc0a46eca8741.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Mie</CardTitle>
          <CardText>{this.state.angka}</CardText>
          <Button onClick={()=> this.Tambah()} >+</Button><Button onClick={()=> this.Kurang()} >-</Button>
        </CardBody>
        </Card>
      </Col>


      <Col sm="3" >
        <Card>
        <CardImg top width="100%" src="https://i.pinimg.com/564x/4b/b6/4e/4bb64e52968e081fa617b444d7aade15.jpg" alt="Card image cap" />
          <CardBody>
          <CardTitle>Bakso</CardTitle>
          <CardText>{this.state.angka}</CardText>
          <Button onClick={()=> this.Tambah()} >+</Button><Button onClick={()=> this.Kurang()} >-</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="3">
        <Card>
        <CardImg top width="100%" src="https://i.pinimg.com/564x/1a/97/e9/1a97e9b01aade7931d41bcb3db3ed832.jpg" alt="Card image cap" />
          <CardBody>
          <CardTitle>Sup</CardTitle>
          <CardText>{this.state.angka}</CardText>
          <Button onClick={()=> this.Tambah()} >+</Button><Button onClick={()=> this.Kurang()} >-</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="3">
        <Card>
        <CardImg top width="100%" src="https://i.pinimg.com/564x/ff/95/02/ff9502c8a0396a6642883c91bde5ace8.jpg" alt="Card image cap" />
          <CardBody>
          <CardTitle>Bakso</CardTitle>
          <CardText>{this.state.angka}</CardText>
          <Button onClick={()=> this.Tambah()} >+</Button><Button onClick={()=> this.Kurang()} >-</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
      </div>
    )
  }
}
