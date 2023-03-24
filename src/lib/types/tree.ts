type Attributes = {
  id: string;
  rank: string;
  extant: boolean;
  hasChildren: boolean;
  leaves: number;
  // synonyms: string[];
  lineage: string[];
  parentId: string;
  // sources: string[];
  // characteristics: Characteristic[];
};

export type Node = {
  id: string;
  name: string;
  children?: Node[];
  attributes?: Attributes;
};

type Source = {
  id: string;
  name: string;
};

type Characteristic = {
  name: string;
  value: boolean;
};

export type Authorship = {
  name?: string;
  year?: string;
  isOriginalAuthor?: boolean;
  sources?: string[];
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
  dataSources?: string[];
  sources?: Source[];
  imageUrl?: string;
  characteristics?: Characteristic[];
  children?: { id: string; name: string }[];
  authorship?: Authorship;
};
