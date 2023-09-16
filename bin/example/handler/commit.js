"use strict";

const { asynchronousUtilities } = require("necessary");

const postCommitSHAOperation = require("../operation/postCommitSHA"),
      getBaseTreeSHAOperation = require("../operation/getBaseTreeSHA"),
      postUpdatedHeadOperation = require("../operation/postUpdatedHead"),
      postCommitTreeSHAOperation = require("../operation/postCommitTreeSHA"),
      getLatestCommitSHAOperation = require("../operation/getLatestCommitSHA"),
      postReadmeFileContentOperation = require("../operation/postReadmeFileContent"),
      postMetaJSONFileContentOperation = require("../operation/postMetaJSONFileContent");

const { sequence } = asynchronousUtilities;

function commitHandler(context) {
  const commitMessage = "...",
        readmeFilePath = "...",
        metaJSONFilePath = "...",
        readmeFileContent = "...",
        metaJSONFileContent = "...",
        operations = [
          getLatestCommitSHAOperation,
          getBaseTreeSHAOperation,
          postReadmeFileContentOperation,
          postMetaJSONFileContentOperation,
          postCommitTreeSHAOperation,
          postCommitSHAOperation,
          postUpdatedHeadOperation
        ];

  Object.assign(context, {
    commitMessage,
    readmeFilePath,
    metaJSONFilePath,
    readmeFileContent,
    metaJSONFileContent
  });

  sequence(operations, () => {
    ///
  }, context);
}

module.exports = commitHandler;
