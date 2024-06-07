import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import image1 from "../../images/section2&3/image1.png";
const FeaturedProducts = () => {
  return (
    <div className="bg-white">
      <div className="flex h-10 items-center pl-24">
        <span
          className="font-semibold text-3xl uppercase"
          style={{ fontFamily: "Poppins" }}
        >
          Featured Products
        </span>
      </div>
      <HorizontalScrollCarousel cards={featuredCards} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1.6], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.slice(0, 7).map((card) => {
            return <Card card={card} key={card.id} />;
          })}
          <AllProductsCard />
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[400px] overflow-hidden bg-light-green"
    >
      <div
        style={{}}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      >
        <img src={card.url} alt="" />
      </div>
      <div className="">
        <p className="">{card.title}</p>
      </div>
      <button className="absolute bottom-0">allproduct</button>
    </div>
  );
};

const AllProductsCard = () => {
  return (
    <div className=" group relative h-[400px] w-[200px] overflow-hidden  flex items-center justify-center">
      <div className="absolute inset-0 z-0 "></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <p className="text-xl font-black uppercase text-white bg-custom-green p-2 rounded-xl">
          All Products
        </p>
      </div>
    </div>
  );
};

export default FeaturedProducts;

const featuredCards = [
  {
    url: image1,
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
];
