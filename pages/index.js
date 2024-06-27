import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shinobi | Home</title>
        <meta name="keywords" content="shinobi" />
      </Head>
      <div>
        
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur impedit amet possimus error nulla temporibus id culpa ullam dolor fugit voluptates accusantium veritatis nobis, assumenda quasi? Consequatur corporis ut fuga.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore vel iusto corrupti illo atque! Magnam culpa inventore non incidunt molestias. Laboriosam repudiandae dolores exercitationem atque obcaecati asperiores, provident eligendi.</p>
        <Link href="/Jelly" className={styles.btn}>See Shinobi Listing</Link>
        
      
      </div>
    </>
  );
}
