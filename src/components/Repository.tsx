import { iso } from "@iso";

export const Repository = iso(`
  field Repository.Repository @component {
    name
    stargazerCount
    addStar 
    removeStar
    viewerHasStarred
  }
`)(function RepositoryComponent(props) {
  return (
    <li
      onClick={() =>
        props.data.viewerHasStarred
          ? props.data.removeStar()
          : props.data.addStar()
      }
    >
      {props.data.name}. Stars: {props.data.stargazerCount}
    </li>
  );
});
