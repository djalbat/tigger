"use strict";

const { asynchronousUtilities } = require("necessary");

const getIssuesOperation = require("../operation/getIssues");

const { sequence } = asynchronousUtilities;

function issuesHandler(context) {
  const operations = [
          getIssuesOperation
        ],
        state = "open";

  Object.assign(context, {
    state
  });

  sequence(operations, () => {
    ///
  }, context);
}

module.exports = issuesHandler;
