import header from "@/styles/header.module.scss";
import Image from "next/legacy/image";
import logo from "@/assets/flame.svg";
import Link from "next/link";
import Search from "@/components/Search";

export default function HeaderResult() {
  return (
    <header className={header.container}>
      <Link className={header.left_col} href={"/"}>
        <div className={header.logo_container}>
          <Image
            src={logo}
            objectFit="cover"
            layout="fill"
            alt={`logo`}
            priority
          />
        </div>
        <h1>Wiki Fandom</h1>
      </Link>
      <div className={header.center_col}>
        <Search />
      </div>
      <div className={header.right_col}>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Result</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
