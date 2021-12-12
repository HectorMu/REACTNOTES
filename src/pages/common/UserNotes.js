import { useState, useEffect } from "react";
import NotesCreator from "../../components/NotesCreator";
import Notes from "../../components/Notes";
import SearchNote from "../../components/SearchNote";

const UserNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setselectedNote] = useState({});

  const GetNotes = async () => {
    try {
      const response = await fetch(
        "https://nodenotesapi.herokuapp.com/api/listall"
      );
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetNotes();
    return () => {
      setNotes([])
    }
  }, []);

  return (
    <div className="container  mt-4">
      <SearchNote Notes={notes} callback={GetNotes} setNotes={setNotes} />
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4">
          <NotesCreator
            selection={selectedNote}
            setSelected={setselectedNote}
            callback={GetNotes}
          />
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
