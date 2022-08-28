import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import close from "../../assets/svg/close.svg";
import { products } from "../../data/products";
import { setFormVisability, submitFeedBackForm } from "../../store/reducers";
import "./index.css";

export const FeedBackForm = ({ ...props }) => {
  const location = useLocation();

  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
  });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
    product: "Не выбран",
  });
  const dispatch = useDispatch();
  const { isShown } = useSelector((store) => store.feedBackFormReducer);

  const closePopup = (e) => {
    if (e.target.className === "shadow") dispatch(setFormVisability(false));
  };

  const changeHandler = (event) => {
    switch (event.target.name) {
      case "phone":
        setFormErrors({
          ...formErrors,
          phone: !!!event.target.value,
        });
        setForm({
          ...form,
          phone: event.target.value,
        });
        break;
      case "name":
        setFormErrors({
          ...formErrors,
          name: !!!event.target.value,
        });
        setForm({
          ...form,
          name: event.target.value,
        });
        break;
      case "message":
        setForm({
          ...form,
          message: event.target.value,
        });
        break;
      default:
        break;
    }
    console.log(formErrors);
  };

  const formIsChecked = () => {
    setFormErrors({
      phone: !!!form.phone,
      name: !!!form.name,
    });
    return form.name && form.phone;
  };

  const submitForm = () => {
    if (formIsChecked()) {
      dispatch(submitFeedBackForm(form));
    }
  };

  const setProduct = useCallback(() => {
    const productId = location.pathname.split("/").pop();
    const product = products.find((el) => el.id === productId)?.title;
    if (product) {
      setForm({
        ...form,
        product,
      });
    }
  }, [location]);

  useEffect(() => {
    setProduct();
  }, [location]);
  return (
    <>
      {isShown && (
        <div className="shadow" onClick={closePopup}>
          <div className="popup">
            <div className="popup__header">
              {/* <span className="popup__header__title">Form Title</span> */}
              {/* <img
                onClick={closePopup}
                className="close"
                src={close}
                alt={"close"}
              /> */}
            </div>
            <div className="popup__content">
              <div className="popup__content__item">
                <input
                  onFocus={(e) => {
                    e.stopPropagation();
                    console.log("heres");
                  }}
                  value={form.name}
                  onChange={changeHandler}
                  className={
                    formErrors.name ? "error form-input" : "form-input"
                  }
                  name="name"
                  placeholder="Имя..."
                  type="text"
                />
              </div>
              <div className="popup__content__item">
                <input
                  value={form.phone}
                  onChange={changeHandler}
                  className={
                    formErrors.phone ? "error form-input" : "form-input"
                  }
                  name="phone"
                  placeholder="Номер телефона..."
                  type="text"
                />
              </div>
              <div className="popup__content__item">
                <textarea
                  value={form.message}
                  onChange={changeHandler}
                  className="form-text-area"
                  name="message"
                  placeholder="Ваше сообщение..."
                  type="text"
                />
              </div>
            </div>
            <div className="popup__btns">
              <div onClick={submitForm} className="btn">
                Отправить
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
