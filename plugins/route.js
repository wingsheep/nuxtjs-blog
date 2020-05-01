export default ({ app }) => {
  app.router.afterEach((to, from) => {
    console.log(to.path)
    if (process.client) {

    }
  })
}