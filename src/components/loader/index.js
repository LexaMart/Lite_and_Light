import React from "react";
import "./index.css";

export const Loader = ({ ...props }) => {
  return (
    <div className="loader">
      <svg
        version="1.0"
        width="100vw"
        height="100vh"
        viewBox="0 0 3500.000000 3500.000000"
      >
        <g
        className="loager-svg-box"
          transform="translate(1400.000000, 2000.000000) scale(0.100000,-0.100000)"
          fill="#fff"
          stroke="none"
        >
          <path
            className="loader-svg1 shadow"
            d="M3140 6325 l0 -455 1130 0 1130 0 0 -1240 0 -1240 455 0 455 0 0
            1695 0 1695 -1585 0 -1585 0 0 -455z"
          />
          <path
            className="loader-svg1"
            d="M3140 6325 l0 -455 1130 0 1130 0 0 -1240 0 -1240 455 0 455 0 0
            1695 0 1695 -1585 0 -1585 0 0 -455z"
          />
           <path
            className="loader-svg2 shadow"
            d="M2715 4945 c-245 -45 -406 -119 -541 -248 -154 -145 -234 -340 -234
            -567 0 -226 73 -413 217 -559 46 -46 83 -85 83 -86 0 -1 -28 -21 -63 -43 -82
            -53 -194 -171 -245 -258 -123 -208 -148 -454 -71 -689 107 -322 359 -533 759
            -633 98 -24 121 -26 335 -27 259 0 319 9 507 75 288 101 495 296 597 560 46
            119 62 217 68 418 l6 182 178 0 179 0 0 350 0 350 -180 0 -180 0 0 185 0 185
            -400 0 -400 0 0 -186 0 -186 -192 4 c-185 3 -195 4 -250 30 -102 47 -153 154
            -129 270 22 105 89 173 193 199 50 11 227 8 273 -6 19 -6 27 14 107 292 48
            164 90 309 93 324 6 25 5 25 -87 42 -221 40 -478 49 -623 22z m613 -2022 c-3
            -140 -4 -150 -30 -195 -55 -93 -143 -144 -277 -158 -120 -13 -244 21 -313 87
            -92 88 -90 259 3 337 76 64 127 74 402 75 l219 1 -4 -147z"
          />
          <path
            className="loader-svg2"
            d="M2715 4945 c-245 -45 -406 -119 -541 -248 -154 -145 -234 -340 -234
            -567 0 -226 73 -413 217 -559 46 -46 83 -85 83 -86 0 -1 -28 -21 -63 -43 -82
            -53 -194 -171 -245 -258 -123 -208 -148 -454 -71 -689 107 -322 359 -533 759
            -633 98 -24 121 -26 335 -27 259 0 319 9 507 75 288 101 495 296 597 560 46
            119 62 217 68 418 l6 182 178 0 179 0 0 350 0 350 -180 0 -180 0 0 185 0 185
            -400 0 -400 0 0 -186 0 -186 -192 4 c-185 3 -195 4 -250 30 -102 47 -153 154
            -129 270 22 105 89 173 193 199 50 11 227 8 273 -6 19 -6 27 14 107 292 48
            164 90 309 93 324 6 25 5 25 -87 42 -221 40 -478 49 -623 22z m613 -2022 c-3
            -140 -4 -150 -30 -195 -55 -93 -143 -144 -277 -158 -120 -13 -244 21 -313 87
            -92 88 -90 259 3 337 76 64 127 74 402 75 l219 1 -4 -147z"
          />
          <path
            className="loader-svg3 shadow"
            d="M0 1700 l0 -1690 1580 0 1580 0 0 455 0 455 -1125 0 -1125 0 0 1235
            0 1235 -455 0 -455 0 0 -1690z"
          />
          <path
            className="loader-svg3"
            d="M0 1700 l0 -1690 1580 0 1580 0 0 455 0 455 -1125 0 -1125 0 0 1235
            0 1235 -455 0 -455 0 0 -1690z"
          />
        </g>
      </svg>
    </div>
  );
};
