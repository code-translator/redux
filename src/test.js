function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => {
    console.log(a.toString())
    return (...args) => a(b(...args))
  })
}

let arrs = [ x => x * 2,  x => x * 2, x => x * 2]

console.log( compose(...arrs).toString() )
