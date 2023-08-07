function SharedPostsLayout({ children }: any) {
  return (
    <div>
      <h1 className=" bg-white text-purple-500 text-xl p-3">
        Este es el layout de los Posts
      </h1>
      <div className="bg-slate-30 p-5 my-4">{children}</div>
    </div>
  );
}

export default SharedPostsLayout;
