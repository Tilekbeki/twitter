import Link from "next/link";
import { IMenuItem } from "./menu.data";
interface Props {
  menuItem: IMenuItem;
  isActive: boolean;
}

export function MenuItem({ menuItem, isActive }: Props) {
  return (
    <Link
      className={isActive ? "text-white" : "text-blue-100"}
      href={menuItem.href}
    >
      {menuItem.name}
    </Link>
  );
}
