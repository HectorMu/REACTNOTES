const FixedButton = ({ setSort }) => {
  return (
    <div className="dropdown">
      <button
        className={` rounded-circle btn btn-primary btn-lg  d-xl-none d-lg-none`}
        type="button"
        id="sortNotesButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="far fa-eye "></i>
      </button>
      <ul className="dropdown-menu " aria-labelledby="sortNotesButton">
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
