import { Header } from '../components/header/Header.tsx';

export const FriendsListUserPage = () => (
  <div className="wrapper">
    <Header />
    <main>
      <section className="friends-list">
        <div className="container">
          <div className="friends-list__wrapper">
            <button className="btn-flat friends-list__back" type="button">
              <svg width="14" height="10" aria-hidden="true">
                <use xlinkHref="#arrow-left"></use>
              </svg>
              <span>Назад</span>
            </button>
            <div className="friends-list__title-wrapper">
              <h1 className="friends-list__title">Мои друзья</h1>
            </div>
            <ul className="friends-list__list">
              <li className="friends-list__item">
                <div className="thumbnail-friend">
                  <div className="thumbnail-friend__info thumbnail-friend__info--theme-light">
                    <div className="thumbnail-friend__image-status">
                      <div className="thumbnail-friend__image">
                        <picture>
                          <source type="image/webp" srcSet="/img/content/thumbnails/friend-08.webp, /img/content/thumbnails/friend-08@2x.webp 2x" />
                          <img src="/img/content/thumbnails/friend-08.jpg" srcSet="/img/content/thumbnails/friend-08@2x.jpg 2x" width="78" height="78" alt="" />
                        </picture>
                      </div>
                    </div>
                    <div className="thumbnail-friend__header">
                      <h2 className="thumbnail-friend__name">Елизавета</h2>
                      <div className="thumbnail-friend__location">
                        <svg width="14" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-location"></use>
                        </svg>
                        <address className="thumbnail-friend__location-address">Петроградская</address>
                      </div>
                    </div>
                    <ul className="thumbnail-friend__training-types-list">
                      <li>
                        <div className="hashtag thumbnail-friend__hashtag"><span>#стретчинг</span></div>
                      </li>
                    </ul>
                    <div className="thumbnail-friend__activity-bar">
                      <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-ready">
                        <span>Готов к&nbsp;тренировке</span>
                      </div>
                      <button className="thumbnail-friend__invite-button" type="button">
                        <svg width="43" height="46" aria-hidden="true" focusable="false">
                          <use xlinkHref="#icon-invite"></use>
                        </svg>
                        <span className="visually-hidden">Пригласить друга на совместную тренировку</span>
                      </button>
                    </div>
                  </div>
                  <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-user">
                    <p className="thumbnail-friend__request-text">Запрос на&nbsp;совместную тренировку</p>
                    <div className="thumbnail-friend__button-wrapper">
                      <button className="btn btn--medium btn--dark-bg thumbnail-friend__button" type="button">Принять</button>
                      <button className="btn btn--medium btn--outlined btn--dark-bg thumbnail-friend__button" type="button">Отклонить</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="show-more friends-list__show-more">
              <button className="btn show-more__button show-more__button--more" type="button">Показать еще</button>
              <button className="btn show-more__button show-more__button--to-top" type="button">Вернуться в начало</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);
