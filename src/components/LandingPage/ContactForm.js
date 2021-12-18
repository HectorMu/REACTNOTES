import { useState } from "react";
import toast from "react-hot-toast";
import { formspreeContact } from "../../services/contact";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const contactResults = await formspreeContact(email, message);

    if (contactResults.status && !contactResults.status)
      return toast.error(contactResults.statusText);

    if (contactResults.ok && contactResults.ok === true) {
      return toast.success(
        "Message sended succesfully, thanks for your comments!"
      );
    }
  };
  return (
    <div id="formcard" className="card mt-5 mb-4">
      <div className="card-body py-5">
        <h2 className="display-4 font-weight-bolder text-center">Your data</h2>
        <form onSubmit={handleContactSubmit}>
          <div className="form-group"></div>
          <input
            type="text"
            className="form-control mb-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <textarea
            className="form-control"
            cols={30}
            rows={8}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Message"
          />
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn w-50  btn-primary mt-2">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
