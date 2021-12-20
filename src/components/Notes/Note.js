import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteNote } from "../../services/notes";
import Moment from "react-moment";
const styles = {
  cardWidth: {
    width: "93%",
  },
};
const Note = ({ Note, renderNotes }) => {
  const deleteClick = async (id) => {
    const deleteConfirm = window.confirm("Are you sure to delete this note?");
    if (deleteConfirm) {
      const results = await deleteNote(id);
      if (results.authorized === false)
        return toast.error("You need to authenticate delete a note.");
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
        className="card my-1 shadow text-center border-0 w-auto"
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
              <p className="card-text border-bottom">
                <Moment fromNow className="text-muted text-uppercase small">
                  {Note.createdat}
                </Moment>
              </p>
              <div className="d-flex gap-1 justify-content-center">
                <Link
                  to={`/notes/edit/${Note.idnote}`}
                  className="btn btn-primary btn-sm w-100"
                >
                  <i className="fas fa-pen"></i>
                </Link>
                <button
                  onClick={() => deleteClick(Note.idnote)}
                  className="btn btn-danger btn-sm w-100"
                >
                  <i className="fas fa-trash"></i>
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
