"use strict";

const { headers, encodings } = require("necessary");

const { APPLICATION_VND_GITHUB_VS_JSON } = require("../constants");

const { BASE64_ENCODING } = encodings,
      { ACCEPT_HEADER, USER_AGENT_HEADER, CONTENT_TYPE_HEADER, AUTHORIZATION_HEADER } = headers;

function headersFromUserAgentAndGitHubAccessToken(userAgent, gitHubAccessToken) {
  const tokenAuthorization = `Token ${gitHubAccessToken}`,
        accept = APPLICATION_VND_GITHUB_VS_JSON,  ///
        contentType = APPLICATION_VND_GITHUB_VS_JSON,  ///
        authorization = tokenAuthorization,  ///
        headers = {
          [ ACCEPT_HEADER ]: accept,
          [ USER_AGENT_HEADER ]: userAgent,
          [ CONTENT_TYPE_HEADER ]: contentType,
          [ AUTHORIZATION_HEADER ]: authorization
        };

  return headers;
}

function headersFromUserAgentClientIdAndClientSecret(userAgent, clientId, clientSecret) {
  const digest = `${clientId}:${clientSecret}`,
        encodedDigest = Buffer.from(digest).toString(BASE64_ENCODING),
        basicAuthorization = `Basic ${encodedDigest}`,
        accept = APPLICATION_VND_GITHUB_VS_JSON,  ///
        authorization = basicAuthorization,	///
        headers = {
          [ ACCEPT_HEADER ]: accept,
          [ USER_AGENT_HEADER ]: userAgent,
          [ AUTHORIZATION_HEADER ]: authorization
        };

  return headers;
}

module.exports = {
  headersFromUserAgentAndGitHubAccessToken,
  headersFromUserAgentClientIdAndClientSecret
};
