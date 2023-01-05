import { NextPage } from 'next';
import { Parallax } from '@react-spring/parallax';
import Home from '../components/home/home';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';
import StackAndInterest from '../components/stack&interest/stackAndInterest';
import Lastest from '../components/lastest/latest';

const Index: NextPage = () => (
  <div>
    {/* <motion.div
        //className="cusCur"
        style={{
          translateX: x,
          translateY: y,
        }}
      /> */}
    <div className="noise" />
    <Parallax
      // ref={pref}
      pages={5}
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
      <Lastest />
      <StackAndInterest />
      <Projects />
      <Contact />
    </Parallax>
  </div>
);

export default Index;
