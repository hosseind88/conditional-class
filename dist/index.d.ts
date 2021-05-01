/*!
 * conditional-class <https://github.com/hosseind88/conditional-class>
 *
 * Copyright (c) 2021 Hossein Dindar.
 * Released under the MIT License.
 */
interface ClassObject {
    [key: string]: boolean;
}
export declare function conditionalClass(baseClass?: string, conditionalClassesObject?: ClassObject): string;
export {};
