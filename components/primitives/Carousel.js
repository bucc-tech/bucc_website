import { Children, useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { ActiveDash, InactiveDash } from "../icons";

export default function ActualResponsiveCarouselSlider({ height, width, dashes, arrows, children }) {
  const [state, setState] = useState(false);
  const [propsValues, setPropsValues] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [childrenSlides, setChildrenSlides] = useState([]);

  const setNumberOfSlides = (num) => setNumberOfChildren(num)
  const setChildrenSlidesFunc = (array) => setChildrenSlides(array)

  useEffect(() => {
    let properties = { ...propsValues };
    if (height) properties = { ...properties, height };
    if (width) properties = { ...properties, height };

    setPropsValues(properties)
  }, [height, width]);

  return (
    <div className="w-full h-auto">
      <div className="w-full h-full m-auto overflow-hidden flex flex-col justify-items-center mb-3" style={{ ...propsValues }}>
        <SliderContent currentIndex={currentIndex} setNumberOfSlides={setNumberOfSlides} setChildrenSlidesFunc={setChildrenSlidesFunc}>{children}</SliderContent>
      </div>
      <div className="w-full flex justify-center space-x-3">{childrenSlides.map((child, index) => {
        return (
          <span onClick={() => setCurrentIndex(index)} className="cursor-pointer">
            <Dash key={index} index={index} currentIndex={currentIndex} />
          </span>
        )
      })}</div>
    </div>
  )
}

const SliderContent = ({ children, setNumberOfSlides, currentIndex, setChildrenSlidesFunc }) => {
  const [innerWidth, setInnerWidth] = useState(0)
  const childrenCount = Children.count(children)

  const ref = useRef(null);

  const getWidth = () => {
    ref.current ? setInnerWidth(ref.current.offsetWidth) : setInnerWidth(0);
  }

  useEffect(() => {
    setNumberOfSlides(childrenCount);
    if (childrenCount > 1) setChildrenSlidesFunc(children);
    else setChildrenSlidesFunc([children])
  }, []);

  useEffect(() => {
    getWidth();
    window.addEventListener('resize', getWidth);
    getWidth();

    return () => window.removeEventListener('resize', getWidth);
  }, [])

  return (
    <SliderContentStyled transform={innerWidth * currentIndex} ref={ref} >
      {children}
    </SliderContentStyled>
  )
}

export const Slide = ({ children }) => {
  const SlideStyled = styled.div`
    height: 100%;
    width: 100%;
    min-width: 100%;
  `
  return (
    <SlideStyled>{children}</SlideStyled>
  )
}

const Dash = ({ index, currentIndex }) => {
  if (index === currentIndex) return <ActiveDash />
  else return <InactiveDash />
}

const SliderContentStyled = styled.div`
  transform: translateX(-${props => props.transform}px);
  transition: transform ease-out 0.45s;
  width: 100%;
  height: 100%;
  display: flex;
`