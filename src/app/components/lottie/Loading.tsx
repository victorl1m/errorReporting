export default function Loading() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-600"></div>
        <div className="flex items-center justify-center h-24 w-24 rounded-full absolute">
          <svg
            className="text-gray-500 dark:text-indigo-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.277 2.084a.5.5 0 00-.554 0 15.05 15.05 0 01-6.294 2.421A.5.5 0 003 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 00.36 0c.344-.133.675-.272.994-.417-.26-.36-.478-.749-.652-1.164-.32-.763-.487-1.603-.517-2.503v-.008L10 13.593V11.06l-1.97 1.97a.75.75 0 01-1.06-1.061L8.94 10 6.97 8.03a.75.75 0 011.06-1.06L10 8.94l1.97-1.97a.75.75 0 111.06 1.06l-1.636 1.637h.006c.906 0 1.757-.363 2.597-1.238a1.389 1.389 0 012.009.001c.2.209.399.387.597.537.132.1.265.188.397.265V5a.5.5 0 00-.43-.495 15.05 15.05 0 01-6.293-2.421zM17 10.347a4.632 4.632 0 01-1-.583 6.055 6.055 0 01-.716-.642.389.389 0 00-.566 0c-.995 1.036-2.095 1.545-3.318 1.545-.22 0-.4.186-.4.416v2.501l.004.266c.027.797.174 1.514.44 2.15A4.813 4.813 0 0013 18c.524.4 1.15.727 1.874.979.083.028.171.028.254 0 2.56-.89 3.873-2.713 3.873-5.395v-2.5l-.008-.085a.405.405 0 00-.392-.332 4.057 4.057 0 01-1.6-.32z" />
          </svg>
        </div>
      </div>
    </>
  );
}
