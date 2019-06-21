const { FileBlob, shouldServe } = require('@now/build-utils'); // eslint-disable-line import/no-extraneous-dependencies
const AmpOptimizer = require('amp-toolbox-optimizer');

const ampOptimizer = AmpOptimizer.create();

exports.analyze = ({ files, entrypoint }) => files[entrypoint].digest;

exports.build = async ({ files, entrypoint }) => {
  const stream = files[entrypoint].toStream();
  const { data } = await FileBlob.fromStream({ stream });
  const content = data.toString();

  const optimized = ampOptimizer.transformHtml(content).then(optimizedContent => {
    console.log(optimizedContent);
    return optimizedContent;
  });

  console.log('Optimized' + optimized);
  const result = new FileBlob({ data: optimized });
  
  return { [entrypoint]: result };
};

exports.shouldServe = shouldServe;
