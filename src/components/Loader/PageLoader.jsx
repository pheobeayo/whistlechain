import { Vortex } from 'react-loader-spinner';
import './style.css';

const PageLoader = () => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 bg-[rgba(255,255,255,0.8)] z-[55] flex items-center justify-center'>
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
};

export default PageLoader;