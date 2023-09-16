"use strict";

const { asynchronousUtilities } = require("necessary");

const getIssueOperation = require("../operation/getIssue"),
      getCommentsOperation = require("../operation/getComments");

const { sequence } = asynchronousUtilities;

function issueHandler(context) {
  const operations = [
          getIssueOperation,
          getCommentsOperation
        ],
        issueNumber = 1;

  Object.assign(context, {
    issueNumber
  });

  sequence(operations, () => {
    ///
  }, context);
}

module.exports = issueHandler;
