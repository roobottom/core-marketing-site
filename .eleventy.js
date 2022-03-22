const govukEleventyPlugin = require('govuk-eleventy-plugin')
const md = require('./node_modules/govuk-eleventy-plugin/lib/markdown-it.js')

module.exports = function (eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    brandColour: '#012169',
    header: {
      organisationName: 'DLUHC',
      organisationLogo: 'royal-arms',
      productName: 'Submit social housing lettings and sales data (CORE)',
    }
  })

  eleventyConfig.addPassthroughCopy("assets")

  //render markdown in blocks
  eleventyConfig.addPairedShortcode("markdown", function (content) { 
    return md.render(content)
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: '.',
      // Use layouts from the plugin
      layouts: './node_modules/govuk-eleventy-plugin/layouts'
    }
  }
}