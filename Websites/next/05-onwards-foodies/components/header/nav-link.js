"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

function NavLink({ href, children, className }) {
  const path = usePathname();

  return (
    <Link
      className={
        path === href ? `${classes.link} ${classes.active}` : classes.link
      }
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLink;
