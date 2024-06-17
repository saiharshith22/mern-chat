import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const Title = ({
  title = "Chit Chat",
  description = "Connect, chat and share instantly",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
Title.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
export default Title;
