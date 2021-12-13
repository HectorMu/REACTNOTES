import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { saveNote, updateNote } from "../services/notes";

const NotesCreator = ({ callback, selection, setSelected }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [importance, setImportance] = useState("dark");
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(0);

  const setDataInForm = () => {
    if (selection.idnote === undefined || selection.idnote === null) {
      setTitle(title);
      setContent(content);
      setImportance(importance);
    } else {
      setTitle(selection.title);
      setContent(selection.content);
      setImportance(selection.importance);
      setEditingId(selection.idnote);
      setEditing(true);
    }
  };
  const cancelEditing = () => {
    setEditing(false);
    setTitle("");
    setContent("");
    setImportance("Normal");
    setSelected({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editing) {
      const results = await saveNote(title, content, importance);
      if (results === undefined || !results.status) {
        return toast.error("Something went wrong at saving. Try again.");
      }
      setTitle("");
      setContent("");
      setImportance("dark");
      toast.success("Note saved");
      callback();
    } else {
      const results = await updateNote(editingId, title, content, importance);
      if (results === undefined || !results.status) {
        return toast.error("Something went wrong at editing. Try again.");
      }
      setTitle("");
      setContent("");
      setImportance("dark");
      setEditing(false);
      setSelected({});
      toast.success("Note edited successfully");
      callback();
    }
  };

  useEffect(() => {
    setDataInForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection]);
  return (
    <section className="card text-center border-0">
      <div className="card-body shadow-lg">
        <h5 className="card-title">Create a note</h5>
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
            {editing === false ? "Save Note" : "Save Changes"}
          </button>
          {editing === false ? null : (
            <button
              className="btn btn-outline-secondary btn-sm w-100 mt-1"
              type="submit"
              onClick={() => cancelEditing()}
            >
              Cancel editing
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default NotesCreator;
