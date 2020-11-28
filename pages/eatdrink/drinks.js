import {useRouter} from 'next/router';
import Menu from '../../components/eat_drink/Menu';

const Drinks = () => {

  const router = useRouter();
  const path = router.pathname.split('/')[2];

  return (
    <Menu path={path}/>
  )
}

export default Drinks;