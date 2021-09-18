/**
 * @fileoverview 校验todo注释,防止临时性的代码推送到仓库
 * @author L
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "校验todo注释,防止临时性的代码推送到仓库",
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [
      {
        type: "string",
      },
    ], // Add a schema if the rule has options
  },

  create(context) {
    const sourceCode = context.getSourceCode();
    const comments = sourceCode.getAllComments() || [];

    const rule = context.options[0] || "todo:";
    let reg = new RegExp(rule, "gim");

    const todoComments = comments.filter((ele) => reg.test(ele.value));

    todoComments.forEach((node) => {
      context.report({
        node,
        message: `请先完成 ${rule}`,
      });
    });

    return {
      // visitor functions for different types of nodes
    };
  },
};
