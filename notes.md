### Notes

1. `pnpm version` will update the `version` property in the package.json using semantic versioning. It will also create a tag version of the repository. Then, you can run `pnpm publish` to publish the module.
In order to verify that, run the below commands:
```
pnpm version 
pnpm tag -l
```
2. If the module is published under an organisation, please make sure that you set a `scope` for it. This can be set using a `name` like `[scope]/[module name]` or running `npm init -y --scope=[scope]`.
3. If the module is publicly available, update the `private` property in the package.json to specify that. Otherwise, you will need to set the `--access` option whenever you publish the module `pnpm publish --access=publish` 
4. By default, the ts compiler doesn't check js files for TS support. When you enable that option (`checkJS`), the compiler will check JS files as well. In order to avoid checking a JS file, but at the same time keep that option enabled, you can add `@ts-ignore` instruction at the top of the file. [link](https://www.typescriptlang.org/tsconfig#checkJS)
5. The TS compiler doesn't allow a TS file to import a JS when `allowJS` is set to false. If you want enable that functionality, set the flag to true. [link](https://www.typescriptlang.org/tsconfig#allowJS)
6. When `allowSyntheticDefaultImports` is enabled, TS while replace a namespace with a default import. For example, this will allow to do:
```
import React from "react";

// rather than
import * as React from 'react'
```
7. When `declaration` is enabled, the TS compiler will generate type definitions (*.d.ts) as well.

### Commands 

```bash
// List tags
git tag -l // git tag

// Create a tag
git tag [v1.0.0]

// Delete a tag
git tag -d v1.0.0

// Push changes and tags to the remote server
git push origin --tags

// Delete a tag that has already been pushed
git push origin --delete <tagname>

// Checkout to a particular tag
git checkout v1.0.1

// Create a new version
pnpm version [patch|minor|major|<version_no>] 

// Unpublish a package
pnpm unpublish [package-name] -f

// Unpublish a single version
pnpm unpublish [package-name]@[version]
```