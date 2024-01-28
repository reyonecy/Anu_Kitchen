import Image from "next/image";
import Main from "./components/main/page";
import Menu from "./components/menu/page";
import Elasticcarousel from "./components/carousel/Elasticcarousel";

export default function Home() {
  return (
    <>
      <Main />
      {/* <Elasticcarousel/> */}
      <Menu />
    </>
  );
}
