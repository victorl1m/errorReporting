import { initFirebase } from "@/app/funcs/firebase/firebaseApp";
import { getAuth } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Profile() {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  initFirebase();

  let displayName = user?.displayName;
  return (
    <div className="h-screen flex justify-center items-center">
      <span>{displayName}</span>
    </div>
  );
}
