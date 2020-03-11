const SIMPLE_CONTAINER = {
    type: 'add',
    path: 'src/{{path}}/{{dashCase name}}.container.tsx',
    templateFile: 'plop/templates/container/simple-container.hbs',
};

const FULL_REDUX_CONTAINER = {
    type: 'add',
    path: 'src/{{path}}/{{dashCase name}}.container.tsx',
    templateFile: 'plop/templates/container/full-redux-container.hbs',
};

const MAP_STATE_CONTAINER = {
    type: 'add',
    path: 'src/{{path}}/{{dashCase name}}.container.tsx',
    templateFile: 'plop/templates/container/map-state-container.hbs',
};

const MAP_DISPATCH_CONTAINER = {
    type: 'add',
    path: 'src/{{path}}/{{dashCase name}}.container.tsx',
    templateFile: 'plop/templates/container/map-dispatch-container.hbs',
};

const SELECTOR = {
    type: 'add',
    path: 'src/{{path}}/{{dashCase name}}.selectors.ts',
    templateFile: 'plop/templates/container/selectors.hbs',
};

const REDUCER = {
    type: 'add',
    path: 'src/{{path}}/{{dashCase name}}.reducer.ts',
    templateFile: 'plop/templates/container/reducer.hbs',
};

function containerGenerator(plop) {
    
    plop.setGenerator('container', {
        description: 'Create a container component',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                type: 'input',                
                name: 'name',
                message: 'Whats the name of your container?',
            },
            {
                type: 'list',
                choices: ['Simple container', 'Folder - Full State Container', 'Folder - Map State Container', 'Folder - Map Dispatch Container.'],
                name: 'type',
                message: 'What type of container do you want to create?',
            },
            {
                type: 'input',                
                name: 'path',
                message: 'What path do you want?',
            },
        ],
        actions: data => {
            let actions = [];

            switch(data.type) {
                case 'Folder - Map Dispatch Container.':
                    actions.push(MAP_DISPATCH_CONTAINER);
                    actions.push(REDUCER);
                    break;     
                case 'Folder - Map State Container':
                    actions.push(MAP_STATE_CONTAINER);
                    actions.push(SELECTOR);
                    break;
                case 'Folder - Full State Container':
                    actions.push(FULL_REDUX_CONTAINER);
                    actions.push(SELECTOR);
                    actions.push(REDUCER);
                    break;                      
                case 'Simple container':
                default:
                    actions.push(SIMPLE_CONTAINER);
            }

            return actions;
        }
    });
};

module.exports = {
    containerGenerator
};