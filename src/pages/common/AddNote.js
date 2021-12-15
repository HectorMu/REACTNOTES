import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import NotesCreator from "../../components/NotesCreator";
import { saveNote } from "../../services/notes";

const AddNote = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [importance, setImportance] = useState("dark");

  const handleNoteSave = async (e) => {
    e.preventDefault();
    const results = await saveNote(title, content, importance);
    if (results.authorized === false)
      return toast.error("You need to authenticate first to save a note.");
    if (results === undefined || !results.status) {
      return toast.error("Something went wrong at saving. Try again.");
    }
    toast.success("Note saved");
    navigate("/notes");
  };
  return (
    <NotesCreator
      submitFunction={handleNoteSave}
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      importance={importance}
      setImportance={setImportance}
      note={null}
    />
  );
};

export default AddNote;
