import { useState, useEffect } from "react";
import NotesCreator from "../../components/NotesCreator";
import Notes from "../../components/Notes";
import SearchNote from "../../components/SearchNote";
import { Link } from "react-router-dom";
import AddNote from "./AddNote";
import { getNotes } from "../../services/notes";

const UserNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setselectedNote] = useState({});

  const GetNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetNotes();
    return () => {
      setNotes([]);
    };
  }, []);

  return (
    <div className="container  mt-4 py-5">
      <SearchNote Notes={notes} callback={GetNotes} setNotes={setNotes} />
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4">
          <NotesCreator
            selection={selectedNote}
            setSelected={setselectedNote}
            callback={GetNotes}
          />
          <Link to="/notes/add" className="btn btn-primary">
            New note
          </Link>
        </div>
        <div className="col-12 col-sm-12 col-md-8">
          <Notes
            Notes={notes}
            selectNote={setselectedNote}
            callback={GetNotes}
          />
        </div>
      </div>
    </div>
  );
};

export default UserNotes;
