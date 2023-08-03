import Link from "next/link";
import styles from "./style.module.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];

function Header() {
  return (
    <header className={`m-auto border-b-2 border-cyan-100 border-solid px-5 h-12 flex items-center ${styles.header}`}>
      <nav>
        <ul className="flex flex-row gap-5">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
