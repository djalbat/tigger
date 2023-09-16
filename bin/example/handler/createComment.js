"use strict";

const { asynchronousUtilities } = require("necessary");

const getIssueOperation = require("../operation/getIssue"),
      getCommentsOperation = require("../operation/getComments"),
      createCommentOperation = require("../operation/createComment");

const { sequence } = asynchronousUtilities;

function createCommentHandler(context) {
  const operations = [
          createCommentOperation,
          getIssueOperation,
          getCommentsOperation
        ],
        issueNumber = 1,
        description = "...";

  Object.assign(context, {
    description,
    issueNumber
  });

  sequence(operations, () => {
    ///
  }, context);
}

module.exports = createCommentHandler;
