import { Link } from "react-router-dom";
import ContactForm from "../components/LandingPage/ContactForm";

const LandingPage = () => {
  return (
    <div>
      <section id="home" className="pt-5 bg-custom-1">
        <header id="header">
          <div className="row bg-custom-1 py-5 ">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 mx-auto">
              <div className="container">
                <div className="header-content-left d-flex align-items-end  flex-column">
                  <img src="assets/addnotes.svg" className="w-75" alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-4 mt-2 mb-5 pb-5 mx-auto">
              <div className="container">
                <div id="header-card" className="card rounded-0">
                  <div className="card-body d-flex flex-column">
                    <h1
                      className="display-4 pt-3 text-center"
                      style={{ fontWeight: "bolder" }}
                    >
                      ¡Make your notes!
                    </h1>
                    <p
                      className="mt-5 text-justify"
                      style={{ fontSize: "22px" }}
                    >
                      {" "}
                      <Link to="/">Node notes</Link> allows you save your notes
                      in the web and get full control of your notes, editing the
                      title, content and choosing their importance.
                    </p>
                    <Link
                      to="/signup"
                      className="btn btn-primary btn-lg mt-5 mb-1 btn-block"
                    >
                      Start to create
                    </Link>
                    <small style={{ fontSize: "17px" }}>
                      If you already have one. <Link to="/login">Log in.</Link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      <section id="howtostart">
        <div className=" bg-dark py-5 text-center text-white">
          <h1 className="mt-4" style={{ fontWeight: "bolder" }}>
            ¡In three simple steps start saving your notes!
          </h1>
          <div className="container mt-2">
            <div className="d-flex flex-row justify-content-center">
              <div id="circle1" className="circle mx-1">
                1
              </div>
              <i id="arrow1" className="fas fa-arrow-circle-right fa-3x mx-1" />
              <div id="circle2" className="circle mx-1">
                2
              </div>
              <i id="arrow2" className="fas fa-arrow-circle-right fa-3x mx-1" />
              <div id="circle3" className="circle mx-1">
                3
              </div>
              <i id="check" className="fas fa-check fa-3x mx-1" />
            </div>
          </div>
        </div>
        <div className="row row-cols-sm-12 ">
          <div className="col section-color-1 py-5 col-sm-12">
            <div className="row">
              <div className="col col-md-6 col-sm-12 col-12">
                <article id="stepone-left">
                  <div className="d-flex justify-content-center mt-1 py-3">
                    <h1 className="font-weight-bolder display-3">Step one</h1>
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="font-weight-bolder text-center display-4">
                      Sign in using your favorite email.
                    </h3>
                    <i className="far fa-envelope fa-6x mb-4 mt-5 d-none d-sm-block" />
                  </div>
                </article>
              </div>
              <div className="col col-md-6 col-sm-12 col-12">
                <article id="stepone-right">
                  <div className="d-flex justify-content-center">
                    <img src="assets/signin.svg" className="w-75" alt="" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col section-color-2 py-5 col-sm-12">
            <div className="row">
              <div className="col col-md-6 col-sm-12 col-12">
                <article id="steptwo-left">
                  <div className="d-flex justify-content-center">
                    <img src="assets/login.svg" alt="" className="w-75" />
                  </div>
                </article>
              </div>
              <div className="col col-md-6 col-sm-12 col-12">
                <article id="steptwo-right">
                  <div className="d-flex justify-content-center mt-2 py-3">
                    <h1 className="font-weight-bolder display-3">Step Two</h1>
                  </div>
                  <div className="mt-3 text-center ">
                    <h3 className="font-weight-bolder display-5">
                      Log in into your account.
                    </h3>
                    <i className="fas fa-unlock-alt fa-6x  mt-5  d-none d-sm-block" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col section-color-3 py-5 col-sm-12">
            <div className="row">
              <div className="col col-md-6 col-sm-12 col-12">
                <article id="stepthree-left">
                  <div className="d-flex justify-content-center text-center mt-1 py-3">
                    <h1 className="font-weight-bolder display-3">Step Three</h1>
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="font-weight-bolder display-5">
                      Start saving notes!.
                    </h3>
                    <i className="far fa-save fa-6x mb-4 mt-5  d-none d-sm-block" />
                  </div>
                </article>
              </div>
              <div className="col col-md-6 col-sm-12 col-12">
                <article id="stepthree-right">
                  <div className="d-flex justify-content-center">
                    <img src="assets/save.svg" className="w-75" alt="" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="row">
          <div className="col col-md-6 col-sm-12 col-12">
            <div className="bg-custom-1 w-100 h-100 py-5 px-2 d-flex flex-column text-center justify-content-center">
              <h2 className="display-4 font-weight-bolder">¡Meet us!</h2>
              <h2 className=" font-weight-bolder mt-4">
                Why choose Node Notes
                <i className="fas fa-question" />
              </h2>
              <p className=" mt-2" style={{ fontSize: "22px" }}>
                You can watch some of the advantages to use Node Notes to manage
                your notes, we love to help our users to increase their
                productivity!{" "}
              </p>
              <i className="fas fa-chart-line fa-6x" />
            </div>
          </div>
          <div className="col col-md-6 col-sm-12 col-12 mt-5">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
                <div className="col mb-2">
                  <div id="card1" className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center font-weight-bolder">
                        Security
                      </h5>
                      <div className="text-center">
                        <i className="fas fa-shield-alt fa-7x" />
                        <p className="card-text mt-4">
                          Your account is safe with us, we care about you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-2">
                  <div id="card2" className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center font-weight-bolder">
                        Productivity
                      </h5>
                      <div className="text-center">
                        <i className="fas fa-chart-bar fa-7x" />
                        <p className="card-text mt-4">
                          Improve your productivity managing your notes with us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 mt-2">
                <div className="col">
                  <div id="card3" className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title text-center font-weight-bolder">
                        Fast and Friendly
                      </h5>
                      <div className="text-center">
                        <i className="fas fa-bolt fa-7x" />
                        <p className="card-text mt-4">
                          Fast, elegant and user friendly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div id="card4" className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title text-center font-weight-bolder">
                        Profile Customization
                      </h5>
                      <div className="text-center">
                        <i className="fas fa-user-edit fa-7x" />
                        <p className="card-text mt-4">
                          It's your profile, enjoy it!.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="row">
          <div className="col col-sm-12 col-12 col-md-6 col-lg-6">
            <div
              id="contactdiv"
              className="bg-whitesmoke py-5  w-100 h-100 pt-2 px-3 d-flex flex-column text-center justify-content-center"
            >
              <h2 className="display-4 font-weight-bolder">Contact</h2>
              <h2 className=" font-weight-bolder mt-4">
                We will happy to help you!
              </h2>
              <p className=" mt-2" style={{ fontSize: "22px" }}>
                You can contact us for reporting bugs, for account help, and for
                recommendations to Improve our software!.
              </p>
              <i className="fas fa-envelope-open-text fa-6x" />
            </div>
          </div>
          <div className="col col-sm-12 col-12 col-md-6 col-lg-6  ml-0 pl-0">
            <div className="container">
              <ContactForm />
            </div>
          </div>
        </div>
        <div id="backtop" className="d-flex justify-content-center">
          <a
            href="#home"
            className="btn btn-outline-dark rounded-circle mb-2"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Back to top"
          >
            <i className="fas fa-arrow-up" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
