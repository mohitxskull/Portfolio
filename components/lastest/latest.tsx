/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useMediaQuery } from '@mantine/hooks';
import {
  Box,
  Center,
  DefaultMantineColor,
  Loader,
  ScrollArea,
  SimpleGrid,
} from '@mantine/core';
import { Prism } from '@mantine/prism';
import { ParallaxLayer } from '@react-spring/parallax';
import { useEffect, useState } from 'react';

const codeOutput: {
  color: DefaultMantineColor;
  label?: string | undefined;
} = {
  color: 'green',
  label: '=',
};

const codeDescription: {
  color: DefaultMantineColor;
  label?: string | undefined;
} = {
  color: 'blue',
  label: '//',
};

//   const SmallerScreen = useMediaQuery('(max-width: 768px)');
const Lastest = () => {
  const [Code, setCode] = useState<string | null>(null);
  const [Des, setDes] = useState<string | null>(null);

  const fileName = 'Notification.js';
  const fileId = '6ce64130a6cfb767d38b9d08dd49106d';
  const highLightLines = {
    1: codeDescription,
    2: codeDescription,
    3: codeDescription,
  };

  useEffect(() => {
    fetch(`https://api.github.com/gists/${fileId}`)
      .then((response) => response.json())
      .then((data) => {
        setCode(data.files[fileName].content);
        setDes(data.description);
      });
  }, []);

  return (
    <>
      <ParallaxLayer
        factor={0}
        offset={1}
        speed={0.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <SimpleGrid>
          <Center>
            <span
              style={{
                fontFamily: 'geakosa-s',
                transition: 'all 0.5s',
                color: '#777777',
                fontSize: 170,
              }}
            >
              Latest
            </span>
          </Center>
          <SimpleGrid spacing={0} mx="md">
            {Code && (
              <>
                <Box
                  p="sm"
                  style={{
                    backgroundColor: '#777777',
                    borderRadius: '10px 10px 0px 0px',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  <SimpleGrid spacing={0}>
                    <span>{fileName}</span>
                    <span style={{ fontWeight: 'normal', fontSize: 15 }}>
                      {Des}
                    </span>
                  </SimpleGrid>
                </Box>
              </>
            )}
            <ScrollArea
              offsetScrollbars
              scrollbarSize={2}
              style={{
                height: 500,
                borderRadius: '0px 0px 10px 10px',
                border: '1px solid #777777',
                width: '100%',
                minWidth: '300px',
              }}
            >
              {Code ? (
                <>
                  <Prism
                    highlightLines={highLightLines}
                    withLineNumbers
                    language="javascript"
                    style={{
                      width: '100%',
                    }}
                  >
                    {Code}
                  </Prism>
                </>
              ) : (
                <Loader />
              )}
            </ScrollArea>
          </SimpleGrid>
        </SimpleGrid>
      </ParallaxLayer>
    </>
  );
};
export default Lastest;
