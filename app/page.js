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
          <Entry
              entrysBaslik={baslikdata[0]}
              no={0}
          />
          <h3 className={"home-title"}>{baslikdata[1].title}</h3>
          <Entry
              entrysBaslik={baslikdata[1]}
              no={0}
          />
          <h3 className={"home-title"}>{baslikdata[2].title}</h3>
          <Entry
              entrysBaslik={baslikdata[2]}
              no={0}
          />
        </div>
      </main>
  );
}
