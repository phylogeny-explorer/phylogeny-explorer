import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cladeId1 = req.query.cladeId1 as string;
  const cladeId2 = req.query.cladeId2 as string;

  const tree = {
    id: 'biota',
    name: 'cellular organisms',
    children: [
      {
        id: 'eukaryota',
        name: 'Eukaryota',
        children: [
          { id: 'aves', name: 'Aves' },
          { id: 'mamalia', name: 'Mamalia' },
        ],
      },
      { id: 'bacteria', name: 'Bacteria' },
      { id: 'archea', name: 'Archea' },
    ],
  };

  const getLineage = (id: string, subtree) => {
    if (subtree.id === id) return [subtree.id];
    if (!subtree.children) return;
    for (const child of subtree.children) {
      const lineage = getLineage(id, child);
      if (lineage) return [subtree.id, ...lineage];
    }
    return;
  };

  const lineageOfClade1 = getLineage(cladeId1, tree);
  const lineageOfClade2 = getLineage(cladeId2, tree);

  console.log({ lineageOfClade1, lineageOfClade2 });

  const mrca = lineageOfClade1
    ?.filter((id, i) => id === lineageOfClade2[i])
    .pop();
  console.log({ mrca });

  if (!cladeId1 || !cladeId2)
    res.status(404).send({ error: 'no clade ids provided' });
  if (!mrca) res.status(404).send({ error: 'could not find' });
  else res.status(200).json({ name: mrca });
}
