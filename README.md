# Tigger

Takes the fun out of using the GitHub API.

This package provides utility functions to handle issues and comments as well as commits to the GitHub API. There are also a few more or less trivial functions for dealing with repository URLs that are used internally and may as well be exposed for the small amount of utility they may offer. 

The issues and comments utility functions are more or less comprehensive. On the other hand the commit utility functions are less so, but nonetheless adequate in simple use cases. There are also examples to get you started and that may help to debunk the use of the commit endpoints especially. 

* [Issue utilities](#issue-utilities)
* [Comment utilities](#comment-utilities)
* [Repository utilities](#repository-utilities)
* [Commit utilities](#commit-utilities)

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

There is one utility function for issues and comments that makes a `DELETE` request. It takes `repository`, `userAgent`, `gitHubAccessToken` and `callback` arguments, amongst possibly others. The callback should be a function accepting `error` and `string` arguments this time:

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

The utility functions relating to commits follow along entirely similar lines although the arguments differ. They are covered more extensively in the examples section later on.

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

* The `createIssuePostRequest()` function [creates an issue](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue). It takes additional `title` and `description` arguments.

* The `editIssuePatchRequest()` function [updates an issue](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue)'s title and description. It takes additional `issueNumber`, `title` and `description` arguments.

* The `alterIssuePatchRequest()` function [updates an issue](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue)'s state. It takes additional `issueNumber` and`state` arguments.

## Comment utilities

- `commentsGetRequest()`
- `createCommentPostRequest()`
- `editCommentPatchRequest()`
- `removeCommentDeleteRequest()`

Functions for handling comments.
* 
* The `commentsGetRequest()` function [lists issue comments](https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#list-issue-comments-for-a-repository). It takes an additional `issueNumber` argument.

* The `createCommentPostRequest()` function [creates a comment](https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#create-an-issue-comment). It takes an additional `issueNumber`  and `description` arguments.

* The `editCommentPatchRequest()` function [updates a comment](https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#update-an-issue-comment)'s description. It takes additional `commentIdentifier` and  `description` arguments.

* The `removeCommentDeleteRequest()` function [removes a comment](https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#delete-an-issue-comment). It takes an additional `commentIdentifier` argument.

## Repository utilities

- `isRepositoryValid()`
- `repoFromRepository()`
- `ownerFromRepository()`

Functions for dealing with a repository string.

* The `isRepositoryValid()` function returns true if the repository URL string is valid, specifically if the repository's name and owner can be recovered from it.

* The `repoFromRepository()` function returns true if the repository's name, called the `repo` by GibHub, can be recovered.

* The `ownerFromRepository()` function returns true if the repository's owner can be recovered.

## Commit utilities

- `latestCommitSHAGetRequest()`
- `baseTreeSHAGetRequest()`
- `contentBlobSHAPostRequest()`
- `(commitTreeSHAPostRequest)`
- `commitSHAPostRequest()`
- `updatedHeadPostRequest()`

Functions for handling commits. No corresponding links to GitHub API documentation are provided alongside the function descriptions because the process of committing via the GitHub API and therefore the relevant documentation is somewhat convoluted. See the examples section later on for further explanations. 

* The `latestCommitSHAGetRequest()` function gets the latest commit SHA.

* The `baseTreeSHAGetRequest()` function gets the base tree SHA.

* The `contentBlobSHAPostRequest()` posts some content then returns the corresponding SHA.

* The `commitTreeSHAPostRequest()` posts SHAs and file paths the returns the commit tree SHA.

* The `commitSHAPostRequest()` posts the commit tree SHA and returns the commit SHA.

* The `updatedHeadPostRequest()` posts the commit SHA in order to update the head.

## Examples

These consist of a number of so-called handler functions that are meant to be broadly akin to the kinds of handler functions needed by frameworks such as Node's Express. Rather than taking request and response objects as arguments, however, they take a `context` object as their single argument. This must be populated with, amongst other things, your application's client credentials together with an access token. As mentioned already, the access token would typically be retrieved by way of an OAuth flow. 

There is an `example.js` file in this repository's `bin` directory. You should fill the aforementioned values of the `context` object there and then call whichever handler function interests you.

Tha handler functions all make use of the `sequencee()` asynchronous utility function provided by the [Necessary](https://github.com/djalbat/necessary) package. The idea is to show that several of the utility functions can and sometimes should called sequentially albeit asynchronously. Each is wrapped in what we call an operation, namely a function that takes the context together with some callback functions as arguments, in order to provide the required asynchronous behaviour. 

Tha handler functions fall into two categories, namely issue and comment handlers and a commit handler. The issue and comment handlers are more or less vacuous and simply demonstrate the point that there are occassions when more than one of the issue and comment utility functions should be called in the course of a single handler's execution. See the `removeCommentHandler()` function For an example of a non-trivial handler. We focus on the commit handler from now on. Here is the listing:

```
function commitHandler(context) {
  const commitMessage = "...",
        readmeFilePath = "...",
        metaJSONFilePath = "...",
        readmeFileContent = "...",
        metaJSONFileContent = "...",
        operations = [
          getLatestCommitSHAOperation,
          getBaseTreeSHAOperation,
          postReadmeFileContentOperation,
          postMetaJSONFileContentOperation,
          postCommitTreeSHAOperation,
          postCommitSHAOperation,
          postUpdatedHeadOperation
        ];

  Object.assign(context, {
    commitMessage,
    readmeFilePath,
    metaJSONFilePath,
    readmeFileContent,
    metaJSONFileContent
  });

  sequence(operations, () => {
    ///
  }, context);
}
```

We now walk through a simple use case of committing two files to a repository:

1. Get the SHA of the latest commit to the repository. If it becomes outdated then then the commit in progress will fail. The GitHub endpoint in question is `/git/refs/heads/master`.
2. Get a base tree SHA. This base tree is the structure to which the files in the commit will be added. This step often confuses because it might not seem necessary to create this on the server via an endpoint prior to use. The corresponding GitHub endpoint is `/git/commits`.
3. Post the file contents. Two files are spoofed in this example. When each file's content is posted a SHA is returned. It should be clear that such as approach will not scale. The endpoint is `/git/blobs`.
4. Post the two file content SHAs together with their corresponding file paths. A commit tree SHA is returned. The endpoint is `/git/trees`.
5. Post the commit tree SHA together with the latest commit SHA. A commit SHA is returned. The endpoint is `/git/commits`.
6. Finally, update the repository's head by posting the commit SHA. The endpoint is `/git/refs/heads/master`.

Perhaps the best thing to say about this process is that it begins to make sense as familiarity grows.

As an aside, it is likely that there will be some interaction with a database as well as with the GitHub API in the course of any handler's execution and therefore it might be worth looking at the [Murmuration](https://github.com/djalbat/murmuration) package. In fact the example handlers and operations were originally based on functions written to work with this package.

## Contact

- james.smith@djalbat.com
