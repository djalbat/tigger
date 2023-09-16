"use strict";

const { encodings } = require("necessary");

const { GITHUB_REPOS_URI, GITHUB_ISSUES_URI } = require("../uris"),
      { getRequest, postRequest, patchRequest } = require("../utilities/request"),
      { repoFromRepository, ownerFromRepository } = require("../utilities/repository");

const { UTF_8_ENCODING } = encodings;

function issueGetRequest(repository, issueNumber, userAgent, clientId, clientSecret, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}/${issueNumber}?`,
        query = {};

  getRequest(uri, query, userAgent, clientId, clientSecret, callback);
}

function issuesGetRequest(repository, state, userAgent, clientId, clientSecret, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}`,
        query = {
          state
        };

  getRequest(uri, query, userAgent, clientId, clientSecret, callback);
}

function editIssuePatchRequest(repository, title, description, issueNumber, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}/${issueNumber}`,
        encoding = UTF_8_ENCODING,
        query = {};

  let body = description; ///

  body = JSON.stringify({ ///
    body,
    title,
    encoding
  });

  patchRequest(uri, query, body, gitHubAccessToken, callback);
}

function alterIssuePatchRequest(repository, state, issueNumber, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}/${issueNumber}`,
        encoding = UTF_8_ENCODING,
        query = {},
        body = JSON.stringify({ ///
          state,
          encoding
        });

  patchRequest(uri, query, body, gitHubAccessToken, callback);
}

function createIssuePostRequest(repository, title, description, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}`,
        encoding = UTF_8_ENCODING,
        query = {};

  let body = description; ///

  body = JSON.stringify({ ///
    body,
    title,
    encoding
  });

  postRequest(uri, query, body, gitHubAccessToken, callback);
}

module.exports = {
  issueGetRequest,
  issuesGetRequest,
  editIssuePatchRequest,
  alterIssuePatchRequest,
  createIssuePostRequest
};
