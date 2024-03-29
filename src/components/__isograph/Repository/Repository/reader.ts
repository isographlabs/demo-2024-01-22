import type {ReaderArtifact, ReaderAst} from '@isograph/react';
import { Repository as resolver } from '../../../Repository.tsx';
import Repository__addStar, { ReadOutType as Repository__addStar__outputType } from '../addStar/reader';
import Repository__removeStar, { ReadOutType as Repository__removeStar__outputType } from '../removeStar/reader';

// the type, when read out (either via useLazyReference or via graph)
export type ReadOutType = (React.FC<any>);

export type ReadFromStoreType = Repository__Repository__param;

const readerAst: ReaderAst<ReadFromStoreType> = [
  {
    kind: "Scalar",
    fieldName: "name",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "stargazerCount",
    alias: null,
    arguments: null,
  },
  {
    kind: "MutationField",
    alias: "addStar",
    readerArtifact: Repository__addStar,
    refetchQuery: 0,
  },
  {
    kind: "MutationField",
    alias: "removeStar",
    readerArtifact: Repository__removeStar,
    refetchQuery: 1,
  },
  {
    kind: "Scalar",
    fieldName: "viewerHasStarred",
    alias: null,
    arguments: null,
  },
];

export type Repository__Repository__param = { data:
{
  name: string,
  stargazerCount: number,
  addStar: Repository__addStar__outputType,
  removeStar: Repository__removeStar__outputType,
  viewerHasStarred: boolean,
},
[index: string]: any };

// The type, when returned from the resolver
export type ResolverReturnType = ReturnType<typeof resolver>;

const artifact: ReaderArtifact<ReadFromStoreType, Repository__Repository__param, ReadOutType> = {
  kind: "ReaderArtifact",
  resolver: resolver as any,
  readerAst,
  variant: { kind: "Component", componentName: "Repository.Repository" },
};

export default artifact;
