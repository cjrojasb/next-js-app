function PostsLayout({ children }: any) {
  return (
    <div>
      <h1 className="text-xl">Este es el layout de los Posts</h1>
      <div className="bg-slate-300 text-black p-5 my-4">{children}</div>
    </div>
  );
}

export default PostsLayout;
