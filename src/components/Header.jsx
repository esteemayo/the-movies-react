import PropTypes from "prop-types";

const Header = ({ heading }) => {
  return (
    <div className="col">
      <h1>{heading}</h1>
    </div>
  );
};

Header.defaultProps = {
  heading: "Movies",
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Header;
