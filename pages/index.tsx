import App from '../component/App';
import { HMSRoomProvider } from '@100mslive/react-sdk';

export default function Home() {
  return (
    <>
     <HMSRoomProvider>
      <App />
    </HMSRoomProvider>
    </>
  )
}
