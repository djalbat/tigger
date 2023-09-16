# Tigger

Takes the fun out of using the GitHub API.

This package provides utility functions to handle issues and comments as well as commits to the GitHub API. There are also a few more or less trivial functions for dealing with repository URLs that are used internally and may as well be exposed for the small amount of utility they may offer. 

The issues and comments utility functions are more or less comprehensive. On the other hand the commit utility functions are less so, but nonetheless adequate in simple use cases. There are also examples to get you started and that may help to debunk the use of the commit endpoints especially. 

* [Commit utilities](#commit-utilities)
* [Issue utilities](#issue-utilities)
* [Comment utilities](#comment-utilities)
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

Each of the collections of utility functions described below is exported as a plain old JavaScript object. To get hold of them, require the requisite object and then destructure it:

Or the `require()` function can be used where appropriate:

```
const { issueUtilities, repositoryUtilities } = require("tigger");

const { isRepositoryValid } = repositoryUtilities,
      { editIssuePatchRequest } = issueUtilities;

...
```

You will need certain information to hand in order to call the utility functions that interact with the GitHub API. This includes your GitHub application's client identifier and secret as well as an access token for anything other than `GET` requests. This is typically recovered via an OAuth flow, which is beyond of the scope of this package. Lastly, a user agent string is required as this must be passed to all of the GitHub endpoints. GitHub recommend that this is either a username or the application's name.

## Contact

- james.smith@djalbat.com
