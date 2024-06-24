import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { Form } from "./components/Form";

export default function Home() {
  return (
   <>
    <Navbar />
    <Header />
    <Features/>
    <Form/>
    </>
  )}