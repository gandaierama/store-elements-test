import Image from "next/image";


// or less ideally
import { Button, Stack, Card } from 'react-bootstrap';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      


      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
       
<div>Teste de elementos</div>


      <div>
        
        <Stack direction="horizontal" gap={2}>
          <Button as="a" variant="primary">
            Detalhes
          </Button>
          <Button as="a" variant="success">
            Comprar
          </Button>
        </Stack>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>

      </div>
    </main>
  );
}
