const fs = require("fs");
const path = require("path");
const file = fs.readFileSync(
  path.join("api-reference", "openapi.json"),
  "utf8"
);
const fsExtra = require("fs-extra");
const parsed = JSON.parse(file);
const _ = require("lodash");

const paths = parsed.paths;

const getEndpointMdxContent = (httpMethod, endpointPath) => `---
openapi: ${httpMethod} ${endpointPath}
---
`;

const entries = Object.entries(paths);

entries.forEach(([pathKey, pathValue]) => {
  const methods = Object.entries(pathValue);
  methods.forEach(([methodKey, methodValue]) => {
    const newEndpointFile = path.join(
      "api-reference",
      methodValue.tags[0],
      `${_.kebabCase(methodValue.operationId)}.mdx`
    );
    fsExtra.ensureFileSync(newEndpointFile);
    const mdxToWrite = getEndpointMdxContent(methodKey, pathKey);
    fsExtra.writeFileSync(newEndpointFile, mdxToWrite);
  });
});
