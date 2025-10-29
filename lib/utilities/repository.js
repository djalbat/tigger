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
    get default () {
        return _default;
    },
    get isRepositoryValid () {
        return isRepositoryValid;
    },
    get ownerFromRepository () {
        return ownerFromRepository;
    },
    get repoFromRepository () {
        return repoFromRepository;
    }
});
var _necessary = require("necessary");
var second = _necessary.arrayUtilities.second;
var repoRegularExpression = /([^\/]+)$/, ownerRegularExpression = /([^\/]+)\/[^\/]+$/;
function isRepositoryValid(repository) {
    var repoPresent = repoRegularExpression.test(repository), ownerPresent = ownerRegularExpression.test(repository), repositoryValid = repoPresent && ownerPresent;
    return repositoryValid;
}
function repoFromRepository(repository) {
    var matches = repository.match(repoRegularExpression), secondMatch = second(matches), repo = secondMatch; ///
    return repo;
}
function ownerFromRepository(repository) {
    var matches = repository.match(ownerRegularExpression), secondMatch = second(matches), owner = secondMatch; ///
    return owner;
}
var _default = {
    isRepositoryValid: isRepositoryValid,
    repoFromRepository: repoFromRepository,
    ownerFromRepository: ownerFromRepository
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVwb3NpdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcmVwb1JlZ3VsYXJFeHByZXNzaW9uID0gLyhbXlxcL10rKSQvLFxuICAgICAgb3duZXJSZWd1bGFyRXhwcmVzc2lvbiA9IC8oW15cXC9dKylcXC9bXlxcL10rJC87XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlcG9zaXRvcnlWYWxpZChyZXBvc2l0b3J5KSB7XG4gIGNvbnN0IHJlcG9QcmVzZW50ID0gcmVwb1JlZ3VsYXJFeHByZXNzaW9uLnRlc3QocmVwb3NpdG9yeSksXG4gICAgICAgIG93bmVyUHJlc2VudCA9IG93bmVyUmVndWxhckV4cHJlc3Npb24udGVzdChyZXBvc2l0b3J5KSxcbiAgICAgICAgcmVwb3NpdG9yeVZhbGlkID0gKHJlcG9QcmVzZW50ICYmIG93bmVyUHJlc2VudCk7XG5cbiAgcmV0dXJuIHJlcG9zaXRvcnlWYWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcG9Gcm9tUmVwb3NpdG9yeShyZXBvc2l0b3J5KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZXBvc2l0b3J5Lm1hdGNoKHJlcG9SZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICByZXBvID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiByZXBvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3duZXJGcm9tUmVwb3NpdG9yeShyZXBvc2l0b3J5KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZXBvc2l0b3J5Lm1hdGNoKG93bmVyUmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgb3duZXIgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIG93bmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUmVwb3NpdG9yeVZhbGlkLFxuICByZXBvRnJvbVJlcG9zaXRvcnksXG4gIG93bmVyRnJvbVJlcG9zaXRvcnlcbn07XG4iXSwibmFtZXMiOlsiaXNSZXBvc2l0b3J5VmFsaWQiLCJvd25lckZyb21SZXBvc2l0b3J5IiwicmVwb0Zyb21SZXBvc2l0b3J5Iiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJyZXBvUmVndWxhckV4cHJlc3Npb24iLCJvd25lclJlZ3VsYXJFeHByZXNzaW9uIiwicmVwb3NpdG9yeSIsInJlcG9QcmVzZW50IiwidGVzdCIsIm93bmVyUHJlc2VudCIsInJlcG9zaXRvcnlWYWxpZCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwicmVwbyIsIm93bmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFpQ0E7ZUFBQTs7UUF4QmdCQTtlQUFBQTs7UUFnQkFDO2VBQUFBOztRQVJBQztlQUFBQTs7O3lCQWZlO0FBRS9CLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRVIsSUFBTUUsd0JBQXdCLGFBQ3hCQyx5QkFBeUI7QUFFeEIsU0FBU04sa0JBQWtCTyxVQUFVO0lBQzFDLElBQU1DLGNBQWNILHNCQUFzQkksSUFBSSxDQUFDRixhQUN6Q0csZUFBZUosdUJBQXVCRyxJQUFJLENBQUNGLGFBQzNDSSxrQkFBbUJILGVBQWVFO0lBRXhDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTVCxtQkFBbUJLLFVBQVU7SUFDM0MsSUFBTUssVUFBVUwsV0FBV00sS0FBSyxDQUFDUix3QkFDM0JTLGNBQWNYLE9BQU9TLFVBQ3JCRyxPQUFPRCxhQUFhLEdBQUc7SUFFN0IsT0FBT0M7QUFDVDtBQUVPLFNBQVNkLG9CQUFvQk0sVUFBVTtJQUM1QyxJQUFNSyxVQUFVTCxXQUFXTSxLQUFLLENBQUNQLHlCQUMzQlEsY0FBY1gsT0FBT1MsVUFDckJJLFFBQVFGLGFBQWEsR0FBRztJQUU5QixPQUFPRTtBQUNUO0lBRUEsV0FBZTtJQUNiaEIsbUJBQUFBO0lBQ0FFLG9CQUFBQTtJQUNBRCxxQkFBQUE7QUFDRiJ9