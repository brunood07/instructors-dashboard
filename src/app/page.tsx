'use client'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation'
import { useLoginMutation } from "./redux/store/services/auth";
import { RootState } from "./redux/store";

export default function Home() {
  const { push } = useRouter()
  const dispatch = useDispatch();
  const [signIn, { isLoading }] = useLoginMutation();
  const selector = useSelector((state: RootState) => {
    state.auth
  });

  const handleLogin = async () => {
    try {
      await signIn().unwrap();

      push('/home')
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900">
      <div className="h-full w-full">
        <div className="h-full flex items-center justify-center flex-col gap-4">
          <Image src="/cat.png" alt="cat logo" width="200" height="200" /> 
          <input placeholder="usuário" className="w-100 h-8 p-2 bg-blue-950 rounded" disabled={isLoading} />
          <input placeholder="senha" className="w-100 h-8 p-2 bg-blue-950 rounded" disabled={isLoading} />
          <button className="w-[100px] h-10 rounded bg-blue-500 hover:bg-blue-600 transition-colors" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
