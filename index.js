import { getCount } from "./queryCount";
import { startVote } from "./vote";

setTimeout(() => {
  debugger;
  startVote();
}, 3000);

setTimeout(() => {
  debugger;
  getCount();
}, 3000);
