import { Fragment, useState, ChangeEvent } from 'react';
const REVIEW_TEXT = 'review-text';

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    [REVIEW_TEXT]: '',
  });

  const hendelFormDataChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    let parsedValue: string | number = value;

    if (name === 'rating') {
      parsedValue = Number(value);
    }

    setFormData({
      ...formData,
      [name]: parsedValue});
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {(Array.from({length: 10}, (_, k) => (
            <Fragment key={`rating__${k}`}>
              <input
                className="rating__input"
                id={`star-${k + 1}`}
                type="radio"
                name="rating"
                value={k + 1}
                onChange={hendelFormDataChange}
              />
              <label className="rating__label" htmlFor={`star-${k + 1}`}>{`Rating ${k + 1}`}</label>
            </Fragment>
          )
          )).reverse()}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={hendelFormDataChange}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
