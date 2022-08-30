import embassy1 from "../assets/galleryImages/embassy1.png";
import embassy2 from "../assets/galleryImages/embassy2.png";
import office1 from "../assets/galleryImages/office1.png";
import office2 from "../assets/galleryImages/office2.png";
import company1 from "../assets/galleryImages/company1.png";
import company2 from "../assets/galleryImages/company2.png";
import aviation1 from "../assets/galleryImages/aviation1.png";
import aviation2 from "../assets/galleryImages/aviation2.png";
import img1 from "../assets/galleryImages/img1.png";
import img2 from "../assets/galleryImages/img2.png";

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
  },
];
