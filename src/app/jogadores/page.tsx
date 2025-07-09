import PlayerCard from "@/components/PlayerCard/page";
import { fetchJogadores, fethTimes } from "@/utils/api";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "jogadores"
};

const JogadoresPage = async () => {
  const jogadores = await fetchJogadores();
  const times = await fethTimes();

  const timesMap = new Map(times.map(time => [time.id, time.nome]));

  return (
    <div className="  min-h-screen  py-8 px-4 sm:px-6 lg:px-8 scroll-smooth md:scroll-auto ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Jogadores de Futebol</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explore nossa base de dados completa de jogadores profissionais 
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jogadores.map((jogador) => (
            <PlayerCard
              key={jogador.id}
              player={jogador}
              nomeTime={timesMap.get(jogador.timeId) || "Time desconhecido"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JogadoresPage;
