export function execCallback(callback) {
    window.setTimeout(() => {
      return callback()
    },2000)
  }  