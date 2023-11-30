/* Polyfill service v3.96.0
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 * 
 * Features requested: Array.prototype.forEach,Element.prototype.closest,IntersectionObserver,NodeList.prototype.forEach,requestAnimationFrame
 * 
 * - _ESAbstract.ArrayCreate, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate")
 * - _ESAbstract.Call, License: CC0 (required by "Array.prototype.forEach", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
 * - _ESAbstract.Get, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties")
 * - _ESAbstract.HasOwnProperty, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties", "Object.getOwnPropertyDescriptor")
 * - _ESAbstract.HasProperty, License: CC0 (required by "IntersectionObserver", "Array.prototype.some")
 * - _ESAbstract.IsArray, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate")
 * - _ESAbstract.IsCallable, License: CC0 (required by "Array.prototype.forEach", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
 * - _ESAbstract.SameValueNonNumber, License: CC0 (required by "IntersectionObserver", "Event", "Array.prototype.includes", "_ESAbstract.SameValueZero")
 * - _ESAbstract.ToBoolean, License: CC0 (required by "IntersectionObserver", "Array.prototype.some")
 * - _ESAbstract.ToInteger, License: CC0 (required by "IntersectionObserver", "Event", "Array.prototype.includes")
 * - _ESAbstract.ToLength, License: CC0 (required by "IntersectionObserver", "Event", "Array.prototype.includes")
 * - _ESAbstract.ToObject, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties", "Object.getOwnPropertyDescriptor")
 * - _ESAbstract.GetV, License: CC0 (required by "Array.prototype.forEach", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive", "_ESAbstract.GetMethod")
 * - _ESAbstract.GetMethod, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.IsConstructor")
 * - _ESAbstract.Type, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey")
 * - _ESAbstract.GetPrototypeFromConstructor, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor")
 * - _ESAbstract.IsConstructor, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct")
 * - _ESAbstract.OrdinaryToPrimitive, License: CC0 (required by "Array.prototype.forEach", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive")
 * - _ESAbstract.SameValueZero, License: CC0 (required by "IntersectionObserver", "Event", "Array.prototype.includes")
 * - _ESAbstract.ToPrimitive, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey")
 * - _ESAbstract.ToString, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey")
 * - _ESAbstract.ToPropertyKey, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties", "Object.getOwnPropertyDescriptor")
 * - Date.now, License: CC0 (required by "IntersectionObserver", "performance.now")
 * - document, License: CC0 (required by "Element.prototype.closest", "Element.prototype.matches", "document.querySelector")
 * - Element, License: CC0 (required by "Element.prototype.closest", "Element.prototype.matches", "document.querySelector")
 * - document.querySelector, License: CC0 (required by "Element.prototype.closest", "Element.prototype.matches")
 * - Element.prototype.matches, License: CC0 (required by "Element.prototype.closest")
 * - Element.prototype.closest, License: CC0
 * - Object.defineProperty, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties")
 * - _ESAbstract.CreateDataProperty, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.CreateDataPropertyOrThrow")
 * - _ESAbstract.CreateDataPropertyOrThrow, License: CC0 (required by "IntersectionObserver", "Array.prototype.map")
 * - _ESAbstract.CreateMethodProperty, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties", "Object.getOwnPropertyDescriptor")
 * - Array.isArray, License: CC0 (required by "IntersectionObserver")
 * - Array.prototype.forEach, License: CC0 (required by "NodeList.prototype.forEach")
 * - NodeList.prototype.forEach, License: CC0
 * - Array.prototype.includes, License: MIT (required by "IntersectionObserver", "Event")
 * - Array.prototype.indexOf, License: CC0 (required by "IntersectionObserver", "Event")
 * - Array.prototype.some, License: CC0 (required by "IntersectionObserver")
 * - Function.prototype.bind, License: MIT (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties", "Object.getOwnPropertyDescriptor")
 * - Object.getOwnPropertyDescriptor, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties")
 * - Object.getPrototypeOf, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor")
 * - Object.keys, License: MIT (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create", "Object.defineProperties")
 * - Object.defineProperties, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "Object.create")
 * - Object.create, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor")
 * - _ESAbstract.OrdinaryCreateFromConstructor, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct")
 * - _ESAbstract.Construct, License: CC0 (required by "IntersectionObserver", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate")
 * - _ESAbstract.ArraySpeciesCreate, License: CC0 (required by "IntersectionObserver", "Array.prototype.map")
 * - Array.prototype.filter, License: CC0 (required by "IntersectionObserver")
 * - Array.prototype.map, License: CC0 (required by "IntersectionObserver")
 * - performance.now, License: CC0 (required by "IntersectionObserver")
 * - requestAnimationFrame, License: MIT
 * - Window, License: CC0 (required by "IntersectionObserver", "Event")
 * - Event, License: CC0 (required by "IntersectionObserver")
 * - getComputedStyle, License: CC0 (required by "IntersectionObserver")
 * - IntersectionObserver, License: CC0 */
(function(self, undefined) {

    // _ESAbstract.ArrayCreate
    // 9.4.2.2. ArrayCreate ( length [ , proto ] )
    function ArrayCreate(length /* [, proto] */ ) { // eslint-disable-line no-unused-vars
        // 1. Assert: length is an integer Number ≥ 0.
        // 2. If length is -0, set length to +0.
        if (1 / length === -Infinity) {
            length = 0;
        }
        // 3. If length>2^32-1, throw a RangeError exception.
        if (length > (Math.pow(2, 32) - 1)) {
            throw new RangeError('Invalid array length');
        }
        // 4. If proto is not present, set proto to the intrinsic object %ArrayPrototype%.
        // 5. Let A be a newly created Array exotic object.
        var A = [];
        // 6. Set A's essential internal methods except for [[DefineOwnProperty]] to the default ordinary object definitions specified in 9.1.
        // 7. Set A.[[DefineOwnProperty]] as specified in 9.4.2.1.
        // 8. Set A.[[Prototype]] to proto.
        // 9. Set A.[[Extensible]] to true.
        // 10. Perform ! OrdinaryDefineOwnProperty(A, "length", PropertyDescriptor{[[Value]]: length, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false}).
        A.length = length;
        // 11. Return A.
        return A;
    }

    // _ESAbstract.Call
    /* global IsCallable */
    // 7.3.12. Call ( F, V [ , argumentsList ] )
    function Call(F, V /* [, argumentsList] */ ) { // eslint-disable-line no-unused-vars
        // 1. If argumentsList is not present, set argumentsList to a new empty List.
        var argumentsList = arguments.length > 2 ? arguments[2] : [];
        // 2. If IsCallable(F) is false, throw a TypeError exception.
        if (IsCallable(F) === false) {
            throw new TypeError(Object.prototype.toString.call(F) + 'is not a function.');
        }
        // 3. Return ? F.[[Call]](V, argumentsList).
        return F.apply(V, argumentsList);
    }

    // _ESAbstract.Get
    // 7.3.1. Get ( O, P )
    function Get(O, P) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: IsPropertyKey(P) is true.
        // 3. Return ? O.[[Get]](P, O).
        return O[P];
    }

    // _ESAbstract.HasOwnProperty
    // 7.3.11 HasOwnProperty (O, P)
    function HasOwnProperty(o, p) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: IsPropertyKey(P) is true.
        // 3. Let desc be ? O.[[GetOwnProperty]](P).
        // 4. If desc is undefined, return false.
        // 5. Return true.
        // Polyfill.io - As we expect user agents to support ES3 fully we can skip the above steps and use Object.prototype.hasOwnProperty to do them for us.
        return Object.prototype.hasOwnProperty.call(o, p);
    }

    // _ESAbstract.HasProperty
    // 7.3.10. HasProperty ( O, P )
    function HasProperty(O, P) { // eslint-disable-line no-unused-vars
        // Assert: Type(O) is Object.
        // Assert: IsPropertyKey(P) is true.
        // Return ? O.[[HasProperty]](P).
        return P in O;
    }

    // _ESAbstract.IsArray
    // 7.2.2. IsArray ( argument )
    function IsArray(argument) { // eslint-disable-line no-unused-vars
        // 1. If Type(argument) is not Object, return false.
        // 2. If argument is an Array exotic object, return true.
        // 3. If argument is a Proxy exotic object, then
        // a. If argument.[[ProxyHandler]] is null, throw a TypeError exception.
        // b. Let target be argument.[[ProxyTarget]].
        // c. Return ? IsArray(target).
        // 4. Return false.

        // Polyfill.io - We can skip all the above steps and check the string returned from Object.prototype.toString().
        return Object.prototype.toString.call(argument) === '[object Array]';
    }

    // _ESAbstract.IsCallable
    // 7.2.3. IsCallable ( argument )
    function IsCallable(argument) { // eslint-disable-line no-unused-vars
        // 1. If Type(argument) is not Object, return false.
        // 2. If argument has a [[Call]] internal method, return true.
        // 3. Return false.

        // Polyfill.io - Only function objects have a [[Call]] internal method. This means we can simplify this function to check that the argument has a type of function.
        return typeof argument === 'function';
    }

    // _ESAbstract.SameValueNonNumber
    // 7.2.12. SameValueNonNumber ( x, y )
    function SameValueNonNumber(x, y) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(x) is not Number.
        // 2. Assert: Type(x) is the same as Type(y).
        // 3. If Type(x) is Undefined, return true.
        // 4. If Type(x) is Null, return true.
        // 5. If Type(x) is String, then
        // a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
        // 6. If Type(x) is Boolean, then
        // a. If x and y are both true or both false, return true; otherwise, return false.
        // 7. If Type(x) is Symbol, then
        // a. If x and y are both the same Symbol value, return true; otherwise, return false.
        // 8. If x and y are the same Object value, return true. Otherwise, return false.

        // Polyfill.io - We can skip all above steps because the === operator does it all for us.
        return x === y;
    }

    // _ESAbstract.ToBoolean
    // 7.1.2. ToBoolean ( argument )
    // The abstract operation ToBoolean converts argument to a value of type Boolean according to Table 9:
    /*
    --------------------------------------------------------------------------------------------------------------
    | Argument Type | Result                                                                                     |
    --------------------------------------------------------------------------------------------------------------
    | Undefined     | Return false.                                                                              |
    | Null          | Return false.                                                                              |
    | Boolean       | Return argument.                                                                           |
    | Number        | If argument is +0, -0, or NaN, return false; otherwise return true.                        |
    | String        | If argument is the empty String (its length is zero), return false; otherwise return true. |
    | Symbol        | Return true.                                                                               |
    | Object        | Return true.                                                                               |
    --------------------------------------------------------------------------------------------------------------
    */
    function ToBoolean(argument) { // eslint-disable-line no-unused-vars
        return Boolean(argument);
    }

    // _ESAbstract.ToInteger
    // 7.1.4. ToInteger ( argument )
    function ToInteger(argument) { // eslint-disable-line no-unused-vars
        // 1. Let number be ? ToNumber(argument).
        var number = Number(argument);
        // 2. If number is NaN, return +0.
        if (isNaN(number)) {
            return 0;
        }
        // 3. If number is +0, -0, +∞, or -∞, return number.
        if (1 / number === Infinity || 1 / number === -Infinity || number === Infinity || number === -Infinity) {
            return number;
        }
        // 4. Return the number value that is the same sign as number and whose magnitude is floor(abs(number)).
        return ((number < 0) ? -1 : 1) * Math.floor(Math.abs(number));
    }

    // _ESAbstract.ToLength
    /* global ToInteger */
    // 7.1.15. ToLength ( argument )
    function ToLength(argument) { // eslint-disable-line no-unused-vars
        // 1. Let len be ? ToInteger(argument).
        var len = ToInteger(argument);
        // 2. If len ≤ +0, return +0.
        if (len <= 0) {
            return 0;
        }
        // 3. Return min(len, 253-1).
        return Math.min(len, Math.pow(2, 53) - 1);
    }

    // _ESAbstract.ToObject
    // 7.1.13 ToObject ( argument )
    // The abstract operation ToObject converts argument to a value of type Object according to Table 12:
    // Table 12: ToObject Conversions
    /*
    |----------------------------------------------------------------------------------------------------------------------------------------------------|
    | Argument Type | Result                                                                                                                             |
    |----------------------------------------------------------------------------------------------------------------------------------------------------|
    | Undefined     | Throw a TypeError exception.                                                                                                       |
    | Null          | Throw a TypeError exception.                                                                                                       |
    | Boolean       | Return a new Boolean object whose [[BooleanData]] internal slot is set to argument. See 19.3 for a description of Boolean objects. |
    | Number        | Return a new Number object whose [[NumberData]] internal slot is set to argument. See 20.1 for a description of Number objects.    |
    | String        | Return a new String object whose [[StringData]] internal slot is set to argument. See 21.1 for a description of String objects.    |
    | Symbol        | Return a new Symbol object whose [[SymbolData]] internal slot is set to argument. See 19.4 for a description of Symbol objects.    |
    | Object        | Return argument.                                                                                                                   |
    |----------------------------------------------------------------------------------------------------------------------------------------------------|
    */
    function ToObject(argument) { // eslint-disable-line no-unused-vars
        if (argument === null || argument === undefined) {
            throw TypeError();
        }
        return Object(argument);
    }

    // _ESAbstract.GetV
    /* global ToObject */
    // 7.3.2 GetV (V, P)
    function GetV(v, p) { // eslint-disable-line no-unused-vars
        // 1. Assert: IsPropertyKey(P) is true.
        // 2. Let O be ? ToObject(V).
        var o = ToObject(v);
        // 3. Return ? O.[[Get]](P, V).
        return o[p];
    }

    // _ESAbstract.GetMethod
    /* global GetV, IsCallable */
    // 7.3.9. GetMethod ( V, P )
    function GetMethod(V, P) { // eslint-disable-line no-unused-vars
        // 1. Assert: IsPropertyKey(P) is true.
        // 2. Let func be ? GetV(V, P).
        var func = GetV(V, P);
        // 3. If func is either undefined or null, return undefined.
        if (func === null || func === undefined) {
            return undefined;
        }
        // 4. If IsCallable(func) is false, throw a TypeError exception.
        if (IsCallable(func) === false) {
            throw new TypeError('Method not callable: ' + P);
        }
        // 5. Return func.
        return func;
    }

    // _ESAbstract.Type
    // "Type(x)" is used as shorthand for "the type of x"...
    function Type(x) { // eslint-disable-line no-unused-vars
        switch (typeof x) {
            case 'undefined':
                return 'undefined';
            case 'boolean':
                return 'boolean';
            case 'number':
                return 'number';
            case 'string':
                return 'string';
            case 'symbol':
                return 'symbol';
            default:
                // typeof null is 'object'
                if (x === null) return 'null';
                // Polyfill.io - This is here because a Symbol polyfill will have a typeof `object`.
                if ('Symbol' in self && (x instanceof self.Symbol || x.constructor === self.Symbol)) return 'symbol';
                return 'object';
        }
    }

    // _ESAbstract.GetPrototypeFromConstructor
    /* global Get, Type */
    // 9.1.14. GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )
    function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
        // 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object. The corresponding object must be an intrinsic that is intended to be used as the [[Prototype]] value of an object.
        // 2. Assert: IsCallable(constructor) is true.
        // 3. Let proto be ? Get(constructor, "prototype").
        var proto = Get(constructor, "prototype");
        // 4. If Type(proto) is not Object, then
        if (Type(proto) !== 'object') {
            // a. Let realm be ? GetFunctionRealm(constructor).
            // b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
            proto = intrinsicDefaultProto;
        }
        // 5. Return proto.
        return proto;
    }

    // _ESAbstract.IsConstructor
    /* global Type */
    // 7.2.4. IsConstructor ( argument )
    function IsConstructor(argument) { // eslint-disable-line no-unused-vars
        // 1. If Type(argument) is not Object, return false.
        if (Type(argument) !== 'object') {
            return false;
        }
        // 2. If argument has a [[Construct]] internal method, return true.
        // 3. Return false.

        // Polyfill.io - `new argument` is the only way  to truly test if a function is a constructor.
        // We choose to not use`new argument` because the argument could have side effects when called.
        // Instead we check to see if the argument is a function and if it has a prototype.
        // Arrow functions do not have a [[Construct]] internal method, nor do they have a prototype.
        return typeof argument === 'function' && !!argument.prototype;
    }

    // _ESAbstract.OrdinaryToPrimitive
    /* global Get, IsCallable, Call, Type */
    // 7.1.1.1. OrdinaryToPrimitive ( O, hint )
    function OrdinaryToPrimitive(O, hint) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: Type(hint) is String and its value is either "string" or "number".
        // 3. If hint is "string", then
        if (hint === 'string') {
            // a. Let methodNames be « "toString", "valueOf" ».
            var methodNames = ['toString', 'valueOf'];
            // 4. Else,
        } else {
            // a. Let methodNames be « "valueOf", "toString" ».
            methodNames = ['valueOf', 'toString'];
        }
        // 5. For each name in methodNames in List order, do
        for (var i = 0; i < methodNames.length; ++i) {
            var name = methodNames[i];
            // a. Let method be ? Get(O, name).
            var method = Get(O, name);
            // b. If IsCallable(method) is true, then
            if (IsCallable(method)) {
                // i. Let result be ? Call(method, O).
                var result = Call(method, O);
                // ii. If Type(result) is not Object, return result.
                if (Type(result) !== 'object') {
                    return result;
                }
            }
        }
        // 6. Throw a TypeError exception.
        throw new TypeError('Cannot convert to primitive.');
    }

    // _ESAbstract.SameValueZero
    /* global Type, SameValueNonNumber */
    // 7.2.11. SameValueZero ( x, y )
    function SameValueZero(x, y) { // eslint-disable-line no-unused-vars
        // 1. If Type(x) is different from Type(y), return false.
        if (Type(x) !== Type(y)) {
            return false;
        }
        // 2. If Type(x) is Number, then
        if (Type(x) === 'number') {
            // a. If x is NaN and y is NaN, return true.
            if (isNaN(x) && isNaN(y)) {
                return true;
            }
            // b. If x is +0 and y is -0, return true.
            if (1 / x === Infinity && 1 / y === -Infinity) {
                return true;
            }
            // c. If x is -0 and y is +0, return true.
            if (1 / x === -Infinity && 1 / y === Infinity) {
                return true;
            }
            // d. If x is the same Number value as y, return true.
            if (x === y) {
                return true;
            }
            // e. Return false.
            return false;
        }
        // 3. Return SameValueNonNumber(x, y).
        return SameValueNonNumber(x, y);
    }

    // _ESAbstract.ToPrimitive
    /* global Type, GetMethod, Call, OrdinaryToPrimitive */
    // 7.1.1. ToPrimitive ( input [ , PreferredType ] )
    function ToPrimitive(input /* [, PreferredType] */ ) { // eslint-disable-line no-unused-vars
        var PreferredType = arguments.length > 1 ? arguments[1] : undefined;
        // 1. Assert: input is an ECMAScript language value.
        // 2. If Type(input) is Object, then
        if (Type(input) === 'object') {
            // a. If PreferredType is not present, let hint be "default".
            if (arguments.length < 2) {
                var hint = 'default';
                // b. Else if PreferredType is hint String, let hint be "string".
            } else if (PreferredType === String) {
                hint = 'string';
                // c. Else PreferredType is hint Number, let hint be "number".
            } else if (PreferredType === Number) {
                hint = 'number';
            }
            // d. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
            var exoticToPrim = typeof self.Symbol === 'function' && typeof self.Symbol.toPrimitive === 'symbol' ? GetMethod(input, self.Symbol.toPrimitive) : undefined;
            // e. If exoticToPrim is not undefined, then
            if (exoticToPrim !== undefined) {
                // i. Let result be ? Call(exoticToPrim, input, « hint »).
                var result = Call(exoticToPrim, input, [hint]);
                // ii. If Type(result) is not Object, return result.
                if (Type(result) !== 'object') {
                    return result;
                }
                // iii. Throw a TypeError exception.
                throw new TypeError('Cannot convert exotic object to primitive.');
            }
            // f. If hint is "default", set hint to "number".
            if (hint === 'default') {
                hint = 'number';
            }
            // g. Return ? OrdinaryToPrimitive(input, hint).
            return OrdinaryToPrimitive(input, hint);
        }
        // 3. Return input
        return input;
    }
    // _ESAbstract.ToString
    /* global Type, ToPrimitive */
    // 7.1.12. ToString ( argument )
    // The abstract operation ToString converts argument to a value of type String according to Table 11:
    // Table 11: ToString Conversions
    /*
    |---------------|--------------------------------------------------------|
    | Argument Type | Result                                                 |
    |---------------|--------------------------------------------------------|
    | Undefined     | Return "undefined".                                    |
    |---------------|--------------------------------------------------------|
    | Null	        | Return "null".                                         |
    |---------------|--------------------------------------------------------|
    | Boolean       | If argument is true, return "true".                    |
    |               | If argument is false, return "false".                  |
    |---------------|--------------------------------------------------------|
    | Number        | Return NumberToString(argument).                       |
    |---------------|--------------------------------------------------------|
    | String        | Return argument.                                       |
    |---------------|--------------------------------------------------------|
    | Symbol        | Throw a TypeError exception.                           |
    |---------------|--------------------------------------------------------|
    | Object        | Apply the following steps:                             |
    |               | Let primValue be ? ToPrimitive(argument, hint String). |
    |               | Return ? ToString(primValue).                          |
    |---------------|--------------------------------------------------------|
    */
    function ToString(argument) { // eslint-disable-line no-unused-vars
        switch (Type(argument)) {
            case 'symbol':
                throw new TypeError('Cannot convert a Symbol value to a string');
            case 'object':
                var primValue = ToPrimitive(argument, String);
                return ToString(primValue);
            default:
                return String(argument);
        }
    }

    // _ESAbstract.ToPropertyKey
    /* globals ToPrimitive, Type, ToString */
    // 7.1.14. ToPropertyKey ( argument )
    function ToPropertyKey(argument) { // eslint-disable-line no-unused-vars
        // 1. Let key be ? ToPrimitive(argument, hint String).
        var key = ToPrimitive(argument, String);
        // 2. If Type(key) is Symbol, then
        if (Type(key) === 'symbol') {
            // a. Return key.
            return key;
        }
        // 3. Return ! ToString(key).
        return ToString(key);
    }
    if (!("Date" in self && "now" in self.Date && "getTime" in self.Date.prototype)) {

        // Date.now
        Date.now = function now() {
            return new Date().getTime();
        };

    }

    if (!("document" in self)) {

        // document
        if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {

            if (self.HTMLDocument) { // IE8

                // HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
                self.Document = self.HTMLDocument;

            } else {

                // Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
                self.Document = self.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
                self.Document.prototype = document;
            }
        }

    }

    if (!("Element" in self && "HTMLElement" in self)) {

        // Element
        (function() {

            if ('Element' in self && 'HTMLElement' in self) {
                return;
            }
            // IE8
            if (window.Element && !window.HTMLElement) {
                window.HTMLElement = window.Element;
                return;
            }

            // create Element constructor
            window.Element = window.HTMLElement = new Function('return function Element() {}')();

            // generate sandboxed iframe
            var vbody = document.appendChild(document.createElement('body'));
            var frame = vbody.appendChild(document.createElement('iframe'));

            // use sandboxed iframe to replicate Element functionality
            var frameDocument = frame.contentWindow.document;
            var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
            var cache = {};

            // polyfill Element.prototype on an element
            var shiv = function(element, deep) {
                var
                    childNodes = element.childNodes || [],
                    index = -1,
                    key, value, childNode;

                if (element.nodeType === 1 && element.constructor !== Element) {
                    element.constructor = Element;

                    for (key in cache) {
                        value = cache[key];
                        element[key] = value;
                    }
                }

                // eslint-disable-next-line no-cond-assign
                while (childNode = deep && childNodes[++index]) {
                    shiv(childNode, deep);
                }

                return element;
            };

            var elements = document.getElementsByTagName('*');
            var nativeCreateElement = document.createElement;
            var interval;
            var loopLimit = 100;

            prototype.attachEvent('onpropertychange', function(event) {
                var
                    propertyName = event.propertyName,
                    nonValue = !Object.prototype.hasOwnProperty.call(cache, propertyName),
                    newValue = prototype[propertyName],
                    oldValue = cache[propertyName],
                    index = -1,
                    element;

                // eslint-disable-next-line no-cond-assign
                while (element = elements[++index]) {
                    if (element.nodeType === 1) {
                        if (nonValue || element[propertyName] === oldValue) {
                            element[propertyName] = newValue;
                        }
                    }
                }

                cache[propertyName] = newValue;
            });

            prototype.constructor = Element;

            if (!prototype.hasAttribute) {
                // <Element>.hasAttribute
                prototype.hasAttribute = function hasAttribute(name) {
                    return this.getAttribute(name) !== null;
                };
            }

            // Apply Element prototype to the pre-existing DOM as soon as the body element appears.
            function bodyCheck() {
                if (!(loopLimit--)) clearTimeout(interval);
                if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
                    shiv(document, true);
                    if (interval && document.body.prototype) clearTimeout(interval);
                    return (!!document.body.prototype);
                }
                return false;
            }
            if (!bodyCheck()) {
                document.onreadystatechange = bodyCheck;
                interval = setInterval(bodyCheck, 25);
            }

            // Apply to any new elements created after load
            document.createElement = function createElement(nodeName) {
                var element = nativeCreateElement(String(nodeName).toLowerCase());
                return shiv(element);
            };

            // remove sandboxed iframe
            document.removeChild(vbody);
        }());

    }

    if (!("document" in self && "querySelector" in self.document)) {

        // document.querySelector
        (function() {
            var
                head = document.getElementsByTagName('head')[0];

            function getElementsByQuery(node, selector, one) {
                var
                    generator = document.createElement('div'),
                    id = 'qsa' + String(Math.random()).slice(3),
                    style, elements;

                generator.innerHTML = 'x<style>' + selector + '{qsa:' + id + ';}';

                style = head.appendChild(generator.lastChild);

                elements = getElements(node, selector, one, id);

                head.removeChild(style);

                return one ? elements[0] : elements;
            }

            function getElements(node, selector, one, id) {
                var
                    validNode = /1|9/.test(node.nodeType),
                    childNodes = node.childNodes,
                    elements = [],
                    index = -1,
                    childNode;

                if (validNode && node.currentStyle && node.currentStyle.qsa === id) {
                    if (elements.push(node) && one) {
                        return elements;
                    }
                }

                // eslint-disable-next-line no-cond-assign
                while (childNode = childNodes[++index]) {
                    elements = elements.concat(getElements(childNode, selector, one, id));

                    if (one && elements.length) {
                        return elements;
                    }
                }

                return elements;
            }

            Document.prototype.querySelector = Element.prototype.querySelector = function querySelectorAll(selector) {
                return getElementsByQuery(this, selector, true);
            };

            Document.prototype.querySelectorAll = Element.prototype.querySelectorAll = function querySelectorAll(selector) {
                return getElementsByQuery(this, selector, false);
            };
        }());

    }

    if (!("document" in self && "matches" in document.documentElement)) {

        // Element.prototype.matches
        Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function matches(selector) {

            var element = this;
            var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
            var index = 0;

            while (elements[index] && elements[index] !== element) {
                ++index;
            }

            return !!elements[index];
        };

    }

    if (!("document" in self && "closest" in document.documentElement)) {

        // Element.prototype.closest
        Element.prototype.closest = function closest(selector) {
            var node = this;

            while (node) {
                if (node.matches(selector)) return node;
                else node = 'SVGElement' in window && node instanceof SVGElement ? node.parentNode : node.parentElement;
            }

            return null;
        };

    }

    if (!("defineProperty" in Object && function() {
            try {
                var e = {}
                return Object.defineProperty(e, "test", {
                    value: 42
                }), !0
            } catch (t) {
                return !1
            }
        }())) {

        // Object.defineProperty
        (function(nativeDefineProperty) {

            var supportsAccessors = Object.prototype.hasOwnProperty.call(Object.prototype, '__defineGetter__');
            var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
            var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

            // Polyfill.io - This does not use CreateMethodProperty because our CreateMethodProperty function uses Object.defineProperty.
            Object.defineProperty = function defineProperty(object, property, descriptor) {

                // Where native support exists, assume it
                if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
                    return nativeDefineProperty(object, property, descriptor);
                }

                if (object === null || !(object instanceof Object || typeof object === 'object')) {
                    throw new TypeError('Object.defineProperty called on non-object');
                }

                if (!(descriptor instanceof Object)) {
                    throw new TypeError('Property description must be an object');
                }

                var propertyString = String(property);
                var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
                var getterType = 'get' in descriptor && typeof descriptor.get;
                var setterType = 'set' in descriptor && typeof descriptor.set;

                // handle descriptor.get
                if (getterType) {
                    if (getterType !== 'function') {
                        throw new TypeError('Getter must be a function');
                    }
                    if (!supportsAccessors) {
                        throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
                    }
                    if (hasValueOrWritable) {
                        throw new TypeError(ERR_VALUE_ACCESSORS);
                    }
                    Object.__defineGetter__.call(object, propertyString, descriptor.get);
                } else {
                    object[propertyString] = descriptor.value;
                }

                // handle descriptor.set
                if (setterType) {
                    if (setterType !== 'function') {
                        throw new TypeError('Setter must be a function');
                    }
                    if (!supportsAccessors) {
                        throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
                    }
                    if (hasValueOrWritable) {
                        throw new TypeError(ERR_VALUE_ACCESSORS);
                    }
                    Object.__defineSetter__.call(object, propertyString, descriptor.set);
                }

                // OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
                if ('value' in descriptor) {
                    object[propertyString] = descriptor.value;
                }

                return object;
            };
        }(Object.defineProperty));

    }


    // _ESAbstract.CreateDataProperty
    // 7.3.4. CreateDataProperty ( O, P, V )
    // NOTE
    // This abstract operation creates a property whose attributes are set to the same defaults used for properties created by the ECMAScript language assignment operator.
    // Normally, the property will not already exist. If it does exist and is not configurable or if O is not extensible, [[DefineOwnProperty]] will return false.
    function CreateDataProperty(O, P, V) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: IsPropertyKey(P) is true.
        // 3. Let newDesc be the PropertyDescriptor{ [[Value]]: V, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true }.
        var newDesc = {
            value: V,
            writable: true,
            enumerable: true,
            configurable: true
        };
        // 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
        try {
            Object.defineProperty(O, P, newDesc);
            return true;
        } catch (e) {
            return false;
        }
    }

    // _ESAbstract.CreateDataPropertyOrThrow
    /* global CreateDataProperty */
    // 7.3.6. CreateDataPropertyOrThrow ( O, P, V )
    function CreateDataPropertyOrThrow(O, P, V) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: IsPropertyKey(P) is true.
        // 3. Let success be ? CreateDataProperty(O, P, V).
        var success = CreateDataProperty(O, P, V);
        // 4. If success is false, throw a TypeError exception.
        if (!success) {
            throw new TypeError('Cannot assign value `' + Object.prototype.toString.call(V) + '` to property `' + Object.prototype.toString.call(P) + '` on object `' + Object.prototype.toString.call(O) + '`');
        }
        // 5. Return success.
        return success;
    }

    // _ESAbstract.CreateMethodProperty
    // 7.3.5. CreateMethodProperty ( O, P, V )
    function CreateMethodProperty(O, P, V) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: IsPropertyKey(P) is true.
        // 3. Let newDesc be the PropertyDescriptor{[[Value]]: V, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}.
        var newDesc = {
            value: V,
            writable: true,
            enumerable: false,
            configurable: true
        };
        // 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
        Object.defineProperty(O, P, newDesc);
    }
    if (!("isArray" in Array)) {

        // Array.isArray
        /* global CreateMethodProperty, IsArray */
        // 22.1.2.2. Array.isArray ( arg )
        CreateMethodProperty(Array, 'isArray', function isArray(arg) {
            // 1. Return ? IsArray(arg).
            return IsArray(arg);
        });

    }

    if (!("forEach" in Array.prototype)) {

        // Array.prototype.forEach
        /* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
        // 22.1.3.10. Array.prototype.forEach ( callbackfn [ , thisArg ] )
        CreateMethodProperty(Array.prototype, 'forEach', function forEach(callbackfn /* [ , thisArg ] */ ) {
            // 1. Let O be ? ToObject(this value).
            var O = ToObject(this);
            // Polyfill.io - If O is a String object, split it into an array in order to iterate correctly.
            // We will use arrayLike in place of O when we are iterating through the list.
            var arraylike = O instanceof String ? O.split('') : O;
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = ToLength(Get(O, "length"));
            // 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
            if (IsCallable(callbackfn) === false) {
                throw new TypeError(callbackfn + ' is not a function');
            }
            // 4. If thisArg is present, let T be thisArg; else let T be undefined.
            var T = arguments.length > 1 ? arguments[1] : undefined;
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                var Pk = ToString(k);
                // b. Let kPresent be ? HasProperty(O, Pk).
                var kPresent = HasProperty(arraylike, Pk);
                // c. If kPresent is true, then
                if (kPresent) {
                    // i. Let kValue be ? Get(O, Pk).
                    var kValue = Get(arraylike, Pk);
                    // ii. Perform ? Call(callbackfn, T, « kValue, k, O »).
                    Call(callbackfn, T, [kValue, k, O]);
                }
                // d. Increase k by 1.
                k = k + 1;
            }
            // 7. Return undefined.
            return undefined;
        });

    }

    if (!("forEach" in NodeList.prototype)) {

        // NodeList.prototype.forEach
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    if (!("includes" in Array.prototype)) {

        // Array.prototype.includes
        /* global CreateMethodProperty, Get, SameValueZero, ToInteger, ToLength, ToObject, ToString */
        // 22.1.3.11. Array.prototype.includes ( searchElement [ , fromIndex ] )
        CreateMethodProperty(Array.prototype, 'includes', function includes(searchElement /* [ , fromIndex ] */ ) {
            'use strict';
            // 1. Let O be ? ToObject(this value).
            var O = ToObject(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = ToLength(Get(O, "length"));
            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }
            // 4. Let n be ? ToInteger(fromIndex). (If fromIndex is undefined, this step produces the value 0.)
            var n = ToInteger(arguments[1]);
            // 5. If n ≥ 0, then
            if (n >= 0) {
                // a. Let k be n.
                var k = n;
                // 6. Else n < 0,
            } else {
                // a. Let k be len + n.
                k = len + n;
                // b. If k < 0, let k be 0.
                if (k < 0) {
                    k = 0;
                }
            }
            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                var elementK = Get(O, ToString(k));
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                if (SameValueZero(searchElement, elementK)) {
                    return true;
                }
                // c. Increase k by 1.
                k = k + 1;
            }
            // 8. Return false.
            return false;
        });

    }

    if (!("indexOf" in Array.prototype)) {

        // Array.prototype.indexOf
        /* global CreateMethodProperty, Get, HasProperty, ToInteger, ToLength, ToObject, ToString */
        // 22.1.3.12. Array.prototype.indexOf ( searchElement [ , fromIndex ] )
        CreateMethodProperty(Array.prototype, 'indexOf', function indexOf(searchElement /* [ , fromIndex ] */ ) {
            // 1. Let O be ? ToObject(this value).
            var O = ToObject(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = ToLength(Get(O, "length"));
            // 3. If len is 0, return -1.
            if (len === 0) {
                return -1;
            }
            // 4. Let n be ? ToInteger(fromIndex). (If fromIndex is undefined, this step produces the value 0.)
            var n = ToInteger(arguments[1]);
            // 5. If n ≥ len, return -1.
            if (n >= len) {
                return -1;
            }
            // 6. If n ≥ 0, then
            if (n >= 0) {
                // a. If n is -0, let k be +0; else let k be n.
                var k = 1 / n === -Infinity ? 0 : n;
                // 7. Else n < 0,
            } else {
                // a. Let k be len + n.
                k = len + n;
                // b. If k < 0, let k be 0.
                if (k < 0) {
                    k = 0;
                }
            }
            // 8. Repeat, while k < len
            while (k < len) {
                // a. Let kPresent be ? HasProperty(O, ! ToString(k)).
                var kPresent = HasProperty(O, ToString(k));
                // b. If kPresent is true, then
                if (kPresent) {
                    // i. Let elementK be ? Get(O, ! ToString(k)).
                    var elementK = Get(O, ToString(k));
                    // ii. Let same be the result of performing Strict Equality Comparison searchElement === elementK.
                    var same = searchElement === elementK;
                    // iii. If same is true, return k.
                    if (same) {
                        return k;
                    }
                }
                // c. Increase k by 1.
                k = k + 1;
            }
            // 9. Return -1.
            return -1;
        });

    }

    if (!("some" in Array.prototype)) {

        // Array.prototype.some
        /* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToBoolean, ToLength, ToObject, ToString */
        // 22.1.3.24. Array.prototype.some ( callbackfn [ , thisArg ] )
        CreateMethodProperty(Array.prototype, 'some', function some(callbackfn /* [ , thisArg ] */ ) {
            // 1. Let O be ? ToObject(this value).
            var O = ToObject(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = ToLength(Get(O, "length"));
            // 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
            if (IsCallable(callbackfn) === false) {
                throw new TypeError(callbackfn + ' is not a function');
            }
            // 4. If thisArg is present, let T be thisArg; else let T be undefined.
            var T = arguments.length > 1 ? arguments[1] : undefined;
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                var Pk = ToString(k);
                // b. Let kPresent be ? HasProperty(O, Pk).
                var kPresent = HasProperty(O, Pk);
                // c. If kPresent is true, then
                if (kPresent) {
                    // i. Let kValue be ? Get(O, Pk).
                    var kValue = Get(O, Pk);
                    // ii. Let testResult be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
                    var testResult = ToBoolean(Call(callbackfn, T, [kValue, k, O]));
                    // iii. If testResult is true, return true.
                    if (testResult) {
                        return true;
                    }
                }
                // d. Increase k by 1.
                k = k + 1;
            }
            // 7. Return false.
            return false;
        });

    }

    if (!("bind" in Function.prototype)) {

        // Function.prototype.bind
        /* global CreateMethodProperty, IsCallable */
        // 19.2.3.2. Function.prototype.bind ( thisArg, ...args )
        // https://github.com/es-shims/es5-shim/blob/d6d7ff1b131c7ba14c798cafc598bb6780d37d3b/es5-shim.js#L182
        CreateMethodProperty(Function.prototype, 'bind', function bind(that) { // .length is 1
            // add necessary es5-shim utilities
            var $Array = Array;
            var $Object = Object;
            var ArrayPrototype = $Array.prototype;
            var Empty = function Empty() {};
            var array_slice = ArrayPrototype.slice;
            var array_concat = ArrayPrototype.concat;
            var array_push = ArrayPrototype.push;
            var max = Math.max;
            // /add necessary es5-shim utilities

            // 1. Let Target be the this value.
            var target = this;
            // 2. If IsCallable(Target) is false, throw a TypeError exception.
            if (!IsCallable(target)) {
                throw new TypeError('Function.prototype.bind called on incompatible ' + target);
            }
            // 3. Let A be a new (possibly empty) internal list of all of the
            //   argument values provided after thisArg (arg1, arg2 etc), in order.
            // XXX slicedArgs will stand in for "A" if used
            var args = array_slice.call(arguments, 1); // for normal call
            // 4. Let F be a new native ECMAScript object.
            // 11. Set the [[Prototype]] internal property of F to the standard
            //   built-in Function prototype object as specified in 15.3.3.1.
            // 12. Set the [[Call]] internal property of F as described in
            //   15.3.4.5.1.
            // 13. Set the [[Construct]] internal property of F as described in
            //   15.3.4.5.2.
            // 14. Set the [[HasInstance]] internal property of F as described in
            //   15.3.4.5.3.
            var bound;
            var binder = function() {

                if (this instanceof bound) {
                    // 15.3.4.5.2 [[Construct]]
                    // When the [[Construct]] internal method of a function object,
                    // F that was created using the bind function is called with a
                    // list of arguments ExtraArgs, the following steps are taken:
                    // 1. Let target be the value of F's [[TargetFunction]]
                    //   internal property.
                    // 2. If target has no [[Construct]] internal method, a
                    //   TypeError exception is thrown.
                    // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                    //   property.
                    // 4. Let args be a new list containing the same values as the
                    //   list boundArgs in the same order followed by the same
                    //   values as the list ExtraArgs in the same order.
                    // 5. Return the result of calling the [[Construct]] internal
                    //   method of target providing args as the arguments.

                    var result = target.apply(
                        this,
                        array_concat.call(args, array_slice.call(arguments))
                    );
                    if ($Object(result) === result) {
                        return result;
                    }
                    return this;

                } else {
                    // 15.3.4.5.1 [[Call]]
                    // When the [[Call]] internal method of a function object, F,
                    // which was created using the bind function is called with a
                    // this value and a list of arguments ExtraArgs, the following
                    // steps are taken:
                    // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                    //   property.
                    // 2. Let boundThis be the value of F's [[BoundThis]] internal
                    //   property.
                    // 3. Let target be the value of F's [[TargetFunction]] internal
                    //   property.
                    // 4. Let args be a new list containing the same values as the
                    //   list boundArgs in the same order followed by the same
                    //   values as the list ExtraArgs in the same order.
                    // 5. Return the result of calling the [[Call]] internal method
                    //   of target providing boundThis as the this value and
                    //   providing args as the arguments.

                    // equiv: target.call(this, ...boundArgs, ...args)
                    return target.apply(
                        that,
                        array_concat.call(args, array_slice.call(arguments))
                    );

                }

            };

            // 15. If the [[Class]] internal property of Target is "Function", then
            //     a. Let L be the length property of Target minus the length of A.
            //     b. Set the length own property of F to either 0 or L, whichever is
            //       larger.
            // 16. Else set the length own property of F to 0.

            var boundLength = max(0, target.length - args.length);

            // 17. Set the attributes of the length own property of F to the values
            //   specified in 15.3.5.1.
            var boundArgs = [];
            for (var i = 0; i < boundLength; i++) {
                array_push.call(boundArgs, '$' + i);
            }

            // XXX Build a dynamic function with desired amount of arguments is the only
            // way to set the length property of a function.
            // In environments where Content Security Policies enabled (Chrome extensions,
            // for ex.) all use of eval or Function costructor throws an exception.
            // However in all of these environments Function.prototype.bind exists
            // and so this code will never be executed.
            bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

            if (target.prototype) {
                Empty.prototype = target.prototype;
                bound.prototype = new Empty();
                // Clean up dangling references.
                Empty.prototype = null;
            }

            // TODO
            // 18. Set the [[Extensible]] internal property of F to true.

            // TODO
            // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
            // 20. Call the [[DefineOwnProperty]] internal method of F with
            //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
            //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
            //   false.
            // 21. Call the [[DefineOwnProperty]] internal method of F with
            //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
            //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
            //   and false.

            // TODO
            // NOTE Function objects created using Function.prototype.bind do not
            // have a prototype property or the [[Code]], [[FormalParameters]], and
            // [[Scope]] internal properties.
            // XXX can't delete prototype in pure-js.

            // 22. Return F.
            return bound;
        });

    }

    if (!("getOwnPropertyDescriptor" in Object && "function" == typeof Object.getOwnPropertyDescriptor && function() {
            try {
                return "3" === Object.getOwnPropertyDescriptor("13.7", 1).value
            } catch (t) {
                return !1
            }
        }())) {

        // Object.getOwnPropertyDescriptor
        /* global CreateMethodProperty, ToObject, ToPropertyKey, HasOwnProperty, Type */
        (function() {
            var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

            var supportsDOMDescriptors = (function() {
                try {
                    return Object.defineProperty(document.createElement('div'), 'one', {
                        get: function() {
                            return 1;
                        }
                    }).one === 1;
                } catch (e) {
                    return false;
                }
            });

            var toString = ({}).toString;
            var split = ''.split;

            // 19.1.2.8 Object.getOwnPropertyDescriptor ( O, P )
            CreateMethodProperty(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(O, P) {
                // 1. Let obj be ? ToObject(O).
                var obj = ToObject(O);
                // Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
                obj = (Type(obj) === 'string' || obj instanceof String) && toString.call(O) == '[object String]' ? split.call(O, '') : Object(O);

                // 2. Let key be ? ToPropertyKey(P).
                var key = ToPropertyKey(P);

                // 3. Let desc be ? obj.[[GetOwnProperty]](key).
                // 4. Return FromPropertyDescriptor(desc). 
                // Polyfill.io Internet Explorer 8 natively supports property descriptors only on DOM objects.
                // We will fallback to the polyfill implementation if the native implementation throws an error.
                if (supportsDOMDescriptors) {
                    try {
                        return nativeGetOwnPropertyDescriptor(obj, key);
                        // eslint-disable-next-line no-empty
                    } catch (error) {}
                }
                if (HasOwnProperty(obj, key)) {
                    return {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: obj[key]
                    };
                }
            });
        }());

    }

    if (!("getPrototypeOf" in Object)) {

        // Object.getPrototypeOf
        /* global CreateMethodProperty */
        // Based on: https://github.com/es-shims/es5-shim/blob/master/es5-sham.js

        // https://github.com/es-shims/es5-shim/issues#issue/2
        // http://ejohn.org/blog/objectgetprototypeof/
        // recommended by fschaefer on github
        //
        // sure, and webreflection says ^_^
        // ... this will nerever possibly return null
        // ... Opera Mini breaks here with infinite loops
        CreateMethodProperty(Object, 'getPrototypeOf', function getPrototypeOf(object) {
            if (object !== Object(object)) {
                throw new TypeError('Object.getPrototypeOf called on non-object');
            }
            var proto = object.__proto__;
            if (proto || proto === null) {
                return proto;
            } else if (typeof object.constructor == 'function' && object instanceof object.constructor) {
                return object.constructor.prototype;
            } else if (object instanceof Object) {
                return Object.prototype;
            } else {
                // Correctly return null for Objects created with `Object.create(null)`
                // (shammed or native) or `{ __proto__: null}`.  Also returns null for
                // cross-realm objects on browsers that lack `__proto__` support (like
                // IE <11), but that's the best we can do.
                return null;
            }
        });

    }

    if (!("keys" in Object && function() {
            return 2 === Object.keys(arguments).length
        }(1, 2) && function() {
            try {
                return Object.keys(""), !0
            } catch (t) {
                return !1
            }
        }())) {

        // Object.keys
        /* global CreateMethodProperty */
        CreateMethodProperty(Object, "keys", (function() {
            'use strict';

            // modified from https://github.com/es-shims/object-keys

            var has = Object.prototype.hasOwnProperty;
            var toStr = Object.prototype.toString;
            var isEnumerable = Object.prototype.propertyIsEnumerable;
            var hasDontEnumBug = !isEnumerable.call({
                toString: null
            }, 'toString');
            var hasProtoEnumBug = isEnumerable.call(function() {}, 'prototype');
            var dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ];
            var equalsConstructorPrototype = function(o) {
                var ctor = o.constructor;
                return ctor && ctor.prototype === o;
            };
            var excludedKeys = {
                $console: true,
                $external: true,
                $frame: true,
                $frameElement: true,
                $frames: true,
                $innerHeight: true,
                $innerWidth: true,
                $outerHeight: true,
                $outerWidth: true,
                $pageXOffset: true,
                $pageYOffset: true,
                $parent: true,
                $scrollLeft: true,
                $scrollTop: true,
                $scrollX: true,
                $scrollY: true,
                $self: true,
                $webkitIndexedDB: true,
                $webkitStorageInfo: true,
                $window: true
            };
            var hasAutomationEqualityBug = (function() {
                if (typeof window === 'undefined') {
                    return false;
                }
                for (var k in window) {
                    try {
                        if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
                            try {
                                equalsConstructorPrototype(window[k]);
                            } catch (e) {
                                return true;
                            }
                        }
                    } catch (e) {
                        return true;
                    }
                }
                return false;
            }());
            var equalsConstructorPrototypeIfNotBuggy = function(o) {
                if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
                    return equalsConstructorPrototype(o);
                }
                try {
                    return equalsConstructorPrototype(o);
                } catch (e) {
                    return false;
                }
            };

            function isArgumentsObject(value) {
                var str = toStr.call(value);
                var isArgs = str === '[object Arguments]';
                if (!isArgs) {
                    isArgs = str !== '[object Array]' &&
                        value !== null &&
                        typeof value === 'object' &&
                        typeof value.length === 'number' &&
                        value.length >= 0 &&
                        toStr.call(value.callee) === '[object Function]';
                }
                return isArgs;
            }

            return function keys(object) {
                var isFunction = toStr.call(object) === '[object Function]';
                var isArguments = isArgumentsObject(object);
                var isString = toStr.call(object) === '[object String]';
                var theKeys = [];

                if (object === undefined || object === null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var skipProto = hasProtoEnumBug && isFunction;
                if (isString && object.length > 0 && !has.call(object, 0)) {
                    for (var i = 0; i < object.length; ++i) {
                        theKeys.push(String(i));
                    }
                }

                if (isArguments && object.length > 0) {
                    for (var j = 0; j < object.length; ++j) {
                        theKeys.push(String(j));
                    }
                } else {
                    for (var name in object) {
                        if (!(skipProto && name === 'prototype') && has.call(object, name)) {
                            theKeys.push(String(name));
                        }
                    }
                }

                if (hasDontEnumBug) {
                    var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

                    for (var k = 0; k < dontEnums.length; ++k) {
                        if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
                            theKeys.push(dontEnums[k]);
                        }
                    }
                }
                return theKeys;
            };
        }()));

    }

    if (!("defineProperties" in Object)) {

        // Object.defineProperties
        /* global CreateMethodProperty, Get, ToObject, Type */
        // 19.1.2.3. Object.defineProperties ( O, Properties )
        CreateMethodProperty(Object, 'defineProperties', function defineProperties(O, Properties) {
            // 1. If Type(O) is not Object, throw a TypeError exception.
            if (Type(O) !== 'object') {
                throw new TypeError('Object.defineProperties called on non-object');
            }
            // 2. Let props be ? ToObject(Properties).
            var props = ToObject(Properties);
            // 3. Let keys be ? props.[[OwnPropertyKeys]]().
            /*
            	Polyfill.io - This step in our polyfill is not complying with the specification.
            	[[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
            	TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
            */
            var keys = Object.keys(props);
            // 4. Let descriptors be a new empty List.
            var descriptors = [];
            // 5. For each element nextKey of keys in List order, do
            for (var i = 0; i < keys.length; i++) {
                var nextKey = keys[i];
                // a. Let propDesc be ? props.[[GetOwnProperty]](nextKey).
                var propDesc = Object.getOwnPropertyDescriptor(props, nextKey);
                // b. If propDesc is not undefined and propDesc.[[Enumerable]] is true, then
                if (propDesc !== undefined && propDesc.enumerable) {
                    // i. Let descObj be ? Get(props, nextKey).
                    var descObj = Get(props, nextKey);
                    // ii. Let desc be ? ToPropertyDescriptor(descObj).
                    // Polyfill.io - We skip this step because Object.defineProperty deals with it.
                    // TODO: Implement this step?
                    var desc = descObj;
                    // iii. Append the pair (a two element List) consisting of nextKey and desc to the end of descriptors.
                    descriptors.push([nextKey, desc]);
                }
            }
            // 6. For each pair from descriptors in list order, do
            for (var j = 0; j < descriptors.length; j++) {
                // a. Let P be the first element of pair.
                var P = descriptors[j][0];
                // b. Let desc be the second element of pair.
                desc = descriptors[j][1];
                // c. Perform ? DefinePropertyOrThrow(O, P, desc).
                Object.defineProperty(O, P, desc);
            }
            // 7. Return O.
            return O;
        });

    }

    if (!("create" in Object)) {

        // Object.create
        /* global CreateMethodProperty, Type */
        (function() {
            var supportsProto = !({
                    __proto__: null
                }
                instanceof Object);
            if (supportsProto) {
                var createEmpty = function() {
                    return {
                        __proto__: null
                    };
                };
            } else {
                // Taken from https://github.com/es-shims/es5-shim/blob/a265a136d6220146cfbb09026c2de1fa42e220ec/es5-sham.js#L247
                // In old IE __proto__ can't be used to manually set `null`, nor does
                // any other method exist to make an object that inherits from nothing,
                // aside from Object.prototype itself. Instead, create a new global
                // object and *steal* its Object.prototype and strip it bare. This is
                // used as the prototype to create nullary objects.
                createEmpty = function() {
                    // Determine which approach to use
                    // see https://github.com/es-shims/es5-shim/issues/150
                    var iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    var parent = document.body || document.documentElement;
                    parent.appendChild(iframe);
                    iframe.src = 'javascript:';
                    var empty = iframe.contentWindow.Object.prototype;
                    parent.removeChild(iframe);
                    iframe = null;
                    delete empty.constructor;
                    delete empty.hasOwnProperty;
                    delete empty.propertyIsEnumerable;
                    delete empty.isPrototypeOf;
                    delete empty.toLocaleString;
                    delete empty.toString;
                    delete empty.valueOf;
                    var Empty = function Empty() {};
                    Empty.prototype = empty;
                    // short-circuit future calls
                    createEmpty = function() {
                        return new Empty();
                    };
                    return new Empty();
                };
            }

            function T() {}

            CreateMethodProperty(Object, 'create', function create(O, properties) {
                // 1. If Type(O) is neither Object nor Null, throw a TypeError exception.
                if (Type(O) !== 'object' && Type(O) !== 'null') {
                    throw new TypeError('Object prototype may only be an Object or null');
                }
                if (Type(O) === 'null') {
                    var obj = createEmpty();
                } else {
                    // 2. Let obj be ObjectCreate(O).
                    T.prototype = O;
                    obj = new T();
                    obj.__proto__ = O;


                    obj.constructor.prototype = O;
                    obj.__proto__ = O;
                }

                // 3. If Properties is not undefined, then
                if (1 in arguments) {
                    // a. Return ? ObjectDefineProperties(obj, Properties).
                    return Object.defineProperties(obj, properties);
                }

                return obj;
            });
        }());
    }


    // _ESAbstract.OrdinaryCreateFromConstructor
    /* global GetPrototypeFromConstructor */
    // 9.1.13. OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )
    function OrdinaryCreateFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
        var internalSlotsList = arguments[2] || {};
        // 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object.
        // The corresponding object must be an intrinsic that is intended to be used as the[[Prototype]] value of an object.

        // 2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
        var proto = GetPrototypeFromConstructor(constructor, intrinsicDefaultProto);

        // 3. Return ObjectCreate(proto, internalSlotsList).
        // Polyfill.io - We do not pass internalSlotsList to Object.create because Object.create does not use the default ordinary object definitions specified in 9.1.
        var obj = Object.create(proto);
        for (var name in internalSlotsList) {
            if (Object.prototype.hasOwnProperty.call(internalSlotsList, name)) {
                Object.defineProperty(obj, name, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: internalSlotsList[name]
                });
            }
        }
        return obj;
    }

    // _ESAbstract.Construct
    /* global IsConstructor, OrdinaryCreateFromConstructor, Call */
    // 7.3.13. Construct ( F [ , argumentsList [ , newTarget ]] )
    function Construct(F /* [ , argumentsList [ , newTarget ]] */ ) { // eslint-disable-line no-unused-vars
        // 1. If newTarget is not present, set newTarget to F.
        var newTarget = arguments.length > 2 ? arguments[2] : F;

        // 2. If argumentsList is not present, set argumentsList to a new empty List.
        var argumentsList = arguments.length > 1 ? arguments[1] : [];

        // 3. Assert: IsConstructor(F) is true.
        if (!IsConstructor(F)) {
            throw new TypeError('F must be a constructor.');
        }

        // 4. Assert: IsConstructor(newTarget) is true.
        if (!IsConstructor(newTarget)) {
            throw new TypeError('newTarget must be a constructor.');
        }

        // 5. Return ? F.[[Construct]](argumentsList, newTarget).
        // Polyfill.io - If newTarget is the same as F, it is equivalent to new F(...argumentsList).
        if (newTarget === F) {
            return new(Function.prototype.bind.apply(F, [null].concat(argumentsList)))();
        } else {
            // Polyfill.io - This is mimicking section 9.2.2 step 5.a.
            var obj = OrdinaryCreateFromConstructor(newTarget, Object.prototype);
            return Call(F, obj, argumentsList);
        }
    }

    // _ESAbstract.ArraySpeciesCreate
    /* global IsArray, ArrayCreate, Get, Type, IsConstructor, Construct */
    // 9.4.2.3. ArraySpeciesCreate ( originalArray, length )
    function ArraySpeciesCreate(originalArray, length) { // eslint-disable-line no-unused-vars
        // 1. Assert: length is an integer Number ≥ 0.
        // 2. If length is -0, set length to +0.
        if (length === 0 && 1 / length === -Infinity) {
            length = 0;
        }

        // 3. Let isArray be ? IsArray(originalArray).
        var isArray = IsArray(originalArray);

        // 4. If isArray is false, return ? ArrayCreate(length).
        if (isArray === false) {
            return ArrayCreate(length);
        }

        // 5. Let C be ? Get(originalArray, "constructor").
        var C = Get(originalArray, 'constructor');

        // Polyfill.io - We skip this section as not sure how to make a cross-realm normal Array, a same-realm Array.
        // 6. If IsConstructor(C) is true, then
        // if (IsConstructor(C)) {
        // a. Let thisRealm be the current Realm Record.
        // b. Let realmC be ? GetFunctionRealm(C).
        // c. If thisRealm and realmC are not the same Realm Record, then
        // i. If SameValue(C, realmC.[[Intrinsics]].[[%Array%]]) is true, set C to undefined.
        // }
        // 7. If Type(C) is Object, then
        if (Type(C) === 'object') {
            // a. Set C to ? Get(C, @@species).
            C = 'Symbol' in self && 'species' in self.Symbol ? Get(C, self.Symbol.species) : undefined;
            // b. If C is null, set C to undefined.
            if (C === null) {
                C = undefined;
            }
        }
        // 8. If C is undefined, return ? ArrayCreate(length).
        if (C === undefined) {
            return ArrayCreate(length);
        }
        // 9. If IsConstructor(C) is false, throw a TypeError exception.
        if (!IsConstructor(C)) {
            throw new TypeError('C must be a constructor');
        }
        // 10. Return ? Construct(C, « length »).
        return Construct(C, [length]);
    }
    if (!("filter" in Array.prototype)) {

        // Array.prototype.filter
        /* global CreateMethodProperty, ToObject, ToLength, Get, IsCallable, ArraySpeciesCreate, ToString, HasProperty, ToBoolean, Call, CreateDataPropertyOrThrow */
        // 22.1.3.7. Array.prototype.filter ( callbackfn [ , thisArg ] )
        CreateMethodProperty(Array.prototype, 'filter', function filter(callbackfn /* [ , thisArg ] */ ) {
            // 1. Let O be ? ToObject(this value).
            var O = ToObject(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = ToLength(Get(O, "length"));
            // 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
            if (IsCallable(callbackfn) === false) {
                throw new TypeError(callbackfn + ' is not a function');
            }
            // 4. If thisArg is present, let T be thisArg; else let T be undefined.
            var T = arguments.length > 1 ? arguments[1] : undefined;
            // 5. Let A be ? ArraySpeciesCreate(O, 0).
            var A = ArraySpeciesCreate(O, 0);
            // 6. Let k be 0.
            var k = 0;
            // 7. Let to be 0.
            var to = 0;
            // 8. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                var Pk = ToString(k);
                // b. Let kPresent be ? HasProperty(O, Pk).
                var kPresent = HasProperty(O, Pk);
                // c. If kPresent is true, then
                if (kPresent) {
                    // i. Let kValue be ? Get(O, Pk).
                    var kValue = Get(O, Pk);
                    // ii. Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
                    var selected = ToBoolean(Call(callbackfn, T, [kValue, k, O]));
                    // iii. If selected is true, then
                    if (selected) {
                        // 1. Perform ? CreateDataPropertyOrThrow(A, ! ToString(to), kValue)
                        CreateDataPropertyOrThrow(A, ToString(to), kValue);
                        // 2. Increase to by 1.
                        to = to + 1;
                    }

                }
                // d. Increase k by 1.
                k = k + 1;
            }
            // 9. Return A.
            return A;
        });

    }

    if (!("map" in Array.prototype)) {

        // Array.prototype.map
        /* global ArraySpeciesCreate, Call, CreateDataPropertyOrThrow, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
        // 22.1.3.16. Array.prototype.map ( callbackfn [ , thisArg ] )
        CreateMethodProperty(Array.prototype, 'map', function map(callbackfn /* [ , thisArg ] */ ) {
            // 1. Let O be ? ToObject(this value).
            var O = ToObject(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = ToLength(Get(O, "length"));
            // 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
            if (IsCallable(callbackfn) === false) {
                throw new TypeError(callbackfn + ' is not a function');
            }
            // 4. If thisArg is present, let T be thisArg; else let T be undefined.
            var T = arguments.length > 1 ? arguments[1] : undefined;
            // 5. Let A be ? ArraySpeciesCreate(O, len).
            var A = ArraySpeciesCreate(O, len);
            // 6. Let k be 0.
            var k = 0;
            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                var Pk = ToString(k);
                // b. Let kPresent be ? HasProperty(O, Pk).
                var kPresent = HasProperty(O, Pk);
                // c. If kPresent is true, then
                if (kPresent) {
                    // i. Let kValue be ? Get(O, Pk).
                    var kValue = Get(O, Pk);
                    // ii. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
                    var mappedValue = Call(callbackfn, T, [kValue, k, O]);
                    // iii. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
                    CreateDataPropertyOrThrow(A, Pk, mappedValue);
                }
                // d. Increase k by 1.
                k = k + 1;
            }
            // 8. Return A.
            return A;
        });

    }

    if (!("performance" in self && "now" in self.performance)) {

        // performance.now
        (function(global) {

            var startTime = Date.now();

            if (!global.performance) {
                global.performance = {};
            }

            global.performance.now = function() {
                return Date.now() - startTime;
            };

        }(self));

    }

    if (!("requestAnimationFrame" in self)) {

        // requestAnimationFrame
        (function(global) {
            var rafPrefix;

            // do not inject RAF in order to avoid broken performance
            var nowOffset = Date.now();

            // use performance api if exist, otherwise use Date.now.
            // Date.now polyfill required.
            var pnow = function() {
                if (global.performance && typeof global.performance.now === 'function') {
                    return global.performance.now();
                }
                // fallback
                return Date.now() - nowOffset;
            };

            if ('mozRequestAnimationFrame' in global) {
                rafPrefix = 'moz';

            } else if ('webkitRequestAnimationFrame' in global) {
                rafPrefix = 'webkit';

            }

            if (rafPrefix) {
                global.requestAnimationFrame = function(callback) {
                    return global[rafPrefix + 'RequestAnimationFrame'](function() {
                        callback(pnow());
                    });
                };
                global.cancelAnimationFrame = global[rafPrefix + 'CancelAnimationFrame'];
            } else {

                var lastTime = Date.now();

                global.requestAnimationFrame = function(callback) {
                    if (typeof callback !== 'function') {
                        throw new TypeError(callback + ' is not a function');
                    }

                    var
                        currentTime = Date.now(),
                        delay = 16 + lastTime - currentTime;

                    if (delay < 0) {
                        delay = 0;
                    }

                    lastTime = currentTime;

                    return setTimeout(function() {
                        lastTime = Date.now();

                        callback(pnow());
                    }, delay);
                };

                global.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
            }
        }(self));

    }

    if (!("Window" in self)) {

        // Window
        if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {
            (function(global) {
                if (global.constructor) {
                    global.Window = global.constructor;
                } else {
                    (global.Window = global.constructor = new Function('return function Window() {}')()).prototype = self;
                }
            }(self));
        }

    }

    if (!((function(n) {
            if (!("Event" in n)) return !1
            try {
                return new Event("click"), !0
            } catch (t) {
                return !1
            }
        })(self))) {

        // Event
        (function() {
            var unlistenableWindowEvents = {
                click: 1,
                dblclick: 1,
                keyup: 1,
                keypress: 1,
                keydown: 1,
                mousedown: 1,
                mouseup: 1,
                mousemove: 1,
                mouseover: 1,
                mouseenter: 1,
                mouseleave: 1,
                mouseout: 1,
                storage: 1,
                storagecommit: 1,
                textinput: 1
            };

            // This polyfill depends on availability of `document` so will not run in a worker
            // However, we asssume there are no browsers with worker support that lack proper
            // support for `Event` within the worker
            if (typeof document === 'undefined' || typeof window === 'undefined') return;

            var existingProto = (window.Event && window.Event.prototype) || null;

            function Event(type, eventInitDict) {
                if (!type) {
                    throw new Error('Not enough arguments');
                }

                var event;
                // Shortcut if browser supports createEvent
                if ('createEvent' in document) {
                    event = document.createEvent('Event');
                    var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
                    var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

                    event.initEvent(type, bubbles, cancelable);

                    return event;
                }

                event = document.createEventObject();

                event.type = type;
                event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
                event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

                return event;
            }
            Event.NONE = 0;
            Event.CAPTURING_PHASE = 1;
            Event.AT_TARGET = 2;
            Event.BUBBLING_PHASE = 3;
            window.Event = Window.prototype.Event = Event;
            if (existingProto) {
                Object.defineProperty(window.Event, 'prototype', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: existingProto
                });
            }

            if (!('createEvent' in document)) {
                window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
                    var
                        element = this,
                        type = arguments[0],
                        listener = arguments[1];

                    if (element === window && type in unlistenableWindowEvents) {
                        throw new Error('In IE8 the event: ' + type + ' is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.');
                    }

                    if (!element._events) {
                        element._events = {};
                    }

                    if (!element._events[type]) {
                        element._events[type] = function(event) {
                            var
                                list = element._events[event.type].list,
                                events = list.slice(),
                                index = -1,
                                length = events.length,
                                eventElement;

                            event.preventDefault = function preventDefault() {
                                if (event.cancelable !== false) {
                                    event.returnValue = false;
                                }
                            };

                            event.stopPropagation = function stopPropagation() {
                                event.cancelBubble = true;
                            };

                            event.stopImmediatePropagation = function stopImmediatePropagation() {
                                event.cancelBubble = true;
                                event.cancelImmediate = true;
                            };

                            event.currentTarget = element;
                            event.relatedTarget = event.fromElement || null;
                            event.target = event.target || event.srcElement || element;
                            event.timeStamp = new Date().getTime();

                            if (event.clientX) {
                                event.pageX = event.clientX + document.documentElement.scrollLeft;
                                event.pageY = event.clientY + document.documentElement.scrollTop;
                            }

                            while (++index < length && !event.cancelImmediate) {
                                if (index in events) {
                                    eventElement = events[index];

                                    if (list.includes(eventElement) && typeof eventElement === 'function') {
                                        eventElement.call(element, event);
                                    }
                                }
                            }
                        };

                        element._events[type].list = [];

                        if (element.attachEvent) {
                            element.attachEvent('on' + type, element._events[type]);
                        }
                    }

                    element._events[type].list.push(listener);
                };

                window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
                    var
                        element = this,
                        type = arguments[0],
                        listener = arguments[1],
                        index;

                    if (element._events && element._events[type] && element._events[type].list) {
                        index = element._events[type].list.indexOf(listener);

                        if (index !== -1) {
                            element._events[type].list.splice(index, 1);

                            if (!element._events[type].list.length) {
                                if (element.detachEvent) {
                                    element.detachEvent('on' + type, element._events[type]);
                                }
                                delete element._events[type];
                            }
                        }
                    }
                };

                window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
                    if (!arguments.length) {
                        throw new Error('Not enough arguments');
                    }

                    if (!event || typeof event.type !== 'string') {
                        throw new Error('DOM Events Exception 0');
                    }

                    var element = this,
                        type = event.type;

                    try {
                        if (!event.bubbles) {
                            event.cancelBubble = true;

                            var cancelBubbleEvent = function(event) {
                                event.cancelBubble = true;

                                (element || window).detachEvent('on' + type, cancelBubbleEvent);
                            };

                            this.attachEvent('on' + type, cancelBubbleEvent);
                        }

                        this.fireEvent('on' + type, event);
                    } catch (error) {
                        event.target = element;

                        do {
                            event.currentTarget = element;

                            if ('_events' in element && typeof element._events[type] === 'function') {
                                element._events[type].call(element, event);
                            }

                            if (typeof element['on' + type] === 'function') {
                                element['on' + type].call(element, event);
                            }

                            element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
                        } while (element && !event.cancelBubble);
                    }

                    return true;
                };

                // Add the DOMContentLoaded Event
                document.attachEvent('onreadystatechange', function() {
                    if (document.readyState === 'complete') {
                        document.dispatchEvent(new Event('DOMContentLoaded', {
                            bubbles: true
                        }));
                    }
                });
            }
        }());

    }

    if (!("getComputedStyle" in self)) {

        // getComputedStyle
        (function(global) {
            function getComputedStylePixel(element, property, fontSize) {
                var
                    // Internet Explorer sometimes struggles to read currentStyle until the element's document is accessed.
                    value = element.document && element.currentStyle[property].match(/([\d.]+)(%|cm|em|in|mm|pc|pt|)/) || [0, 0, ''],
                    size = value[1],
                    suffix = value[2],
                    rootSize;

                fontSize = !fontSize ? fontSize : /%|em/.test(suffix) && element.parentElement ? getComputedStylePixel(element.parentElement, 'fontSize', null) : 16;
                rootSize = property == 'fontSize' ? fontSize : /width/i.test(property) ? element.clientWidth : element.clientHeight;

                return suffix == '%' ? size / 100 * rootSize :
                    suffix == 'cm' ? size * 0.3937 * 96 :
                    suffix == 'em' ? size * fontSize :
                    suffix == 'in' ? size * 96 :
                    suffix == 'mm' ? size * 0.3937 * 96 / 10 :
                    suffix == 'pc' ? size * 12 * 96 / 72 :
                    suffix == 'pt' ? size * 96 / 72 :
                    size;
            }

            function setShortStyleProperty(style, property) {
                var
                    borderSuffix = property == 'border' ? 'Width' : '',
                    t = property + 'Top' + borderSuffix,
                    r = property + 'Right' + borderSuffix,
                    b = property + 'Bottom' + borderSuffix,
                    l = property + 'Left' + borderSuffix;

                style[property] = (style[t] == style[r] && style[t] == style[b] && style[t] == style[l] ? [style[t]] :
                    style[t] == style[b] && style[l] == style[r] ? [style[t], style[r]] :
                    style[l] == style[r] ? [style[t], style[r], style[b]] : [style[t], style[r], style[b], style[l]]).join(' ');
            }

            // <CSSStyleDeclaration>
            function CSSStyleDeclaration(element) {
                var
                    style = this,
                    currentStyle = element.currentStyle,
                    fontSize = getComputedStylePixel(element, 'fontSize'),
                    unCamelCase = function(match) {
                        return '-' + match.toLowerCase();
                    },
                    property;

                for (property in currentStyle) {
                    Array.prototype.push.call(style, property == 'styleFloat' ? 'float' : property.replace(/[A-Z]/, unCamelCase));

                    if (property == 'width') {
                        style[property] = element.offsetWidth + 'px';
                    } else if (property == 'height') {
                        style[property] = element.offsetHeight + 'px';
                    } else if (property == 'styleFloat') {
                        style["float"] = currentStyle[property];
                    } else if (/margin.|padding.|border.+W/.test(property) && style[property] != 'auto') {
                        style[property] = Math.round(getComputedStylePixel(element, property, fontSize)) + 'px';
                    } else if (/^outline/.test(property)) {
                        // errors on checking outline
                        try {
                            style[property] = currentStyle[property];
                        } catch (error) {
                            style.outlineColor = currentStyle.color;
                            style.outlineStyle = style.outlineStyle || 'none';
                            style.outlineWidth = style.outlineWidth || '0px';
                            style.outline = [style.outlineColor, style.outlineWidth, style.outlineStyle].join(' ');
                        }
                    } else {
                        style[property] = currentStyle[property];
                    }
                }

                setShortStyleProperty(style, 'margin');
                setShortStyleProperty(style, 'padding');
                setShortStyleProperty(style, 'border');

                style.fontSize = Math.round(fontSize) + 'px';
            }

            CSSStyleDeclaration.prototype = {
                constructor: CSSStyleDeclaration,
                // <CSSStyleDeclaration>.getPropertyPriority
                getPropertyPriority: function() {
                    throw new Error('NotSupportedError: DOM Exception 9');
                },
                // <CSSStyleDeclaration>.getPropertyValue
                getPropertyValue: function(property) {
                    return this[property.replace(/-\w/g, function(match) {
                        return match[1].toUpperCase();
                    })];
                },
                // <CSSStyleDeclaration>.item
                item: function(index) {
                    return this[index];
                },
                // <CSSStyleDeclaration>.removeProperty
                removeProperty: function() {
                    throw new Error('NoModificationAllowedError: DOM Exception 7');
                },
                // <CSSStyleDeclaration>.setProperty
                setProperty: function() {
                    throw new Error('NoModificationAllowedError: DOM Exception 7');
                },
                // <CSSStyleDeclaration>.getPropertyCSSValue
                getPropertyCSSValue: function() {
                    throw new Error('NotSupportedError: DOM Exception 9');
                }
            };

            // <Global>.getComputedStyle
            global.getComputedStyle = function getComputedStyle(element) {
                return new CSSStyleDeclaration(element);
            };
        }(self));

    }

    if (!("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {

        // IntersectionObserver
        /**
         * Copyright 2016 Google Inc. All Rights Reserved.
         *
         * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
         *
         *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
         *
         */

        (function(window, document) {
            'use strict';

            /**
             * An IntersectionObserver registry. This registry exists to hold a strong
             * reference to IntersectionObserver instances currently observing a target
             * element. Without this registry, instances without another reference may be
             * garbage collected.
             */
            var registry = [];


            /**
             * Creates the global IntersectionObserverEntry constructor.
             * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
             * @param {Object} entry A dictionary of instance properties.
             * @constructor
             */
            function IntersectionObserverEntry(entry) {
                this.time = entry.time;
                this.target = entry.target;
                this.rootBounds = entry.rootBounds;
                this.boundingClientRect = entry.boundingClientRect;
                this.intersectionRect = entry.intersectionRect || getEmptyRect();
                try {
                    this.isIntersecting = !!entry.intersectionRect;
                } catch (err) {
                    // This means we are using the IntersectionObserverEntry polyfill which has only defined a getter	
                }

                // Calculates the intersection ratio.
                var targetRect = this.boundingClientRect;
                var targetArea = targetRect.width * targetRect.height;
                var intersectionRect = this.intersectionRect;
                var intersectionArea = intersectionRect.width * intersectionRect.height;

                // Sets intersection ratio.
                if (targetArea) {
                    // Round the intersection ratio to avoid floating point math issues:
                    // https://github.com/w3c/IntersectionObserver/issues/324
                    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
                } else {
                    // If area is zero and is intersecting, sets to 1, otherwise to 0
                    this.intersectionRatio = this.isIntersecting ? 1 : 0;
                }
            }


            /**
             * Creates the global IntersectionObserver constructor.
             * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
             * @param {Function} callback The function to be invoked after intersection
             *     changes have queued. The function is not invoked if the queue has
             *     been emptied by calling the `takeRecords` method.
             * @param {Object=} opt_options Optional configuration options.
             * @constructor
             */
            function IntersectionObserver(callback, opt_options) {

                var options = opt_options || {};

                if (typeof callback != 'function') {
                    throw new Error('callback must be a function');
                }

                if (options.root && options.root.nodeType != 1) {
                    throw new Error('root must be an Element');
                }

                // Binds and throttles `this._checkForIntersections`.
                this._checkForIntersections = throttle(
                    this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

                // Private properties.
                this._callback = callback;
                this._observationTargets = [];
                this._queuedEntries = [];
                this._rootMarginValues = this._parseRootMargin(options.rootMargin);

                // Public properties.
                this.thresholds = this._initThresholds(options.threshold);
                this.root = options.root || null;
                this.rootMargin = this._rootMarginValues.map(function(margin) {
                    return margin.value + margin.unit;
                }).join(' ');
            }


            /**
             * The minimum interval within which the document will be checked for
             * intersection changes.
             */
            IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


            /**
             * The frequency in which the polyfill polls for intersection changes.
             * this can be updated on a per instance basis and must be set prior to
             * calling `observe` on the first target.
             */
            IntersectionObserver.prototype.POLL_INTERVAL = null;

            /**
             * Use a mutation observer on the root element
             * to detect intersection changes.
             */
            IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


            /**
             * Starts observing a target element for intersection changes based on
             * the thresholds values.
             * @param {Element} target The DOM element to observe.
             */
            IntersectionObserver.prototype.observe = function(target) {
                var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
                    return item.element == target;
                });

                if (isTargetAlreadyObserved) {
                    return;
                }

                if (!(target && target.nodeType == 1)) {
                    throw new Error('target must be an Element');
                }

                this._registerInstance();
                this._observationTargets.push({
                    element: target,
                    entry: null
                });
                this._monitorIntersections();
                this._checkForIntersections();
            };


            /**
             * Stops observing a target element for intersection changes.
             * @param {Element} target The DOM element to observe.
             */
            IntersectionObserver.prototype.unobserve = function(target) {
                this._observationTargets =
                    this._observationTargets.filter(function(item) {

                        return item.element != target;
                    });
                if (!this._observationTargets.length) {
                    this._unmonitorIntersections();
                    this._unregisterInstance();
                }
            };


            /**
             * Stops observing all target elements for intersection changes.
             */
            IntersectionObserver.prototype.disconnect = function() {
                this._observationTargets = [];
                this._unmonitorIntersections();
                this._unregisterInstance();
            };


            /**
             * Returns any queue entries that have not yet been reported to the
             * callback and clears the queue. This can be used in conjunction with the
             * callback to obtain the absolute most up-to-date intersection information.
             * @return {Array} The currently queued entries.
             */
            IntersectionObserver.prototype.takeRecords = function() {
                var records = this._queuedEntries.slice();
                this._queuedEntries = [];
                return records;
            };


            /**
             * Accepts the threshold value from the user configuration object and
             * returns a sorted array of unique threshold values. If a value is not
             * between 0 and 1 and error is thrown.
             * @private
             * @param {Array|number=} opt_threshold An optional threshold value or
             *     a list of threshold values, defaulting to [0].
             * @return {Array} A sorted list of unique and valid threshold values.
             */
            IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
                var threshold = opt_threshold || [0];
                if (!Array.isArray(threshold)) threshold = [threshold];

                return threshold.sort().filter(function(t, i, a) {
                    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
                        throw new Error('threshold must be a number between 0 and 1 inclusively');
                    }
                    return t !== a[i - 1];
                });
            };


            /**
             * Accepts the rootMargin value from the user configuration object
             * and returns an array of the four margin values as an object containing
             * the value and unit properties. If any of the values are not properly
             * formatted or use a unit other than px or %, and error is thrown.
             * @private
             * @param {string=} opt_rootMargin An optional rootMargin value,
             *     defaulting to '0px'.
             * @return {Array<Object>} An array of margin objects with the keys
             *     value and unit.
             */
            IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
                var marginString = opt_rootMargin || '0px';
                var margins = marginString.split(/\s+/).map(function(margin) {
                    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
                    if (!parts) {
                        throw new Error('rootMargin must be specified in pixels or percent');
                    }
                    return {
                        value: parseFloat(parts[1]),
                        unit: parts[2]
                    };
                });

                // Handles shorthand.
                margins[1] = margins[1] || margins[0];
                margins[2] = margins[2] || margins[0];
                margins[3] = margins[3] || margins[1];

                return margins;
            };


            /**
             * Starts polling for intersection changes if the polling is not already
             * happening, and if the page's visibility state is visible.
             * @private
             */
            IntersectionObserver.prototype._monitorIntersections = function() {
                if (!this._monitoringIntersections) {
                    this._monitoringIntersections = true;

                    // If a poll interval is set, use polling instead of listening to
                    // resize and scroll events or DOM mutations.
                    if (this.POLL_INTERVAL) {
                        this._monitoringInterval = setInterval(
                            this._checkForIntersections, this.POLL_INTERVAL);
                    } else {
                        addEvent(window, 'resize', this._checkForIntersections, true);
                        addEvent(document, 'scroll', this._checkForIntersections, true);

                        if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
                            this._domObserver = new MutationObserver(this._checkForIntersections);
                            this._domObserver.observe(document, {
                                attributes: true,
                                childList: true,
                                characterData: true,
                                subtree: true
                            });
                        }
                    }
                }
            };


            /**
             * Stops polling for intersection changes.
             * @private
             */
            IntersectionObserver.prototype._unmonitorIntersections = function() {
                if (this._monitoringIntersections) {
                    this._monitoringIntersections = false;

                    clearInterval(this._monitoringInterval);
                    this._monitoringInterval = null;

                    removeEvent(window, 'resize', this._checkForIntersections, true);
                    removeEvent(document, 'scroll', this._checkForIntersections, true);

                    if (this._domObserver) {
                        this._domObserver.disconnect();
                        this._domObserver = null;
                    }
                }
            };


            /**
             * Scans each observation target for intersection changes and adds them
             * to the internal entries queue. If new entries are found, it
             * schedules the callback to be invoked.
             * @private
             */
            IntersectionObserver.prototype._checkForIntersections = function() {
                var rootIsInDom = this._rootIsInDom();
                var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

                this._observationTargets.forEach(function(item) {
                    var target = item.element;
                    var targetRect = getBoundingClientRect(target);
                    var rootContainsTarget = this._rootContainsTarget(target);
                    var oldEntry = item.entry;
                    var intersectionRect = rootIsInDom && rootContainsTarget &&
                        this._computeTargetAndRootIntersection(target, rootRect);

                    var newEntry = item.entry = new IntersectionObserverEntry({
                        time: now(),
                        target: target,
                        boundingClientRect: targetRect,
                        rootBounds: rootRect,
                        intersectionRect: intersectionRect
                    });

                    if (!oldEntry) {
                        this._queuedEntries.push(newEntry);
                    } else if (rootIsInDom && rootContainsTarget) {
                        // If the new entry intersection ratio has crossed any of the
                        // thresholds, add a new entry.
                        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
                            this._queuedEntries.push(newEntry);
                        }
                    } else {
                        // If the root is not in the DOM or target is not contained within
                        // root but the previous entry for this target had an intersection,
                        // add a new record indicating removal.
                        if (oldEntry && oldEntry.isIntersecting) {
                            this._queuedEntries.push(newEntry);
                        }
                    }
                }, this);

                if (this._queuedEntries.length) {
                    this._callback(this.takeRecords(), this);
                }
            };


            /**
             * Accepts a target and root rect computes the intersection between then
             * following the algorithm in the spec.
             * TODO(philipwalton): at this time clip-path is not considered.
             * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
             * @param {Element} target The target DOM element
             * @param {Object} rootRect The bounding rect of the root after being
             *     expanded by the rootMargin value.
             * @return {?Object} The final intersection rect object or undefined if no
             *     intersection is found.
             * @private
             */
            IntersectionObserver.prototype._computeTargetAndRootIntersection =
                function(target, rootRect) {

                    // If the element isn't displayed, an intersection can't happen.
                    if (window.getComputedStyle(target).display == 'none') return;

                    var targetRect = getBoundingClientRect(target);
                    var intersectionRect = targetRect;
                    var parent = getParentNode(target);
                    var atRoot = false;

                    while (!atRoot) {
                        var parentRect = null;
                        var parentComputedStyle = parent.nodeType == 1 ?
                            window.getComputedStyle(parent) : {};

                        // If the parent isn't displayed, an intersection can't happen.
                        if (parentComputedStyle.display == 'none') return;

                        if (parent == this.root || parent == document) {
                            atRoot = true;
                            parentRect = rootRect;
                        } else {
                            // If the element has a non-visible overflow, and it's not the <body>
                            // or <html> element, update the intersection rect.
                            // Note: <body> and <html> cannot be clipped to a rect that's not also
                            // the document rect, so no need to compute a new intersection.
                            if (parent != document.body &&
                                parent != document.documentElement &&
                                parentComputedStyle.overflow != 'visible') {
                                parentRect = getBoundingClientRect(parent);
                            }
                        }

                        // If either of the above conditionals set a new parentRect,
                        // calculate new intersection data.
                        if (parentRect) {
                            intersectionRect = computeRectIntersection(parentRect, intersectionRect);

                            if (!intersectionRect) break;
                        }
                        parent = getParentNode(parent);
                    }
                    return intersectionRect;
                };


            /**
             * Returns the root rect after being expanded by the rootMargin value.
             * @return {Object} The expanded root rect.
             * @private
             */
            IntersectionObserver.prototype._getRootRect = function() {
                var rootRect;
                if (this.root) {
                    rootRect = getBoundingClientRect(this.root);
                } else {
                    // Use <html>/<body> instead of window since scroll bars affect size.
                    var html = document.documentElement;
                    var body = document.body;
                    rootRect = {
                        top: 0,
                        left: 0,
                        right: html.clientWidth || body.clientWidth,
                        width: html.clientWidth || body.clientWidth,
                        bottom: html.clientHeight || body.clientHeight,
                        height: html.clientHeight || body.clientHeight
                    };
                }
                return this._expandRectByRootMargin(rootRect);
            };


            /**
             * Accepts a rect and expands it by the rootMargin value.
             * @param {Object} rect The rect object to expand.
             * @return {Object} The expanded rect.
             * @private
             */
            IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
                var margins = this._rootMarginValues.map(function(margin, i) {
                    return margin.unit == 'px' ? margin.value :
                        margin.value * (i % 2 ? rect.width : rect.height) / 100;
                });
                var newRect = {
                    top: rect.top - margins[0],
                    right: rect.right + margins[1],
                    bottom: rect.bottom + margins[2],
                    left: rect.left - margins[3]
                };
                newRect.width = newRect.right - newRect.left;
                newRect.height = newRect.bottom - newRect.top;

                return newRect;
            };


            /**
             * Accepts an old and new entry and returns true if at least one of the
             * threshold values has been crossed.
             * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
             *    particular target element or null if no previous entry exists.
             * @param {IntersectionObserverEntry} newEntry The current entry for a
             *    particular target element.
             * @return {boolean} Returns true if a any threshold has been crossed.
             * @private
             */
            IntersectionObserver.prototype._hasCrossedThreshold =
                function(oldEntry, newEntry) {

                    // To make comparing easier, an entry that has a ratio of 0
                    // but does not actually intersect is given a value of -1
                    var oldRatio = oldEntry && oldEntry.isIntersecting ?
                        oldEntry.intersectionRatio || 0 : -1;
                    var newRatio = newEntry.isIntersecting ?
                        newEntry.intersectionRatio || 0 : -1;

                    // Ignore unchanged ratios
                    if (oldRatio === newRatio) return;

                    for (var i = 0; i < this.thresholds.length; i++) {
                        var threshold = this.thresholds[i];

                        // Return true if an entry matches a threshold or if the new ratio
                        // and the old ratio are on the opposite sides of a threshold.
                        if (threshold == oldRatio || threshold == newRatio ||
                            threshold < oldRatio !== threshold < newRatio) {
                            return true;
                        }
                    }
                };


            /**
             * Returns whether or not the root element is an element and is in the DOM.
             * @return {boolean} True if the root element is an element and is in the DOM.
             * @private
             */
            IntersectionObserver.prototype._rootIsInDom = function() {
                return !this.root || containsDeep(document, this.root);
            };


            /**
             * Returns whether or not the target element is a child of root.
             * @param {Element} target The target element to check.
             * @return {boolean} True if the target element is a child of root.
             * @private
             */
            IntersectionObserver.prototype._rootContainsTarget = function(target) {
                return containsDeep(this.root || document, target);
            };


            /**
             * Adds the instance to the global IntersectionObserver registry if it isn't
             * already present.
             * @private
             */
            IntersectionObserver.prototype._registerInstance = function() {
                if (registry.indexOf(this) < 0) {
                    registry.push(this);
                }
            };


            /**
             * Removes the instance from the global IntersectionObserver registry.
             * @private
             */
            IntersectionObserver.prototype._unregisterInstance = function() {
                var index = registry.indexOf(this);
                if (index != -1) registry.splice(index, 1);
            };


            /**
             * Returns the result of the performance.now() method or null in browsers
             * that don't support the API.
             * @return {number} The elapsed time since the page was requested.
             */
            function now() {
                return window.performance && performance.now && performance.now();
            }


            /**
             * Throttles a function and delays its execution, so it's only called at most
             * once within a given time period.
             * @param {Function} fn The function to throttle.
             * @param {number} timeout The amount of time that must pass before the
             *     function can be called again.
             * @return {Function} The throttled function.
             */
            function throttle(fn, timeout) {
                var timer = null;
                return function() {
                    if (!timer) {
                        timer = setTimeout(function() {
                            fn();
                            timer = null;
                        }, timeout);
                    }
                };
            }


            /**
             * Adds an event handler to a DOM node ensuring cross-browser compatibility.
             * @param {Node} node The DOM node to add the event handler to.
             * @param {string} event The event name.
             * @param {Function} fn The event handler to add.
             * @param {boolean} opt_useCapture Optionally adds the even to the capture
             *     phase. Note: this only works in modern browsers.
             */
            function addEvent(node, event, fn, opt_useCapture) {
                if (typeof node.addEventListener == 'function') {
                    node.addEventListener(event, fn, opt_useCapture || false);
                } else if (typeof node.attachEvent == 'function') {
                    node.attachEvent('on' + event, fn);
                }
            }


            /**
             * Removes a previously added event handler from a DOM node.
             * @param {Node} node The DOM node to remove the event handler from.
             * @param {string} event The event name.
             * @param {Function} fn The event handler to remove.
             * @param {boolean} opt_useCapture If the event handler was added with this
             *     flag set to true, it should be set to true here in order to remove it.
             */
            function removeEvent(node, event, fn, opt_useCapture) {
                if (typeof node.removeEventListener == 'function') {
                    node.removeEventListener(event, fn, opt_useCapture || false);
                } else if (typeof node.detatchEvent == 'function') {
                    node.detatchEvent('on' + event, fn);
                }
            }


            /**
             * Returns the intersection between two rect objects.
             * @param {Object} rect1 The first rect.
             * @param {Object} rect2 The second rect.
             * @return {?Object} The intersection rect or undefined if no intersection
             *     is found.
             */
            function computeRectIntersection(rect1, rect2) {
                var top = Math.max(rect1.top, rect2.top);
                var bottom = Math.min(rect1.bottom, rect2.bottom);
                var left = Math.max(rect1.left, rect2.left);
                var right = Math.min(rect1.right, rect2.right);
                var width = right - left;
                var height = bottom - top;

                return (width >= 0 && height >= 0) && {
                    top: top,
                    bottom: bottom,
                    left: left,
                    right: right,
                    width: width,
                    height: height
                };
            }


            /**
             * Shims the native getBoundingClientRect for compatibility with older IE.
             * @param {Element} el The element whose bounding rect to get.
             * @return {Object} The (possibly shimmed) rect of the element.
             */
            function getBoundingClientRect(el) {
                var rect;

                try {
                    rect = el.getBoundingClientRect();
                } catch (err) {
                    // Ignore Windows 7 IE11 "Unspecified error"
                    // https://github.com/w3c/IntersectionObserver/pull/205
                }

                if (!rect) return getEmptyRect();

                // Older IE
                if (!(rect.width && rect.height)) {
                    rect = {
                        top: rect.top,
                        right: rect.right,
                        bottom: rect.bottom,
                        left: rect.left,
                        width: rect.right - rect.left,
                        height: rect.bottom - rect.top
                    };
                }
                return rect;
            }


            /**
             * Returns an empty rect object. An empty rect is returned when an element
             * is not in the DOM.
             * @return {Object} The empty rect.
             */
            function getEmptyRect() {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                };
            }

            /**
             * Checks to see if a parent element contains a child element (including inside
             * shadow DOM).
             * @param {Node} parent The parent element.
             * @param {Node} child The child element.
             * @return {boolean} True if the parent node contains the child node.
             */
            function containsDeep(parent, child) {
                var node = child;
                while (node) {
                    if (node == parent) return true;

                    node = getParentNode(node);
                }
                return false;
            }


            /**
             * Gets the parent node of an element or its host element if the parent node
             * is a shadow root.
             * @param {Node} node The node whose parent to get.
             * @return {Node|null} The parent node or null if no parent exists.
             */
            function getParentNode(node) {
                var parent = node.parentNode;

                if (parent && parent.nodeType == 11 && parent.host) {
                    // If the parent is a shadow root, return the host element.
                    return parent.host;
                }

                if (parent && parent.assignedSlot) {
                    // If the parent is distributed in a <slot>, return the parent of a slot.
                    return parent.assignedSlot.parentNode;
                }

                return parent;
            }


            // Exposes the constructors globally.
            window.IntersectionObserver = IntersectionObserver;
            window.IntersectionObserverEntry = IntersectionObserverEntry;

        }(window, document));

    }

})
('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});