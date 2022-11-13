import { Box, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ParallaxLayer } from '@react-spring/parallax';
import { ArrowUpRight } from 'tabler-icons-react';

const Projects = () => {
  const SmallerScreen = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <ParallaxLayer
        factor={0.1}
        offset={2}
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
          style={{ width: '95vw' }}
          direction="column"
          grow
        >
          <Box
            style={{ height: '2px', width: '100%', backgroundColor: '#909296' }}
          />

          <Group grow position="apart" style={{ width: '100%' }}>
            <Text align="center" size="sm" color="dimmed">
              PROJECTS (3)
            </Text>
            <Group position="center">
              <Group direction="column" spacing={0}>
                <Text
                  style={{ lineHeight: 1 }}
                  align="center"
                  ml="xl"
                  size="sm"
                  color="dimmed"
                >
                  FULL-STACK
                </Text>
                <Text align="center" ml="xl" size="sm" color="dimmed">
                  WEB APPLICATION
                </Text>
              </Group>
            </Group>
          </Group>

          <Group grow direction={SmallerScreen ? 'column' : 'row'}>
            <Text
              color="#777777"
              style={{
                fontFamily: 'geakosa-s',
                fontSize: SmallerScreen ? 100 : 150,
                lineHeight: 1.5,
                letterSpacing: 1,
              }}
            >
              SEAGOAT
            </Text>

            <Group direction="column">
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
                  color="#883ddf"
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
                  color="#883ddf"
                >
                  <Group spacing={5}>
                    Github
                    <ArrowUpRight size={20} />
                  </Group>
                </Text>
              </Group>
            </Group>
          </Group>

          {/* ---------------------------------------------- */}

          <Box
            mt="xl"
            style={{ height: '2px', width: '100%', backgroundColor: '#909296' }}
          />

          <Group grow position="apart" style={{ width: '100%' }}>
            <Text />
            <Group position="center">
              <Group direction="column" spacing={0}>
                <Text
                  style={{ lineHeight: 1 }}
                  align="center"
                  ml="xl"
                  size="sm"
                  color="dimmed"
                >
                  FULL-STACK
                </Text>
                <Text align="center" ml="xl" size="sm" color="dimmed">
                  WEB APPLICATION
                </Text>
              </Group>
            </Group>
          </Group>

          {/* ---------------------------------------------- */}

          <Group grow direction={SmallerScreen ? 'column' : 'row'}>
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

            <Group direction="column">
              <Text
                color="#aaaaaa"
                style={{ maxWidth: '400px', lineHeight: 1.2 }}
              >
                KISS is allow about configs, reverse proxy, redirect... More
                coming soon
              </Text>
              <Group>
                <Text
                  component="a"
                  href="https://kisss.vercel.app"
                  weight={800}
                  target="_blank"
                  color="#883ddf"
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
                  color="#883ddf"
                >
                  <Group spacing={5}>
                    Github
                    <ArrowUpRight size={20} />
                  </Group>
                </Text> */}
              </Group>
            </Group>
          </Group>

          <Box
            mt="xl"
            style={{ height: '2px', width: '100%', backgroundColor: '#909296' }}
          />

          <Group grow position="apart" style={{ width: '100%' }}>
            <Text />
            <Group position="center">
              <Group direction="column" spacing={0}>
                <Text
                  style={{ lineHeight: 1 }}
                  align="center"
                  ml="xl"
                  size="sm"
                  color="dimmed"
                >
                  FRONT-END
                </Text>
                <Text align="center" ml="xl" size="sm" color="dimmed">
                  WEB APPLICATION
                </Text>
              </Group>
            </Group>
          </Group>

          <Group grow direction={SmallerScreen ? 'column' : 'row'}>
            <Text
              color="#777777"
              style={{
                fontFamily: 'geakosa-s',
                fontSize: SmallerScreen ? 100 : 150,
                lineHeight: 1.5,
                letterSpacing: 1,
              }}
            >
              HIDDENMAIL
            </Text>

            <Group direction="column">
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
                  color="#883ddf"
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
                  color="#883ddf"
                >
                  <Group spacing={5}>
                    Github
                    <ArrowUpRight size={20} />
                  </Group>
                </Text>
              </Group>
            </Group>
          </Group>
        </Group>
      </ParallaxLayer>
    </>
  );
};

export default Projects;
