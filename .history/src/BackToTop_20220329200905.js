import PropTypes from "prop-types";
const BackToTop = ({ onClick }) => {
  return (
    <button onClick={scrollToTop} className="back-to-top ">
      <img className="arrowimg" src={arrow} alt="submit" />
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default BackToTop;
