import React from 'react';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import Scrollbars from 'rc-scrollbars';

import { Clade } from 'lib/types';
import Button from 'components/Button';
import Grid from 'components/Grid';
import { Heading, HeadingSmall } from 'components/Typography';
import GET_IMAGES from './graphql/get-images';
import { ImageWrapper } from './EditImages.styled';

interface Img {
  title: string;
  url: string;
}

interface Props {
  clade: Clade;
  onSubmit: (values: Partial<Clade>) => void;
}

const EditImages = ({ clade, onSubmit }: Props) => {
  const [selectedImage, setSelectedImage] = React.useState<string>(
    clade.imageUrl || ''
  );
  const { data, loading } = useQuery<{ images: Img[] }>(GET_IMAGES, {
    variables: { name: clade.name },
    skip: !clade.name,
  });

  console.log(data, loading);
  return (
    <Grid>
      <Grid autoFlow="column">
        <Grid>
          <HeadingSmall>Current image</HeadingSmall>
          {clade.imageUrl && (
            <Image
              src={clade.imageUrl}
              alt="clade"
              width="100%"
              height={300}
              objectFit="contain"
            />
          )}
        </Grid>
        <Grid>
          <HeadingSmall>Selected Image</HeadingSmall>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="clade"
              width="100%"
              height={300}
              objectFit="contain"
            />
          )}
        </Grid>
      </Grid>
      <Heading>Images from WikiMedia</Heading>
      <Scrollbars autoHeight>
        <Grid templateCols="repeat(auto-fill, minmax(144px, 1fr))">
          {data?.images?.map((img, i) => (
            <ImageWrapper key={i} isSelected={img.url === selectedImage}>
              <Image
                src={img.url}
                alt={img.title}
                width={200}
                height={200}
                objectFit="contain"
                onClick={() => setSelectedImage(img.url)}
              />
            </ImageWrapper>
          ))}
        </Grid>
      </Scrollbars>
      <Grid ji="end">
        <Button
          onClick={() => onSubmit({ imageUrl: selectedImage })}
          text="Save"
          squishy
          disabled={selectedImage === clade.imageUrl}
        />
      </Grid>
    </Grid>
  );
};

export default EditImages;
