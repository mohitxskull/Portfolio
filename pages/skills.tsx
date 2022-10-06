import { Box, Center, Group, Text } from '@mantine/core';
import { useDocumentTitle, useMediaQuery } from '@mantine/hooks';
import { NextPage } from 'next';

const Skills: NextPage = () => {
  const SmallerScreen = useMediaQuery('(max-width: 768px)');
  useDocumentTitle('Skull - Skills');

  return (
    <>
      <Group direction="column" grow>
        <Center my={100}>
          <Group direction="column">
            <Text
              style={{
                fontFamily: 'geakosa-o',
                fontSize: SmallerScreen ? 50 : 150,
                color: '#883ddf',
                lineHeight: 0.7,
              }}
            >
              Skills
            </Text>
            <Box style={{ textAlign: 'end', width: '100%' }}>
              <Text
                component="a"
                href="/"
                style={{
                  fontFamily: 'geakosa-s',
                  fontSize: SmallerScreen ? 20 : 22,
                  color: '#777',
                  lineHeight: 0,
                }}
              >
                Go Back
              </Text>
            </Box>
          </Group>
        </Center>
      </Group>
    </>
  );
};

export default Skills;
