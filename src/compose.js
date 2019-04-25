/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }
  /*
    @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Parameters
    > Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error.
    // reduce 的函数签名
    ```js
      arr.reduce(callback[, initialValue])
    ```
    initialValue 不赋值的话，callback 只会调用 `length - 1` 次
    赋值就会调用 `length`次
    ```js
    [1, 2, 3].reduce( (acc, curr) => acc + curr ) ) // 6

    [1, 2, 3].reduce( (acc, curr) => a + curr ), 1 ) // 7
    ```
  */

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
