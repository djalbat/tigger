"use strict";

const { asynchronousUtilities } = require("necessary");

const getIssueOperation = require("../operation/getIssue"),
      alterIssueOperation = require("../operation/alterIssue"),
      getCommentsOperation = require("../operation/getComments");

const { sequence } = asynchronousUtilities;

function alterIssueHandler(context) {
  const operations = [
          alterIssueOperation,
          getIssueOperation,
          getCommentsOperation
        ],
        state = "closed",
        issueNumber = 1;

  Object.assign(context, {
    state,
    issueNumber
  });

  sequence(operations, () => {
    ///
  }, context);
}

module.exports = alterIssueHandler;
