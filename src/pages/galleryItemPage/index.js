import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { galleryItems } from "../../data/galleryItems";
import "./index.css";

export const GalleryItemPage = ({ ...props }) => {
  const { id } = useParams();
  return (
    <div className="wraper">
      {galleryItems.map(
        (item, idx) =>
          id === item.id &&
          (id == "002" ? (
            <div className="gallery-item-page-wrap1">
              <div className="gallery-item-page-content">
                <img
                  alt="img"
                  src={item.pageImages[0]}
                  className="gallery-item-page-img main-img"
                />
                <div className="main-info">
                  <div className="gallery-item-page-title">
                    {item.pageTitle}
                  </div>
                  <NavLink to="galery" className="gallery-item-page-link">
                    <div className="text-wrap">
                      <p className="gallery-item-page-link-text">Следующий</p>
                      <p className="gallery-item-page-link-text">проект</p>
                    </div>
                    <svg
                      width="116"
                      height="18"
                      viewBox="0 0 116 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M106.494 0.348021L115.423 7.9098C115.971 8.37383 115.971 9.12617 115.423 9.5902L106.494 17.152C105.946 17.616 105.057 17.616 104.509 17.152C103.962 16.6879 103.962 15.9356 104.509 15.4716L111.043 9.93822L1.40308 10.5945C0.628182 10.5945 0 10.0625 0 9.40624C0 8.75 0.628182 8.21802 1.40308 8.21802L111.043 7.56178L104.509 2.02842C103.962 1.56439 103.962 0.81205 104.509 0.348021C105.057 -0.116007 105.946 -0.116007 106.494 0.348021Z"
                        fill="#000"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
              <div className="gallery-item-page-content">
                <img alt="img" src={item.pageImages[1]} className="img1" />
                <img alt="img" src={item.pageImages[2]} className="img2" />
              </div>
            </div>
          ) : (
            <div className="gallery-item-page-wrap">
              <div className="gallery-item-page-content1">
                <img
                  alt="img"
                  src={item.pageImages[0]}
                  className="gallery-item-page-img"
                />
                <img
                  alt="img"
                  src={item.pageImages[1]}
                  className="gallery-item-page-img"
                />
              </div>
              <div className="gallery-item-page-content2">
                <div className="gallery-item-page-content-box">
                  <img
                    alt="img"
                    src={item.pageImages[2]}
                    className="gallery-item-page-img info-img"
                  />
                  <div className="gallery-item-page-info">
                    <div className="gallery-item-page-title">
                      {item.pageTitle}
                    </div>
                    <NavLink to="galery" className="gallery-item-page-link">
                      <div className="text-wrap">
                        <p className="gallery-item-page-link-text">Следующий</p>
                        <p className="gallery-item-page-link-text">проект</p>
                      </div>
                      <svg
                        width="116"
                        height="18"
                        viewBox="0 0 116 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M106.494 0.348021L115.423 7.9098C115.971 8.37383 115.971 9.12617 115.423 9.5902L106.494 17.152C105.946 17.616 105.057 17.616 104.509 17.152C103.962 16.6879 103.962 15.9356 104.509 15.4716L111.043 9.93822L1.40308 10.5945C0.628182 10.5945 0 10.0625 0 9.40624C0 8.75 0.628182 8.21802 1.40308 8.21802L111.043 7.56178L104.509 2.02842C103.962 1.56439 103.962 0.81205 104.509 0.348021C105.057 -0.116007 105.946 -0.116007 106.494 0.348021Z"
                          fill="#000"
                        />
                      </svg>
                    </NavLink>
                  </div>
                </div>
                <img
                  alt="img"
                  src={item.pageImages[3]}
                  className="gallery-item-page-img"
                />
              </div>
            </div>
          ))
      )}
    </div>
  );
};
