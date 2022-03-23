const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function (eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    brandColour: '#012169',
    stylesheets: ['/assets/custom-styles.css'],
    header: {
      organisationName: 'DLUHC',
      organisationLogo: 'royal-arms',
      productName: 'Submit social housing lettings and sales data (CORE)',
    }
  })

  eleventyConfig.addPassthroughCopy("assets")

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: '.',
      // Use layouts from the plugin
      layouts: './node_modules/govuk-eleventy-plugin/layouts',
      includes: 'includes'
    }
  }
}