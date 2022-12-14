// Библиотеки
import React, { SyntheticEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Хуки
import { useAppDispatch } from '../../hooks';

//Глобальное состояние
import { uploadCommentAction } from '../../store/api-actions';

enum Rate {
  MaxRate = 10,
  InitialRate = 8,
}

export default function FormReview({ id }: { id: string }): JSX.Element {
  const [currentRate, setRate] = useState(Rate.InitialRate);
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCommentRequest = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(uploadCommentAction({
      id,
      comment: {
        comment: text,
        rating: currentRate,
      },
      navigate
    }));
  };

  const rateInput = Array.from({ length: Rate.MaxRate }, (_v, index) => {
    const rating = Rate.MaxRate - index;
    return (
      <React.Fragment key={`rating${rating}`}>
        <input className="rating__input"
          id={`star-${rating}`}
          type="radio"
          name="rating"
          value={rating}
          checked={currentRate === rating}
          onChange={(evt) => setRate(Number(evt.target.value))}
        />
        <label className="rating__label"
          htmlFor={`star-${rating}`}
        >
          Rating {rating}
        </label>
      </React.Fragment>
    );
  });

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handleCommentRequest}
    >
      <div className="rating">
        <div className="rating__stars">
          {rateInput}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text"
          value={text}
          onChange={(evt) => setText(evt.target.value)}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
          >
            Post
          </button>
        </div>

      </div>
    </form>
  );
}
