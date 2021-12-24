import { useRef } from "react";

const FloatingSearch = ({ Notes, setNotes, callback, onFloatingSearch }) => {
  const search = useRef("");

  const CleanInput = () => {
    search.current.value = "";
    callback();
  };
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
    <div
      className={`floating-search d-xl-none d-lg-none  ${
        onFloatingSearch === true ? `show` : ``
      }`}
    >
      <div className="position-relative ">
        <input
          className="form-control rounded-pill shadow-lg form-control-lg"
          placeholder="Search..."
          onChange={() => SearchNote()}
          ref={search}
        />
        <button onClick={CleanInput} className="xd btn">
          <i className="fas fa-times text-muted"></i>
        </button>
      </div>
    </div>
  );
};

export default FloatingSearch;
