import { fetchTimeById } from "@/utils/api";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const time = await fetchTimeById(Number(params.id));
  return {
    title: `Time: ${time.nome}`,
  };
}

export default async function TimeDetailsPage({ params }: { params: { id: string } }) {
  const time = await fetchTimeById(Number(params.id));

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 scroll-smooth md:scroll-auto">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/times"
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para lista de times
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-gradient-to-b from-blue-500 to-blue-600 p-8 flex items-center justify-center md:w-1/3">
              <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center text-blue-500 text-4xl font-bold">
                {time.nome.charAt(0)}
              </div>
            </div>
            <div className="p-8 md:w-2/3">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                {time.nome}
              </div>
              <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
                {time.nome}
              </h1>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">País: {time.pais}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">Gols: {time.gols}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}