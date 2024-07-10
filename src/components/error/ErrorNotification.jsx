import ErrorImage from "../../assets/warning-error.png";

import MainWrapper from "../shared/MainWrapper";

const ErrorNotification = () => {
  return (
    <MainWrapper>
      <div className="error-notification">
        <img src={ErrorImage} alt="Error Warning" />
        <h2>Oops...</h2>
        <p>There is something went wrong!</p>
        <p>We are working hard on it!</p>
      </div>
    </MainWrapper>
  );
};

export default ErrorNotification;
