const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created ', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        case 'DELETE_PROJECT':
            console.log('deleted ', action.project);
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.log('delete project error', action.err);
            return state;
        case 'EDIT_PROJECT':
            console.log('edited ', action.project);
            return state;
        case 'EDIT_PROJECT_ERROR':
            console.log('edit project error', action.err);
            return state;
        default:
            return state;
    }
  
};

export default projectReducer;