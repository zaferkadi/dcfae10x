module.exports = {
    "extends": ["eslint:recommended", "standard", "standard-react"],
    "env": {
        "react-native/react-native": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "es6": true,
        },
        "sourceType": "module"
    },
    "plugins": [
        "babel",
        "react",
        "react-native"
    ],
    "rules": {
        "react/jsx-no-bind": ["error", {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: false,
            ignoreDOMComponents: true,
          }],
        "lines-between-class-members": ["error", "always"],
        'react/jsx-wrap-multilines': ['error', {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
          }],
        "react/prop-types": 0,
        "padded-blocks": ["error", {"classes":"always", "blocks": "always"}],
        "react/self-closing-comp": "error",
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-closing-tag-location': 'error'

    }
};


// "react/jsx-wrap-multilines": ["error", {"declaration": "parens"}],
//         "react/prop-types": ["error", "always"],