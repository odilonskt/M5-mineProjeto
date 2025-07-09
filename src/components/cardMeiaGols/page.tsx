

import { mediaDeGols } from '@/types/times';
import { fechTimeByCal } from '@/utils/api';

export default async function MediaGols() {
  
 const medias: mediaDeGols = await fechTimeByCal();

    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md mx-auto mt-10 border border-gray-200">
      <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        Média de Gols dos Times
      </h1>
      <p className="text-lg text-gray-700 text-center">
        <span className="font-semibold">Média:</span> {medias.mediaGols}
      </p>
    </div>
  );
}