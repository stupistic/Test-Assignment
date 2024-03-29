import { useEffect } from "react";
// import axios from "axios";
// import { noAuth, loggedIn } from "../../actions";
// import { useDispatch } from "react-redux";
// import url from "../../config";
// import tokenHandler from "../../tokenHandler";

const GoogleAuth = ({ setIsLoading, setFlag }) => {
  // const dispatch = useDispatch();

  const addGoogleOAuth = () => {
    console.log("adding Google_O_Auth");

    /* global google */
    google.accounts.id.initialize({
      client_id:
        "498482136323-b8cn5f5jss3lm3bkeaa0fpk0fkmcn7p2.apps.googleusercontent.com",
      // callback: handleLogin,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      text: "continue_with",
      logo_alignment: "center",
      width: "300px",
    });
  };

  useEffect(() => {
    console.log("hey i am inside google o auth useEffect!");
    if (document.readyState === "complete") {
      addGoogleOAuth();
    } else {
      window.addEventListener("load", addGoogleOAuth);
    }
  }, []);

  const closeButtonClicked = () => {
    setFlag("none");
  };

  return (
    <>
      <div
        id="signInDiv"
        style={{
          margin: "20px auto",
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
    </>
  );
};

export default GoogleAuth;
