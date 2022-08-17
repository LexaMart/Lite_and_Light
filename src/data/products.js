import img1 from "../assets/catalogImages/img1.png";
import img2 from "../assets/catalogImages/img2.png";
import img3 from "../assets/catalogImages/img3.png";
import img4 from "../assets/catalogImages/img4.png";
import img5 from "../assets/catalogImages/img5.png";
import img6 from "../assets/catalogImages/img6.png";
import img7 from "../assets/catalogImages/img7.png";
import img8 from "../assets/catalogImages/img8.png";
import img9 from "../assets/catalogImages/img9.png";
import img10 from "../assets/catalogImages/img10.png";
import img11 from "../assets/catalogImages/img11.png";
import img12 from "../assets/catalogImages/img12.png";
import img13 from "../assets/catalogImages/img13.png";
import img14 from "../assets/catalogImages/img14.png";
import img15 from "../assets/catalogImages/img15.png";
import img16 from "../assets/catalogImages/img16.png";
import img17 from "../assets/catalogImages/img17.png";
import img18 from "../assets/catalogImages/img18.png";
import img19 from "../assets/catalogImages/img19.png";
import img20 from "../assets/catalogImages/img20.png";
import img21 from "../assets/catalogImages/img21.png";
import img22 from "../assets/catalogImages/img22.png";
import img23 from "../assets/catalogImages/img23.png";
import img24 from "../assets/catalogImages/img24.png";
import img28 from "../assets/catalogImages/img28.png";
import productImage1 from "../assets/productCardImages/1.png";
import productImage2 from "../assets/productCardImages/2.png";
import productImage3 from "../assets/productCardImages/3.png";
import productImage4 from "../assets/productCardImages/4.png";
import productImage5 from "../assets/productCardImages/5.png";
import productImage6 from "../assets/productCardImages/6.png";
import productImage7 from "../assets/productCardImages/7.png";
import productImage8 from "../assets/productCardImages/8.png";
import productImage9 from "../assets/productCardImages/9.png";
import productImage10 from "../assets/productCardImages/10.png";
import productImage11 from "../assets/productCardImages/11.png";
import productImage12 from "../assets/productCardImages/12.png";
import productImage13 from "../assets/productCardImages/13.png";
import productImage14 from "../assets/productCardImages/14.png";
import productImage15 from "../assets/productCardImages/15.png";
import productImage16 from "../assets/productCardImages/16.png";
import productImage17 from "../assets/productCardImages/17.png";
import productImage18 from "../assets/productCardImages/18.png";
import productImage19 from "../assets/productCardImages/19.png";
import productImage20 from "../assets/productCardImages/20.png";
import productImage21 from "../assets/productCardImages/21.png";
import productImage22 from "../assets/productCardImages/22.png";
import productImage23 from "../assets/productCardImages/23.png";
// import productImage24 from "../assets/productCardImages/24.png"
import productImage28 from "../assets/productCardImages/28.png";
//---------------------//
import uLightPendant1 from "../assets/pageCardImages/ULightPendant/img1.png";
import uLightPendant2 from "../assets/pageCardImages/ULightPendant/img2.png";
import uLightPendant3 from "../assets/pageCardImages/ULightPendant/img3.png";
import uLightPendant4 from "../assets/pageCardImages/ULightPendant/img4.png";
import uLightPendant5 from "../assets/pageCardImages/ULightPendant/img5.png";
import uLightPendant6 from "../assets/pageCardImages/ULightPendant/img6.png";
import uLightPendant7 from "../assets/pageCardImages/ULightPendant/img7.png";
//---------------------//
import uLightWall1 from "../assets/pageCardImages/ULightWall/img1.png";
import uLightWall2 from "../assets/pageCardImages/ULightWall/img2.png";
import uLightWall3 from "../assets/pageCardImages/ULightWall/img3.png";
import uLightWall4 from "../assets/pageCardImages/ULightWall/img4.png";
import uLightWall5 from "../assets/pageCardImages/ULightWall/img5.png";
//---------------------//
import ego1 from "../assets/pageCardImages/Ego/img1.png";
import ego2 from "../assets/pageCardImages/Ego/img2.png";
import ego3 from "../assets/pageCardImages/Ego/img3.png";
import ego4 from "../assets/pageCardImages/Ego/img4.png";
//---------------------//
import palmaWall1 from "../assets/pageCardImages/PalmaWall/img1.png";
import palmaWall2 from "../assets/pageCardImages/PalmaWall/img2.png";
import palmaWall3 from "../assets/pageCardImages/PalmaWall/img3.png";
import palmaWall4 from "../assets/pageCardImages/PalmaWall/img4.png";
import palmaWall5 from "../assets/pageCardImages/PalmaWall/img5.png";
//---------------------//
import palmaTable1 from "../assets/pageCardImages/PalmaTable/img1.png";
import palmaTable2 from "../assets/pageCardImages/PalmaTable/img2.png";
import palmaTable3 from "../assets/pageCardImages/PalmaTable/img3.png";
import palmaTable4 from "../assets/pageCardImages/PalmaTable/img4.png";
import palmaTable5 from "../assets/pageCardImages/PalmaTable/img5.png";
//---------------------//
import link1 from "../assets/pageCardImages/Link/img1.png";
import link2 from "../assets/pageCardImages/Link/img2.png";
import link3 from "../assets/pageCardImages/Link/img3.png";
import link4 from "../assets/pageCardImages/Link/img4.png";
import link5 from "../assets/pageCardImages/Link/img5.png";
//---------------------//
import flat1 from "../assets/pageCardImages/FlatHanging/img1.png";
import flat2 from "../assets/pageCardImages/FlatHanging/img2.png";
import flat3 from "../assets/pageCardImages/FlatHanging/img3.png";
import flat4 from "../assets/pageCardImages/FlatHanging/img4.png";
import flat5 from "../assets/pageCardImages/FlatHanging/img5.png";

export const products = [
  {
    name: "U-light",
    subName: "Pendant",
    id: "0001",
    title: "U-light pendant",
    subtitle: "Подвесная лампа",
    image: [img1],
    cardImage: productImage1,
    price: "00.000 ",
    infoText: [
      <p className="product-text">
        Сочетание геометрических форм создает минималистичный дизайн.
        Отличительной чертой{" "}
        <span className="product-text product-text-dark">U-light</span> является
        кольцеобразная конструкция, в которую в одном из двух подвесных
        вариантов вставлена знаковая арка. Благодаря своему важному, но в то же
        время легкому объему{" "}
        <span className="product-text product-text-dark">U-light</span> может
        динамично заполнять пространство, но не утяжеляя его. Минималистичный
        дизайн, интенсивность освещения и визуальный комфорт делают{" "}
        <span className="product-text product-text-dark">U-light</span> лампой,
        которая может украшать различные архитектурные стили, от домашнего до
        офисного. Благодаря установке акустической панели{" "}
        <span className="product-text product-text-dark">U-light Acquisic</span>{" "}
        также имеет эквивалентную площадь звукопоглощения до 3,11, что позволяет
        снизить уровень шума до 49%.{" "}
        <span className="product-text product-text-dark">U-light</span> был
        удостоен награды «NYCxDESIGN Award 2016» в категории «Освещение» журнала
        «Дизайн интерьера» и ICFF.
      </p>,
    ],
    template: 1,
    pageImage: uLightPendant1,
    pageContentLeft: [
      <img alt="img" src={uLightPendant5} className="temp1-content-img" />,
      <img alt="img" src={uLightPendant3} className="temp1-content-img" />,
      <img alt="img" src={uLightPendant7} className="temp1-content-img" />,
    ],
    pageContentRight: [
      <img alt="img" src={uLightPendant2} className="temp1-content-img" />,
      <img alt="img" src={uLightPendant6} className="temp1-content-img" />,
      <img alt="img" src={uLightPendant4} className="temp1-content-img" />,
    ],
  },
  {
    name: "U-light",
    subName: "Suspension",
    id: "0002",
    title: "U-light suspension",
    subtitle: "Подвесная лампа",
    cardImage: productImage2,
    image: [img2],
    price: "00.000 ",
  },
  {
    name: "U-light",
    subName: "Wall",
    id: "0003",
    title: "U-light Wall",
    subtitle: "Настенная лампа",
    cardImage: productImage3,
    image: [img3],
    price: "00.000 ",
    infoText: [
      <p className="product-text">
        <span className="product-text product-text-dark">U-light</span> в своей
        настенной и потолочной версии отказывается от культовой буквы U в пользу
        классической круглой формы. Кольцо, в структуру которого вставлен
        светодиод, дающий белый теплый свет. Благодаря своему минималистичному
        дизайну <span className="product-text product-text-dark">U-light</span>{" "}
        подходит для разных стилей, персонализируя пространство с большим
        живописным эффектом. Кроме того, благодаря установке акустической панели{" "}
        <span className="product-text product-text-dark">U-light</span> имеет
        Эквивалентную площадь звукопоглощения до 2,49, что позволяет снизить
        уровень шума до 44%.
      </p>,
    ],
    pageImage: uLightWall1,
    pageContentLeft: [
      <img alt="img" src={uLightWall2} className="temp1-content-img" />,
      <img alt="img" src={uLightWall3} className="temp1-content-img" />,
    ],
    pageContentRight: [
      <img alt="img" src={uLightWall4} className="temp1-content-img" />,
      <img alt="img" src={uLightWall5} className="temp1-content-img" />,
    ],
    template: 1,
  },
  {
    name: "Ego",
    subName: null,
    id: "0004",
    title: "Ego",
    subtitle: "Потолочная лампа",
    cardImage: productImage4,
    image: [img4],
    price: "00.000 ",
    infoText: [
      <p className="product-text">
        Полностью изготовленный из натуральной латуни, он представляет собой
        синтез элегантности и индивидуальности.
      </p>,
      <p className="product-text">
        Совершенство используемых линз создает очень впечатляющий и неожиданный
        луч света.
      </p>,
    ],
    pageImage: ego1,
    pageContentLeft: [
      <img alt="img" src={ego2} className="temp1-content-img" />,
      <img alt="img" src={ego3} className="temp1-content-img" />,
    ],
    pageContentRight: [
      <img alt="img" src={ego4} className="temp1-content-img" />,
    ],
    template: 1,
  },
  {
    name: "Match",
    subName: null,
    id: "0005",
    title: "Match",
    subtitle: "Потолочная лампа",
    cardImage: null,
    image: [img5],
    price: "00.000 ",
  },
  {
    name: "Hoops",
    subName: "Ceiling",
    id: "0006",
    title: "Hoops Ceiling",
    subtitle: "Потолочная лампа",
    cardImage: productImage7,
    image: [img6],
    price: "00.000 ",
  },
  {
    name: "Hoops",
    subName: null,
    id: "0007",
    title: "Hoops",
    subtitle: "Подвесная лампа",
    cardImage: productImage6,
    image: [img7],
    price: "00.000 ",
  },
  {
    name: "Wireflow",
    subName: null,
    id: "0008",
    title: "Wireflow",
    subtitle: "Подвесная лампа",
    cardImage: productImage8,
    image: [img8],
    price: "00.000 ",
  },
  {
    name: "Wireflow",
    subName: "Chandelier",
    id: "0009",
    title: "Wireflow Chandelier",
    subtitle: "Подвесная лампа",
    cardImage: productImage9,
    image: [img9],
    price: "00.000 ",
  },
  {
    name: "Wireflow",
    subName: "Lineal",
    id: "0010",
    title: "Wireflow li neal",
    subtitle: "Подвесная лампа",
    cardImage: productImage10,
    image: [img10],
    price: "00.000 ",
  },
  {
    name: "Wireflow",
    subName: "free-form",
    id: "0011",
    title: "Wireflow free-form",
    subtitle: "Подвесная лампа",
    cardImage: productImage11,
    image: [img11],
    price: "00.000 ",
  },
  {
    name: "Duo",
    subName: null,
    id: "0012",
    title: "Duo",
    subtitle: "Потолочная лампа",
    cardImage: productImage12,
    image: [img12],
    price: "00.000 ",
  },
  {
    name: "Palma",
    subName: "Wall",
    id: "0013",
    title: "Palma wall",
    subtitle: "Подвесная лампа",
    cardImage: productImage13,
    image: [img13],
    price: "00.000 ",
    template: 1,
    pageImage: palmaWall1,
    infoText: [
      <p className="product-text">
        Это система освещения, которая вводит дневной свет, обычно связанный с
        растениями на открытом воздухе, в обстановку в помещении.
      </p>,
      <p className="product-text">
        Коллекция Palma также позволяет создавать несколько композиций земного
        шара, вертикальных и горизонтальных, для создания визуальных осей в
        большем масштабе, объединяя растительность. Его также можно использовать
        как индивидуальный глобус. При таком подходе возможны многочисленные
        варианты. Одним из самых инновационных является использование нескольких
        бра для общественных помещений.
      </p>,
    ],
    pageContentLeft: [
      <img alt="img" src={palmaWall2} className="temp1-content-img" />,
      <img alt="img" src={palmaWall3} className="temp1-content-img" />,
    ],
    pageContentRight: [
      <img alt="img" src={palmaWall4} className="temp1-content-img" />,
      <p className="product-text">
        Мы представляем индивидуальный настенный светильник. Его вневременная
        сфера света эволюционирует в сторону органического. Слегка сплющенный,
        как форма Земли, он излучает теплый и регулируемый свет
      </p>,
      <img alt="img" src={palmaWall5} className="temp1-content-img" />,
    ],
  },
  {
    name: "Palma",
    subName: "Hanging",
    id: "0014",
    title: "Palma hanging",
    subtitle: "Настенная лампа",
    cardImage: productImage14,
    image: [img14],
    price: "00.000 ",
  },
  {
    name: "Palma",
    subName: "Table",
    id: "0015",
    title: "Palma table",
    subtitle: "Настольная лампа",
    cardImage: productImage15,
    image: [img15],
    price: "00.000 ",
    infoText: [
      <p className="product-text">
        Дизайн <span className="product-text product-text-dark">Palma</span>{" "}
        снован на элементарных формах, его световые качества выражены теплым
        регулируемым светом. Фильтруется двумя светящимися полусферами из
        выдувного опалового стекла, соединенными алюминиевым кольцом с
        графитовой или белой отделкой.
      </p>,
      <p className="product-text">
        Мы представляем настольную лампу со сферой из дутого стекла, создающей
        теплый световой эффект, который наполняет внутреннее пространство
        обволакивающим светом, одновременно успокаивающим и обнадеживающим.
      </p>,
    ],
    pageImage: palmaTable1,
    pageContentLeft: [
      <img alt="img" src={palmaTable2} className="temp1-content-img" />,
      <img alt="img" src={palmaTable3} className="temp1-content-img" />,
    ],
    pageContentRight: [
      <img alt="img" src={palmaTable4} className="temp1-content-img" />,
      <img alt="img" src={palmaTable5} className="temp1-content-img" />,
    ],
    template: 1,
  },
  {
    name: "Algorithm",
    subName: null,
    id: "0016",
    title: "Algorithm",
    subtitle: "Подвесная лампа",
    cardImage: productImage16,
    image: [img16],
    price: "00.000 ",
  },
  {
    name: "Link",
    subName: null,
    id: "0017",
    title: "Link",
    subtitle: "Потолочная лампа",
    cardImage: productImage17,
    image: [img17],
    price: "00.000 ",
    infoText: [
      <p className="product-text">
        <span className="product-text product-text-dark">Link</span> - это
        коллекция потолочных светильников. Лампы{" "}
        <span className="product-text product-text-dark">Link</span> сочетают в
        себе широкий спектр модулей, различающихся по размеру и количеству
        элементов, чтобы пользователь мог выбрать оптимальный светильник для
        своего дома. Благодаря минималистичному, почти нейтральному дизайну он
        может дополнить любой интерьер.
      </p>,
      <p className="product-text">
        Мы производит светильник{" "}
        <span className="product-text product-text-dark">Link</span> в
        лакированном глянцевом белом и лакированном глянцевом графите.
      </p>,
      <p className="product-text">
        Геометрия как декор...{" "}
        <span className="product-text product-text-dark">Link</span>{" "}
        представляет собой набор заранее сконфигурированных геометрических
        узоров, которые можно расположить на полотне потолка. Эти конфигурации
        имеют неглубокие профили, что делает их идеальными для жилых и
        гостиничных помещений, а также для помещений с низкими потолками.
        Комбинации различных прямоугольных форм создают накладные светильники
        разных размеров, до пяти комбинированных кубистических форм.
      </p>,
    ],
    pageImage: link1,
    pageContentLeft: [
      <img alt="img" src={link2} className="temp1-content-img" />,
      <img alt="img" src={link3} className="temp1-content-img" />,
    ],
    pageContentRight: [
      <img alt="img" src={link4} className="temp1-content-img" />,
      <img alt="img" src={link5} className="temp1-content-img" />,
    ],
    template: 1,
  },
  {
    name: "BuzziShade",
    subName: "Square",
    id: "0018",
    title: "BuzziShade Square",
    subtitle: "Подвесная лампа",
    cardImage: productImage18,
    image: [img18],
    price: "00.000 ",
  },
  {
    name: "BuzziShade",
    subName: null,
    id: "0019",
    title: "BuzziShade",
    subtitle: "Подвесная лампа",
    cardImage: productImage19,
    image: [img19],
    price: "00.000 ",
  },
  {
    name: "BuzziProp",
    subName: null,
    id: "0020",
    title: "BuzziProp",
    subtitle: "Подвесная лампа",
    cardImage: productImage20,
    image: [img20],
    price: "00.000 ",
  },
  {
    name: "BuzziDisk",
    subName: null,
    id: "0021",
    title: "BuzziDisk",
    subtitle: "Подвесная лампа",
    cardImage: productImage21,
    image: [img21],
    price: "00.000 ",
  },
  {
    name: "BuzziTrom",
    subName: null,
    id: "0022",
    title: "BuzziTrom",
    subtitle: "Подвесная лампа",
    cardImage: productImage22,
    image: [img22],
    price: "00.000 ",
  },
  {
    name: "BuzziZepp",
    subName: "Light",
    id: "0023",
    title: "BuzziZepp Light",
    subtitle: "Подвесная лампа",
    cardImage: productImage23,
    image: [img23],
    price: "00.000 ",
  },
  // {
  //   name: "BuzziZepp",
  //   subName: "Light",
  //   id: "0024",
  //   title: "BuzziZepp Light",
  //   subtitle: "Подвесная лампа",
  //   cardImage: productImage24,
  //   image: [img24],
  //   price: "00.000 ",
  // },
  {
    name: "Flat",
    subName: "Hanging",
    id: "0028",
    title: "Flat Hanging",
    subtitle: "Подвесная лампа",
    cardImage: productImage28,
    image: [img28],
    price: "00.000 ",
    infoText: [
      <p className="product-text">
        Подвесные светильники{" "}
        <span className="product-text product-text-dark">Flat</span> выполнены в
        виде металлических плоскостей, расположенных на разной высоте. Они
        отражают свет от своих поверхностей, излучая обволакивающее свечение.
        Подвесные светильники, подвешенные к потолку на кабеле, изящны, но
        поразительно графичны, словно парят над головой.
      </p>,
      <p className="product-text">
        Диски света спускаются с потолка, образуя подвесной светильник, где
        плоскости отраженного света сливаются с архитектурой. Все модели
        коллекции <span className="product-text product-text-dark">Flat</span>{" "}
        оснащены светодиодным освещением и доступны в различных нейтральных
        тонах. Отрегулируйте высоту при установке
      </p>,
    ],
    pageImage: flat1,
    pageContentLeft: [
      <img alt="img" src={flat2} className="temp1-content-img" />,
      <img alt="img" src={flat3} className="temp1-content-img" />,
    ],
    pageContentRight: [
      <img alt="img" src={flat4} className="temp1-content-img" />,
      <img alt="img" src={flat5} className="temp1-content-img" />,
    ],
    template: 1,
  },
];
