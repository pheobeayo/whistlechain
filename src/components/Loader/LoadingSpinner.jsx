import { Vortex } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className='text-center grid place-content-center'>
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['#2A3E84', '#080B2A', '#15BFFD', '#ffffff', '#080B2A', '#2A3E84']}
    />
  </div>
);

export default LoadingSpinner;