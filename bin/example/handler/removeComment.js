"use strict";

const { asynchronousUtilities } = require("necessary");

const getIssueOperation = require("../operation/getIssue"),
      getCommentsOperation = require("../operation/getComments"),
      removeCommentOperation = require("../operation/removeComment");

const { sequence } = asynchronousUtilities;

function removeCommentHandler(context) {
  const operations = [
          removeCommentOperation,
          getIssueOperation,
          getCommentsOperation
        ],
        issueNumber = 1,
        commentIdentifier = 123;

  Object.assign(context, {
    issueNumber,
    commentIdentifier
  });

  sequence(operations, () => {
    ///
  }, context);
}

module.exports = removeCommentHandler;
