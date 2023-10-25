/**
 * Filename: ComplexCodeExample.js
 *
 * Description: This code showcases a complex and sophisticated implementation of a social media application.
 * It includes features like user registration, login, posting and viewing posts, following and unfollowing users,
 * liking and commenting on posts, and searching for users.
 *
 * Note: This code is an example and some parts may be simplified for brevity.
 */

// User class to represent a user in the social media platform
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.following = [];
    this.followers = [];
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
    return post;
  }

  likePost(post) {
    post.likes++;
  }

  unlikePost(post) {
    post.likes--;
  }

  commentOnPost(post, comment) {
    post.comments.push(comment);
  }

  followUser(user) {
    this.following.push(user);
    user.followers.push(this);
  }

  unfollowUser(user) {
    this.following = this.following.filter((u) => u !== user);
    user.followers = user.followers.filter((u) => u !== this);
  }
}

// Post class to represent a post in the social media platform
class Post {
  constructor(content) {
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }
}

// Example usage of the social media platform

// Creating users
const user1 = new User("John Doe", "john.doe@example.com", "pass123");
const user2 = new User("Jane Smith", "jane.smith@example.com", "pass456");

// Logging in
console.log("Logging in...");
console.log(`${user1.name} logged in.`);

// Creating and posting content
const post1 = user1.createPost("Hello world!");
console.log(`New post created by ${user1.name}: ${post1.content}`);

const post2 = user1.createPost("My first post!");
console.log(`New post created by ${user1.name}: ${post2.content}`);

// Liking and commenting on posts
user2.likePost(post1);
console.log(`${user2.name} liked ${user1.name}'s post.`);
user2.commentOnPost(post1, "Great post!");
console.log(`${user2.name} commented on ${user1.name}'s post: ${post1.comments[0]}`);

// Following and unfollowing users
console.log(`Following ${user2.name}...`);
user1.followUser(user2);

console.log(`Followers of ${user1.name}: ${user1.followers.length}`);
console.log(`Following ${user1.name}: ${user1.following.length}`);

console.log(`Unfollowing ${user2.name}...`);
user1.unfollowUser(user2);

console.log(`Followers of ${user1.name}: ${user1.followers.length}`);
console.log(`Following ${user1.name}: ${user1.following.length}`);