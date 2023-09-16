"use strict";

const { asynchronousUtilities } = require("necessary");

const getIssueOperation = require("../operation/getIssue"),
      createIssueOperation = require("../operation/createIssue");

const { sequence } = asynchronousUtilities;

function createIssueHandler(context) {
  const operations = [
          createIssueOperation,
          getIssueOperation
        ],
        title = "...",
        description = "...";

  Object.assign(context, {
    title,
    description
  });

  sequence(operations, () => {
    ///
  }, context);
}

module.exports = createIssueHandler;
