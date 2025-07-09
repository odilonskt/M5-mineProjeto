import { Jogador } from "@/types/JogadoresResponse";
import {   mediaDeGols, Times } from "@/types/times";


const API_BASE = 'https://m4-api-futebol.onrender.com';



export async function fetchJogadores(): Promise<Jogador[]> {
    const res = await fetch(`${API_BASE}/jogadores`);
    const result: Jogador[] = await res.json();
   
    
    return  result;
}


export async function fetchJogador(id: number): Promise<Jogador> {
    const res = await fetch(`${API_BASE}/jogadores/${id}`);
    return res.json();
}



export async function fethTimes():Promise<Times[]>{
    const res = await fetch(`${API_BASE}/times`)
    return res.json();
}


export async function fetchTimeById(id: number): Promise<Times> {
    const res = await fetch(`${API_BASE}/times/${id}`);
    return res.json();
}

export async function fechTimeByCal(): Promise<mediaDeGols> {
    const res = await fetch(`${API_BASE}/times/cal/media`);
    const result: mediaDeGols = await res.json();
    console.log(await result);
    return result;
    
}