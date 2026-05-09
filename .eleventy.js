module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/assets");

  return {
    dir: {
      input: "content",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};
