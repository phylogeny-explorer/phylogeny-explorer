import mergeTree from './mergeTree';

const getData = function () {
  return {
    id: 'x1',
    name: 'x1',
    children: [
      {
        id: 'x1.1',
        name: 'x1.1',
        children: [
          {
            id: 'x1.1.1',
            name: 'x1.1.1',
            children: [
              {
                id: 'x1.1.1.1',
                name: 'x1.1.1.1',
              },
              {
                id: 'x1.1.1.2',
                name: 'x1.1.1.2',
              },
              {
                id: 'x1.1.1.3',
                name: 'x1.1.1.3',
              },
            ],
          },
          {
            id: 'x1.1.2',
            name: 'x1.1.2',
          },
          {
            id: 'x1.1.3',
            name: 'x1.1.3',
          },
          {
            id: 'x1.1.4',
            name: 'x1.1.4',
          },
        ],
      },
    ],
  };
};

describe('mergeTree', () => {
  it('change single object', () => {
    const data = getData();
    const result = mergeTree(data, [
      { lineage: ['x1', 'x1.1'], target: { id: 'x1.1.1', name: 'name1' } },
    ]);
    expect(result.children?.[0].children?.[0].name).toBe('name1');
  });

  it('change multiple objects at the same nesting level', () => {
    const data = getData();
    const result = mergeTree(data, [
      { lineage: ['x1', 'x1.1'], target: { id: 'x1.1.1', name: 'name1' } },
      { lineage: ['x1', 'x1.1'], target: { id: 'x1.1.2', name: 'name2' } },
    ]);
    expect(result.children?.[0].children?.[0].name).toBe('name1');
    expect(result.children?.[0].children?.[1].name).toBe('name2');
  });

  it('Change multiple objects at different nesting levels', () => {
    const data = getData();
    const result = mergeTree(data, [
      { lineage: ['x1', 'x1.1'], target: { id: 'x1.1.1', name: 'name1' } },
      {
        lineage: ['x1', 'x1.1', 'x1.1.1'],
        target: { id: 'x1.1.1.1', name: 'name2' },
      },
      {
        lineage: ['x1', 'x1.1', 'x1.1.1'],
        target: { id: 'x1.1.1.2', name: 'name3' },
      },
    ]);
    expect(result.children?.[0].children?.[0].name).toBe('name1');
    expect(result.children?.[0].children?.[0].children?.[0].name).toBe('name2');
    expect(result.children?.[0].children?.[0].children?.[1].name).toBe('name3');
  });

  it('return original value when parents mismatch', () => {
    const data = getData();
    const result = mergeTree(data, [
      { lineage: ['invalid'], target: { id: 'x1.1.1', name: 'name1' } },
    ]);
    expect(result).toStrictEqual(data);
  });
});
