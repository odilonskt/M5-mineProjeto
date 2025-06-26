'use client'

import Link from "next/link";
import '../../components/globais.css'
import {   } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
    



export  const Header = ()=>{

const currentPath = usePathname();

return(
<nav className="flex items-center justify-center bg-blue-600 py-4">
    <ul className=" flex gap-4 items-center">
        <li className="my-2">
    <Link href='/' className="border-2 round-mb py-2 px-1 font-bold">Sobre</Link>
        </li>
            <li>
    <Link href='/' data-active={currentPath === '/'} className="data-[active=true]:underline">Cálculos</Link>
        </li>
        <li>
    <Link href='/sair' data-active={currentPath === '/sair'} className="data-[active=true]:underline">Times</Link>
        </li>
        <li>
    <Link href='/brasil' data-active={currentPath === '/brasil'} className="data-[active=true]:underline">Jogadores</Link>
        </li>
           <li>
    <Link href='https://github.com/odilonskt/M5-mineProjeto' className="flex gap-1 items-center" target="_blank">Github
  <FaGithub /></Link>
        </li>
                   <li>
    <Link href='https://github.com/odilonskt/M5-mineProjeto' className="flex gap-1 items-center" target="_blank">Linkedin
  <FaLinkedin /></Link>
        </li>
    </ul>
</nav>
);
}