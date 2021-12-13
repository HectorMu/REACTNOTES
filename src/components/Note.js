import { toast } from "react-hot-toast";
import { deleteNote } from "../services/notes";

const styles = {
  cardWidth: {
    width: "100%",
  },
};
const Note = ({ Note, renderNotes, selectNote }) => {
  const deleteClick = async (id) => {
    const deleteConfirm = window.confirm("Are you sure to delete this note?");
    if (deleteConfirm) {
      const results = await deleteNote(id);
      if (results.status) {
        toast.success("Note deleted succesfully");
        renderNotes();
      } else {
        toast.error("Something went wrong at deleting. Try again.");
      }
    }
  };

  return (
    <div className="col">
      <div
        className="card my-1 shadow text-center border-0"
        style={styles.cardWidth}
      >
        <div className="row g-0">
          <div
            className={`col-1 col-md-1 col-lg-1  col-sm-1 bg-${Note.importance}`}
          ></div>
          <div className="col-11 col-md-11 col-lg-11 col-sm-11">
            <div className="card-body">
              <h5 className="card-title">{Note.title}</h5>
              <p className="card-text">{Note.content}</p>
              <div className="d-flex gap-1 justify-content-center">
                <button
                  onClick={() => selectNote(Note)}
                  className="btn btn-primary"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteClick(Note.idnote)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
