export default defineEventHandler(async() => {
  const url :string = `https://www.reddit.com/r/ArsenalFC/.json`
  const data =  await $fetch(url)
  return data
})