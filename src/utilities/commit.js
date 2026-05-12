"use strict";

import { encodings } from "necessary";

import { BLOB_MODE, BLOB_TYPE } from "../constants";
import { getRequest, postRequest } from "../utilities/request";
import { repoFromRepository, ownerFromRepository } from "../utilities/repository";
import { GITHUB_REPOS_URI, GITHUB_GIT_TREES_URI, GITHUB_GIT_BLOBS_URI, GITHUB_GIT_COMMITS_URI, GITHUB_GIT_REFS_HEADS_MASTER_URI } from "../uris";

const { UTF_8_ENCODING } = encodings;

export function commitSHAPostRequest(repository, commitMessage, commitTreeSHA, latestCommitSHA, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        tree = commitTreeSHA, ///
        parent = latestCommitSHA, ///
        parents = [
          parent
        ],
        message = commitMessage,  ///
        json = {
          tree,
          parents,
          message
        },
        jsonString = JSON.stringify(json),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_GIT_COMMITS_URI}`,
        query = {},
        body = jsonString;  ///

  postRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

export function baseTreeSHAGetRequest(repository, latestCommitSHA, userAgent, clientId, clientSecret, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_GIT_COMMITS_URI}/${latestCommitSHA}`,
        query = {};

  getRequest(uri, query, userAgent, clientId, clientSecret, callback);
}

export function updatedHeadPostRequest(repository, commitSHA, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        sha = commitSHA,  ///
        json = {
          sha
        },
        jsonString = JSON.stringify(json),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_GIT_REFS_HEADS_MASTER_URI}`,
        query = {},
        body = jsonString;  ///

  postRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

export function commitTreeSHAPostRequest(repository, baseTreeSHA, fileSHAs, filePaths, userAgent, gitHubAccessToken, callback) {
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
        json = {
          base_tree,
          tree
        },
        jsonString = JSON.stringify(json),
        body = jsonString;  ///

  postRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

export function latestCommitSHAGetRequest(repository, userAgent, clientId, clientSecret, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_GIT_REFS_HEADS_MASTER_URI}`,
        query = {};

  getRequest(uri, query, userAgent, clientId, clientSecret, callback);
}

export function contentBlobSHAPostRequest(repository, content, userAgent, gitHubAccessToken, callback) {
  const owner = ownerFromRepository(repository),
        repo = repoFromRepository(repository),
        encoding = UTF_8_ENCODING, ///
        json = {
          content,
          encoding
        },
        jsonString = JSON.stringify(json),
        uri = `${GITHUB_REPOS_URI}/${owner}/${repo}${GITHUB_GIT_BLOBS_URI}`,
        query = {},
        body = jsonString;  ///

  postRequest(uri, query, body, userAgent, gitHubAccessToken, callback);
}

export default {
  commitSHAPostRequest,
  baseTreeSHAGetRequest,
  updatedHeadPostRequest,
  commitTreeSHAPostRequest,
  latestCommitSHAGetRequest,
  contentBlobSHAPostRequest
};
