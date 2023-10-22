import { useRef, useEffect } from 'react';
import { KycWidget } from '@purefi/kyc-sdk';

import './Kyc.css';

const Kyc = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    KycWidget.mount(widgetRef.current);

    return () => {
      KycWidget.unmount();
    };
  }, []);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-xs-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <div ref={widgetRef} />
        </div>
      </div>
    </div>
  );
};

export default Kyc;
