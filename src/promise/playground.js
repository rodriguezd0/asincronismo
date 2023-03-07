export function delay(time, message) {
    const promesa = new Promise((resolve) => {
      window.setTimeout(() => { resolve(message) },time)
    })
    return promesa
  }