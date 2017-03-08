// import { connect } from 'react-redux';
// import React from 'react';
// import Items from '../components/Items.jsx';
// import {setStatusToInactive} from '../reducers/item.jsx';
// import axios from 'axios';



// //import {createReview, gettingItemReviews} from '../reducers/admin.jsx';


// const mapStateToProps = (state, ownProps) => {
//   return {
//     itemList: state.item.itemList,
//     selectedItem: state.item.selectedItem,
//     auth: state.auth,
//     reviews: state.reviews,
//     user: state.user
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setStatusToInactive: (itemId) => {
//       dispatch(setStatusToInactive(itemId));
//     }
//   };
// };


// class AdminItemContainer extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       categories: []
//     };
//   }
//     //this.props.getReviews(this.props.selectedItem.id);


//   componentDidMount() {
//     //Get categories for filter
//     axios.get('/api/category')
//     .then(res => res.data)
//     .then(categories => this.setState({categories: categories}))
//     .catch(err => console.error(err));
//   }

//   handleReview(evt) {
//     evt.preventDefault();

//     const description = evt.target.description.value;
//     const rating = evt.target.rating.value;
//     const item_id = this.props.selectedItem.id;
//     const subject_id = this.props.selectedItem.seller.id;
//     const reviewer_id = this.props.user.id;

//     const reviewObj = {
//       description,
//       rating,
//       item_id,
//       subject_id,
//       reviewer_id
//     };

//     this.props.createReview(reviewObj);

//   }

//   render() {
//     console.log(this.props);
//     return (
//     <div>
//       {this.props.auth && this.props.auth.admin ?
//         <div>
//         <Items setStatusToInactive={this.props.setStatusToInactive} categories={this.state.categories} />
//         </div>
//       :
//       <div>
//         <h1> ADMINS ONLY </h1>
//       </div>
//       }
//     </div>
//     );
//   }

// }

// export default connect(mapStateToProps, mapDispatchToProps)(AdminItemContainer);
