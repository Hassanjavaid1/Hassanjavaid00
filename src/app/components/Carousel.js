import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";

function Carousel(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="h-[55vh] w-full text-center rounded-xl m-auto lg:h-[90vh] lg:py-4 lg:bg-gray-400">
        <Slider {...settings}>
          {props.Images?.map((img, indx) => (
            <Image
              src={img}
              alt={props.title}
              key={img}
              width={300}
              height={300}
              unoptimized
              priority
              className="h-[50vh] object-cover object-top m-auto lg:!h-[86vh] lg:!w-fit lg:max-w-[100%] lg:!min-w-[50%] lg:rounded-none"
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
