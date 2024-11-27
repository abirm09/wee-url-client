import { Container, Header } from "@/components";
import { About, Banner } from "@/features/main/home/components";

const page = () => {
  return (
    <>
      <Container>
        <Banner />
        <About />
        <Header />
      </Container>
    </>
  );
};

export default page;
