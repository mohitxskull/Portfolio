import { Group, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ParallaxLayer } from '@react-spring/parallax';

const Home = () => {
  const SmallerScreen = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            position: 'absolute',
            top: '15%',
            left: '45%',
            zIndex: 5,
            mixBlendMode: 'difference',
          }}
          src="/skull.jpg"
          width={400}
        />

        <Group
          direction="column"
          spacing={0}
          position="center"
          style={{ zIndex: 1 }}
        >
          <span
            style={{
              fontFamily: 'geakosa-s',
              transition: 'all 1s',
              fontSize: SmallerScreen ? 250 : 450,
              color: '#7106de',
              lineHeight: 0.8,
            }}
          >
            Skull
          </span>

          <Text
            color="#aaaaaa"
            mt="lg"
            style={{
              fontFamily: 'Exo, sans-serif',
              fontSize: SmallerScreen ? 15 : 17,
              transition: 'all 0.5s',
            }}
          >
            Full-stack web developer and designer.
          </Text>
        </Group>
      </ParallaxLayer>
    </>
  );
};

export default Home;
