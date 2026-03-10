'use client'
import Link from "next/link";
import { PAGES } from "@/config/pages.config";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import {MENU} from './menu.data'
import { MenuItem } from "./MenuItem";
import { match } from "path-to-regexp";


export function Menu() {
    const pathName = usePathname();
    const segment = useSelectedLayoutSegment();

    console.log('pathname', pathName);
    console.log('segment', segment)
    return (
            <nav className="flex gap-6">
                {MENU.map(menuItem=><MenuItem key={menuItem.name} menuItem={menuItem} 
                isActive={!!match(menuItem.href)(pathName)} />)}
            </nav>
    )
}