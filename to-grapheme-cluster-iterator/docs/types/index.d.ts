/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Map function invoked for each iterated value.
*
* @returns iterator value
*/
type Nullary = () => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @returns iterator value
*/
type Unary = ( value: string ) => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @returns iterator value
*/
type Binary = ( value: string, index: number ) => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param src - source string
* @returns iterator value
*/
type Ternary = ( value: string, index: number, src: string ) => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param src - source string
* @returns iterator value
*/
type MapFunction = Nullary | Unary | Binary | Ternary;

/**
* Returns an iterator which iterates over each grapheme cluster in a string.
*
* @param src - input value
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @returns iterator
*
* @example
* var iter = graphemeClusters2iterator( '🌷🍕' );
*
* var v = iter.next().value;
* // returns '🌷'
*
* v = iter.next().value;
* // returns '🍕'
*
* var bool = iter.next().done;
* // returns true
*/
declare function graphemeClusters2iterator( src: string, mapFcn?: MapFunction, thisArg?: any ): Iterator;


// EXPORTS //

export = graphemeClusters2iterator;
