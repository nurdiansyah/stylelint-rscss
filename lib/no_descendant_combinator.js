'use strict'

const walkSelectors = require('./helpers/walk_selectors')
const stylelint = require('stylelint')
const expr = require('./helpers/expr')

const ruleName = 'rscss/no-descendant-combinator'

const messages = stylelint.utils.ruleMessages(ruleName, {
  expected (selector) {
    return `Descendant combinator not allowed: '${selector.toString().trim()}'`
  }
})

function plugin (primaryOption, secondaryOption) {
  return (root, result) => {
    if (!primaryOption || primaryOption === 'never') return

    walkSelectors(root, (rule, selector) => {
      var isCombinatorElement = false
      for (let i = 0, len = selector.nodes.length; i < len; i++) {
        const part = selector.nodes[i]
        if (part.type === "combinator" && part.value === ' ') {
          isCombinatorElement = true
        } else {
          if (isCombinatorElement) {
            isCombinatorElement = false
            if (expr['element'].test(part.value)){
              stylelint.utils.report({
                message: messages.expected(selector),
                node: rule,
                result,
                ruleName
              })
              return
            }
          }
        }
      }
    })
  }
}

/*
 * Export
 */

module.exports = stylelint.createPlugin(ruleName, plugin)
