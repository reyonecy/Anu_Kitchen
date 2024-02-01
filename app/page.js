import Image from "next/image";
import Main from "./components/main/page";
import Menu from "./components/menu/page";
import Carousel from "./components/imgSlider/carousel";


export default function Home() {
  return (
    <>
      <Main />
      <Carousel/>
      <Menu/>
    </>
  );
}
