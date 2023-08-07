import { FaSpinner } from "react-icons/fa6";

function LoadingComments() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen p-3">
      <FaSpinner className="text-xl" />
      <p className="text-lg font-light">Loading...</p>
    </div>
  );
}

export default LoadingComments;
