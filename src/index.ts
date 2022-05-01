/*!
 * conditional-class <https://github.com/hosseind88/conditional-class>
 *
 * Copyright (c) 2021 Hossein Dindar.
 * Released under the MIT License.
 */

interface ClassObject {
  [key: string]: boolean
}

export function conditionalClass(
  baseClass: string | string[] = '',
  conditionalClassesObject: ClassObject = {}
) {
  let baseClassString = typeof baseClass === 'string' ? baseClass : baseClass.join(' ');
  Object.keys(conditionalClassesObject || {}).forEach(function (key) {
    if (conditionalClassesObject[key]) {
      baseClassString += (!baseClass ? "" : " ") + key;
    }
  });
  return baseClassString;
};

