'use stric'

var exprDefault = {
    component: /^([a-z][a-z0-9]*)(-([a-z][a-z0-9]*))+$/,
    'pascal-case': /^([A-Z][a-z0-9]*)+$/,
    'camel-case': /^([a-z][a-z0-9]*)([A-Z][a-z0-9]*)+$/,
    element: /^([a-z][a-z0-9]*)$/,
    variant: /^(-[a-z0-9]+)(-[a-z0-9]+)*$/,
    helper: /^_([a-z][a-z0-9\-]*)$/
}

module.exports = exprDefault;
