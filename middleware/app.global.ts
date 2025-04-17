export default defineNuxtRouteMiddleware((_to, _from) => {
  useHead({
    titleTemplate: (productCategory) => {
      return productCategory
        ? `${productCategory} - 喵落阁`
        : '喵落阁'
    },
  })
})
