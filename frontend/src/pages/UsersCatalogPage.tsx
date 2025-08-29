import { Header } from '../components/header/Header.tsx';

export const UsersCatalogPage = () => (
  <div className="wrapper">
    <Header />
    <main>
      <section className="inner-page">
        <div className="container">
          <div className="inner-page__wrapper">
            <h1 className="visually-hidden">Каталог пользователей</h1>
            <div className="user-catalog-form">
              <h2 className="visually-hidden">Каталог пользователя</h2>
              <div className="user-catalog-form__wrapper">
                <button className="btn-flat btn-flat--underlined user-catalog-form__btnback" type="button">
                  <svg width="14" height="10" aria-hidden="true">
                    <use xlinkHref="#arrow-left"></use>
                  </svg>
                  <span>Назад</span>
                </button>
                <h3 className="user-catalog-form__title">Фильтры</h3>
                <form className="user-catalog-form__form">
                  <div className="user-catalog-form__block user-catalog-form__block--location">
                    <h4 className="user-catalog-form__block-title">Локация, станция метро</h4>
                    <ul className="user-catalog-form__check-list">
                      <li className="user-catalog-form__check-list-item">
                        <div className="custom-toggle custom-toggle--checkbox">
                          <label>
                            <input type="checkbox" value="user-agreement-1" name="user-agreement" defaultChecked />
                            <span className="custom-toggle__icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="custom-toggle__label">Автово</span>
                          </label>
                        </div>
                      </li>
                      <li className="user-catalog-form__check-list-item">
                        <div className="custom-toggle custom-toggle--checkbox">
                          <label>
                            <input type="checkbox" value="user-agreement-1" name="user-agreement" defaultChecked />
                            <span className="custom-toggle__icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="custom-toggle__label">Адмиралтейская</span>
                          </label>
                        </div>
                      </li>
                      <li className="user-catalog-form__check-list-item">
                        <div className="custom-toggle custom-toggle--checkbox">
                          <label>
                            <input type="checkbox" value="user-agreement-1" name="user-agreement" defaultChecked />
                            <span className="custom-toggle__icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="custom-toggle__label">Академическая</span>
                          </label>
                        </div>
                      </li>
                      <li className="user-catalog-form__check-list-item">
                        <div className="custom-toggle custom-toggle--checkbox">
                          <label>
                            <input type="checkbox" value="user-agreement-1" name="user-agreement" />
                            <span className="custom-toggle__icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="custom-toggle__label">Балтийская</span>
                          </label>
                        </div>
                      </li>
                      <li className="user-catalog-form__check-list-item">
                        <div className="custom-toggle custom-toggle--checkbox">
                          <label>
                            <input type="checkbox" value="user-agreement-1" name="user-agreement" />
                            <span className="custom-toggle__icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="custom-toggle__label">Бухарестская</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                    <button className="btn-show-more user-catalog-form__btn-show" type="button">
                      <span>Посмотреть все</span>
                      <svg className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
                        <use xlinkHref="#arrow-down"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="user-catalog-form__block user-catalog-form__block--spezialization">
                    <h4 className="user-catalog-form__block-title">Специализация</h4>
                    <ul className="user-catalog-form__check-list">
                      <li className="user-catalog-form__check-list-item">
                        <div className="custom-toggle custom-toggle--checkbox">
                          <label>
                            <input type="checkbox" value="spezialization-1" name="spezialization" defaultChecked />
                            <span className="custom-toggle__icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="custom-toggle__label">Аэробика</span>
                          </label>
                        </div>
                      </li>
                      <li className="user-catalog-form__check-list-item">
                        <div className="custom-toggle custom-toggle--checkbox">
                          <label>
                            <input type="checkbox" value="spezialization-1" name="spezialization" defaultChecked />
                            <span className="custom-toggle__icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="custom-toggle__label">Бег</span>
                          </label>
                        </div>
                      </li>
                      <li className="user-catalog-form__check-list-item">
                        <div className="custom-toggle custom-toggle--checkbox">
                          <label>
                            <input type="checkbox" value="spezialization-1" name="spezialization" defaultChecked />
                            <span className="custom-toggle__icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="custom-toggle__label">Бокс</span>
                          </label>
                        </div>
                      </li>
                      <li className="user-catalog-form__check-list-item">
                        <div className="custom-toggle custom-toggle--checkbox">
                          <label>
                            <input type="checkbox" value="spezialization-1" name="spezialization" />
                            <span className="custom-toggle__icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="custom-toggle__label">Йога</span>
                          </label>
                        </div>
                      </li>
                      <li className="user-catalog-form__check-list-item">
                        <div className="custom-toggle custom-toggle--checkbox">
                          <label>
                            <input type="checkbox" value="spezialization-1" name="spezialization" />
                            <span className="custom-toggle__icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="custom-toggle__label">Кроссфит</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                    <button className="btn-show-more user-catalog-form__btn-show" type="button">
                      <span>Посмотреть все</span>
                      <svg className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
                        <use xlinkHref="#arrow-down"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="user-catalog-form__block user-catalog-form__block--level">
                    <h4 className="user-catalog-form__block-title">Ваш уровень</h4>
                    <div className="custom-toggle-radio">
                      <div className="custom-toggle-radio__block">
                        <label>
                          <input type="radio" name="user-agreement" />
                          <span className="custom-toggle-radio__icon"></span>
                          <span className="custom-toggle-radio__label">Новичок</span>
                        </label>
                      </div>
                      <div className="custom-toggle-radio__block">
                        <label>
                          <input type="radio" name="user-agreement" defaultChecked />
                          <span className="custom-toggle-radio__icon"></span>
                          <span className="custom-toggle-radio__label">Любитель</span>
                        </label>
                      </div>
                      <div className="custom-toggle-radio__block">
                        <label>
                          <input type="radio" name="user-agreement" value="user-agreement-1" />
                          <span className="custom-toggle-radio__icon"></span>
                          <span className="custom-toggle-radio__label">Профессионал</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="user-catalog-form__block">
                    <h3 className="user-catalog-form__title user-catalog-form__title--sort">Сортировка</h3>
                    <div className="btn-radio-sort">
                      <label>
                        <input type="radio" name="sort" defaultChecked />
                        <span className="btn-radio-sort__label">Тренеры</span>
                      </label>
                      <label>
                        <input type="radio" name="sort" />
                        <span className="btn-radio-sort__label">Пользователи</span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="inner-page__content">
              <div className="users-catalog">
                <ul className="users-catalog__list">
                  <li className="users-catalog__item">
                    <div className="thumbnail-user thumbnail-user--role-user">
                      <div className="thumbnail-user__image">
                        <picture>
                          <source type="image/webp" srcSet="/img/content/thumbnails/user-01.webp, /img/content/thumbnails/user-01@2x.webp 2x" />
                          <img src="/img/content/thumbnails/user-01.jpg" srcSet="/img/content/thumbnails/user-01@2x.jpg 2x" width="82" height="82" alt="" />
                        </picture>
                      </div>
                      <div className="thumbnail-user__header">
                        <h3 className="thumbnail-user__name">Елизавета</h3>
                        <div className="thumbnail-user__location">
                          <svg width="14" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-location"></use>
                          </svg>
                          <address className="thumbnail-user__location-address">Петроградская</address>
                        </div>
                      </div>
                      <ul className="thumbnail-user__hashtags-list">
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#стретчинг</span>
                          </div>
                        </li>
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#йога</span>
                          </div>
                        </li>
                      </ul>
                      <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                    </div>
                  </li>
                  <li className="users-catalog__item">
                    <div className="thumbnail-user thumbnail-user--role-coach">
                      <div className="thumbnail-user__image">
                        <picture>
                          <source type="image/webp" srcSet="/img/content/thumbnails/user-02.webp, /img/content/thumbnails/user-02@2x.webp 2x" />
                          <img src="/img/content/thumbnails/user-02.jpg" srcSet="/img/content/thumbnails/user-02@2x.jpg 2x" width="82" height="82" alt="" />
                        </picture>
                      </div>
                      <div className="thumbnail-user__header">
                        <h3 className="thumbnail-user__name">Дарья</h3>
                        <div className="thumbnail-user__location">
                          <svg width="14" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-location"></use>
                          </svg>
                          <address className="thumbnail-user__location-address">Адмиралтейская</address>
                        </div>
                      </div>
                      <ul className="thumbnail-user__hashtags-list">
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#стретчинг</span>
                          </div>
                        </li>
                      </ul>
                      <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                    </div>
                  </li>
                  <li className="users-catalog__item">
                    <div className="thumbnail-user thumbnail-user--role-coach">
                      <div className="thumbnail-user__image">
                        <picture>
                          <source type="image/webp" srcSet="/img/content/thumbnails/user-03.webp, /img/content/thumbnails/user-03@2x.webp 2x" />
                          <img src="/img/content/thumbnails/user-03.jpg" srcSet="/img/content/thumbnails/user-03@2x.jpg 2x" width="82" height="82" alt="" />
                        </picture>
                      </div>
                      <div className="thumbnail-user__header">
                        <h3 className="thumbnail-user__name">Наталья</h3>
                        <div className="thumbnail-user__location">
                          <svg width="14" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-location"></use>
                          </svg>
                          <address className="thumbnail-user__location-address">Василеостровская</address>
                        </div>
                      </div>
                      <ul className="thumbnail-user__hashtags-list">
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#пилатес</span>
                          </div>
                        </li>
                      </ul>
                      <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                    </div>
                  </li>
                  <li className="users-catalog__item">
                    <div className="thumbnail-user thumbnail-user--role-coach">
                      <div className="thumbnail-user__image">
                        <picture>
                          <source type="image/webp" srcSet="/img/content/thumbnails/user-08.webp, /img/content/thumbnails/user-08@2x.webp 2x" />
                          <img src="/img/content/thumbnails/user-08.jpg" srcSet="/img/content/thumbnails/user-08@2x.jpg 2x" width="82" height="82" alt="" />
                        </picture>
                      </div>
                      <div className="thumbnail-user__header">
                        <h3 className="thumbnail-user__name">Никита</h3>
                        <div className="thumbnail-user__location">
                          <svg width="14" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-location"></use>
                          </svg>
                          <address className="thumbnail-user__location-address">Садовая</address>
                        </div>
                      </div>
                      <ul className="thumbnail-user__hashtags-list">
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#йога</span>
                          </div>
                        </li>
                      </ul>
                      <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                    </div>
                  </li>
                  <li className="users-catalog__item">
                    <div className="thumbnail-user thumbnail-user--role-user">
                      <div className="thumbnail-user__image">
                        <picture>
                          <source type="image/webp" srcSet="/img/content/thumbnails/user-09.webp, /img/content/thumbnails/user-09@2x.webp 2x" />
                          <img src="/img/content/thumbnails/user-09.jpg" srcSet="/img/content/thumbnails/user-09@2x.jpg 2x" width="82" height="82" alt="" />
                        </picture>
                      </div>
                      <div className="thumbnail-user__header">
                        <h3 className="thumbnail-user__name">Татьяна</h3>
                        <div className="thumbnail-user__location">
                          <svg width="14" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-location"></use>
                          </svg>
                          <address className="thumbnail-user__location-address">Площадь Александра Невского</address>
                        </div>
                      </div>
                      <ul className="thumbnail-user__hashtags-list">
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#стретчинг</span>
                          </div>
                        </li>
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#йога</span>
                          </div>
                        </li>
                      </ul>
                      <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                    </div>
                  </li>
                  <li className="users-catalog__item">
                    <div className="thumbnail-user thumbnail-user--role-user">
                      <div className="thumbnail-user__image">
                        <picture>
                          <source type="image/webp" srcSet="/img/content/thumbnails/user-10.webp, /img/content/thumbnails/user-10@2x.webp 2x" />
                          <img src="/img/content/thumbnails/user-10.jpg" srcSet="/img/content/thumbnails/user-10@2x.jpg 2x" width="82" height="82" alt="" />
                        </picture>
                      </div>
                      <div className="thumbnail-user__header">
                        <h3 className="thumbnail-user__name">Марк</h3>
                        <div className="thumbnail-user__location">
                          <svg width="14" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-location"></use>
                          </svg>
                          <address className="thumbnail-user__location-address">Технологический Институт</address>
                        </div>
                      </div>
                      <ul className="thumbnail-user__hashtags-list">
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#стретчинг</span>
                          </div>
                        </li>
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#кроссфит</span>
                          </div>
                        </li>
                      </ul>
                      <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                    </div>
                  </li>
                  <li className="users-catalog__item">
                    <div className="thumbnail-user thumbnail-user--role-coach">
                      <div className="thumbnail-user__image">
                        <picture>
                          <source type="image/webp" srcSet="/img/content/thumbnails/user-04.webp, /img/content/thumbnails/user-04@2x.webp 2x" />
                          <img src="/img/content/thumbnails/user-04.jpg" srcSet="/img/content/thumbnails/user-04@2x.jpg 2x" width="82" height="82" alt="" />
                        </picture>
                      </div>
                      <div className="thumbnail-user__header">
                        <h3 className="thumbnail-user__name">Диана</h3>
                        <div className="thumbnail-user__location">
                          <svg width="14" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-location"></use>
                          </svg>
                          <address className="thumbnail-user__location-address">Невский проспект</address>
                        </div>
                      </div>
                      <ul className="thumbnail-user__hashtags-list">
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#пилатес</span>
                          </div>
                        </li>
                      </ul>
                      <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                    </div>
                  </li>
                  <li className="users-catalog__item">
                    <div className="thumbnail-user thumbnail-user--role-coach">
                      <div className="thumbnail-user__image">
                        <picture>
                          <source type="image/webp" srcSet="/img/content/thumbnails/user-11.webp, /img/content/thumbnails/user-11@2x.webp 2x" />
                          <img src="/img/content/thumbnails/user-11.jpg" srcSet="/img/content/thumbnails/user-11@2x.jpg 2x" width="82" height="82" alt="" />
                        </picture>
                      </div>
                      <div className="thumbnail-user__header">
                        <h3 className="thumbnail-user__name">Станислав</h3>
                        <div className="thumbnail-user__location">
                          <svg width="14" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-location"></use>
                          </svg>
                          <address className="thumbnail-user__location-address">Спортивная</address>
                        </div>
                      </div>
                      <ul className="thumbnail-user__hashtags-list">
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#йога</span>
                          </div>
                        </li>
                      </ul>
                      <a className="btn btn--dark-bg btn--medium thumbnail-user__button" href="#">Подробнее</a>
                    </div>
                  </li>
                  <li className="users-catalog__item">
                    <div className="thumbnail-user thumbnail-user--role-user">
                      <div className="thumbnail-user__image">
                        <picture>
                          <source type="image/webp" srcSet="/img/content/thumbnails/user-12.webp, /img/content/thumbnails/user-12@2x.webp 2x" />
                          <img src="/img/content/thumbnails/user-12.jpg" srcSet="/img/content/thumbnails/user-12@2x.jpg 2x" width="82" height="82" alt="" />
                        </picture>
                      </div>
                      <div className="thumbnail-user__header">
                        <h3 className="thumbnail-user__name">Катерина</h3>
                        <div className="thumbnail-user__location">
                          <svg width="14" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-location"></use>
                          </svg>
                          <address className="thumbnail-user__location-address">Адмиралтейская</address>
                        </div>
                      </div>
                      <ul className="thumbnail-user__hashtags-list">
                        <li className="thumbnail-user__hashtags-item">
                          <div className="hashtag thumbnail-user__hashtag">
                            <span>#аэробика</span>
                          </div>
                        </li>
                      </ul>
                      <a className="btn btn--medium thumbnail-user__button" href="#">Подробнее</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);
