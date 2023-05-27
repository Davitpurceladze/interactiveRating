import { useState } from "react";
import "./App.css";
import RateCard from "./RateItem/RateCard.jsx";
import ThankYouPage from "./ThankYouPage/ThankYouPage.jsx";

function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const [rating, setRating] = useState(null);
  return (
    <div>
      {showThankYouPage ? (
        <ThankYouPage rating={rating} />
      ) : (
        <RateCard
          rating={rating}
          setRating={setRating}
          setShowThankYouPage={setShowThankYouPage}
        />
      )}
    </div>
  );
}

export default App;
