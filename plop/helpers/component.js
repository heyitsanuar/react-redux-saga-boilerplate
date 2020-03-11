function componentGenerator(plop) {
    const SIMPLE_COMPONENT = {
        type: 'add',
        path: 'src/{{path}}/{{dashCase name}}.component.tsx',
        templateFile: 'plop/templates/component/simple-component.hbs',
    };
    
    const JSS_COMPONENT = {
        type: 'add',
        path: 'src/{{path}}/{{dashCase name}}.component.tsx',
        templateFile: 'plop/templates/component/jss-component.hbs',
    };
    
    const SASS_COMPONENT = {
        type: 'add',
        path: 'src/{{path}}/{{dashCase name}}.component.tsx',
        templateFile: 'plop/templates/component/sass-component.hbs',
    };
    
    const SASS_STYLES = {
        type: 'add',
        path: 'src/{{path}}/{{dashCase name}}.styles.scss',
        templateFile: 'plop/templates/component/scss-styles.hbs',
    };
    
    const JSS_SASS_COMPONENT = {
        type: 'add',
        path: 'src/{{path}}/{{dashCase name}}.component.tsx',
        templateFile: 'plop/templates/component/sass-jss-component.hbs',
    };
    
    plop.setGenerator('component', {
        description: 'Create a funtional component',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                type: 'input',                
                name: 'name',
                message: 'Whats the name of your component?',
            },
            {
                type: 'list',
                choices: ['Simple component', 'Folder - With SASS Styles', 'Folder - With JSS styles', 'Folder - With SASS and JSS styles.'],
                name: 'type',
                message: 'What type of component do you want to create?',
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
                case 'Folder - With SASS Styles':
                    actions.push(SASS_COMPONENT);
                    actions.push(SASS_STYLES);
                    break;     
                case 'Folder - With JSS styles':
                    actions.push(JSS_COMPONENT);
                    break;
                case 'Folder - With SASS and JSS styles.':
                    actions.push(JSS_SASS_COMPONENT);
                    actions.push(SASS_STYLES);
                    break;                      
                case 'Simple component':
                default:
                    actions.push(SIMPLE_COMPONENT);
            }

            return actions;
        }
    });
};

module.exports = {
    componentGenerator
};