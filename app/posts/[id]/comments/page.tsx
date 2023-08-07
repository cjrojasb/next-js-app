import { Comment } from "@/interfaces/Comment";

const fetchCommentsByPostId = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // throw new Error("Error al cargar los comentarios")
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json());
};

async function CommentsPage({ params }: any) {
  const { id } = params;
  const comments: Comment[] = await fetchCommentsByPostId(id);
  return (
    <article className="my-5 bg-gray-400 p-4 bg-black">
      {comments.map(({ name, email, body, id }) => (
        <div key={id} className="flex flex-col mb-3">
          <h3 className="capitalize text-lg font-bold text-blue-400">{name}</h3>
          <div className="flex flex-col text-white">
            <p className="text-base">{body}</p>
            <p className="text-sm">{email}</p>
          </div>
        </div>
      ))}
    </article>
  );
}

export default CommentsPage;
