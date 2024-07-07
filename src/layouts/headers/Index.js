import DefaultHeader from "./DefaultHeader";
import Header2 from "./Header2";
import Header3 from "./Header3";

const Header = ({ header, darkHeader, cartButton }) => {
  switch (header) {
    case 1:
      return (
        <DefaultHeader
          darkHeader={darkHeader}
          cartButton={cartButton}
        />
      );
    
    case 2:
      return (
        <Header2
          darkHeader={darkHeader}
          cartButton={cartButton}
        />
      );

    case 3:
      return (
        <Header3 
          darkHeader={darkHeader}
          cartButton={cartButton}
        />
      );

    default:
      return (
        <DefaultHeader
          darkHeader={darkHeader}
          cartButton={cartButton}
        />
      );
  }
};
export default Header;
