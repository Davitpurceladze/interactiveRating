import ThankYouPage from "./ThankYouPage.css";
import Icon from "../ThankYouPageIcon/icon.jsx";

function thankYou({ rating }) {
  return (
    <div className="ThankYouPageContainer">
      <div className="iconContainer">
        <Icon></Icon>
      </div>

      <div className="rateContainer">
        <p>You selected {rating} out of 5</p>
      </div>
      <div className="thankYouContainer">
        <p>Thank you!</p>
      </div>
      <div className="textContainer">
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default thankYou;
