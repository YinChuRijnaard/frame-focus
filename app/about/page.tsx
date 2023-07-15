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
        Here you&apos;ll find photos I&apos;ve taken while on holiday. Ranging
        from nature/landscape photography to steel and concrete cities, and all
        sorts of animals &#40;mostly cats &#40;and dogs&#41;&#41;.
      </p>

      <Image
        src="/assets/images/line.svg"
        height={100}
        width={100}
        alt="Line"
        className="mx-auto"
      />

      <p className="desc flex items-center justify-center">
        Open source on&nbsp;
        <a
          href="https://github.com/YinChuRijnaard/frame-focus"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        &nbsp;
        <i className="ri-github-line ri-lg"></i>
      </p>
    </main>
  );
};

export default About;
