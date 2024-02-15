import { iso } from "@iso";

export const RepositoryList = iso(`
  field Query.RepositoryList @component {
    viewer {
      name
      repositories(last: 20) {
        nodes {
          id
          Repository
        }
      }
    }
  }
`)(function RepositoryListComponent(props) {
  return (
    <>
      <h1>{props.data.viewer.name}'s Repositories:</h1>
      <ul>
        {props.data.viewer.repositories.nodes.map((repository) => {
          if (repository == null) {
            return null;
          }
          return (
            <li key={repository.id}>
              <repository.Repository />
            </li>
          );
        })}
      </ul>
    </>
  );
});
