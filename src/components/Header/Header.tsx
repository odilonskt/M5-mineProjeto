'use client'

import Link from "next/link";
import '../../components/globais.css'
import { MdMenu } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
    



export  const Header = ()=>{

const currentPath = usePathname();

return(
<nav className="flex items-center  gap-6 justify-start  md:justify-center bg-primeny py-4 sm:py-4 px-6" >

    <button className="md:hidden" aria-label="Abrir menu">
        <MdMenu size={25}/>
    </button>
    <ul className=" flex gap-4 items-center">
        <li className="my-2 ">
    <Link href='/' className="border-2 rounded-md py-2 px-1 font-bold">Futebol</Link>
        </li>
        <li className="hidden sm:block " >
    <Link href='/' data-active={currentPath === '/'} className="data-[active=true]:underline">Cálculos</Link>
        </li>
        <li className="hidden sm:block ">
    <Link href='/sair' data-active={currentPath === '/sair'} className="data-[active=true]:underline">Times</Link>
        </li>
        <li className="hidden sm:block">
    <Link href='/brasil' data-active={currentPath === '/brasil'} className="data-[active=true]:underline">Jogadores</Link>
        </li>
        <li className="hidden sm:block">
    <Link href='https://github.com/odilonskt/M5-mineProjeto' className="flex gap-1 items-center" target="_blank">Github
  <FaGithub /></Link>
   </li>
         <li className="hidden sm:block">
    <Link href='https://github.com/odilonskt/M5-mineProjeto' className="flex gap-1 items-center" target="_blank">Linkedin
  <FaLinkedin /></Link>
        </li>
    </ul>

    <h1 className="sm:hidden">asdasdasdad</h1>
</nav>
);
}