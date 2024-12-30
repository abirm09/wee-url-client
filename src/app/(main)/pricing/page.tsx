import { Container } from "@/components";
import { SectionTitle } from "@/components/Shared/Title/Title";

const page = () => {
  return (
    <section>
      <Container className="py-10 md:py-20 space-y-3">
        <SectionTitle text="Pricing" />
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quos,
          rem ratione at recusandae in qui, similique minima, velit tenetur quae
          non iusto cumque eveniet autem eum suscipit hic corrupti.
        </h2>
      </Container>
    </section>
  );
};

export default page;
