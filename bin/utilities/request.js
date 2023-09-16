"use strict";

const { Readable } = require("stream"),
      { methods, requestUtilities } = require("necessary");

const { END, DATA, EMPTY_STRING, GITHUB_API_HOST } = require("../constants"),
      { headersFromUserAgentAndGitHubAccessToken, headersFromUserAgentClientIdAndClientSecret } = require("../utilities/headers");

const { createRequest } = requestUtilities,
      { GET_METHOD, POST_METHOD, DELETE_METHOD, PATCH_METHOD } = methods;

function getRequest(uri, query, userAgent, clientId, clientSecret, callback) {
  const host = GITHUB_API_HOST,
        method = GET_METHOD,
        headers = headersFromUserAgentClientIdAndClientSecret(userAgent, clientId, clientSecret),
        request = createRequest(host, uri, query, method, headers, (error, response) => {
          contentFromResponse(response, (content) => {
            const jsonString = content,  ///
                  json = JSON.parse(jsonString);

            callback(error, json);
          });
        });

  request.end();
}

function postRequest(uri, query, content, userAgent, gitHubAccessToken, callback) {
  const host = GITHUB_API_HOST,
        method = POST_METHOD,
        headers = headersFromUserAgentAndGitHubAccessToken(userAgent, gitHubAccessToken),
        postRequest = createRequest(host, uri, query, method, headers, (error, response) => {
          contentFromResponse(response, (content) => {
            const jsonString = content,  ///
                  json = JSON.parse(jsonString);

            callback(error, json);
          });
        }),
        readable = Readable.from(content);

  readable.pipe(postRequest);
}

function patchRequest(uri, query, content, userAgent, gitHubAccessToken, callback) {
  const host = GITHUB_API_HOST,
        method = PATCH_METHOD,
        headers = headersFromUserAgentAndGitHubAccessToken(userAgent, gitHubAccessToken),
        postRequest = createRequest(host, uri, query, method, headers, (error, response) => {
          contentFromResponse(response, (content) => {
            const jsonString = content,  ///
                  json = JSON.parse(jsonString);

            callback(error, json);
          });
        }),
        readable = Readable.from(content);

  readable.pipe(postRequest);
}

function deleteRequest(uri, query, userAgent, gitHubAccessToken, callback) {
  const host = GITHUB_API_HOST,
        method = DELETE_METHOD,
        headers = headersFromUserAgentAndGitHubAccessToken(userAgent, gitHubAccessToken),
        deleteRequest = createRequest(host, uri, query, method, headers, (error, response) => {
          contentFromResponse(response, (content) => {
            const string = content;  ///

            callback(error, string);
          });
        });

  deleteRequest.end();
}

module.exports = {
  getRequest,
  postRequest,
  patchRequest,
  deleteRequest
};

function contentFromResponse(response, callback) {
  let content = EMPTY_STRING;

  response.on(DATA, (data) => {
    content += data;
  });

  response.on(END, () => {
    callback(content);
  });
}
