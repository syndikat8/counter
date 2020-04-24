export const save = (state) => {
  localStorage.setItem("counter", JSON.stringify(state))
}


export const restore = () => {
  return localStorage.getItem("counter")
}