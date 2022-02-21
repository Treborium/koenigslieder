import { Text, useBreakpointValue, ResponsiveValue } from '@chakra-ui/react';

interface SongProps {
  title: string;
  lyrics: string;
}

export const Song: React.FC<SongProps> = (props) => {
  return (
    <>
      <Text as='h1' fontSize='1.5rem' paddingBottom='2vh' textAlign='center'>
        {props.title.toUpperCase()}
      </Text>
      <Text
        whiteSpace='pre-line'
        textAlign={{
          base: 'left',
          md: 'center',
        }}
      >
        {props.lyrics}
      </Text>
    </>
  );
};
