"use strict";

const { asynchronousUtilities } = require("necessary");

const getIssueOperation = require("../operation/getIssue"),
      editIssueOperation = require("../operation/editIssue"),
      getCommentsOperation = require("../operation/getComments");

const { sequence } = asynchronousUtilities;

function editIssueHandler(context) {
  const operations = [
          editIssueOperation,
          getIssueOperation,
          getCommentsOperation
        ],
        title = "...",
        issueNumber = 1,
        description = "...";

  Object.assign(context, {
    title,
    description,
    issueNumber
  });

  sequence(operations, () => {
    ///
  }, context);
}

module.exports = editIssueHandler;
