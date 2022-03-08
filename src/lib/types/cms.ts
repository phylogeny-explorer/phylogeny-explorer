export type Content = {
  data: {
    id: number;
    attributes: {
      [key: string]: StrapiComponent;
    };
  };
};

type StrapiComponent = {
  [key: string]: string | MediaItem | MediaItems;
};

export type MediaData = {
  id: number;
  attributes: { url: string };
};

export type MediaItem = {
  data: MediaData;
};

export type MediaItems = {
  data: MediaData[];
};
