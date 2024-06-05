import Image from "next/image";


// or less ideally
import { Button, Stack } from 'react-bootstrap';

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
        </Stack>;
      </div>

      </div>
    </main>
  );
}
