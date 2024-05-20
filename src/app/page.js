import Banner from "@/component/banner";
import Image from "next/image";
import LastSection from "@/component/LastSection";
import Chart from "@/component/Chart";
export default function Home() {
  return (
    <>
      <Banner />
      <Chart />
      <LastSection />
    </>
  );
}
