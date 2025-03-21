/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Returns the number of code points in a string.
*
* @param str - input string
* @returns number of code points
*
* @example
* var out = numCodePoints( 'last man standing' );
* // returns 17
*
* @example
* var out = numCodePoints( 'presidential election' );
* // returns 21
*
* @example
* var out = numCodePoints( '六' );
* // returns 1
*
* @example
* var out = numCodePoints( 'अनुच्छेद' );
* // returns 5
*/
declare function numCodePoints( str: string ): number;


// EXPORTS //

export = numCodePoints;
