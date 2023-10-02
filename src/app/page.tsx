"use client";

import { initFirebase } from "./funcs/firebase/firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

import "@/app/globals.css";
import { useEffect, useState } from "react";
import Loading from "./components/lottie/Loading";

export default function Index() {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const router = useRouter();

  const [loadingPage, setLoadingPage] = useState(false);

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  useEffect(() => {
    if (user && !loadingPage) {
      setLoadingPage(true);
      setTimeout(() => {
        router.push("/home");
      }, 3000);
    }
  }, [user, router, loadingPage]);

  if (loadingPage) {
    return <Loading />;
  } else {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="h-24 sm:max-w-sm flex items-center justify-center flex-1">
            <svg
              className="h-24 text-gray-500 dark:text-indigo-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.277 2.084a.5.5 0 00-.554 0 15.05 15.05 0 01-6.294 2.421A.5.5 0 003 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 00.36 0c.344-.133.675-.272.994-.417-.26-.36-.478-.749-.652-1.164-.32-.763-.487-1.603-.517-2.503v-.008L10 13.593V11.06l-1.97 1.97a.75.75 0 01-1.06-1.061L8.94 10 6.97 8.03a.75.75 0 011.06-1.06L10 8.94l1.97-1.97a.75.75 0 111.06 1.06l-1.636 1.637h.006c.906 0 1.757-.363 2.597-1.238a1.389 1.389 0 012.009.001c.2.209.399.387.597.537.132.1.265.188.397.265V5a.5.5 0 00-.43-.495 15.05 15.05 0 01-6.293-2.421zM17 10.347a4.632 4.632 0 01-1-.583 6.055 6.055 0 01-.716-.642.389.389 0 00-.566 0c-.995 1.036-2.095 1.545-3.318 1.545-.22 0-.4.186-.4.416v2.501l.004.266c.027.797.174 1.514.44 2.15A4.813 4.813 0 0013 18c.524.4 1.15.727 1.874.979.083.028.171.028.254 0 2.56-.89 3.873-2.713 3.873-5.395v-2.5l-.008-.085a.405.405 0 00-.392-.332 4.057 4.057 0 01-1.6-.32z" />
            </svg>
          </div>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
            Acessar
          </h2>
          <h3 className="text-center text-1xl font-medium text-indigo-600">
            Relatório de erros
          </h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="input-group-1"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                E-mail
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-indigo-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="block w-full bg-neutral-900 transition-all rounded-md border-0 p-3 pl-10 text-white-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="nome@dominio.com"
                ></input>
              </div>
            </div>

            <div>
              <label
                htmlFor="input-group-2"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-indigo-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.95 8.6a6.554 6.554 0 016.55-6.55c3.596 0 6.55 2.82 6.55 6.45a6.554 6.554 0 01-6.55 6.55c-.531 0-1.055-.075-1.552-.203a1.25 1.25 0 01-1.249 1.204h-1.75v1.75c0 .69-.56 1.25-1.25 1.25H7.95v1.25a1.75 1.75 0 01-1.75 1.75H3.7a1.75 1.75 0 01-1.75-1.75v-2.172c0-.73.29-1.429.806-1.944L8.99 9.949a.275.275 0 00.07-.244A6.386 6.386 0 018.95 8.6zm9.3-1.6a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z" />
                  </svg>
                </div>
                <input
                  type="password"
                  id="input-group-2"
                  className="block w-full bg-neutral-900 transition-all rounded-md border-0 p-3 pl-10 text-white-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Senha"
                ></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md transition-all bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Avançar
              </button>
            </div>
          </form>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-5" />
          <div className="sm-mx-auto sm:w-full sm:max-w-sm flex-1 flex justify-center align-center">
            <button
              type="button"
              onClick={signIn}
              className="flex justify-between text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center sm:w-full mr-2 mb-2"
            >
              Logar com o Google
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
              </svg>
            </button>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Problemas de acesso?{" "}
            <a
              href="mailto:victorhugo@deroyque.com"
              className="font-light leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Comunicar gestão de TI
            </a>
          </p>
        </div>
      </div>
    );
  }
}
