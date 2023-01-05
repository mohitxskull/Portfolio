import { Box, SimpleGrid, Text } from '@mantine/core';
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
        factor={0}
        offset={2}
        speed={1}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <SimpleGrid
          spacing={SmallerScreen ? 100 : 'md'}
          style={{
            width: SmallerScreen ? '85vw' : '80vw',
            alignItems: 'stretch',
          }}
          breakpoints={[
            { maxWidth: 768, cols: 1 },
            { maxWidth: 2000, cols: 2 },
          ]}
        >
          <SimpleGrid>
            <Text
              size="sm"
              color="#777777"
              style={{ textTransform: 'uppercase' }}
            >
              Few Technologies I&apos;ve been <br /> working with recently
            </Text>
            <SimpleGrid
              spacing="lg"
              style={{
                color: '#aaaaaa',
                width: SmallerScreen ? '100%' : '85%',
              }}
            >
              <SimpleGrid spacing={0}>
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
              </SimpleGrid>
            </SimpleGrid>
          </SimpleGrid>

          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <SimpleGrid
              style={{
                maxWidth: SmallerScreen ? '400px' : '300px',
                height: 'fit-content',
              }}
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
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </ParallaxLayer>
    </>
  );
};

export default StackAndInterest;
