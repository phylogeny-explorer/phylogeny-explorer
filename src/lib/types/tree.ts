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

export type Node = {
  id: string;
  name: string;
  children?: Node[];
  attributes?: Attributes;
};

export type Clade = {
  id: string;
  name: string;
  parentId: string;
  rank?: string;
  extant?: boolean;
  hasChildren?: boolean;
  leaves?: number;
  synonyms?: string[];
  commonNames?: string[];
  lineage?: Clade[];
  sources?: string[];
  imageUrl?: string;
  characteristics?: { name: string; value: string }[];
};
