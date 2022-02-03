module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                @import "./src/styles/_variables.scss";
                @import "./src/styles/_breakpoints.scss";
            `
      }
    }
  }

}