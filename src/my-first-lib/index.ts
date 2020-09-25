import { capitalize } from '@angular-devkit/core/src/utils/strings';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { join } from 'path';

import { Schema } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function myFirstLib(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const name: string = _options.name;
    const content: string = _options.content;
    const extension: string = _options.extension || '.md';

    tree.create(join(name, extension), capitalize(content));

    return tree;
  };
}
