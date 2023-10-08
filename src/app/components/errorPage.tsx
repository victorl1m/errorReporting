import { initFirebase } from "@/app/funcs/firebase/firebaseApp";
import { getAuth } from "@firebase/auth";
import { useRouter } from "next/navigation";

export default function ErrorPage({ message }: any) {
  const auth = getAuth();

  const router = useRouter();

  initFirebase();

  return (
    <main className="grid min-h-full h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {message}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Desculpe, mas não conseguimos processar a sua requisição
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => router.push("/")}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Voltar para tela inicial
          </button>
          <a
            href="mailto:victorhugo@deroyque.com"
            className="text-sm font-semibold text-gray-900"
          >
            Contatar suporte <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
