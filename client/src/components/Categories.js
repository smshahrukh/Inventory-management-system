import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getCategories } from '../actions/categoryActions.js'
import PropTypes from 'prop-types';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categories: []
    };
  }


  componentDidMount() {
    this.props.getCategories();
  }

  componentDidUpdate(prevProps) {
    if (this.props.categories !== prevProps.categories) // Check if it's a new categories, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      this.props.getCategories();
    }
  } 

  render() {
    const { error, isLoaded, categories } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        console.log(categories);
          return (
            <Container>
                <ListGroup>
                  {
                    categories.map((category) => (
                    <ListGroupItem>
                      {category.name}
                    </ListGroupItem>
                  ))
                }
                </ListGroup>
            </Container>
          )
              }
  }
}

Categories.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

Categories.defaultProps = {
  categories: []
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => {
      dispatch(getCategories())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
