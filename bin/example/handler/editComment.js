"use strict";

const { asynchronousUtilities } = require("necessary");

const getIssueOperation = require("../operation/getIssue"),
      getCommentsOperation = require("../operation/getComments"),
      editCommentOperation = require("../operation/editComment");

const { sequence } = asynchronousUtilities;

function editCommentHandler(context) {
  const operations = [
          editCommentOperation,
          getIssueOperation,
          getCommentsOperation
        ],
        issueNumber = 1,
        description = "...",
        commentIdentifier = 123;

  Object.assign(context, {
    description,
    issueNumber,
    commentIdentifier
  });

  sequence(operations, () => {
    debugger
  }, context);
}

module.exports = editCommentHandler;
