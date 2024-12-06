import { Container, Header, WeeButton } from "@/components";
import { About, Banner } from "@/features/main/home/components";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Container>
        <Banner />
        <About />
        <Header />
        <Link href="/auth/login">
          <WeeButton>Login</WeeButton>
        </Link>
      </Container>
    </>
  );
};

export default page;
