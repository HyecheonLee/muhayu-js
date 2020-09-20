import {each, map} from "./src/utils/collectionUtils";

console.log(map([1, 2, 3], value => value * 2))

console.log(each({id: 5, name: "hclee", age: 33}, console.log))