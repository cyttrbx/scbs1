"use client";
import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Banner />
      </Wrapper>
    </>
  );
}
