import statusImage1 from "../assets/image/status1.webp";
import statusImage2 from "../assets/image/status2.webp";
import statusImage3 from "../assets/image/status3.webp";
import statusImage4 from "../assets/image/status4.webp";
import statusImage5 from "../assets/image/status5.webp";
import statusImage6 from "../assets/image/status6.webp";

export const getIcon = (num) => {
  switch (num) {
    case 1:
      return <img src={statusImage1} alt={1} />;
    case 2:
      return <img src={statusImage2} alt={2} />;
    case 3:
      return <img src={statusImage3} alt={3} />;
    case 4:
      return <img src={statusImage4} alt={4} />;
    case 5:
      return <img src={statusImage5} alt={5} />;
    case 6:
      return <img src={statusImage6} alt={6} />;
    default:
      return;
  }
};
