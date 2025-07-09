import TimeCard from "@/components/TimeCard/page";
import { fethTimes } from "@/utils/api";
import Link from "next/link";


export default async function TimesPage(){
    const times = await fethTimes();


   return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12 drop-shadow">
          Times de Futebol
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {times.map((time) => (
            <Link
              key={time.id}
              href={`/times/${time.id}`}
              className="group"
              style={{ textDecoration: "none" }}
            >
              <TimeCard time={time} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}