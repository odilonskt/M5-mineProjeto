import { Times } from "@/types/times";


interface TimeCardProps{
    time: Times
}

export default function TimeCard({time}: TimeCardProps){
    return(
        <div className="
         rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform group-hover:scale-105 group-hover:shadow-2xl cursor-pointer border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100 ">
      <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
        {time.nome.charAt(0)}
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{time.nome}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-medium text-gray-800">País:</span> {time.pais}
      </p>
      <p className="text-gray-600">
        <span className="font-medium text-gray-800">Gols:</span> {time.gols}
      </p>
    </div>
    )
}