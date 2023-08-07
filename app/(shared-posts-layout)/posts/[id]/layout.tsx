import { Post } from "@/interfaces/Post";
import Link from "next/link";

const fetchPostById = (id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );

async function PostLayout({ children, params }: any) {
  const { id } = params;
  const { title, body }: Post = await fetchPostById(id);

  return (
    <article>
      <h2 className="capitalize text-xl font-bold text-amber-600">{title}</h2>
      <p className="text-lg mb-5">{body}</p>
      <Link
        className="button bg-blue-500 p-3 text-white"
        href="/posts/[id]/comments"
        as={`/posts/${id}/comments`}
      >
        Ver comentarios
      </Link>
      {children}
    </article>
  );
}

export default PostLayout;
