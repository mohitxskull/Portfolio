import {
  ActionIcon,
  Center,
  Group,
  SimpleGrid,
  Text,
  Tooltip,
} from '@mantine/core';
import { useClipboard, useMediaQuery } from '@mantine/hooks';
import { ParallaxLayer } from '@react-spring/parallax';
import {
  BrandGithub,
  BrandGmail,
  BrandInstagram,
  BrandLinkedin,
  BrandTwitter,
} from 'tabler-icons-react';

const Contact = () => {
  const Clipboard = useClipboard({ timeout: 500 });
  const SmallerScreen = useMediaQuery('(max-width: 440px)');

  return (
    <>
      <ParallaxLayer
        offset={4}
        speed={2}
        factor={1}
        style={{ backgroundColor: '#7106de' }}
      />

      <ParallaxLayer
        offset={4}
        speed={0.8}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
        }}
      >
        <Center style={{ width: '100vw' }}>
          <SimpleGrid
            style={{
              color: 'black',
              width: '440px',
            }}
            py="xl"
            px="lg"
          >
            <Text
              style={{
                fontSize: '18px',
                fontFamily: 'Archivo, sans-serif',
                lineHeight: 1,
                textAlign: 'center',
              }}
              component="a"
              href="mailto:mohitxskull@gmail.com?subject=Let's work together!&body=Hello, I think we need you to work on/collaborate this particular product... Reach out as soon as you can."
            >
              mohitxskull@gmail.com
            </Text>
            <Group
              position="apart"
              spacing={0}
              style={{
                fontSize: '20px',
                maxWidth: '500px',
                width: '100%',
                borderTop: '1.5px solid black',
              }}
              pt="xs"
            >
              <span
                style={{
                  fontSize: '17px',
                  fontFamily: 'Archivo, sans-serif',
                  textAlign: 'center',
                  width: SmallerScreen ? '100%' : '50%',
                }}
              >
                Designed & Built by Skull
              </span>
              <Group
                spacing={5}
                position="center"
                style={{ width: SmallerScreen ? '100%' : '50%' }}
              >
                <Tooltip
                  color={Clipboard.copied ? 'grape' : 'gray'}
                  label={Clipboard.copied ? 'Email Copied' : 'Copy Email'}
                >
                  <ActionIcon
                    variant="transparent"
                    onClick={() => Clipboard.copy('mohitxskull@gmail.com')}
                  >
                    <BrandGmail color="#000" />
                  </ActionIcon>
                </Tooltip>
                <ActionIcon
                  variant="transparent"
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/mohit-meena-b02bb720a/',
                      '_blank'
                    )
                  }
                >
                  <BrandLinkedin color="#000" />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  onClick={() =>
                    window.open(
                      'https://instagram.com/mohitxskull.dev',
                      '_blank'
                    )
                  }
                >
                  <BrandInstagram color="#000" />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  onClick={() =>
                    window.open('https://twitter.com/mohitxskull_dev', '_blank')
                  }
                >
                  <BrandTwitter color="#000" />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  onClick={() =>
                    window.open('https://github.com/servedbyskull', '_blank')
                  }
                >
                  <BrandGithub color="#000" />
                </ActionIcon>
              </Group>
            </Group>
          </SimpleGrid>
        </Center>
      </ParallaxLayer>
    </>
  );
};

export default Contact;
