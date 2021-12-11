import { useState, useEffect } from "react";
import {Toaster} from 'react-hot-toast'
import Navigation from './components/Navigation'
import NotesCreator from './components/NotesCreator'
import Notes from './components/Notes'
import SearchNote from "./components/SearchNote";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

document.title= "REACT API NOTES"

function App() {
  const [notes, setNotes] = useState([])
  const [selectedNote, setselectedNote] = useState({})

  const GetNotes = async () => {
    const response = await fetch('https://nodenotesapi.herokuapp.com/api/listall')
    const data = await response.json();
    setNotes(data)
  }
  useEffect(() => {
    GetNotes()
  }, [])
  
  return (
    <div>
      <Navigation/>
      <div className="container  mt-4">
        <SearchNote Notes={notes} callback={GetNotes} setNotes={setNotes}/>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4">
            <NotesCreator selection={selectedNote} setSelected={setselectedNote} callback={GetNotes}/>
          </div>
          <div className="col-12 col-sm-12 col-md-8">
            <Notes Notes={notes} selectNote={setselectedNote} callback={GetNotes}/>
          </div>
        </div>
      </div>
      <Toaster 
      position="bottom-center" 
      toastOptions={{
        style:{
          background:'#363636',
          color:'#fff'
        }
      }} />
    </div>
  );
}

export default App;
