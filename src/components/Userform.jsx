import { useState } from "react";
import ConfirmationBox from "./ConfirmationBox";
import UserTable from "./UserTable";

const Userform = ({ history }) => {
  const userErrors = {
    cName: "",
    url: "",
    image: "",
  };

  const [cName, setCname] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(userErrors);
  const [onError, setOnError] = useState(true);

  const [confirm, setConfirm] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("submit form");

    const submitdetails = {
      campaignName: cName,
      linkURL: url,
      imageURL: image,
    };
    if (!onError) {
      console.log("Success!");
      console.log(submitdetails);

      try {
        const resp = await fetch("https://ad-pushup-be.herokuapp.com/", {
          // const resp = await fetch(
          //   "https://pizzalover-backend-app.herokuapp.com/api/v1/users/login",
          //  {
          method: "POST",
          body: JSON.stringify(submitdetails),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        if (!resp.ok) throw new Error(`${resp.status}`);
        const data = await resp.json();
        console.log("data from API ::", data);

        // setLoggedIn(true);
      } catch (err) {
        console.log("Error on fetch", err);
        setError(true);
      }

      setCname("");
      setUrl("");
      setImage("");
      setOnError(true);
      //   history.replace("/success");
      setConfirm(true);
    } else {
      console.log("Error!");
    }
  };

  const handleConfirmationBox = () => {
    setConfirm(!confirm);
  };

  const handleChange = ({ target: { name, value } }) => {
    // console.log(name, value);
    // console.log("handle change", e.target.name);
    const err = { ...error };
    switch (name) {
      case "cName": {
        if (!value) err.cName = "* Userid is required";
        else err.cName = "";
        setCname(value);
        break;
      }
      case "url": {
        if (!value) err.url = "* url is required";
        else err.url = "";
        setUrl(value);
        break;
      }
      case "image": {
        if (!value) err.image = "* image link is required";
        else err.image = "";
        setImage(value);
        break;
      }
      default: {
        console.log("none");
      }
    }

    setError(err);

    if (err.cName || err.url || err.image) {
      setOnError(true);
    } else if (cName && url && image) {
      setOnError(false);
    }
  };

  return (
    <div>
      <section className="user-form">
        <h1>Please fill out below details</h1>
        <form onSubmit={submitForm}>
          <div className="user-input">
            <label htmlFor="cName">
              Your Campaign Name <span className="required">*</span>
            </label>
            <input
              name="cName"
              type="text"
              value={cName}
              onChange={handleChange}
            />
            <div className="err-body">{error.cName}</div>
          </div>
          <div className="user-input">
            <label htmlFor="url">
              Sample Link/URL <span className="required">*</span>
            </label>
            <input name="url" type="text" value={url} onChange={handleChange} />
            <div className="err-body">{error.url}</div>
          </div>
          <div className="user-input">
            <label htmlFor="image">
              Image Link/URL <span className="required">*</span>
            </label>
            <input
              name="image"
              type="text"
              value={image}
              onChange={handleChange}
            />
            <div className="err-body">{error.image}</div>
          </div>
          <div className="user-btn">
            <button
              type="submit"
              className={`btn btn-primary button ${
                onError ? "btn-disable" : ""
              }`}
              disabled={onError}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary button "
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
      {confirm && <ConfirmationBox onChange={handleConfirmationBox} />}
      <UserTable />
    </div>
  );
};

export default Userform;
