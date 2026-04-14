import React, { PropsWithChildren } from "react";

const DemoBlock: React.FC<PropsWithChildren> = ({children} : PropsWithChildren) => {
  return (
    <div className='example-block' style={{display: 'block'}}>
      {children}
    </div>
  );
};

export default DemoBlock;