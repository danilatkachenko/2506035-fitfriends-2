import { Header } from '../components/header/Header.tsx';
import { PopupFeedback } from '../components/PopupFeedback.tsx';
import { PopupBuy } from '../components/PopupBuy.tsx';
import { useEffect, useState} from 'react';

const ReviewsSidebar = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFeedbackOpen(false);
      }
    };
    if (isFeedbackOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFeedbackOpen]);

  const reviews = [
    {
      user: 'Никита',
      rating: 5,
      comment: 'Эта тренировка для меня зарядка по утрам, помогает проснуться.',
      photo: 'photo-1.png',
      photo2x: 'photo-1@2x.png',
    },
    {
      user: 'Дарья',
      rating: 5,
      comment: 'Спасибо, классная тренировка! Понятная и интересная, с акцентом на правильную технику, как я люблю.',
      photo: 'photo-2.png',
      photo2x: 'photo-2@2x.png',
    },
    {
      user: 'Катерина',
      rating: 4,
      comment: 'Хорошая тренировка, но все же не хватило немного динамики. Для меня оказалась слишком легкой.',
      photo: 'photo-3.png',
      photo2x: 'photo-3@2x.png',
    },
    {
      user: 'Татьяна',
      rating: 5,
      comment: 'Регулярно выполняю эту тренировку дома и вижу результат! Спина стала прямее, появилось больше сил и гибкость тоже стала лучше, хотя упражнения довольно простые.',
      photo: 'photo-4.png',
      photo2x: 'photo-4@2x.png',
    },
    {
      user: 'Наталья',
      rating: 5,
      comment: 'Ну какой же кайф! Спасибо, крутая программа. С музыкой вообще супер! Действительно, Energy!',
      photo: 'photo-5.png',
      photo2x: 'photo-5@2x.png',
    },
    {
      user: 'Никита',
      rating: 5,
      comment: 'Эта тренировка для меня зарядка по утрам, помогает проснуться.',
      photo: 'photo-1.png',
      photo2x: 'photo-1@2x.png',
    },
  ];

  return (
    <aside className="reviews-side-bar">
      <button className="btn-flat btn-flat--underlined reviews-side-bar__back" type="button">
        <svg width="14" height="10" aria-hidden="true">
          <use xlinkHref="#arrow-left"></use>
        </svg>
        <span>Назад</span>
      </button>
      <h2 className="reviews-side-bar__title">Отзывы</h2>
      <ul className="reviews-side-bar__list">
        {reviews.map((review, index) => (
          <li key={index} className="reviews-side-bar__item">
            <div className="review">
              <div className="review__user-info">
                <div className="review__user-photo">
                  <picture>
                    <source type="image/webp" srcSet={`img/content/avatars/users/${review.photo.replace('.png', '.webp')}, img/content/avatars/users/${review.photo2x.replace('.png', '.webp')} 2x`} />
                    <img src={`img/content/avatars/users/${review.photo}`} srcSet={`img/content/avatars/users/${review.photo2x} 2x`} width="64" height="64" alt="Изображение пользователя" />
                  </picture>
                </div>
                <span className="review__user-name">{review.user}</span>
                <div className="review__rating">
                  <svg width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <span>{review.rating}</span>
                </div>
              </div>
              <p className="review__comment">{review.comment}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn--medium reviews-side-bar__button" type="button" onClick={() => setIsFeedbackOpen(true)}>Оставить отзыв</button>
      {isFeedbackOpen && <PopupFeedback onClose={() => setIsFeedbackOpen(false)} />}
    </aside>
  );
};

export const TrainingCardUserPage = () => {
  const [isBuyOpen, setIsBuyOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBuyOpen(false);
      }
    };
    if (isBuyOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isBuyOpen]);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Карточка тренировки</h1>
              <ReviewsSidebar />
              <div className="training-card">
                <div className="training-info">
                  <h2 className="visually-hidden">Информация о тренировке</h2>
                  <div className="training-info__header">
                    <div className="training-info__coach">
                      <div className="training-info__photo">
                        <picture>
                          <source type="image/webp" srcSet="/img/content/avatars/coaches/photo-1.webp, /img/content/avatars/coaches/photo-1@2x.webp 2x" />
                          <img src="/img/content/avatars/coaches/photo-1.png" srcSet="/img/content/avatars/coaches/photo-1@2x.png 2x" width="64" height="64" alt="Изображение тренера" />
                        </picture>
                      </div>
                      <div className="training-info__coach-info">
                        <span className="training-info__label">Тренер</span>
                        <span className="training-info__name">Валерия</span>
                      </div>
                    </div>
                  </div>
                  <div className="training-info__main-content">
                    <form action="#" method="get">
                      <div className="training-info__form-wrapper">
                        <div className="training-info__info-wrapper">
                          <div className="training-info__input training-info__input--training">
                            <label>
                              <span className="training-info__label">Название тренировки</span>
                              <input type="text" name="training" defaultValue="energy" disabled />
                            </label>
                            <div className="training-info__error">Обязательное поле</div>
                          </div>
                          <div className="training-info__textarea">
                            <label>
                              <span className="training-info__label">Описание тренировки</span>
                              <textarea name="description" defaultValue="Упражнения укрепляют мышечный корсет, делают суставы более гибкими, улучшают осанку и координацию." disabled></textarea>
                            </label>
                          </div>
                        </div>
                        <div className="training-info__rating-wrapper">
                          <div className="training-info__input training-info__input--rating">
                            <label>
                              <span className="training-info__label">Рейтинг</span>
                              <span className="training-info__rating-icon">
                                <svg width="18" height="18" aria-hidden="true">
                                  <use xlinkHref="#icon-star"></use>
                                </svg>
                              </span>
                              <input type="number" name="rating" defaultValue="4" disabled />
                            </label>
                          </div>
                          <ul className="training-info__list">
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white">
                                <span>#пилатес</span>
                              </div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white">
                                <span>#для_всех</span>
                              </div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white">
                                <span>#320ккал</span>
                              </div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white">
                                <span>#30_50минут</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="training-info__price-wrapper">
                          <div className="training-info__input training-info__input--price">
                            <label>
                              <span className="training-info__label">Стоимость</span>
                              <input type="text" name="price" defaultValue="800 ₽" disabled />
                            </label>
                            <div className="training-info__error">Введите число</div>
                          </div>
                          <button className="btn training-info__buy" type="button" onClick={() => setIsBuyOpen(true)}>Купить</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="training-video">
                  <h2 className="training-video__title">Видео</h2>
                  <div className="training-video__video">
                    <div className="training-video__thumbnail">
                      <picture>
                        <source type="image/webp" srcSet="/img/content/training-video/video-thumbnail.webp, /img/content/training-video/video-thumbnail@2x.webp 2x" />
                        <img src="/img/content/training-video/video-thumbnail.png" srcSet="/img/content/training-video/video-thumbnail@2x.png 2x" width="922" height="566" alt="Обложка видео" />
                      </picture>
                    </div>
                    <button className="training-video__play-button btn-reset">
                      <svg width="18" height="30" aria-hidden="true">
                        <use xlinkHref="#icon-arrow"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="training-video__buttons-wrapper">
                    <button className="btn training-video__button training-video__button--start" type="button" disabled>Приступить</button>
                    <button className="btn training-video__button training-video__button--stop" type="button">Закончить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {isBuyOpen && <PopupBuy onClose={() => setIsBuyOpen(false)} />}
    </div>
  );
};
