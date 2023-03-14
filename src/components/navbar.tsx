import { Nav } from "@/utils/types/Nav"
import Link from "next/link";
import { ReactNode, SyntheticEvent } from "react"

const Navbar = () => {
  const nav: Nav[] = [
    {
      name: "Home",
      link: "/",
      id: 0
    },
    {
      name: "Collections",
      link: "/collections",
      id: 1
    },
    {
      name: "Market",
      link: "/market",
      id: 2
    },
    {
      name: "Contact",
      link: "/contact",
      id: 3
    },
    {
      name: "Help",
      link: "/help",
      id: 4
    },
  ]
  return (
    <nav className="flex gap-4 py-6 px-12">
      {
        nav.map<ReactNode>((e: Nav) => {
          return <Link href={e.link} key={e.id}> <div> {e.name} </div> </Link>;
        })
      }
    </nav>
  );
}

export default Navbar