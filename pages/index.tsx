/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextPage } from 'next';
import { Parallax } from '@react-spring/parallax';
import { motion, Variants } from 'framer-motion';
import { useMouse } from '@mantine/hooks';
import Home from '../components/home/home';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';
import StackAndInterest from '../components/stack&interest/stackAndInterest';

const Index: NextPage = () => {
  const { ref, x, y } = useMouse();

  return (
    <div ref={ref}>
      <motion.div
        //className="cusCur"
        style={{
          translateX: x,
          translateY: y,
        }}
      />
      <div className="noise" />
      <Parallax
        pages={4}
        style={{
          top: '0',
          left: '0',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          userSelect: 'none',
          backgroundColor: '#04040f',
          zIndex: 0,
        }}
      >
        <Home />
        <StackAndInterest />
        <Projects />
        <Contact />
      </Parallax>
    </div>
  );
};

export default Index;
