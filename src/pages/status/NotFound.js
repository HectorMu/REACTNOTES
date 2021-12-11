const NotFound = () => {
  return (
    <div>
      <section
        id="about"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="py-5 w-100 display-3 text-center bg-dark fw-bolder text-white">
          Nothing here yet... Come back later!
        </div>
        <button
          onClick={() => window.history.back()}
          className="btn btn-primary fs-5 mt-5"
        >
          Send me back
        </button>
      </section>
    </div>
  );
};

export default NotFound;
