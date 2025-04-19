import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={`/image-Jannat.png`}
        // src={`/avatar1.png`}
        // src={`/avatar.jpeg`}
        height={678}
        width={737}
        alt="image"
        className="translate-z-0 h-full w-full"
      />
    </div>
  );
};
//avatar.jpeg
export default Avatar;
