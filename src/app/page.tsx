import Footer from "@/component/modules/footer/Footer";
import Navbar from "@/component/modules/navbar/Navbar";
import Articles from "@/component/templates/articles/Articles";
import Banner from "@/component/templates/banner/Banner";
import Latest from "@/component/templates/latest/Latest";
import Promote from "@/component/templates/promote/Promote";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Latest />
      <Promote />
      <Articles />
      <Footer />
    </>
  );
}
