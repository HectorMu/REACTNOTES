import Note from "./Note";
const Notes = ({ Notes, callback }) => {
  return (
    <div
      id="notes"
      className="row row-cols-1 row-cols-lg-3 row-cols-xl-4 row-cols-md-2 row-cols-sm-1 g-3"
    >
      {Notes.map((note) => (
        <Note key={note.idnote} renderNotes={callback} Note={note} />
      ))}
    </div>
  );
};
export default Notes;
