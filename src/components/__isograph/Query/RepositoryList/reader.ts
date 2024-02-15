import type {ReaderArtifact, ReaderAst} from '@isograph/react';
import { RepositoryList as resolver } from '../../../RepositoryList.tsx';
import Repository__Repository, { ReadOutType as Repository__Repository__outputType } from '../../Repository/Repository/reader';

// the type, when read out (either via useLazyReference or via graph)
export type ReadOutType = (React.FC<any>);

export type ReadFromStoreType = Query__RepositoryList__param;

const readerAst: ReaderAst<ReadFromStoreType> = [
  {
    kind: "Linked",
    fieldName: "viewer",
    alias: null,
    arguments: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "name",
        alias: null,
        arguments: null,
      },
      {
        kind: "Linked",
        fieldName: "repositories",
        alias: null,
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
            alias: null,
            arguments: null,
            selections: [
              {
                kind: "Scalar",
                fieldName: "id",
                alias: null,
                arguments: null,
              },
              {
                kind: "Resolver",
                alias: "Repository",
                arguments: null,
                readerArtifact: Repository__Repository,
                usedRefetchQueries: [0, 1, ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export type Query__RepositoryList__param = { data:
{
  viewer: {
    name: (string | null),
    repositories: {
      nodes: (({
        id: string,
        Repository: Repository__Repository__outputType,
      } | null))[],
    },
  },
},
[index: string]: any };

// The type, when returned from the resolver
export type ResolverReturnType = ReturnType<typeof resolver>;

const artifact: ReaderArtifact<ReadFromStoreType, Query__RepositoryList__param, ReadOutType> = {
  kind: "ReaderArtifact",
  resolver: resolver as any,
  readerAst,
  variant: { kind: "Component", componentName: "Query.RepositoryList" },
};

export default artifact;
