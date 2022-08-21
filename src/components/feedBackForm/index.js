import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import close from "../../assets/svg/close.svg";
import { setFormVisability, submitFeedBackForm } from "../../store/reducers";
import "./index.css";

export const FeedBackForm = ({ ...props }) => {
  const [form, setForm] = useState({
    phone: "",
  });
  const dispatch = useDispatch();
  const { isShown } = useSelector((store) => store.feedBackFormReducer);

  const closePopup = () => {
    dispatch(setFormVisability(false));
  };

  const changeHandler = (event) => {
    switch (event.target.name) {
      case "phone":
        setForm({
          ...form,
          phone: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  const submitForm = () => {
    dispatch(submitFeedBackForm(form));
  };
  return (
    <>
      {isShown && (
        <div className="shadow">
          <div className="popup">
            <div className="popup__header">
              <span className="popup__header__title">Form Title</span>
              <img
                onClick={closePopup}
                className="close"
                src={close}
                alt={"close"}
              />
            </div>
            <div className="popup__content">
              <div className="popup__content__item">
                <label className="form-label" htmlFor="phone">Ваш номер для обратной связи</label>
                <input
                  value={form.phone}
                  onChange={changeHandler}
                  className='form-input'
                  name="phone"
                  placeholder="Введите ваш телефон"
                  type="text"
                />
              </div>
            </div>
            <div className="popup__btns">
              <div onClick={submitForm} className="btn">
                Отправить заявку
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
