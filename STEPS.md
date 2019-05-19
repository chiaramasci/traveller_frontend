npm i redux --save-dev

CREATE STORE
mkdir -p src/js/store

creation of src/js/store/index.js
here the store is created with createStore(reducer). Reducers produce the state of the application; store stores the state of the application.

creation of the rootReducer
mkdir -p src/js/reducers
touch src/js/reducers/index.js

reducers: Javascript functions -> current state, action
action: Javascript object (wrapped up in function) that "changes" a state
{
type: \_**\_,
payload: {\_\_**}
}
Depending on the action type, the reducer will produce the next state. It is better to have action types declared as constants

create actions
mkdir -p src/js/actions
touch src/js/actions/index.js

create action types
mkdir -p src/js/constants
create src/js/constants/action-types.js

Reducer take actions and states and originates a new state.
For this reason it has to check which action type is it and do what it has to do accordingly.
Therefore we need to add something like this:

function rootReducer(state = initialState, action) {
if (action.type === ADD_ARTICLE) {
state.articles.push(action.payload); //action to be done
}
return state;
}

IMMUTABILITY ISSUE: we have to originate a new state, not to modify the current one!
function rootReducer(state = initialState, action) {
if (action.type === ADD_ARTICLE) {
return Object.assign({}, state, {
articles: state.articles.concat(action.payload)
});
}
return state;
}

REACT STORE METHODS
getState -> access current state
dispatch -> ask for an action
subscribe -> listen state changes

We have to export as global the actions and the store (they needed for the previous list of actions).

Export:
create file js/index.js
and import it in src/index.js

TEST IT
npm start

In the console:
store.getState()
store.subscribe(() => console.log('Look ma, Redux!!')) //we have added a callback that is triggered whenever an action is dispatched
store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )

AJAX
-> redux-thunk
npm i redux-thunk --save-dev

and import it in the store
