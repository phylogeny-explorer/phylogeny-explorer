import formatAuthorship from './formatAuthorship';

describe('formatAuthorship', () => {
  it('should format authorship', () => {
    const authorship = {
      name: 'John Doe',
    };
    expect(formatAuthorship(authorship)).toBe('John Doe');
  });
  it('should format authorship with no name', () => {
    const authorship = {
      name: '',
    };
    expect(formatAuthorship(authorship)).toBe('');
  });
  it('should format authorship with empty authorship', () => {
    const authorship = {};
    expect(formatAuthorship(authorship)).toBe('');
  });
  it('should format authorship with no authorship', () => {
    const authorship = undefined;
    expect(formatAuthorship(authorship)).toBe('');
  });
  it('should format authorship with year', () => {
    const authorship = {
      name: 'John Doe',
      year: '2020',
    };
    expect(formatAuthorship(authorship)).toBe('John Doe, 2020');
  });
  it('should format authorship with parentheses', () => {
    const authorship = {
      name: 'John Doe',
      year: '2020',
      isOriginalAuthor: true,
    };
    expect(formatAuthorship(authorship)).toBe('(John Doe, 2020)');
  });
});
