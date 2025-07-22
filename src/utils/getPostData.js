export default function getPostData(post) {
  return {
    slug: post.file.split("/").pop().split(".").shift()
  }
}
