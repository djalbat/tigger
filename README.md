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

Use of utility functions for issues and comments that make `GET` requests all follow along similar lines. They take, amongst possibly others, `repository`, `userAgent`, `clientId`, `clientSecret` and `callback` arguments. The callback should be a function accepting `error` and `json` arguments:

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

In the above listing, as per the examples, the `issuesGetRequest()` function invocation is shown inside of an asynchronous operation that takes `next()` and `done()` callback argument as well as a `context` argument. This may not be preferred, however bear in mind that all of the utility functions take callbacks and must be invoked in some such way. The JSON that is returned is exactly that returned by the requisite GitHub endpoint, by the way. 

## Issue utilities

- `issuesGetRequest()`
- `issueGetRequest()`
- `editIssuePatchRequest()`
- `alterIssuePatchRequest()`
- `createIssuePostRequest()`

Functions for handling issues.

* The `issuesGetRequest()` function [lists repository issues](https://docs.github.com/en/free-pro-team@latest/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues).   

## Commit utilities

- `commitSHAPostRequest()`
- `baseTreeSHAGetRequest()`
- `updatedHeadPostRequest()`
- `commitTreeSHAPostRequest()`
- `contentBlobSHAPostRequest()`
- `latestCommitSHAGetRequest()`



## Contact

- james.smith@djalbat.com
