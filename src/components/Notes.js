
import Note from './Note'
const Notes = ({Notes, callback,selectNote}) =>{

    return (
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-md-2 row-cols-sm-1 g-3">
            {Notes.map(note => <Note key={note.idnote} selectNote={selectNote} renderNotes={callback} Note={note}/>)}
        </div>
    )
}
export default Notes