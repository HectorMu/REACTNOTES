import { Link } from "react-router-dom";
import ContactForm from "../components/LandingPage/ContactForm";
import addnotes from "../assets/addnotes.svg";
import login from "../assets/login.svg";
import save from "../assets/save.svg";
import signin from "../assets/signin.svg";

const LandingPage = () => {
  return (
    <div>
      <section id="home" data-home="home" className="bg-custom-1 py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="d-flex justify-content-center">
                <img src={addnotes} className="w-75" alt="addnote" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div id="header-card" className="card rounded-0">
                <div className="card-body d-flex flex-column py-5">
                  <h1
                    className="display-4 pt-3 text-center"
                    style={{ fontWeight: "bolder" }}
                  >
                    ¡Make your notes!
                  </h1>
                  <p
                    className="mt-5 text-justify text-md-center text-lg-justify text-xl-justify"
                    style={{ fontSize: "22px" }}
                  >
                    <Link to="/">Node notes</Link> allows you save your notes in
                    the web and get full control of your notes, editing the
                    title, content and choosing their importance.
                  </p>
                  <Link
                    to="/signup"
                    className="btn btn-primary btn-lg mt-5 mb-1 "
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
      </section>

      <section className="position-relative">
        <div className="custom-shape-divider-bottom-1640126990">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section id="howtostart">
        <div className="bg-dark py-4 text-white">
          <h1 className="fw-bolder  text-center">
            ¡In three simple steps start saving your notes!
          </h1>
          <div className="container">
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
      </section>
      <section className="section-color-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bolder display-3 text-center">Step one</h1>
                <h3 className="fw-bolder display-5 text-center">
                  Sign in using your favorite email.
                </h3>
                <i className="far fa-envelope fa-6x mb-4 mt-5 d-none d-sm-block text-dark  shadow-lg py-5 px-5 rounded-3" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
              <div className="d-flex justify-content-center">
                <img src={signin} className="w-75" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="custom-shape-divider-top-1640127304">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <section className="section-color-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
              <div className="d-flex justify-content-center">
                <img src={login} alt="" className="w-75" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bolder display-3 text-center">Step Two</h1>
                <h3 className="fw-bolder display-5 text-center">
                  Log in into your account.
                </h3>
                <i className="fas fa-unlock-alt fa-6x mb-4 mt-5 d-none d-sm-block text-dark  shadow-lg py-5 px-5 rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="custom-shape-divider-top-1640127411">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <section className="section-color-3 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bolder display-3 text-center">Step Three</h1>
                <h3 className="fw-bolder display-5 text-center">
                  Start saving notes!.
                </h3>
                <i className="far fa-save fa-6x mb-4 mt-5 d-none d-sm-block text-dark shadow-lg py-5 px-5 rounded-3" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
              <div className="d-flex justify-content-center">
                <img src={save} className="w-75" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="custom-shape-divider-top-1640127540">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <section id="services" className="bg-custom-1 pb-5">
        <div className="bg-dark py-4 text-white mb-4">
          <h1 className="fw-bolder  text-center display-4">
            Meet our services!
          </h1>
          <div className="container">
            <div className="d-flex justify-content-center">
              <i className="fas fa-hands fa-4x"></i>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="1 w-100 h-100 pt-2 px-2 d-flex flex-column text-center justify-content-center">
                <h1 className="fw-bolder mt-4">
                  Why choose us
                  <i className="fas fa-question" />
                </h1>
                <p className="mt-2" style={{ fontSize: "22px" }}>
                  You can watch some of the advantages to use Node Notes to
                  manage your notes, we love to help our users to increase their
                  productivity!
                </p>
                <i className="fas fa-chart-line fa-6x" />
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
                <div className="col mb-2">
                  <div id="card1" className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center fw-bolder">
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
                      <h5 className="card-title text-center fw-bolder">
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
                <div className="col mb-2">
                  <div id="card3" className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center fw-bolder">
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
                <div className="col mb-2">
                  <div id="card4" className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center fw-bolder">
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
      <section id="contact" className="position-relative">
        <div className="custom-shape-divider-top-1640126119">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="py-5 mt-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className=" py-5 w-100 h-100 pt-2 px-3 d-flex flex-column text-center justify-content-center ">
                <h2 className="display-4 fw-bolder py-2 rounded-pill bg-custom-1 mt-3">
                  Contact
                </h2>
                <h2 className="fw-bolder mt-4">We will happy to help you!</h2>
                <p className="mt-2" style={{ fontSize: "22px" }}>
                  You can contact us for bugs report, account help, and for
                  recommendations to improve our software!
                </p>
                <i className="fas fa-envelope-open-text fa-6x" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <div id="backtop" className="d-flex justify-content-center">
        <a
          href="#home"
          className="btn btn-primary btn-lg rounded-circle mb-3"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
      <footer>
        <section
          id="footer-divider"
          className="bg-custom-1"
          style={{ fontSize: "10px" }}
        >
          <div id="privacy-terms" className="d-flex justify-content-end ">
            <ul className="list-group list-group-horizontal bg-light">
              <li className="list-group-item  border-0">
                <a href="#a">Privacy Policy</a>
              </li>
              <li className="list-group-item  border-0">
                <a href="#a">©2021 - Node Notes</a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default LandingPage;
