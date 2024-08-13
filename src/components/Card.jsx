import PropTypes from "prop-types";

const Card = ({ children, borderBottomColor }) => {
    return (
        <div
            className={`bg-white shadow-md border border-gray-300 rounded-lg p-5 mb-5 ${
                borderBottomColor
                    ? `border-b-4 ${borderBottomColor}`
                    : "border-b-4 border-primary"
            }`}
        >
            {children}
        </div>
    );
};

// Definindo validação de propriedades usando PropTypes
Card.propTypes = {
    children: PropTypes.node.isRequired,
    borderBottomColor: PropTypes.string,
};

export default Card;
