import Image from "next/image";
import Footer from "./components/footer";
import Homee from "./home/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Homee/>
      <Footer/>
    </main>
  );
}
