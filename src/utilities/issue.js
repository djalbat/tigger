"use strict";

import { encodings } from "necessary";

import { GITHUB_REPOS_URI, GITHUB_ISSUES_URI } from "../uris";
import { getRequest, postRequest, patchRequest } from "../utilities/request";
import { repoFromRepository, ownerFromRepository } from "../utilities/repository";

const { UTF_8_ENCODING } = encodings;

export function issueGetRequest(repository, issueNumber, userAgent, clientId, clientSecret, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}/${issueNumber}?`,
        query = {};

  getRequest(uri, query, userAgent, clientId, clientSecret, callback);
}

export function issuesGetRequest(repository, state, userAgent, clientId, clientSecret, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}`,
        query = {
          state
        };

  getRequest(uri, query, userAgent, clientId, clientSecret, callback);
}

export function editIssuePatchRequest(repository, title, description, issueNumber, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}/${issueNumber}`,
        encoding = UTF_8_ENCODING,
        query = {};

  let body = description; ///

  const json = {
        body,
          title,
          encoding
        },
        jsonString = JSON.stringify(json);

  body = jsonString;  ///

  patchRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

export function alterIssuePatchRequest(repository, state, issueNumber, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        encoding = UTF_8_ENCODING,
        json = {
          state,
          encoding
        },
        jsonString = JSON.stringify(json),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}/${issueNumber}`,
        query = {},
        body = jsonString;  ///

  patchRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

export function createIssuePostRequest(repository, title, description, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}`,
        encoding = UTF_8_ENCODING,
        query = {};

  let body = description; ///

  const json = {
        body,
          title,
          encoding
        },
        jsonString = JSON.stringify(json);

  body = jsonString;  ///

  postRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

export default {
  issueGetRequest,
  issuesGetRequest,
  editIssuePatchRequest,
  alterIssuePatchRequest,
  createIssuePostRequest
};
