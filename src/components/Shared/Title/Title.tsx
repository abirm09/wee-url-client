const SectionTitle = ({
  text,
  dataAos = "fade-up",
  ...rest
}: {
  text: string;
  dataAos?: string;
}) => {
  return (
    <h2
      className="uppercase text-2xl text-center text-gray-800 font-bold tracking-widest"
      data-aos={dataAos}
      {...rest}
    >
      {text}
    </h2>
  );
};

const SectionSubTitle = ({
  text,
  dataAos = "fade-up",
  ...rest
}: {
  text: string;
  dataAos?: string;
}) => {
  return (
    <p
      className="text-gray-600 text-center text-xs md:text-base"
      data-aos={dataAos}
      {...rest}
    >
      {text}
    </p>
  );
};

export { SectionSubTitle, SectionTitle };
