import { Post } from "@/interfaces/Post";
import LikeButton from "../LikeButton";

const fetchPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
// React Server Component
async function ListOfPosts() {
  const posts: Post[] = await fetchPosts();

  return (
    <section>
      {posts.slice(0, 5).map(({ id, title, body }) => (
        <article key={id} className="mb-4">
          <h2 className="capitalize text-xl font-bold text-blue-400">
            {title}
          </h2>
          <p className="text-.lg">{body}</p>
          <LikeButton />
        </article>
      ))}
    </section>
  );
}

export default ListOfPosts;
