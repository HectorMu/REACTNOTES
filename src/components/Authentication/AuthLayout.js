import React from "react";

function AuthLayout({ children }) {
  return (
    <div data-aos="fade-up" data-aos-duration="500" className="h-100">
      <div className="position-relative ">
        <div className="custom-shape-divider-bottom-1640483682">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        {children}
      </div>
      <div className="bg-custom-1" style={{ height: "200px" }}></div>
    </div>
  );
}

export default AuthLayout;
