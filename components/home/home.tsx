import { Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ParallaxLayer } from '@react-spring/parallax';

const Home = ({
  Name,
  ScrollLock,
  OtherVisible,
}: {
  Name: string;
  ScrollLock: boolean;
  OtherVisible: boolean;
}) => {
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
        <Group direction="column" spacing={0} position="center">
          <span
            style={{
              fontFamily: 'geakosa-o',
              fontSize: SmallerScreen ? 28 : 40,
              fontWeight: 700,
              color: '#883ddf',
              transition: 'all 0.5s',
              visibility: !OtherVisible ? 'hidden' : 'visible',
            }}
          >
            Developer
          </span>
          <span
            style={{
              fontFamily: 'geakosa-s',
              transition: 'all 1s',
              fontSize: ScrollLock ? 45 : SmallerScreen ? 250 : 450,
              color: '#883ddf',
              lineHeight: 0.8,
            }}
          >
            {Name}
          </span>

          <Text
            color="#aaaaaa"
            mt="lg"
            style={{
              fontFamily: 'Exo, sans-serif',
              fontSize: SmallerScreen ? 15 : 17,
              transition: 'all 0.5s',
              visibility: !OtherVisible ? 'collapse' : 'visible',
            }}
          >
            Full-stack web developer and designer.
          </Text>
        </Group>
      </ParallaxLayer>

      {/* <ParallaxLayer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      offset={0.45}
      speed={2.1}
    >
      <div
        style={{ width: '2px', height: '150px', backgroundColor: 'white' }}
      />
    </ParallaxLayer> */}
    </>
  );
};

export default Home;
