import React from 'react';

const ReviewsContext = React.createContext();

function reviewsReducer(state, action) {
  switch (action.type) {
    case 'delete': {
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.name !== action.review.name)
      };
    }
    case 'set': {
      return {
        ...state,
        reviews: action.review
      };
    }
    case 'add': {
      return {
        ...state,
        reviews: [...state.reviews, action.review]
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ReviewsProvider({ children }) {
  const initialReviews = {
    reviews: [
    ],
    setReviews: () => { }
  };
  const [state, reviewDispatch] = React.useReducer(reviewsReducer, initialReviews);

  const value = { state, reviewDispatch };

  return (
    <ReviewsContext.Provider value={value}>
      {children}
    </ReviewsContext.Provider>
  );
}

function useReviews() {
  const context = React.useContext(ReviewsContext);
  if (context === undefined) {
    throw new Error('useReviewsDispatch must be used within a ReviewsProvider');
  }
  return context;
}

export { ReviewsProvider, useReviews };
