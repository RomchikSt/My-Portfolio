import Head from "next/head";

export default function HeadSection() {
  return (
    <Head>
      <title>Roma Stakhiv | Web Developer</title>
      <meta
        name="description"
        content="Web Developer Portfolio Website ➱ Web Developer specialized in Javascript, React, Typescript ☝ Check out my Github repositories and my projects"
      />
      <meta name="author" content="Roma Stakhiv" />
      <meta property="og:title" content="Roma Stakhiv | Web Developer" />
      <meta
        property="og:description"
        content="Web Developer Portfolio Website - Specialized in Javascript, React, Typescript. Check out my Github repositories and my projects."
      />
      <meta
        property="og:url"
        content="https://portfolio-git-master-rs-def.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <link
        rel="canonical"
        href="https://portfolio-git-master-rs-def.vercel.app/"
      />
    </Head>
  );
}
