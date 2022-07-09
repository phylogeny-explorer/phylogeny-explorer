import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const value = req.query.value as string;
  const names = [
    { name: 'John Doe' },
    { name: 'John Smith' },
    { name: 'Jane Doe' },
  ];

  res
    .status(200)
    .json(
      names.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    );
}
