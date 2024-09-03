"use client"

import HomeScreen from "@/screens/home";
import Head from "next/head";

export default function Home() {
  return (
    <main className="w-full h-full bg-white">
      <Head>
      <title>Exclusive Products - Home</title>
        <meta name="description" content="Browse our exclusive collection of products. Find the best deals on top-rated items." />
        <meta name="keywords" content="ecommerce, products, buy online, exclusive deals" />
        <meta property="og:title" content="Exclusive Products - Home" />
        <meta property="og:description" content="Browse our exclusive collection of products. Find the best deals on top-rated items." />
      </Head>
      <HomeScreen />
    </main>
  );
}
