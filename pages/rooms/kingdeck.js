import {useRouter} from 'next/router';
import RoomPage from '../../components/rooms/roomContainer/index';

const KingDeck = () => {

  const router = useRouter();
  const path = router.pathname.split('/')[2];

  return (
    <RoomPage path={path}/>
  )
}

export default KingDeck;