import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotesCreator = ({
  submitFunction,
  title,
  setTitle,
  content,
  setContent,
  importance,
  setImportance,
}) => {
  let navigate = useNavigate();
  const [onEditing, setOnEditing] = useState(false);

  const cancelEdit = (e) => {
    e.preventDefault();
    setOnEditing(false);
    navigate("/notes");
  };
  useEffect(() => {
    if (title !== "" || content !== "") {
      setOnEditing(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, content]);
  return (
    <div className="container">
      <div className="row mt-5 py-5">
        <div className="col-12 col-lg-8 col-md-12 col-xl-8 col-sm-12 mx-auto">
          <section className="card text-center border-0">
            <div className="card-body shadow-lg">
              <h5 className="card-title">
                {onEditing === true ? "Edit note " : "Create note"}
              </h5>
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
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Content"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    required
                  />
                </div>
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
                <button
                  className="btn btn-outline-primary btn-sm w-100 mt-3"
                  type="submit"
                >
                  Save
                </button>
                {onEditing === true ? (
                  <button
                    onClick={cancelEdit}
                    className="btn btn-outline-danger btn-sm w-100 mt-1"
                  >
                    Cancel
                  </button>
                ) : (
                  <Link
                    to="/notes"
                    className="btn btn-outline-danger btn-sm w-100 mt-1"
                  >
                    Cancel
                  </Link>
                )}
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NotesCreator;
