function Post({ params }) {
  const { id } = params;

  return <div>Esto es el Post {id}</div>;
}

export default Post;
