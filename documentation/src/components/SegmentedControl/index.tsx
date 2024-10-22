import React from "react";
import clsx from 'clsx';
import "./styles.scss";

const SegmentedControl = ({
  name,
  segments,
  callback,
  defaultIndex = 0,
  controlRef
}) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);
  const componentReady = React.useRef<Boolean>();

  // Determine when the component is "ready"
  React.useEffect(() => {
    componentReady.current = true;
  }, []);

  React.useEffect(() => {
    const activeSegmentRef = segments[activeIndex].ref;
    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    style.setProperty("--highlight-width", `${offsetWidth}px`);
    style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
  }, [activeIndex, callback, controlRef, segments]);

  const onInputChange = (value, index) => {
    setActiveIndex(index);
    callback(value, index);
  };

  return (
    <div className="segmented-control" ref={controlRef}>
      <div className={clsx('controls', componentReady.current ? 'ready' : 'idle')}>
        {segments?.map((item, i) => (
          <div
            key={item.value}
            className={clsx('segment', (i === activeIndex) ? 'active' : 'inactive')}
            ref={item.ref}
          >
            <input
              type="radio"
              value={item.value}
              id={item.label}
              name={name}
              onChange={() => onInputChange(item.value, i)}
              checked={i === activeIndex}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentedControl;
