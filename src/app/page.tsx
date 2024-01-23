import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-900">
      <div className="h-full w-full">
        <div className="h-full flex items-center justify-center flex-col gap-4">
          <Image src="/cat.png" alt="cat logo" width="200" height="200" /> 
          <input placeholder="usuário" className="w-100 h-8 p-2 bg-blue-950 rounded" />
          <input placeholder="senha" className="w-100 h-8 p-2 bg-blue-950 rounded" />
          <button className="w-[100px] h-10 rounded bg-blue-500 hover:bg-blue-600 transition-colors">
            Log in
          </button>
        </div>
      </div>
  );
}
