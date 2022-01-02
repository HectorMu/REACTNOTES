import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteNote } from "../../services/notes";
import Moment from "react-moment";
import { useState } from "react";
import Swal from "sweetalert2";

const styles = {
  cardWidth: {
    width: "93%",
  },
};
const Note2 = ({ Note, renderNotes }) => {
  // const [onTruncateContent, setOnTruncateContent] = useState(true);
  // const [onTruncateTitle, setOnTruncateTitle] = useState(true);
  const [onTruncate, setOnTruncate] = useState(true);
  const [onRelativeTime, setOnRelativeTime] = useState(true);
  const [onHover, setOnHover] = useState(false);

  //i know i can set each state directly the onclick property, but this way is more verbose
  // const toggleTruncateContent = () => setOnTruncateContent(!onTruncateContent);

  // const toggleTruncateTitle = () => setOnTruncateTitle(!onTruncateTitle);

  const toggleTruncate = () => setOnTruncate(!onTruncate);

  const toggleShadowOnHover = () => setOnHover(!onHover);

  const toggleRelativeTime = () => setOnRelativeTime(!onRelativeTime);

  const deleteClick = async (id) => {
    Swal.fire({
      text: "Do you want to delete this note?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#0d6efd",
      cancelButtonColor: "#bb2d3b",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id).then((results) => {
          if (results.authorized === false)
            return toast.error("You need to authenticate to delete a note.");
          if (results.status) {
            toast.success("Note deleted succesfully");
            renderNotes();
          } else {
            toast.error("Something went wrong at deleting. Try again.");
          }
        });
      }
    });
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
              <div className="d-flex justify-content-between">
                <div className="dropdown dropdown-menu-start ">
                  <button
                    type="button"
                    className="btn px-0 py-0"
                    data-bs-toggle="dropdown"
                    id={`noteOptionsDropdown${Note.idnote}`}
                  >
                    <i className="fas fa-ellipsis-v text-muted text-capitalize"></i>
                  </button>
                  <ul
                    className="dropdown-menu py-2 px-2 shadow"
                    aria-labelledby={`noteOptionsDropdown${Note.idnote}`}
                  >
                    <li className="mb-1">
                      <Link
                        to={`/notes/edit/${Note.idnote}`}
                        className="btn btn-primary btn-sm w-100"
                      >
                        <i className="fas fa-pen"></i> Edit
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => deleteClick(Note.idnote)}
                        className="btn btn-danger btn-sm w-100"
                      >
                        <i className="fas fa-trash"></i> Delete
                      </button>
                    </li>
                  </ul>
                </div>
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
              </div>
              <div
                onClick={toggleTruncate}
                className={`card-text ${
                  Note.content.length >= 22 || Note.title.length >= 22
                    ? "c-pointer"
                    : ""
                } `}
              >
                <h5 className={`${onTruncate === true ? "text-truncate" : ""}`}>
                  {Note.title}
                </h5>
                <p className={`${onTruncate === true ? "text-truncate" : ""}`}>
                  {Note.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note2;
