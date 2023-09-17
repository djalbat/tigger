# Tigger

Takes the fun out of using the GitHub API.

This package provides utility functions to handle issues and comments as well as commits to the GitHub API. There are also a few more or less trivial functions for dealing with repository URLs that are used internally and may as well be exposed for the small amount of utility they may offer. 

The issues and comments utility functions are more or less comprehensive. On the other hand the commit utility functions are less so, but nonetheless adequate in simple use cases. There are also examples to get you started and that may help to debunk the use of the commit endpoints especially. 

* [Issue utilities](#issue-utilities)
* [Comment utilities](#comment-utilities)
* [Commit utilities](#commit-utilities)
* [Repository utilities](#repository-utilities)

## Installation

With [npm](https://www.npmjs.com/):

    npm install tigger

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/tigger.git

...then install the dependencies with npm from within the project's root directory:

    npm install

You will need to clone the repository if you want to run the examples.

## Usage

Each of the collections of utility functions is exported as a plain old JavaScript object. To get hold of them, require the requisite object and then destructure it:

```
const { issueUtilities, repositoryUtilities } = require("tigger");

const { isRepositoryValid } = repositoryUtilities,
      { editIssuePatchRequest } = issueUtilities;

...
```

You will need certain information to hand in order to call the utility functions that interact with the GitHub API. This includes your GitHub application's client identifier and secret as well as an access token for anything other than `GET` requests. This is typically recovered via an OAuth flow, which is beyond of the scope of this package. Lastly, a user agent string is required as this must be passed to all of the GitHub endpoints. GitHub recommend that this is either a username or the application's name.

Utility functions for issues and comments that make `GET` requests all follow along similar lines. They take `repository`, `userAgent`, `clientId`, `clientSecret` and `callback` arguments, amongst possibly others. The callback should be a function accepting `error` and `json` arguments:

```
function getIssuesOperation(next, done, context) {
  const { repository, state, userAgent, clientId, clientSecret } = context;

  issuesGetRequest(repository, state, userAgent, clientId, clientSecret, (error, json) => {
    if (error) {
      done();
    
      return;
    }
    
    const { message = null } = json;
    
    if (message !== null) {
      done();
      
      return;
    }
    
    const issues = json;  ///
    
    Object.assign(context, {
      issues
    });
    
    next();
  });
}
```

Utility functions for issues and comments that make `POST` and `PATCH` requests all follow along similar lines. They take `repository`, `userAgent`, `gitHubAccessToken` and `callback` arguments, amongst possibly others. The callback should again be a function accepting `error` and `json` arguments:

```
function createIssueOperation(next, done, context) {
  const { repository, title, description, userAgent, gitHubAccessToken } = context;

  createIssuePostRequest(repository, title, description, userAgent, gitHubAccessToken, (error, json) => {
    if (error) {
      done();

      return;
    }

    const { message = null } = json;

    if (message !== null) {
      done();

      return;
    }

    const { number } = json,
          issueNumber = number; ///

    Object.assign(context, {
      issueNumber
    });

    next();
  });
}
```

There is one utility functions for issues and comments that makes a `DELETE` request. It takes `repository`, `userAgent`, `gitHubAccessToken` and `callback` arguments, amongst possibly others. The callback should be a function accepting `error` and `string` arguments this time:

```
function removeCommentOperation(next, done, context) {
  const { repository, commentIdentifier, userAgent, gitHubAccessToken } = context;

  removeCommentDeleteRequest(repository, commentIdentifier, userAgent, gitHubAccessToken, (error, string) => {
    if (error) {
      done();

      return;
    }

    if (string !== "") {
      done();

      return;
    }

    next();
  });
}
```

In the above listings, as per the examples, the function invocations are shown inside of asynchronous operations that take `next()` and `done()` callback arguments as well as a `context` argument. This is not the only way they can be invoked, of course, but bear in mind that all of the utility functions take callbacks and must be invoked in some such way.

The JSON that is returned is exactly that returned by the requisite GitHub endpoint, by the way. 

## Issue utilities

- `issuesGetRequest()`
- `issueGetRequest()`
- `createIssuePostRequest()`
- `editIssuePatchRequest()`
- `alterIssuePatchRequest()`

Functions for handling issues.

* The `issuesGetRequest()` function [lists repository issues](https://docs.github.com/en/free-pro-team@latest/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues).   

* The `issueGetRequest()` function [gets an issue](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#get-an-issue). It takes an additional `issueNumber` argument.

* The `createIssuePostRequest()` function [creates an issue](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue). It takes additional `issueNumber`, `title` and `description` arguments.

* The `editIssuePatchRequest()` function [updates an issue](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue) 's title and description. It takes additional `issueNumber`, `title` and `description` arguments.

* The `alterIssuePatchRequest()` function [updates an issue](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue) 's state. It takes additional `issueNumber` and`stage` arguments.

## Comment utilities

- `commentsGetRequest()`
- `createCommentPostRequest()`
- `editCommentPatchRequest()`
- `removeCommentDeleteRequest()`

* The `commentsGetRequest()` function [lists issue comments](https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#list-issue-comments-for-a-repository). It takes an additional `issueNumber` argument.

* The `createCommentPostRequest()` function [creates a comment](https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#create-an-issue-comment). It takes an additional `issueNumber`  and `description` arguments.

* The `editCommentPatchRequest()` function [updates a comment](https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#update-an-issue-comment) 's description. It a `commentIdentifier` and  `description` arguments.

* The `removeCommentDeleteRequest()` function [removes a comment](https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#delete-an-issue-comment) 's state. It takes additional `commentIdentifier` argument.

## Commit utilities

- `commitSHAPostRequest()`
- `baseTreeSHAGetRequest()`
- `updatedHeadPostRequest()`
- `commitTreeSHAPostRequest()`
- `contentBlobSHAPostRequest()`
- `latestCommitSHAGetRequest()`



## Contact

- james.smith@djalbat.com
