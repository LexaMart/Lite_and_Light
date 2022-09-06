import embassy1 from "../assets/galleryImages/embassy1.png";
import embassy2 from "../assets/galleryImages/embassy2.png";
import embassy3 from "../assets/galleryImages/embassy3.png";
import embassy4 from "../assets/galleryImages/embassy4.png";
import embassy5 from "../assets/galleryImages/embassy5.png";
import embassy6 from "../assets/galleryImages/embassy6.png";
import office1 from "../assets/galleryImages/office1.png";
import office2 from "../assets/galleryImages/office2.png";
import office3 from "../assets/galleryImages/office3.png";
import office4 from "../assets/galleryImages/office4.png";
import office5 from "../assets/galleryImages/office5.png";
import company1 from "../assets/galleryImages/company1.png";
import company2 from "../assets/galleryImages/company2.png";
import company3 from "../assets/galleryImages/company3.png";
import company4 from "../assets/galleryImages/company4.png";
import company5 from "../assets/galleryImages/company5.png";
import company6 from "../assets/galleryImages/company6.png";
import aviation1 from "../assets/galleryImages/aviation1.png";
import aviation2 from "../assets/galleryImages/aviation2.png";
import aviation3 from "../assets/galleryImages/aviation3.png";
import aviation4 from "../assets/galleryImages/aviation4.png";
import aviation5 from "../assets/galleryImages/aviation5.png";
import aviation6 from "../assets/galleryImages/aviation6.png";
import img1 from "../assets/galleryImages/img1.png";
import img2 from "../assets/galleryImages/img2.png";
import img3 from "../assets/galleryImages/img3.png";
import img4 from "../assets/galleryImages/img4.png";
import img5 from "../assets/galleryImages/img5.png";
import img6 from "../assets/galleryImages/img6.png";

export const galleryItems = [
  {
    title: [
      <p key="1" className="gallery-title">
        Посольство
      </p>,
      <p key="2" className="gallery-title">
        Республики Беларусь
      </p>,
      <p key="3" className="gallery-title">
        в Республике Казахстан
      </p>,
    ],
    id: "001",
    mainImages: [embassy1, embassy2],
    image: [embassy1],
    pageTitle: [
      <p key="1" className="gallery-title gallery-title-adaptive">
        Посольство
      </p>,
      <p key="2" className="gallery-title gallery-title-adaptive">
        Республики Беларусь
      </p>,
      <p key="3" className="gallery-title gallery-title-adaptive">
        в Республике
      </p>,
      <p key="4" className="gallery-title gallery-title-adaptive">
        Казахстан
      </p>,
    ],
    pageImages: [embassy3, embassy4, embassy5, embassy6],
  },
  {
    title: [
      <p key="1" className="gallery-title">
        Офис IT-компании
      </p>,
      <p key="2" className="gallery-title">
        г. Минск
      </p>,
    ],
    id: "002",
    mainImages: [office1, office2],
    image: [office1],
    pageTitle: [
      <p key="1" className="gallery-title  gallery-title-adaptive">
        Офис IT-компании в
      </p>,
      <p key="2" className="gallery-title  gallery-title-adaptive">
        городе Минске
      </p>,
    ],
    pageImages: [office3, office4, office5],
  },
  {
    title: [
      <p key="1" className="gallery-title">
        Офис производственной
      </p>,
      <p key="2" className="gallery-title">
        компании г. Минск
      </p>,
    ],
    id: "003",
    mainImages: [company1, company2],
    image: [company1],
    pageTitle: [
      <p key="1" className="gallery-title  gallery-title-adaptive">
        Офис
      </p>,
      <p key="2" className="gallery-title  gallery-title-adaptive">
        производственной
      </p>,
      <p key="2" className="gallery-title  gallery-title-adaptive">
        компании в городе
      </p>,
      <p key="2" className="gallery-title  gallery-title-adaptive">
        Минске
      </p>,
    ],
    pageImages: [company3, company4, company5, company6],
  },
  {
    title: [
      <p key="1" className="gallery-title">
        Терминал Бизнес Авиации
      </p>,
      <p key="2" className="gallery-title">
        в Аэропорту Минск-2
      </p>,
    ],
    id: "004",
    mainImages: [aviation1, aviation2],
    image: [aviation1],
    pageTitle: [
      <p key="1" className="gallery-title  gallery-title-adaptive">
        Терминал Бизнес
      </p>,
      <p key="2" className="gallery-title  gallery-title-adaptive">
        Авиации в Аэропорту
      </p>,
      <p key="2" className="gallery-title  gallery-title-adaptive">
        Минск-2
      </p>,
    ],
    pageImages: [aviation3, aviation4, aviation5, aviation6],
  },
  {
    title: [
      <p key="1" className="gallery-title">
        Офис военно-
      </p>,
      <p key="2" className="gallery-title">
        промышленного
      </p>,
      <p key="3" className="gallery-title">
        предриятия в РБ
      </p>,
    ],
    id: "005",
    mainImages: [img1, img2],
    image: [img1],
    pageTitle: [
      <p key="1" className="gallery-title  gallery-title-adaptive">
        Офис военно-
      </p>,
      <p key="2" className="gallery-title  gallery-title-adaptive">
        промышленного
      </p>,
      <p key="3" className="gallery-title  gallery-title-adaptive">
        предриятия в РБ
      </p>,
    ],
    pageImages: [img3, img4, img5, img6],
  },
];
