/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextPage } from 'next';
import { Parallax } from '@react-spring/parallax';
import { useEffect, useState } from 'react';
import Home from '../components/home/home';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';
import StackAndInterest from '../components/stack&interest/stackAndInterest';

const Index: NextPage = () => {
  const [ScrollLock, setScrollLock] = useState(false);
  const [Name, setName] = useState('Skull');
  const [OtherVisible, setOtherVisible] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setName('Sk'), 1000);
  //   setTimeout(() => setName('Sku'), 1500);
  //   setTimeout(() => setName('Skul'), 2000);
  //   setTimeout(() => setName('Skull'), 2500);
  //   setTimeout(() => setScrollLock(false), 3500);
  //   setTimeout(() => setOtherVisible(true), 4500);
  // }, []);

  return (
    <>
      <div className="noise" />
      <Parallax
        pages={4}
        style={{
          top: '0',
          left: '0',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          overflow: ScrollLock ? 'hidden' : 'auto',
          userSelect: 'none',
          backgroundColor: '#04040f',
          zIndex: 0,
        }}
      >
        <Home Name={Name} ScrollLock={ScrollLock} OtherVisible={OtherVisible} />
        <StackAndInterest />
        <Projects />
        <Contact />
      </Parallax>
    </>
  );
};

export default Index;
