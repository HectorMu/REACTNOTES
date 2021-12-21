import { Link, useNavigate } from "react-router-dom";

const NotesCreator = ({
  submitFunction,
  title,
  setTitle,
  content,
  setContent,
  importance,
  setImportance,
  setOnEditing,
  onEditing,
}) => {
  let navigate = useNavigate();
  const cancelEdit = (e) => {
    e.preventDefault();
    setOnEditing(false);
    navigate("/notes");
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <div className="container">
      <div className="row mt-5 py-5">
        <div className="col-12 col-lg-8 col-md-12 col-xl-8 col-sm-12 mx-auto">
          <section className="card text-center border-0">
            <div className="card-body shadow-lg">
              <h4 className="card-title py-3 fw-bolder fs-2">
                {onEditing === true ? "Editing note " : "Create note"}
              </h4>
              <form onSubmit={submitFunction}>
                <div className="mb-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Note title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                    autoFocus
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    className="form-control"
                    type="text"
                    placeholder="Content"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    rows={10}
                    required
                  />
                </div>
                <label className="mb-1">Note importance: </label>
                <div className="mb-2">
                  <select
                    className="form-select"
                    type="text"
                    placeholder="Content"
                    onChange={(e) => setImportance(e.target.value)}
                    value={importance}
                    required
                  >
                    <option value="dark">Normal</option>
                    <option value="warning">Important</option>
                    <option value="danger">Very important</option>
                  </select>
                </div>
                <div className="d-flex gap-3">
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                    className="btn btn-primary  w-100 "
                    type="submit"
                  >
                    <i className="fas fa-check"></i>
                  </button>
                  {onEditing === true ? (
                    <button
                      onClick={cancelEdit}
                      className="btn btn-danger  w-100 "
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  ) : (
                    <Link to="/notes" className="btn btn-danger  w-100  ">
                      <i className="fas fa-times"></i>
                    </Link>
                  )}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NotesCreator;
