const { FileBlob, shouldServe } = require('@now/build-utils'); // eslint-disable-line import/no-extraneous-dependencies
const { AmpOptimizer } = require('amp-toolbox-optimizer');

// const defaultOptions = {
//   minifyCSS: true,
//   minifyJS: true,
//   removeComments: true,
//   removeAttributeQuotes: true,
//   removeEmptyAttributes: true,
//   removeOptionalTags: true,
//   removeRedundantAttributes: true,
//   useShortDoctype: true,
//   collapseWhitespace: true,
//   collapseBooleanAttributes: true,
//   caseSensitive: true,
// };

const ampOptimizer = AmpOptimizer.create();

exports.analyze = ({ files, entrypoint }) => files[entrypoint].digest;

exports.build = async ({ files, entrypoint, config }) => {
  const stream = files[entrypoint].toStream();
  const options = Object.assign({}, defaultOptions, config || {});
  const { data } = await FileBlob.fromStream({ stream });
  const content = data.toString();

  const optimized = ampOptimizer.transformHtml(content);
  const result = new FileBlob({ data: minified });

  return { [entrypoint]: result };
};

exports.shouldServe = shouldServe;
