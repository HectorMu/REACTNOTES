import { useRef } from "react";

const SearchNote = ({ Notes, setNotes, callback }) => {
  const search = useRef("");
  const SearchNote = () => {
    if (search.current.value === "") {
      callback();
    }
    const result = Notes.filter((n) =>
      n.title.toLowerCase().includes(search.current.value.toLowerCase())
    );
    setNotes(result);
  };
  return (
    <div className="input-group mb-3  ">
      <input
        type="text"
        className="form-control rounded-0 d-none d-lg-block  d-xl-block"
        placeholder="Search note by title"
        ref={search}
        onChange={() => SearchNote()}
      />
      <span className="input-group-text btn btn-primary rounded-0 d-none d-lg-block  d-xl-block ">
        <i className="fas fa-search "></i>
      </span>
    </div>
  );
};

export default SearchNote;
