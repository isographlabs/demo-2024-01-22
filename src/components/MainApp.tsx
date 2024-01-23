import { signIn, signOut, useSession } from "next-auth/react";

export default function () {
  const { data: session } = useSession();

  if (session != null) {
    return (
      <>
        <h1>Isograph Github Demo</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Isograph Github Demo</h1>
        <button onClick={() => signIn("github")}>Sign In With GitHub</button>
      </>
    );
  }
}
