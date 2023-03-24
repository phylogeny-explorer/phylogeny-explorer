import { Authorship } from 'lib/types';

const formatAuthorship = (authorship?: Authorship): string => {
  const { name, year, isOriginalAuthor } = authorship || {};
  if (!name) {
    return '';
  }
  const formattedAuthorship = `${name}${year ? `, ${year}` : ''}`;
  return isOriginalAuthor ? `(${formattedAuthorship})` : formattedAuthorship;
};

export default formatAuthorship;
