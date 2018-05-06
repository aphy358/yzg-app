

const redux_actions = require('redux-actions')

createAction = redux_actions.createAction

var a = createAction('testAction', () => {
    return 'dff';
})

debugger;