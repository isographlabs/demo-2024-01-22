import type {IsographEntrypoint, ReaderAst, FragmentReference, NormalizationAst} from '@isograph/react';
const queryText = 'mutation RepositoryaddStar ($input: AddStarInput!) {\
addStar____input___v_input: addStar(input: $input) {\
starrable { \
... on Repository {\
  id,\
  name,\
  stargazerCount,\
  viewerHasStarred,\
}\
}}}';

const normalizationAst: NormalizationAst = [{
  kind: "Linked",
  fieldName: "addStar",
  arguments: [
    [
      "input",
      { kind: "Variable", name: "input" },
    ],
  ],
  selections: [
    {
      kind: "Linked",
      fieldName: "starrable",
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
}];
const artifact: any = {
  kind: "RefetchQuery",
  queryText,
  normalizationAst,
};

export default artifact;
