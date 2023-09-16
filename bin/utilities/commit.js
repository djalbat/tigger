"use strict";

const { encodings } = require("necessary");

const { BLOB_MODE, BLOB_TYPE } = require("../constants"),
      { getRequest, postRequest } = require("../utilities/request"),
      { repoFromRepository, ownerFromRepository } = require("../utilities/repository"),
      { GITHUB_REPOS_URI, GITHUB_GIT_TREES_URI, GITHUB_GIT_BLOBS_URI, GITHUB_GIT_COMMITS_URI, GITHUB_GIT_REFS_HEADS_MASTER_URI } = require("../uris");

const { UTF_8_ENCODING } = encodings;

function commitSHAPostRequest(repository, commitMessage, commitTreeSHA, latestCommitSHA, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_GIT_COMMITS_URI}`,
        tree = commitTreeSHA, ///
        parent = latestCommitSHA, ///
        parents = [
          parent
        ],
        message = commitMessage,  ///
        query = {},
        body = JSON.stringify({
          tree,
          parents,
          message
        });

  postRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

function baseTreeSHAGetRequest(repository, latestCommitSHA, userAgent, clientId, clientSecret, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_GIT_COMMITS_URI}/${latestCommitSHA}`,
        query = {};

  getRequest(uri, query, userAgent, clientId, clientSecret, callback);
}

function updatedHeadPostRequest(repository, commitSHA, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_GIT_REFS_HEADS_MASTER_URI}`,
        sha = commitSHA,  ///
        query = {},
        body = JSON.stringify({
          sha
        });

  postRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

function commitTreeSHAPostRequest(repository, baseTreeSHA, fileSHAs, filePaths, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_GIT_TREES_URI}`,
        base_tree = baseTreeSHA,  ///
        tree = [],
        mode = BLOB_MODE, ///
        type = BLOB_TYPE; ///

  fileSHAs.forEach((fileSHA, index) => {
    const filePath = filePaths[index],
          sha = fileSHA, ///
          path = filePath;  ///

    tree.push({
      sha,
      mode,
      type,
      path
    });
  });

  const query = {},
        body = JSON.stringify({
          base_tree,
          tree
        });

  postRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

function latestCommitSHAGetRequest(repository, userAgent, clientId, clientSecret, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_GIT_REFS_HEADS_MASTER_URI}`,
        query = {};

  getRequest(uri, query, userAgent, clientId, clientSecret, callback);
}

function contentBlobSHAPostRequest(repository, content, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_GIT_BLOBS_URI}`,
        encoding = UTF_8_ENCODING, ///
        query = {},
        body = JSON.stringify({
          content,
          encoding
        })

  postRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

module.exports = {
  commitSHAPostRequest,
  baseTreeSHAGetRequest,
  updatedHeadPostRequest,
  commitTreeSHAPostRequest,
  contentBlobSHAPostRequest,
  latestCommitSHAGetRequest
};
