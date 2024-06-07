import Image from "next/image";


// or less ideally
import { Button, Stack, Container } from 'react-bootstrap';


export default function Home() {
  return (
    <main >
      


      <Container>
        
        <Stack direction="horizontal" gap={2}>
          <Button as="a" variant="primary">
            Detalhes
          </Button>
          <Button as="a" variant="success">
            Comprar
          </Button>
        </Stack>

 

      </Container>
    </main>
  ); 
}
