
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  documents: "pages/**/*.tsx",
  generates: {
    "pages/gql/": {
      preset: "client",
      plugins: []
    }
  },
  ignoreNoDocuments: true,
};

export default config;
