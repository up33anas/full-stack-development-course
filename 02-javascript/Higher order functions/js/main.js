import { posts } from "./posts.js";

// forEach() is better than a for loop!
posts.forEach((post) => {
  console.log(post);
});
console.clear();

// filter() helps select specific data from results
const filteredPosts = posts.filter((post) => {
  return post.userId === 1;
});
console.log(filteredPosts);
console.clear();

// map() lets you transform the data
const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts);

// reduce() computes a single value from the data
const reducedPostValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPostValue);
