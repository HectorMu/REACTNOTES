const SortButton = ({ setSort }) => {
  return (
    <div className="dropdown">
      <button
        className={` btn btn-primary position-fixed  d-sm-none d-none d-md-none d-lg-block d-xl-block`}
        type="button"
        id="sortNotesButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ marginTop: "50px" }}
      >
        Watch <i className="far fa-eye"></i>
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

export default SortButton;
