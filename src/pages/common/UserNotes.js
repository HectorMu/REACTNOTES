import { useState, useEffect } from "react";
import Notes from "../../components/Notes";
import SearchNote from "../../components/SearchNote";
import { Link } from "react-router-dom";
import { getNotes } from "../../services/notes";

const UserNotes = () => {
  const [notes, setNotes] = useState([]);
  const GetNotesHandler = async () => {
    const data = await getNotes();
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
        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
          <Link to="/notes/add" className="btn btn-primary">
            New note
          </Link>
        </div>

        <div className="col-12 col-sm-12 col-md-10 col-lg-10">
          <SearchNote
            Notes={notes}
            callback={GetNotesHandler}
            setNotes={setNotes}
          />
          <Notes Notes={notes} callback={GetNotesHandler} />
        </div>
      </div>
    </div>
  );
};

export default UserNotes;
