"use strict";

const { arrayUtilities } = require("necessary");

const { second } = arrayUtilities;

const repoRegularExpression = /([^\/]+)$/,
      ownerRegularExpression = /([^\/]+)\/[^\/]+$/;

function isRepositoryValid(repository) {
  const repoPresent = repoRegularExpression.test(repository),
        ownerPresent = ownerRegularExpression.test(repository),
        repositoryValid = (repoPresent && ownerPresent);

  return repositoryValid;
}

function repoFromRepository(repository) {
  const matches = repository.match(repoRegularExpression),
        secondMatch = second(matches),
        repo = secondMatch; ///

  return repo;
}

function ownerFromRepository(repository) {
  const matches = repository.match(ownerRegularExpression),
        secondMatch = second(matches),
        owner = secondMatch; ///

  return owner;
}

module.exports = {
  isRepositoryValid,
  repoFromRepository,
  ownerFromRepository
};

