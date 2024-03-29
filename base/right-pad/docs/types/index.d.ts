/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Right pads a string such that the padded string has a length of at least `len`.
*
* ## Notes
*
* -   An output string is not guaranteed to have a length of exactly `len`, but to have a length of at least `len`. To generate a padded string having a length equal to `len`, post-process a padded string by trimming off excess characters.
*
* @param str - string to pad
* @param len - minimum string length
* @param pad - string used to pad
* @returns padded string
*
* @example
* var str = rpad( 'a', 5, ' ' );
* // returns 'a    '
*
* @example
* var str = rpad( 'beep', 10, 'b' );
* // returns 'beepbbbbbb'
*
* @example
* var str = rpad( 'boop', 12, 'beep' );
* // returns 'boopbeepbeep'
*/
declare function rpad( str: string, len: number, pad: string ): string;


// EXPORTS //

export = rpad;
