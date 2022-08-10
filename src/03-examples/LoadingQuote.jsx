import PropTypes from "prop-types";

export const LoadingQuote = ({isLoading}) => {

    if (isLoading) {
        return (
      
      
      <div className="alert alert-info text-center">
          Loading...
      </div>

      
        )


    } else {
        return;
    }

}

LoadingQuote.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}