type Characteristic = {
  name: string;
  value: boolean;
};

type Attributes = {
  id: string;
  rank: string;
  extant: boolean;
  hasChildren: boolean;
  leaves: number;
  synonyms: string[];
  lineage: string[];
  parentId: string;
  sources: string[];
  characteristics: Characteristic[];
};

export type Clade = {
  id: string;
  name: string;
  children?: Clade[];
  attributes?: Attributes;
};
