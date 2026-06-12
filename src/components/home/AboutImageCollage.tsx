import Image from "next/image";

const images = {
  main: {
    src: "/images/about-education.jpg",
    alt: "Children learning through education programs",
  },
  bottomLeft: {
    src: "/images/about-volunteers.jpg",
    alt: "Volunteers helping community members",
  },
  topRight: {
    src: "/images/about-community.jpg",
    alt: "Community members united for change",
  },
};

export default function AboutImageCollage() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[380px] sm:h-[380px] sm:max-w-[420px]">
      {/* Main — center */}
      <div className="absolute left-1/2 top-[52%] z-10 h-[230px] w-[210px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-lg ring-4 ring-white sm:h-[250px] sm:w-[230px]">
        <Image
          src={images.main.src}
          alt={images.main.alt}
          fill
          className="object-cover"
          sizes="250px"
        />
      </div>

      {/* Bottom-left — donations */}
      <div className="absolute bottom-0 left-0 z-20 h-[140px] w-[130px] overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:h-[155px] sm:w-[145px]">
        <Image
          src={images.bottomLeft.src}
          alt={images.bottomLeft.alt}
          fill
          className="object-cover"
          sizes="155px"
        />
      </div>

      {/* Top-right — community */}
      <div className="absolute right-0 top-0 z-20 h-[135px] w-[125px] overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:h-[150px] sm:w-[140px]">
        <Image
          src={images.topRight.src}
          alt={images.topRight.alt}
          fill
          className="object-cover"
          sizes="150px"
        />
      </div>
    </div>
  );
}
