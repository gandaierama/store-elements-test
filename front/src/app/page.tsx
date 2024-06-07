import Image from "next/image";


// or less ideally
import { Button, Stack, Container, Row, Col, Card } from 'react-bootstrap';


export default function Home() {
  return (
    <main >
      


      <Container>
        <Row>
          <Col>
            <Button as="a" variant="primary">
              Detalhes
            </Button>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        
        <Card.Text>
          Titulo grande com muitas linhas para testar o tamanho certo 
        </Card.Text>
        <Row>
          <Col>
              <Button variant="primary">Detalhes</Button>    
          </Col>
          <Col>
              <Button variant="success">Comprar</Button>    
          </Col>
        </Row>
        
      </Card.Body>
    </Card>
          </Col>
        </Row>


 

      </Container>
    </main>
  ); 
}
