"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get alterIssuePatchRequest () {
        return alterIssuePatchRequest;
    },
    get createIssuePostRequest () {
        return createIssuePostRequest;
    },
    get default () {
        return _default;
    },
    get editIssuePatchRequest () {
        return editIssuePatchRequest;
    },
    get issueGetRequest () {
        return issueGetRequest;
    },
    get issuesGetRequest () {
        return issuesGetRequest;
    }
});
var _necessary = require("necessary");
var _uris = require("../uris");
var _request = require("../utilities/request");
var _repository = require("../utilities/repository");
var UTF_8_ENCODING = _necessary.encodings.UTF_8_ENCODING;
function issueGetRequest(repository, issueNumber, userAgent, clientId, clientSecret, callback) {
    var owner = (0, _repository.ownerFromRepository)(repository), repo = (0, _repository.repoFromRepository)(repository), uri = "".concat(_uris.GITHUB_REPOS_URI, "/").concat(owner, "/").concat(repo).concat(_uris.GITHUB_ISSUES_URI, "/").concat(issueNumber, "?"), query = {};
    (0, _request.getRequest)(uri, query, userAgent, clientId, clientSecret, callback);
}
function issuesGetRequest(repository, state, userAgent, clientId, clientSecret, callback) {
    var owner = (0, _repository.ownerFromRepository)(repository), repo = (0, _repository.repoFromRepository)(repository), uri = "".concat(_uris.GITHUB_REPOS_URI, "/").concat(owner, "/").concat(repo).concat(_uris.GITHUB_ISSUES_URI), query = {
        state: state
    };
    (0, _request.getRequest)(uri, query, userAgent, clientId, clientSecret, callback);
}
function editIssuePatchRequest(repository, title, description, issueNumber, userAgent, gitHubAccessToken, callback) {
    var owner = (0, _repository.ownerFromRepository)(repository), repo = (0, _repository.repoFromRepository)(repository), uri = "".concat(_uris.GITHUB_REPOS_URI, "/").concat(owner, "/").concat(repo).concat(_uris.GITHUB_ISSUES_URI, "/").concat(issueNumber), encoding = UTF_8_ENCODING, query = {};
    var body = description; ///
    body = JSON.stringify({
        body: body,
        title: title,
        encoding: encoding
    });
    (0, _request.patchRequest)(uri, query, body, userAgent, gitHubAccessToken, callback);
}
function alterIssuePatchRequest(repository, state, issueNumber, userAgent, gitHubAccessToken, callback) {
    var owner = (0, _repository.ownerFromRepository)(repository), repo = (0, _repository.repoFromRepository)(repository), uri = "".concat(_uris.GITHUB_REPOS_URI, "/").concat(owner, "/").concat(repo).concat(_uris.GITHUB_ISSUES_URI, "/").concat(issueNumber), encoding = UTF_8_ENCODING, query = {}, body = JSON.stringify({
        state: state,
        encoding: encoding
    });
    (0, _request.patchRequest)(uri, query, body, userAgent, gitHubAccessToken, callback);
}
function createIssuePostRequest(repository, title, description, userAgent, gitHubAccessToken, callback) {
    var owner = (0, _repository.ownerFromRepository)(repository), repo = (0, _repository.repoFromRepository)(repository), uri = "".concat(_uris.GITHUB_REPOS_URI, "/").concat(owner, "/").concat(repo).concat(_uris.GITHUB_ISSUES_URI), encoding = UTF_8_ENCODING, query = {};
    var body = description; ///
    body = JSON.stringify({
        body: body,
        title: title,
        encoding: encoding
    });
    (0, _request.postRequest)(uri, query, body, userAgent, gitHubAccessToken, callback);
}
var _default = {
    issueGetRequest: issueGetRequest,
    issuesGetRequest: issuesGetRequest,
    editIssuePatchRequest: editIssuePatchRequest,
    alterIssuePatchRequest: alterIssuePatchRequest,
    createIssuePostRequest: createIssuePostRequest
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaXNzdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVuY29kaW5ncyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgR0lUSFVCX1JFUE9TX1VSSSwgR0lUSFVCX0lTU1VFU19VUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuaW1wb3J0IHsgZ2V0UmVxdWVzdCwgcG9zdFJlcXVlc3QsIHBhdGNoUmVxdWVzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcmVxdWVzdFwiO1xuaW1wb3J0IHsgcmVwb0Zyb21SZXBvc2l0b3J5LCBvd25lckZyb21SZXBvc2l0b3J5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yZXBvc2l0b3J5XCI7XG5cbmNvbnN0IHsgVVRGXzhfRU5DT0RJTkcgfSA9IGVuY29kaW5ncztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzc3VlR2V0UmVxdWVzdChyZXBvc2l0b3J5LCBpc3N1ZU51bWJlciwgdXNlckFnZW50LCBjbGllbnRJZCwgY2xpZW50U2VjcmV0LCBjYWxsYmFjaykge1xuICBjb25zdCBvd25lciA9IG93bmVyRnJvbVJlcG9zaXRvcnkocmVwb3NpdG9yeSksXG4gICAgICAgIHJlcG8gPSByZXBvRnJvbVJlcG9zaXRvcnkocmVwb3NpdG9yeSksXG4gICAgICAgIHVyaSA9IGAke0dJVEhVQl9SRVBPU19VUkl9LyR7b3duZXJ9LyR7cmVwb30ke0dJVEhVQl9JU1NVRVNfVVJJfS8ke2lzc3VlTnVtYmVyfT9gLFxuICAgICAgICBxdWVyeSA9IHt9O1xuXG4gIGdldFJlcXVlc3QodXJpLCBxdWVyeSwgdXNlckFnZW50LCBjbGllbnRJZCwgY2xpZW50U2VjcmV0LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc3N1ZXNHZXRSZXF1ZXN0KHJlcG9zaXRvcnksIHN0YXRlLCB1c2VyQWdlbnQsIGNsaWVudElkLCBjbGllbnRTZWNyZXQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IG93bmVyID0gb3duZXJGcm9tUmVwb3NpdG9yeShyZXBvc2l0b3J5KSxcbiAgICAgICAgcmVwbyA9IHJlcG9Gcm9tUmVwb3NpdG9yeShyZXBvc2l0b3J5KSxcbiAgICAgICAgdXJpID0gYCR7R0lUSFVCX1JFUE9TX1VSSX0vJHtvd25lcn0vJHtyZXBvfSR7R0lUSFVCX0lTU1VFU19VUkl9YCxcbiAgICAgICAgcXVlcnkgPSB7XG4gICAgICAgICAgc3RhdGVcbiAgICAgICAgfTtcblxuICBnZXRSZXF1ZXN0KHVyaSwgcXVlcnksIHVzZXJBZ2VudCwgY2xpZW50SWQsIGNsaWVudFNlY3JldCwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdElzc3VlUGF0Y2hSZXF1ZXN0KHJlcG9zaXRvcnksIHRpdGxlLCBkZXNjcmlwdGlvbiwgaXNzdWVOdW1iZXIsIHVzZXJBZ2VudCwgZ2l0SHViQWNjZXNzVG9rZW4sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IG93bmVyID0gb3duZXJGcm9tUmVwb3NpdG9yeShyZXBvc2l0b3J5KSxcbiAgICAgICAgcmVwbyA9IHJlcG9Gcm9tUmVwb3NpdG9yeShyZXBvc2l0b3J5KSxcbiAgICAgICAgdXJpID0gYCR7R0lUSFVCX1JFUE9TX1VSSX0vJHtvd25lcn0vJHtyZXBvfSR7R0lUSFVCX0lTU1VFU19VUkl9LyR7aXNzdWVOdW1iZXJ9YCxcbiAgICAgICAgZW5jb2RpbmcgPSBVVEZfOF9FTkNPRElORyxcbiAgICAgICAgcXVlcnkgPSB7fTtcblxuICBsZXQgYm9keSA9IGRlc2NyaXB0aW9uOyAvLy9cblxuICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyAvLy9cbiAgICBib2R5LFxuICAgIHRpdGxlLFxuICAgIGVuY29kaW5nXG4gIH0pO1xuXG4gIHBhdGNoUmVxdWVzdCh1cmksIHF1ZXJ5LCBib2R5LCB1c2VyQWdlbnQsIGdpdEh1YkFjY2Vzc1Rva2VuLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbHRlcklzc3VlUGF0Y2hSZXF1ZXN0KHJlcG9zaXRvcnksIHN0YXRlLCBpc3N1ZU51bWJlciwgdXNlckFnZW50LCBnaXRIdWJBY2Nlc3NUb2tlbiwgY2FsbGJhY2spIHtcbiAgY29uc3Qgb3duZXIgPSBvd25lckZyb21SZXBvc2l0b3J5KHJlcG9zaXRvcnkpLFxuICAgICAgICByZXBvID0gcmVwb0Zyb21SZXBvc2l0b3J5KHJlcG9zaXRvcnkpLFxuICAgICAgICB1cmkgPSBgJHtHSVRIVUJfUkVQT1NfVVJJfS8ke293bmVyfS8ke3JlcG99JHtHSVRIVUJfSVNTVUVTX1VSSX0vJHtpc3N1ZU51bWJlcn1gLFxuICAgICAgICBlbmNvZGluZyA9IFVURl84X0VOQ09ESU5HLFxuICAgICAgICBxdWVyeSA9IHt9LFxuICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyAvLy9cbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICB9KTtcblxuICBwYXRjaFJlcXVlc3QodXJpLCBxdWVyeSwgYm9keSwgdXNlckFnZW50LCBnaXRIdWJBY2Nlc3NUb2tlbiwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSXNzdWVQb3N0UmVxdWVzdChyZXBvc2l0b3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIHVzZXJBZ2VudCwgZ2l0SHViQWNjZXNzVG9rZW4sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IG93bmVyID0gb3duZXJGcm9tUmVwb3NpdG9yeShyZXBvc2l0b3J5KSxcbiAgICAgICAgcmVwbyA9IHJlcG9Gcm9tUmVwb3NpdG9yeShyZXBvc2l0b3J5KSxcbiAgICAgICAgdXJpID0gYCR7R0lUSFVCX1JFUE9TX1VSSX0vJHtvd25lcn0vJHtyZXBvfSR7R0lUSFVCX0lTU1VFU19VUkl9YCxcbiAgICAgICAgZW5jb2RpbmcgPSBVVEZfOF9FTkNPRElORyxcbiAgICAgICAgcXVlcnkgPSB7fTtcblxuICBsZXQgYm9keSA9IGRlc2NyaXB0aW9uOyAvLy9cblxuICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyAvLy9cbiAgICBib2R5LFxuICAgIHRpdGxlLFxuICAgIGVuY29kaW5nXG4gIH0pO1xuXG4gIHBvc3RSZXF1ZXN0KHVyaSwgcXVlcnksIGJvZHksIHVzZXJBZ2VudCwgZ2l0SHViQWNjZXNzVG9rZW4sIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc3N1ZUdldFJlcXVlc3QsXG4gIGlzc3Vlc0dldFJlcXVlc3QsXG4gIGVkaXRJc3N1ZVBhdGNoUmVxdWVzdCxcbiAgYWx0ZXJJc3N1ZVBhdGNoUmVxdWVzdCxcbiAgY3JlYXRlSXNzdWVQb3N0UmVxdWVzdFxufTtcbiJdLCJuYW1lcyI6WyJhbHRlcklzc3VlUGF0Y2hSZXF1ZXN0IiwiY3JlYXRlSXNzdWVQb3N0UmVxdWVzdCIsImVkaXRJc3N1ZVBhdGNoUmVxdWVzdCIsImlzc3VlR2V0UmVxdWVzdCIsImlzc3Vlc0dldFJlcXVlc3QiLCJVVEZfOF9FTkNPRElORyIsImVuY29kaW5ncyIsInJlcG9zaXRvcnkiLCJpc3N1ZU51bWJlciIsInVzZXJBZ2VudCIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiY2FsbGJhY2siLCJvd25lciIsIm93bmVyRnJvbVJlcG9zaXRvcnkiLCJyZXBvIiwicmVwb0Zyb21SZXBvc2l0b3J5IiwidXJpIiwiR0lUSFVCX1JFUE9TX1VSSSIsIkdJVEhVQl9JU1NVRVNfVVJJIiwicXVlcnkiLCJnZXRSZXF1ZXN0Iiwic3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2l0SHViQWNjZXNzVG9rZW4iLCJlbmNvZGluZyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicGF0Y2hSZXF1ZXN0IiwicG9zdFJlcXVlc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWdEZ0JBO2VBQUFBOztRQWNBQztlQUFBQTs7UUFrQmhCO2VBQUE7O1FBbERnQkM7ZUFBQUE7O1FBcEJBQztlQUFBQTs7UUFTQUM7ZUFBQUE7Ozt5QkFqQlU7b0JBRTBCO3VCQUNFOzBCQUNFO0FBRXhELElBQU0sQUFBRUMs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