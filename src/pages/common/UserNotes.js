import { useState, useEffect, useCallback } from "react";
import Notes from "../../components/Notes/Notes";
import SearchNote from "../../components/Notes/SearchNote";
import { Link } from "react-router-dom";
import { getNotes } from "../../services/notes";
import NoNotes from "../../components/Notes/NoNotes";
import AddNoteButtonFixed from "../../components/Notes/AddNoteButtonFixed";
import FixedSortButton from "../../components/Notes/FixedSortButton";
import SortButton from "../../components/Notes/SortButton";
import Loading from "../../components/Global/Loading";
import FixedButtonContainer from "../../components/Global/FixedButtonContainer";
import FloatingSearch from "../../components/Notes/FloatingSearch";

export const GetNotesHandler = async () => {
  const data = await getNotes();
  if (data.statusText === "userNotesEmpty") return false;
  return data;
};
const UserNotes = () => {
  const [notes, setNotes] = useState([]);
  const [hasNotes, setHasnotes] = useState(true);
  const [sort, setSort] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [onFloatingSearch, setFloatingSearch] = useState(false);

  const toggleFloatingSearch = () => setFloatingSearch(!onFloatingSearch);

  const SetNotesHandler = useCallback(async () => {
    setIsLoading(true);
    const data = await GetNotesHandler();
    if (data === false) {
      setIsLoading(false);
      setHasnotes(false);
      return;
    }
    setIsLoading(false);
    setNotes(data);
  }, []);

  const SortNotesHandler = useCallback(async () => {
    const data = await GetNotesHandler();
    if (data === false) return setHasnotes(false);
    const sorted = data.filter((n) => n.importance === sort);
    if (sort !== "All") return setNotes(sorted);
    SetNotesHandler();
  }, [sort, SetNotesHandler]);

  useEffect(() => {
    SortNotesHandler();
  }, [SortNotesHandler]);
  useEffect(() => {
    SetNotesHandler();
  }, [SetNotesHandler]);

  return (
    <div className="container-fluid  mt-4 py-5">
      <FloatingSearch
        Notes={notes}
        callback={SetNotesHandler}
        setNotes={setNotes}
        onFloatingSearch={onFloatingSearch}
      />
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 ">
          <Link
            to="/notes/add"
            className="btn position-fixed d-none d-lg-block  d-xl-block    justify-content-center  btn-primary  btn-lg"
          >
            <i className="fas fa-plus mr-2"></i> New note
          </Link>

          <SortButton setSort={setSort} />
          <FixedButtonContainer position={"right"}>
            <AddNoteButtonFixed />
            <FixedSortButton setSort={setSort} />
            <button
              onClick={toggleFloatingSearch}
              className="btn btn-primary btn-lg rounded-circle d-xl-none d-lg-none"
            >
              <i className="fas fa-search"></i>
            </button>
          </FixedButtonContainer>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
          {hasNotes === true ? (
            <SearchNote
              Notes={notes}
              callback={SetNotesHandler}
              setNotes={setNotes}
            />
          ) : null}
          {isLoading === true ? <Loading /> : null}
          {hasNotes === true ? (
            <Notes Notes={notes} callback={SetNotesHandler} />
          ) : (
            <NoNotes />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserNotes;
