import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rides = [
  [
    {
      name: "G Fall",
      href: "/rides/hyderabad/rides/g-fall",
      location: "Hyderabad",
      description:
        "Brace yourself for a heart-pounding, high-speed plunge into a dizzying freefall!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/G_Fall_480p_54a0131d48.mp4",
    },
    {
      name: "Wonderla Bamba",
      href: "/rides/bhubaneswar/rides/wonderla-bamba",
      location: "Bhubaneswar",
      description:
        "Perfect for first time thrill-seekers, this takes you on a spin with sudden drops and bursts of speed that will leave you wanting more!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Wonderla_Bamba_480p.mp4",
    },
    {
      name: "Space Gun",
      href: "/rides/kochi/rides/space-gun",
      location: "Kochi",
      description:
        "See the world upside-down, dangling from high up above the ground!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Space_Gun_480p_a91b755b34.mp4",
    },
    {
      name: "Recoil",
      href: "/rides/bengaluru/rides/recoil",
      location: "Bengaluru",
      description: `India's first-ever action-packed reverse looping roller coaster ride!`,
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Recoil_480p_dd3c781929.mp4",
    },
    {
      name: "Hyperverse",
      href: "/rides/hyderabad/rides/hyperverse",
      location: "Hyderabad",
      description:
        "Get transported to another world as you soar through a breathtaking 3D metaverse!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Hyperverse_480p_c539001b46.mp4",
    },
    {
      name: "Mission Interstellar",
      href: "/rides/bengaluru/rides/mission-interstellar",
      location: "Bengaluru",
      description:
        "Blast through cosmic chaos on a wild, out-of-this-world space ride!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/MI_3s_V_5_MB_8572eacf1a.mp4",
    },
  ],
  [
    {
      name: "Water Pendulum",
      href: "/rides/kochi/rides/water-pendulum",
      location: "Kochi",
      description:
        "Hold on tight as you glide up and down on a water tube across a U-shaped slide!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Water_Pendulam_480p_53805faa9e.mp4",
    },
    {
      name: "Drop Loop",
      href: "/rides/bengaluru/rides/drop-loop",
      location: "Bengaluru",
      description:
        "Slide down a sky-high slope, twist through a loop and make a splashy exit!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Drop_Loop_480p_604a9571a6.mp4",
    },
    {
      name: "Sea Lagoon",
      href: "/rides/hyderabad/rides/sea-lagoon",
      location: "Hyderabad",
      description:
        "Get soaked, splashed and sprayed in this thrilling pool paradise!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Sea_Lagoon_480p_072171123b.mp4",
    },
    {
      name: "Wave Pool",
      href: "/rides/bhubaneswar/rides/wave-pool",
      location: "Bhubaneswar",
      description:
        "Experience the bliss of waves washing over you, far away from the sea.",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Wave_Pool_1_480p_7ff2c460ac.mp4",
    },
    {
      name: "Korneto",
      href: "/rides/kochi/rides/korneto",
      location: "Kochi",
      description:
        "Slide, swirl and splash through a whirling vortex on this slippery ride!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Korneto_480p_76298a8b68.mp4",
    },
  ],
  [
    {
      name: "Happy Kangaroo",
      href: "/rides/kochi/rides/happy-kangaroo",
      location: "Kochi",
      description:
        "Plummet into a safe freefall with a tall & cheerful kangaroo!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Happy_Kangaroo_480p_d24bd08f2f.mp4",
    },
    {
      name: "Mini Coco Cup",
      href: "/rides/bengaluru/rides/mini-coco-cup",
      location: "Bengaluru",
      description:
        "Spin around in a gigantic cup placed on a rotating turntable floor!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Mini_Coco_Cup_480p_1a7bd75ee8.mp4",
    },
    {
      name: "Carousel",
      href: "/rides/hyderabad/rides/carousel",
      location: "Hyderabad",
      description: "Gallop around on colourful horses like a seasoned cowboy!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Carousel_480p_85c91d1be3.mp4",
    },
    {
      name: "Crazy Cars",
      href: "/rides/bhubaneswar/rides/crazy-cars",
      location: "Bhubaneswar",
      description: `Dash and crash into your friends' cars in your very own Formula 1 circuit!`,
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Crazy_Car_480p_c70c8a223b.mp4",
    },
    {
      name: "Pony Train",
      href: "/rides/kochi/rides/pony-train",
      location: "Kochi",
      description:
        "Hop onto a chariot-pulled pony ride through the world of fantasy!",
      videoUrl:
        "https://d22pimhl2qmbj7.cloudfront.net/public/Pony_Train_480p_6eb01f2b42.mp4",
    },
  ],
];

interface ArrowProps {
  onClick?: () => void;
  className?: string;
}

const RidesCarousel = ({ activeCategory = 0 }) => {
  const [currentCategory, setCurrentCategory] = useState(activeCategory);
  const sliderRef = useRef(null);

  const PrevArrow = ({ onClick }: ArrowProps) => (
    <button
      className="absolute top-[-70px] right-[60px] z-10 w-11 h-11 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none shadow-md"
      onClick={onClick}
    >
      <ChevronLeft className="text-gray-900" size={22} />
    </button>
  );

  const NextArrow = ({ onClick }: ArrowProps) => (
    <button
      className="absolute top-[-70px] right-0 z-10 w-11 h-11 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none shadow-md"
      onClick={onClick}
    >
      <ChevronRight className="text-gray-900" size={22} />
    </button>
  );

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoPlaySpeed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: "cubic-bezier(0.45, 0, 0.55, 1)",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const currentRides = rides[currentCategory] || rides[0];

  useEffect(() => {
    setCurrentCategory(activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full bg-[#22304a] py-8 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-5xl font-bold mb-14 text-white tracking-wide ml-4">
          OUR ICONIC RIDES
        </h2>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {currentRides.map((ride, index) => (
              <div key={index} className="px-3 h-full">
                <div className="overflow-hidden rounded-lg relative h-full shadow-xl ride-card bg-gray-900">
                  <div className="aspect-[3/5] relative overflow-hidden rounded-lg">
                    <video
                      src={ride.videoUrl}
                      muted
                      loop
                      autoPlay
                      playsInline
                      poster="/api/placeholder/480/270"
                      className="w-full h-full object-cover"
                      onMouseEnter={(e) => e.currentTarget.play()}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-xl font-bold mb-1">{ride.name}</h3>
                        <p className="text-sm text-gray-300 mb-1">
                          {ride.location}
                        </p>
                        <p className="text-sm line-clamp-3 mb-5 opacity-80">
                          {ride.description}
                        </p>

                        <a
                          href={ride.href}
                          className="inline-block w-full bg-yellow-400 text-black font-semibold text-sm px-4 py-2 rounded hover:bg-yellow-500 transition text-center"
                        >
                          RIDE DETAILS
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/rides"
            className="bg-yellow-400 text-black px-10 py-3 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors shadow-md"
          >
            Explore All Rides!
          </a>
        </div>
      </div>
    </div>
  );
};

export default RidesCarousel;
