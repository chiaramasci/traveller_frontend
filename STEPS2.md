REACT-REDUX
connect : link redux store to React Component

mapStateToProps : links redux state to props of React Component
mapDispatchToProps : links redux actions to props of React Component

Provider
in src/index.js -> store becomes a prop of the App

In Component (getState)
mapStateToProps:

const mapStateToProps = state => {
return { articles: state.articles }; //name of state in component (articles) and name of state in store (state.articles)
};

const List = connect(mapStateToProps)(ConnectedList);
and export List

In Component (dispatch State)
...

MIDDLEWARE (kinda controllers)
mkdir -p src/js/middleware and index.js file in it

return next(action); //lets action pass !IMPORTANT TO KEEP

import the middleware in the store (src/js/store/index.js) and use applyMiddleware function
