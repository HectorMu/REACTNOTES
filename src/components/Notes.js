import Note from "./Note";
const Notes = ({ Notes, callback, selectNote }) => {
  return (
    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-md-2 row-cols-sm-1 g-3">
      {Notes.length > 0 ? (
        Notes.map((note) => (
          <Note
            key={note.idnote}
            selectNote={selectNote}
            renderNotes={callback}
            Note={note}
          />
        ))
      ) : (
        <h5 className="text-center mt-5">
          Looks like you haven't any notes yet.
        </h5>
      )}
    </div>
  );
};
export default Notes;
