import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, my name is Ruth Lagurin</h1>

      <p>
        I am a BSIT student from Mater Dei College.
      </p>

      <p>
        I enjoy playing with cats and dogs. 
      </p>

      <p>I love playing online games and watching k-drama.</p>

      <Link href="/projects">See my projects</Link>
    </main>
  );
}
