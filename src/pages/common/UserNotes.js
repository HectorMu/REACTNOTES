import { useState, useEffect } from "react";
import Notes from "../../components/Notes/Notes";
import SearchNote from "../../components/Notes/SearchNote";
import { Link } from "react-router-dom";
import { getNotes } from "../../services/notes";
import NoNotes from "../../components/Notes/NoNotes";
import AddNoteButtonFixed from "../../components/Notes/AddNoteButtonFixed";
import FixedSortButton from "../../components/Notes/FixedSortButton";

const UserNotes = () => {
  const [notes, setNotes] = useState([]);
  const [hasNotes, setHasnotes] = useState(true);
  const GetNotesHandler = async () => {
    const data = await getNotes();
    if (data.statusText === "userNotesEmpty") return setHasnotes(false);
    setNotes(data);
  };
  useEffect(() => {
    GetNotesHandler();
    return () => {
      setNotes([]);
    };
  }, []);
  return (
    <div className="container-fluid  mt-4 py-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 ">
          <Link
            to="/notes/add"
            className="btn position-fixed d-none d-lg-block  d-xl-block    justify-content-center  btn-primary  btn-lg"
          >
            <i className="fas fa-plus mr-2"></i> New note
          </Link>
          <AddNoteButtonFixed />
          <FixedSortButton />
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
          {hasNotes === true ? (
            <SearchNote
              Notes={notes}
              callback={GetNotesHandler}
              setNotes={setNotes}
            />
          ) : null}

          {hasNotes === true ? (
            <Notes Notes={notes} callback={GetNotesHandler} />
          ) : (
            <NoNotes />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserNotes;
