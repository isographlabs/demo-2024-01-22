import * as React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import { useMemo } from "react";
import {
  createIsographEnvironment,
  createIsographStore,
  IsographEnvironmentProvider,
  useLazyReference,
  useResult,
} from "@isograph/react";
import { iso } from "@iso";

function makeNetworkRequestFunctionWithToken(token: string) {
  return function makeNetworkRequest<T>(
    queryText: string,
    variables: any
  ): Promise<T> {
    let promise = fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: queryText, variables }),
    }).then((response) => response.json());
    return promise;
  };
}

export default function MainApp() {
  const { data: session } = useSession();

  if (session != null) {
    return (
      <>
        <h1>Isograph Github Demo</h1>
        <button onClick={() => signOut()}>Sign Out</button>

        <MainAppInner accessToken={session.accessToken} />
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

function MainAppInner({ accessToken }: { accessToken: string }) {
  const environment = useMemo(
    () =>
      createIsographEnvironment(
        createIsographStore(),
        makeNetworkRequestFunctionWithToken(accessToken)
      ),
    [accessToken]
  );

  return (
    <IsographEnvironmentProvider environment={environment}>
      <React.Suspense fallback="loading">
        <OurActualApp />
      </React.Suspense>
    </IsographEnvironmentProvider>
  );
}

if (typeof window !== "undefined") {
  window.__LOG = true;
}

function OurActualApp() {
  const { queryReference } = useLazyReference(
    iso(`entrypoint Query.RepositoryList`),
    {}
  );

  const RepositoryList = useResult(queryReference);

  return <RepositoryList />;
}
