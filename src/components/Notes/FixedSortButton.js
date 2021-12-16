import { useState, useEffect } from "react";

const FixedButton = () => {
  const [sort, setSort] = useState("Normal");

  useEffect(() => {
    console.log(sort);
  }, [sort]);
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
          <button onClick={() => setSort("Normal")} className="dropdown-item">
            Normal
          </button>
        </li>
        <li>
          <button
            onClick={() => setSort("Important")}
            className="dropdown-item"
          >
            Important
          </button>
        </li>
        <li>
          <button
            onClick={() => setSort("Very important")}
            className="dropdown-item"
          >
            Very important
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FixedButton;
