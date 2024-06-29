"use client"
import Image from "next/image";
import styles from "./page.css";
import Entry from "@/app/components/entry";
import Data from "@/app/data";
import Sidenav from "@/app/components/sidenav";
export default function Home() {
  let baslikdata = Data()
  return (
      <main>
        <div className={"home-middle"}>
          <h3 className={"home-title"}>{baslikdata[0].title}</h3>
          <Entry content={"yarısında çıktığım filmdir"} author={"sozlukcu47"}/>
          <h3 className={"home-title"}>{baslikdata[1].title}</h3>
          <Entry author={"boomer35"} content={"gümbür gümbür geliyor denen z kuşağı bunlar işte. yazık."}/>
          <h3 className={"home-title"}>{baslikdata[2].title}</h3>
          <Entry author={"robertobaggio"} content={"gürcistan'a karşı atmıştır, abartmayınız"}/>
        </div>
      </main>
  );
}
