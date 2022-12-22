import { Box, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
//import { ArrowUpRight } from 'tabler-icons-react';

const Technologies = [
  'Rust',
  'Javascript (ES6+)',
  'Typescript',
  'Mantine',
  'Next.js',
  'Nest.js',
  'Vercel',
  'MongoDB',
  'PostgreSQL',
];

// const ExpTechnologies = [
//   {
//     tech: '',
//   },
// ];

const StackAndInterest = () => {
  const SmallerScreen = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <ParallaxLayer
        factor={0.1}
        offset={1}
        speed={1}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Group
          position="center"
          spacing={SmallerScreen ? 100 : 'md'}
          direction={SmallerScreen ? 'column' : 'row'}
          style={{
            width: SmallerScreen ? '85vw' : '80vw',
            alignItems: 'stretch',
          }}
          grow
        >
          <Group direction="column">
            <Text
              size="sm"
              color="#777777"
              style={{ textTransform: 'uppercase' }}
            >
              Few Technologies I&apos;ve been working with recently
            </Text>
            <Group
              // ml="sm"
              spacing="lg"
              style={{
                color: '#aaaaaa',
                width: SmallerScreen ? '100%' : '85%',
              }}
              direction="column"
              grow
            >
              <Group direction="column" spacing={0}>
                {React.Children.toArray(
                  Technologies.map((tech) => (
                    <>
                      <Box
                        my="sm"
                        style={{
                          height: '2px',
                          width: '100%',
                          backgroundColor: 'darkgrey',
                        }}
                      />
                      <Text>{tech}</Text>
                    </>
                  ))
                )}
              </Group>

              {/* <Text component="a" href="/skills" color="#777777" size="sm">
                <Group spacing={5}>
                  All Skills
                  <ArrowUpRight size={17} />
                </Group>
              </Text> */}

              {/* <Group direction="column" spacing={0}>
                <Text>React.js</Text>
                <Text>Bootstrap</Text>
                <Text>Node.js</Text>
                <Text>Express.js</Text>
                <Text>Git</Text>
                <Text>Netlify</Text>
                <Text>Firebase</Text>
              </Group> */}
            </Group>
          </Group>

          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Group
              direction="column"
              style={{ maxWidth: SmallerScreen ? '400px' : '300px' }}
            >
              <Text size="sm" color="#777777">
                INTERESTS
              </Text>
              <Text
                style={{
                  color: '#aaaaaa',
                }}
              >
                Front-end & Back-end Development, Cybersecurity, Web Design,
                Electronics, Business, Blockchain
              </Text>
            </Group>
          </Box>
        </Group>
      </ParallaxLayer>
    </>
  );
};

export default StackAndInterest;
