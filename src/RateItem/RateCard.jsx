import { useState } from "react";
import RateCard from "./RateCard.css";

function Card({ rating, setRating, setShowThankYouPage }) {
  const [activeRate, setActiveRate] = useState({
    oneStar: false,
    twoStar: false,
    threeStar: false,
    fourStar: false,
    fiveStar: false,
  });

  const submit = () => {
    if (rating) return setShowThankYouPage(true);
  };

  return (
    <div className="container">
      <div className="starContainer">
        <svg className="starIcon" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <div className="title">
        <p>How did we do?</p>
      </div>
      <div className="contentText">
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="rateItemContainer">
        <div
          className={
            activeRate.oneStar ? "rateItem rateItemActive" : "rateItem"
          }
          onClick={() => {
            setActiveRate({
              oneStar: true,
              twoStar: false,
              threeStar: false,
              fourStar: false,
              fiveStar: false,
            });
            setRating(1);
          }}
        >
          1
        </div>
        <div
          className={
            activeRate.twoStar ? "rateItem rateItemActive" : "rateItem"
          }
          onClick={() => {
            setActiveRate({
              oneStar: false,
              twoStar: true,
              threeStar: false,
              fourStar: false,
              fiveStar: false,
            });
            setRating(2);
          }}
        >
          2
        </div>
        <div
          className={
            activeRate.threeStar ? "rateItem rateItemActive" : "rateItem"
          }
          onClick={() => {
            setActiveRate({
              oneStar: false,
              twoStar: false,
              threeStar: true,
              fourStar: false,
              fiveStar: false,
            });
            setRating(3);
          }}
        >
          3
        </div>
        <div
          className={
            activeRate.fourStar ? "rateItem rateItemActive" : "rateItem"
          }
          onClick={() => {
            setActiveRate({
              oneStar: false,
              twoStar: false,
              threeStar: false,
              fourStar: true,
              fiveStar: false,
            });
            setRating(4);
          }}
        >
          4
        </div>
        <div
          className={
            activeRate.fiveStar ? "rateItem rateItemActive" : "rateItem"
          }
          onClick={() => {
            setActiveRate({
              oneStar: false,
              twoStar: false,
              threeStar: false,
              fourStar: false,
              fiveStar: true,
            });
            setRating(5);
          }}
        >
          5
        </div>
      </div>
      <button onClick={submit} className="isButton">
        {" "}
        <span> SUBMIT</span>
      </button>
    </div>
  );
}

export default Card;
