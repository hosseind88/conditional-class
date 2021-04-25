/*!
 * conditional-class <https://github.com/hosseind88/conditional-class>
 *
 * Copyright (c) 2021 Hossein Dindar.
 * Released under the MIT License.
 */

/**
 * @param {string} baseClass
 * @param {object} conditionalClassesObject
 */
module.exports = function conditionalClass(
  baseClass,
  conditionalClassesObject
) {
  var result = baseClass || '';
  Object.keys(conditionalClassesObject || {}).forEach(function (key) {
    if (conditionalClassesObject[key]) {
      result += " " + key;
    }
  });
  return result;
};

