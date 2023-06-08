import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://picsum.photos/seed/a/1600/900" },
  { url: "https://picsum.photos/seed/b/1920/1080" },
  { url: "https://picsum.photos/seed/c/1366/768" },
];

const ImageSlide = () => {
  return (
    <div className="">
      <SimpleImageSlider
       className=""
        width={1000}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
};

export default ImageSlide;
