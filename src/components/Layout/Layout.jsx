import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useWallet } from '../../hooks';
import { Navbar } from '../Navbar';
import './Layout.css';

function Layout() {
  const { isConnected, isDisconnected, isConnecting, chain } = useWallet();

  const render = () => {
    if (isConnected) {
      if (!chain.unsupported) {
        return <Outlet />;
      } else {
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <div className="alert alert-dark" role="alert">
                  Please, switch to a network the dApp supports
                </div>
              </div>
            </div>
          </div>
        );
      }
    } else {
      if (isDisconnected) {
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <div className="alert alert-dark" role="alert">
                  Please, connect wallet to proceed
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        if (isConnecting) {
          return <div>Loading...</div>;
        } else {
          return null;
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="main p-3">{render()}</main>
      <ToastContainer
        position="top-center"
        theme="colored"
        pauseOnFocusLoss={false}
        newestOnTop
      />
    </>
  );
}

export default Layout;
