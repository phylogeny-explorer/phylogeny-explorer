import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const clades = [
    {
      id: '1',
      name: 'cellular organisms',
      children: [{ id: '2', name: 'Eukaryota' }],
    },
    { id: '2', name: 'Eukaryota' },
  ];

  const response = clades.find(clade => clade.id === id);

  if (!response) res.status(404).send({ error: 'no data' });
  else res.status(200).json(response);
}
