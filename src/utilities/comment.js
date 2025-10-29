"use strict";

import { encodings } from "necessary";

import { repoFromRepository, ownerFromRepository } from "../utilities/repository";
import { getRequest, postRequest, patchRequest, deleteRequest } from "../utilities/request";
import { GITHUB_REPOS_URI, GITHUB_ISSUES_URI, GITHUB_COMMENTS_URI, GITHUB_ISSUES_COMMENTS_URI } from "../uris";

const { UTF_8_ENCODING } = encodings;

export function commentsGetRequest(repository, issueNumber, userAgent, clientId, clientSecret, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}/${issueNumber}${GITHUB_COMMENTS_URI}`,
        query = {};

  getRequest(uri, query, userAgent, clientId, clientSecret, callback);
}

export function editCommentPatchRequest(repository, description, commentIdentifier, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_COMMENTS_URI}/${commentIdentifier}`,
        encoding = UTF_8_ENCODING,
        query = {};

  let body = description; ///

  body = JSON.stringify({ ///
    body,
    encoding
  });

  patchRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

export function createCommentPostRequest(repository, description, issueNumber, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_URI}/${issueNumber}${GITHUB_COMMENTS_URI}`,
        encoding = UTF_8_ENCODING,
        query = {};

  let body = description; ///

  body = JSON.stringify({ ///
    body,
    encoding
  });

  postRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

export function removeCommentDeleteRequest(repository, commentIdentifier, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_ISSUES_COMMENTS_URI}/${commentIdentifier}`,
        query = {};

  deleteRequest(uri, query, userAgent, gitHubAccessToken, callback);
}

export default {
  commentsGetRequest,
  editCommentPatchRequest,
  createCommentPostRequest,
  removeCommentDeleteRequest
};