import { getAuth } from "@firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

import "@/app/globals.css";
import { useState } from "react";
import Loading from "@/app/components/lottie/Loading";
import { initFirebase } from "@/app/funcs/firebase/firebaseApp";
import Sidebar from "@/app/components/sideBar";

export default function Home() {
  initFirebase();
  const auth = getAuth();
  const router = useRouter();

  const [user, loading, error] = useAuthState(auth);
  const [loadingPage, setLoadingPage] = useState(false);

  if (loadingPage == true) {
    return <Loading />;
  } else {
    return (
      <>
        <Sidebar reqCounter={3} inboxNotifications={10} />
        <div>
          <h1>trest</h1>
        </div>
      </>
    );
  }
}
