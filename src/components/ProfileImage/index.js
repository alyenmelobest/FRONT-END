import UserImage from "../../assets/user.jpeg";
import * as C from "./styles";

export const ProfileImage = ({ image, width, height }) => {
  return (
    <C.ImageProfile
      src={image || UserImage}
      alt="user image"
      width={width}
      height={height}
    />
  );
};