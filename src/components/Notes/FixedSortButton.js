import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const FixedButton = ({ notes, setNotes, GetNotesHandler }) => {
  const [sort, setSort] = useState("All");

  const handleNotesSort = async () => {
    await GetNotesHandler();
    const sorted = notes.filter((n) => n.importance === sort);
    setNotes(sorted);
  };

  useEffect(() => {
    handleNotesSort();
  }, [sort]);
  console.log(notes);
  return (
    <div className="dropdown">
      <button
        className={`fixed-bottom-left  rounded-circle btn btn-primary btn-lg d-xl-none d-lg-none`}
        type="button"
        id="sortNotesButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-bars"></i>
      </button>
      <ul className="dropdown-menu" aria-labelledby="sortNotesButton">
        <li>
          <button onClick={() => setSort("All")} className="dropdown-item">
            All
          </button>
        </li>
        <li>
          <button onClick={() => setSort("dark")} className="dropdown-item">
            Normal
          </button>
        </li>
        <li>
          <button onClick={() => setSort("warning")} className="dropdown-item">
            Important
          </button>
        </li>
        <li>
          <button onClick={() => setSort("danger")} className="dropdown-item">
            Very important
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FixedButton;
