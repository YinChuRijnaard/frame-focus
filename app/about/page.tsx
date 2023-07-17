import Image from "next/image";

const About = () => {
  return (
    <main className="page_styling space-y-4">
      <h1 className="title_text font-bebas text-center">
        What is Frame Focus?
      </h1>

      <p className="desc text-center">
        Frame Focus is a photography blog, a passion project created and
        maintained by Yin Chu Rijnaard, front end developer and avid
        &#40;holiday&#41; photographer.
        <br />
        <br />
        Here you&apos;ll find photos I&apos;ve taken while on holiday or from
        travelling abroad. Ranging from nature and landscape photography to
        photographs of steel and concrete cities, and all sorts of animals
        &#40;mostly cats and dogs&#41;.
        <br />
        <br />
        All photos taken by me.
      </p>

      <Image
        src="/assets/images/line.svg"
        height={100}
        width={100}
        alt="Line"
        className="mx-auto"
      />
    </main>
  );
};

export default About;
