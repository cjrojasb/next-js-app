import { Post } from "@/interfaces/Post";
import LikeButton from "../LikeButton";
import Link from "next/link";

const fetchPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // getStaticProps
  // return fetch("https://jsonplaceholder.typicode.com/posts", {
  //   cache: "no-store",
  //   next: {
  //     revalidate: 60,
  //   },
  // }).then((res) => res.json());

  // getServerSideProps
  //  return fetch("https://jsonplaceholder.typicode.com/posts", {
  //   cache: "no-store",
  //   next: {
  //     revalidate: 60,
  //   },
  // }).then((res) => res.json());

  // incremental static regeneration
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

// React Server Component
async function ListOfPosts() {
  const posts: Post[] = await fetchPosts();

  return (
    <section>
      {posts.slice(0, 5).map(({ id, title, body }) => (
        <article key={id} className="mb-4">
          <Link href={"/posts/[id]"} as={`/posts/${id}`}>
            <h2 className="capitalize text-xl font-bold text-blue-400">
              {title}
            </h2>
            <p className="text-.lg">{body}</p>
          </Link>
          <LikeButton />
        </article>
      ))}
    </section>
  );
}

export default ListOfPosts;
