const { FileBlob, shouldServe } = require('@now/build-utils'); // eslint-disable-line import/no-extraneous-dependencies
const {JSO} = require('jsdom');

const ampOptimizer = AmpOptimizer.create();

exports.analyze = ({ files, entrypoint }) => files[entrypoint].digest;

exports.build = async ({ files, entrypoint }) => {
  const stream = files[entrypoint].toStream();
  const { data } = await FileBlob.fromStream({ stream });
  const content = data.toString();

  const result = await ampOptimizer.transformHtml(content).then(optimizedContent => {
    return new FileBlob({ data: optimizedContent });;
  });

  let sourceDom = new JSDOM(pageContent).window.document;

  el = sourceDom.querySelector("html");

  newEl = sourceDom.createElement('template');
  newEl.innerHTML = "<h1>TESTING 123</h1>";
  Array.from(newEl.content.childNodes).forEach((node) => {
    el.parentNode.insertBefore(node, el.nextSibling);
  });
  message = 'Dom appended';

  result = new FileBlob({ data: sourceDom.documentElement.innerHTML})
  return { [entrypoint]: result };
};

exports.shouldServe = shouldServe;


