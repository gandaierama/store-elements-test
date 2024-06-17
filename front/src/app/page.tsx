import Image from "next/image";

import Header from './components/Header';
import Card from './components/Card';
import SideBar from './components/SideBar';
import Menu from './components/Menu';


// or less ideally
import { Button, Stack, Container, Row, Col } from 'react-bootstrap';


export default function Home() {
  return (
    <main >
      <Container>
        <Row>
          <Header/>
        </Row>
        <Row>
          <Menu/>
        </Row>
        <Row>
          <Col sm={3}>
            <SideBar/>
          </Col>
          <Col sm={9}>
            <Row>
              <Col sm={4}>
                <Card/>
              </Col>
              <Col sm={4}>
                <Card/>
              </Col>
              <Col sm={4}>
                <Card/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  ); 
}
