import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import NotesCreator from "../../components/Notes/NotesCreator";
import { updateNote, getOne } from "../../services/notes";

const EditNote = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [importance, setImportance] = useState("dark");
  const [onEditing, setOnEditing] = useState(false);

  const getNoteHandler = async () => {
    const gettedNote = await getOne(id);
    setTitle(gettedNote.title);
    setContent(gettedNote.content);
    setImportance(gettedNote.importance);
  };

  const handleNoteEdit = async (e) => {
    e.preventDefault();
    const results = await updateNote(id, title, content, importance);
    if (results.authorized === false)
      return toast.error("You need to authenticate first to edit a note.");
    if (results === undefined || !results.status) {
      return toast.error("Something went wrong at editing. Try again.");
    }
    setOnEditing(!onEditing);
    toast.success("Note edited");
    navigate("/notes");
  };
  useEffect(() => {
    getNoteHandler();
    return () => {
      setTitle("");
      setContent("");
      setImportance("dark");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NotesCreator
      submitFunction={handleNoteEdit}
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      importance={importance}
      setImportance={setImportance}
      setOnEditing={setOnEditing}
      onEditing={!onEditing}
    />
  );
};

export default EditNote;
