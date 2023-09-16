"use strict";

const issueHandler = require("./example/handler/issue"),
      issuesHandler = require("./example/handler/issues"),
      commitHandler = require("./example/handler/commit"),
      editIssueHandler = require("./example/handler/editIssue"),
      alterIssueHandler = require("./example/handler/alterIssue"),
      createIssueHandler = require("./example/handler/createIssue"),
      editCommentHandler = require("./example/handler/editComment"),
      createCommentHandler = require("./example/handler/createComment"),
      removeCommentHandler = require("./example/handler/removeComment");

const clientId = "...",
      userAgent = "...",
      repository = "...",
      clientSecret = "...",
      gitHubAccessToken = "...",
      context = {
        clientId,
        userAgent,
        repository,
        clientSecret,
        gitHubAccessToken
      };
