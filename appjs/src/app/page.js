import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>
        Home Page
      </h1>
      <ul>
        <li>
          <Link href="/doctor">Doctor</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <Link href="https://nextjs.org/" target="_blank">NextJs website</Link> 
      
    </>
  )
}
