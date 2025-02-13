import { Image } from "antd";
function ImageComponent({ width, height, image }) {
  return (
    <>
      <Image width={width} height={height} src={image} />
    </>
  );
}

export default ImageComponent;
