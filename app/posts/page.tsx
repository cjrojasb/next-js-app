import ListOfPosts from "@/components/ListsOfPosts";
import { Suspense } from "react";

// React Server Component
function PostsPage() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ListOfPosts />
    </Suspense>
  );
}

export default PostsPage;
