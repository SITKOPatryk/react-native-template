import { EXAMPLE_ACTION } from "../types";

export default ({ state, update }) => {
  return {
    type: EXAMPLE_ACTION,
    payload: { example: update }
  };
};
