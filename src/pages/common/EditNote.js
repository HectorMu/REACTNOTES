import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateNote, getOne } from "../../services/notes";

const EditNote = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [importance, setImportance] = useState("dark");

  const getNoteHandler = async () => {
    const note = await getOne(id);
    setTitle(note.title);
    setContent(note.content);
    setImportance(note.importance);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await updateNote(id, title, content, importance);
    if (results.authorized === false)
      return toast.error("You need to authenticate first to edit a note.");
    if (results === undefined || !results.status) {
      return toast.error("Something went wrong at editing. Try again.");
    }
    setTitle("");
    setContent("");
    setImportance("dark");
    toast.success("Note edited");
    navigate("/notes");
  };
  useEffect(() => {
    getNoteHandler();
    return () => {
      setTitle("");
      setContent("");
      setImportance("dark");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="row mt-5 py-5">
      <div className="col-lg-4 mx-auto">
        <section className="card text-center border-0">
          <div className="card-body shadow-lg">
            <h5 className="card-title">Editing note </h5>
            <form onSubmit={handleSubmit}>
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
              <Link
                to="/notes"
                className="btn btn-outline-danger btn-sm w-100 mt-1"
              >
                Cancel
              </Link>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditNote;
