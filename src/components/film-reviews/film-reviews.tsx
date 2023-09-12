function FilmReviews(): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director funniest and most exquisitely designed films in years.</p>

            <footer className="review__details">
              <cite className="review__author">Kate Muir</cite>
              <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,9</div>
        </div>
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">I didn find it amusing, and while I can appreciate the creativity, is an hour and 40 minutes I wish I could take back.</p>
            <footer className="review__details">
              <cite className="review__author">Amanda Greever</cite>
              <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
            </footer>
          </blockquote>
          <div className="review__rating">8,0</div>
        </div>
      </div>
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>
            <footer className="review__details">
              <cite className="review__author">Matthew Lickona</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>
          <div className="review__rating">7,2</div>
        </div>
      </div>
    </div>
  );
}

export default FilmReviews;