import { Node } from 'lib/types';

type Crumb = { lineage: string[]; target: Node };

const predicate = (dir: Node, b: string) => dir.id === b;
const mutation = (item: Node, target: Node) =>
  item.id === target.id ? Object.assign({}, item, target) : item;

function mergeTree(obj: Node, crumbs: Crumb[]) {
  //We don't change obj
  let currentItem: Node | undefined;

  //find the crumbs which predicate() true on this sub-tree
  const matchedParentCrumbs = crumbs.filter(
    crumb => crumb.lineage.length > 0 && predicate(obj, crumb.lineage[0])
  );
  if (matchedParentCrumbs.length) {
    const subCrumbs = matchedParentCrumbs.map(c => {
      return { lineage: c.lineage.slice(1), target: c.target };
    });
    currentItem = currentItem || { ...obj };
    currentItem.children = !currentItem.children
      ? currentItem.children
      : currentItem.children.map(item => mergeTree(item, subCrumbs));
  }

  //find the crumbs which are only target. (ie lineage = [])
  const targetCrumbs = crumbs.filter(crumb => crumb.lineage.length === 0);
  if (targetCrumbs.length) {
    for (const crumb of targetCrumbs) {
      currentItem = currentItem || { ...obj };
      currentItem = mutation(currentItem, crumb.target);
    }
  }
  return currentItem || obj;
}

export default mergeTree;
