export default function FilterMovie({
  search,
  setSearch,
  selectedGenres,
  setSelectedGenres,
  genres,
}) {
  function handleCheckbox(id) {
    setSelectedGenres((prev) =>
      prev.includes(id)
        ? prev.filter((g) => g !== id)
        : [...prev, id],
    );
  }

  return (
    <form className="mt-[72px] flex flex-col md:flex-row gap-5 px-5 md:px-[180px]">
      <label>
        <p className="mb-3">Cari Movie</p>
        <div className="flex w-[340px] items-center rounded-sm border p-[18px]">
          <input
            type="text"
            placeholder="Search movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />
        </div>
      </label>

      <div>
        <p className="mb-3">Filter Genre</p>
        <div className="flex flex-wrap gap-3">
          {genres.slice(0,5).map((genre) => (
            <label
              key={genre.id}
              className="cursor-pointer select-none"
            >
              <input
                type="checkbox"
                className="peer hidden"
                checked={selectedGenres.includes(genre.id)}
                onChange={() => handleCheckbox(genre.id)}
              />
              <div className="flex h-10 w-24 items-center justify-center rounded-md transition
                peer-checked:bg-primary peer-checked:text-white">
                {genre.name}
              </div>
            </label>
          ))}
        </div>
      </div>
    </form>
  );
}
