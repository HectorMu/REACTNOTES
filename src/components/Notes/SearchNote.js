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
    <div className="input-group mb-3 ">
      <input
        type="text"
        className="form-control rounded-0"
        placeholder="Search note by title"
        onChange={(e) => searchNote(e)}
      />
      <span className="input-group-text btn btn-primary rounded-0">
        <i className="fas fa-search "></i>
      </span>
    </div>
  );
};

export default SearchNote;
