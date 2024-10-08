export const Chip = ({ count }) => {
  return (
    <div className="ml-[560px]">
      <button onClick={count} className="border-2 py-3 px-5 rounded-xl">
        Load More
      </button>
    </div>
  );
};
