export const Loader = () => (
  <div role="status" className="flex justify-center my-10">
    <div
      className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-500 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)
