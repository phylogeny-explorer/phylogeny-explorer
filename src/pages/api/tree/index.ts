import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const QUERY = `
  prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

  SELECT ?s ?p ?o
  WHERE {
      ?s ?p ?o .
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await axios.post(
    'http://25.51.47.36:9999/blazegraph/namespace/kb/sparql',
    { query: QUERY }
  );

  console.log(data);

  res
    .status(200)
    .json({ name: 'cellular organisms', children: [{ name: 'Eukaryota' }] });
}
