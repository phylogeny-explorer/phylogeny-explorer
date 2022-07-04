export type Spacers = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Alignments = 'start' | 'center' | 'end';

export type Colors =
  | 'background'
  | 'foreground'
  | 'primary'
  | 'dprimary'
  | 'lprimary'
  | 'secondary'
  | 'dsecondary'
  | 'lsecondary'
  | 'success'
  | 'warning'
  | 'white'
  | 'offWhite'
  | 'vvlgrey'
  | 'vlgrey'
  | 'lgrey'
  | 'grey'
  | 'dgrey'
  | 'vdgrey'
  | 'vvdgrey'
  | 'offBlack'
  | 'black';

export interface BoxStyles {
  m?: Spacers;
  mt?: Spacers;
  mr?: Spacers;
  mb?: Spacers;
  ml?: Spacers;
  mx?: Spacers;
  my?: Spacers;
  p?: Spacers;
  pt?: Spacers;
  pr?: Spacers;
  pb?: Spacers;
  pl?: Spacers;
  px?: Spacers;
  py?: Spacers;
  bg?: Colors;
}

export interface GridStyles extends BoxStyles {
  gap?: Spacers;
  templateColumns?: string;
  templateRows?: string;
  templateAreas?: string;
  autoFlow?: string;
  autoColumns?: string;
  autoRows?: string;
  columnGap?: Spacers;
  rowGap?: Spacers;
  ac?: Alignments;
  ai?: Alignments;
  jc?: Alignments | 'space-between' | 'space-around';
  ji?: Alignments;
}
