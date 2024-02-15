import type {IsographEntrypoint, NormalizationAst, RefetchQueryArtifactWrapper} from '@isograph/react';
import type {ReadFromStoreType, Query__RepositoryList__param, ReadOutType} from './reader';
import readerResolver from './reader';
import refetchQuery0 from './__refetch__0';
import refetchQuery1 from './__refetch__1';
const nestedRefetchQueries: RefetchQueryArtifactWrapper[] = [{ artifact: refetchQuery0, allowedVariables: [] }, { artifact: refetchQuery1, allowedVariables: [] }, ];

const queryText = 'query RepositoryList  {\
  viewer {\
    id,\
    name,\
    repositories____last___l_20: repositories(last: 20) {\
      nodes {\
        id,\
        name,\
        stargazerCount,\
        viewerHasStarred,\
      },\
    },\
  },\
}';

const normalizationAst: NormalizationAst = [
  {
    kind: "Linked",
    fieldName: "viewer",
    arguments: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "id",
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "name",
        arguments: null,
      },
      {
        kind: "Linked",
        fieldName: "repositories",
        arguments: [
          [
            "last",
            { kind: "Literal", value: "20" },
          ],
        ],
        selections: [
          {
            kind: "Linked",
            fieldName: "nodes",
            arguments: null,
            selections: [
              {
                kind: "Scalar",
                fieldName: "id",
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "name",
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "stargazerCount",
                arguments: null,
              },
              {
                kind: "Scalar",
                fieldName: "viewerHasStarred",
                arguments: null,
              },
            ],
          },
        ],
      },
    ],
  },
];
const artifact: IsographEntrypoint<ReadFromStoreType, Query__RepositoryList__param, ReadOutType> = {
  kind: "Entrypoint",
  queryText,
  normalizationAst,
  nestedRefetchQueries,
  readerArtifact: readerResolver,
};

export default artifact;
