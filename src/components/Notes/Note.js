import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteNote } from "../../services/notes";
import Moment from "react-moment";
import { useState } from "react";

const styles = {
  cardWidth: {
    width: "93%",
  },
};
const Note = ({ Note, renderNotes }) => {
  const [onTruncateContent, setOnTruncateContent] = useState(true);
  const [onTruncateTitle, setOnTruncateTitle] = useState(true);
  const [onRelativeTime, setOnRelativeTime] = useState(true);
  const [onHover, setOnHover] = useState(false);

  //i know i can set each state directly the onclick property, but this way is more verbose
  const toggleTruncateContent = () => setOnTruncateContent(!onTruncateContent);

  const toggleTruncateTitle = () => setOnTruncateTitle(!onTruncateTitle);

  const toggleShadowOnHover = () => setOnHover(!onHover);

  const toggleRelativeTime = () => setOnRelativeTime(!onRelativeTime);

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
        onMouseEnter={toggleShadowOnHover}
        onMouseLeave={toggleShadowOnHover}
        className={`card my-1 ${
          onHover === true ? "shadow-lg " : ""
        } text-center  w-auto`}
        style={styles.cardWidth}
      >
        <div className="row g-0">
          <div
            className={`col-1 col-md-1 col-lg-1 col-sm-1 bg-${Note.importance}`}
          ></div>
          <div className="col-11 col-md-11 col-lg-11 col-sm-11">
            <div className="card-body">
              <h5
                className={`card-text  ${
                  Note.title.length >= 22 ? "c-pointer" : ""
                } ${onTruncateTitle === true ? "text-truncate " : ""} `}
                onClick={toggleTruncateTitle}
              >
                {Note.title}
              </h5>
              <p
                className={`card-text ${
                  Note.content.length >= 22 ? "c-pointer" : ""
                } ${onTruncateContent === true ? "text-truncate" : ""} `}
                onClick={toggleTruncateContent}
              >
                {Note.content}
              </p>
              <p
                className="text-muted text-uppercase small border-bottom c-pointer"
                onClick={toggleRelativeTime}
              >
                {onRelativeTime === true ? (
                  <Moment
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title={Note.createdat.split(" ")[0]}
                    fromNow
                  >
                    {Note.createdat.replace("/", "-")}
                  </Moment>
                ) : (
                  Note.createdat
                )}
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
