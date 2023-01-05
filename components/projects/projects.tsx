import { Box, Group, SimpleGrid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ParallaxLayer } from '@react-spring/parallax';
import { ArrowUpRight } from 'tabler-icons-react';

const Projects = () => {
  const SmallerScreen = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <ParallaxLayer
        factor={0.1}
        offset={3}
        speed={1}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <SimpleGrid style={{ width: '95vw' }}>
          <Box
            style={{ height: '2px', width: '100%', backgroundColor: '#909296' }}
          />

          <Group grow position="apart" style={{ width: '100%' }}>
            <Text align="center" size="sm" color="dimmed">
              PROJECTS (3)
            </Text>
            <Group position="center">
              <SimpleGrid spacing={0}>
                <Text
                  style={{ lineHeight: 1 }}
                  align="start"
                  ml="xl"
                  size="sm"
                  color="dimmed"
                >
                  FULL-STACK
                </Text>
                <Text align="center" ml="xl" size="sm" color="dimmed">
                  WEB APPLICATION
                </Text>
              </SimpleGrid>
            </Group>
          </Group>

          <SimpleGrid
            breakpoints={[
              { maxWidth: 768, cols: 1 },
              { maxWidth: 2000, cols: 2 },
            ]}
            style={{ alignItems: 'center' }}
          >
            <Text
              style={{
                fontFamily: 'geakosa-s',
                fontSize: SmallerScreen ? 100 : 150,
                lineHeight: 1.5,
                letterSpacing: 1,
                color: '#777777',
              }}
            >
              SEAGOAT
            </Text>

            <SimpleGrid style={{ height: 'fit-content' }}>
              <Text
                color="#aaaaaa"
                style={{ maxWidth: '400px', lineHeight: 1.2 }}
              >
                SEAGOAT is an encrypted, secure password and photo storage
                service.
              </Text>
              <Group>
                <Text
                  component="a"
                  href="https://seagoat.vercel.app"
                  weight={800}
                  target="_blank"
                  color="#7106de"
                >
                  <Group spacing={5}>
                    Visit
                    <ArrowUpRight size={20} />
                  </Group>
                </Text>
                <Text
                  component="a"
                  href="https://github.com/servedbyskull/SEAGOAT."
                  weight={800}
                  target="_blank"
                  color="#7106de"
                >
                  <Group spacing={5}>
                    Github
                    <ArrowUpRight size={20} />
                  </Group>
                </Text>
              </Group>
            </SimpleGrid>
          </SimpleGrid>

          {/* ---------------------------------------------- */}

          <Box
            mt="xl"
            style={{ height: '2px', width: '100%', backgroundColor: '#909296' }}
          />

          <Group grow position="apart" style={{ width: '100%' }}>
            <Text />
            <Group position="center">
              <SimpleGrid spacing={0}>
                <Text
                  style={{ lineHeight: 1 }}
                  align="start"
                  ml="xl"
                  size="sm"
                  color="dimmed"
                >
                  FULL-STACK
                </Text>
                <Text align="center" ml="xl" size="sm" color="dimmed">
                  WEB APPLICATION
                </Text>
              </SimpleGrid>
            </Group>
          </Group>

          {/* ---------------------------------------------- */}

          <SimpleGrid
            breakpoints={[
              { maxWidth: 768, cols: 1 },
              { maxWidth: 2000, cols: 2 },
            ]}
            style={{ alignItems: 'center' }}
          >
            <Text
              color="#777777"
              style={{
                fontFamily: 'geakosa-s',
                fontSize: SmallerScreen ? 100 : 150,
                lineHeight: 1.5,
                letterSpacing: 1,
              }}
            >
              KISS
            </Text>

            <SimpleGrid>
              <Text
                color="#aaaaaa"
                style={{ maxWidth: '400px', lineHeight: 1.2 }}
              >
                KISS is all about configs, reverse proxy, redirect... More
                coming soon
              </Text>
              <Group>
                <Text
                  component="a"
                  href="https://kisss.vercel.app"
                  weight={800}
                  target="_blank"
                  color="#7106de"
                >
                  <Group spacing={5}>
                    Visit
                    <ArrowUpRight size={20} />
                  </Group>
                </Text>
                {/* <Text
                  component="a"
                  href="https://github.com/servedbyskull/SEAGOAT."
                  weight={800}
                  target="_blank"
                  color="#7106de"
                >
                  <Group spacing={5}>
                    Github
                    <ArrowUpRight size={20} />
                  </Group>
                </Text> */}
              </Group>
            </SimpleGrid>
          </SimpleGrid>

          <Box
            mt="xl"
            style={{ height: '2px', width: '100%', backgroundColor: '#909296' }}
          />

          <Group grow position="apart" style={{ width: '100%' }}>
            <Text />
            <Group position="center">
              <SimpleGrid spacing={0}>
                <Text
                  style={{ lineHeight: 1 }}
                  align="start"
                  ml="xl"
                  size="sm"
                  color="dimmed"
                >
                  FRONT-END
                </Text>
                <Text align="center" ml="xl" size="sm" color="dimmed">
                  WEB APPLICATION
                </Text>
              </SimpleGrid>
            </Group>
          </Group>

          <SimpleGrid
            breakpoints={[
              { maxWidth: 768, cols: 1 },
              { maxWidth: 2000, cols: 2 },
            ]}
            style={{ alignItems: 'center' }}
          >
            <SimpleGrid
              mt={60}
              spacing={0}
              style={{
                fontFamily: 'geakosa-s',
                fontSize: SmallerScreen ? 100 : 150,
                lineHeight: 0.7,
                letterSpacing: 1,
                color: '#777777',
              }}
            >
              <span>HIDDEN</span>
              <span>MAIL</span>
            </SimpleGrid>

            <SimpleGrid>
              <Text
                color="#aaaaaa"
                style={{ maxWidth: '400px', lineHeight: 1.2 }}
              >
                Used 1SecMail API!
              </Text>
              <Group>
                <Text
                  component="a"
                  href="https://hiddenmail.vercel.app"
                  weight={800}
                  target="_blank"
                  color="#7106de"
                >
                  <Group spacing={5}>
                    Visit
                    <ArrowUpRight size={20} />
                  </Group>
                </Text>
                <Text
                  component="a"
                  href="https://github.com/servedbyskull/HiddenMail"
                  weight={800}
                  target="_blank"
                  color="#7106de"
                >
                  <Group spacing={5}>
                    Github
                    <ArrowUpRight size={20} />
                  </Group>
                </Text>
              </Group>
            </SimpleGrid>
          </SimpleGrid>
        </SimpleGrid>
      </ParallaxLayer>
    </>
  );
};

export default Projects;
