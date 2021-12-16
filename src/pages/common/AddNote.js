import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import NotesCreator from "../../components/Notes/NotesCreator";
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
      return toast.error(results.statusText);
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
    />
  );
};

export default AddNote;
