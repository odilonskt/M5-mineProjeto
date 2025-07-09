'use client'
import { Jogador } from "@/types/JogadoresResponse";

import '../../app/globals.css'

interface PlayerCardProps {
    player: Jogador;
    variant?: 'default' | 'compact';
    nomeTime: string;
}

export default function PlayerCard({ player, nomeTime, variant = 'default' }: PlayerCardProps) {
    return (
        <div   className="bg-gradient-to-br from-blue-50 to-blue-100 ">
            <div className={`bg-gradient-to-br text-black from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer ${variant === 'default' ? 'p-6' : 'p-4'}`}>
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-blue-500 text-white rounded-full flex items-center justify-center"
                        style={{
                            width: variant === 'default' ? '64px' : '48px',
                            height: variant === 'default' ? '64px' : '48px'
                        }}>
                        <span className="text-xl font-bold">{player.nome.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className={`font-bold ${variant === 'default' ? 'text-xl' : 'text-lg'} truncate`}>
                            {player.nome}
                        </h2>
                        <p className="text-gray-600 text-sm">{player.idade} anos • {player.nacionalidade}</p>
                        {variant === 'default' && (
                            <div className="mt-2">
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                    {player.nome}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {variant === 'default' && (
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                        <div className="bg-white p-2 rounded-lg">
                            <div className="text-sm text-gray-500">Idade</div>
                            <div className="font-bold text-black">{player.idade}</div>
                        </div>
                        <div className="bg-white p-2 rounded-lg col-span-2">
                            <div className="text-sm text-gray-500">Time</div>
                            <div className="font-bold text-black">{nomeTime}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
