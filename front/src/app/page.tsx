import Image from "next/image";

import Header from './components/Header';


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
          <Col>
            <Button as="a" variant="primary">
              Detalhes
            </Button>
          </Col>
        </Row>

        <Row>
        



        </Row>


 

      </Container>
    </main>
  ); 
}
