const SearchNote = ({ Notes, setNotes, callback }) => {
  const searchNote = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      callback();
    }
    const result = Notes.filter((n) =>
      n.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setNotes(result);
  };
  return (
    <div>
      <input
        className="form-control shadow-lg mb-3"
        placeholder="Search note by title"
        onChange={(e) => searchNote(e)}
      />
    </div>
  );
};

export default SearchNote;
