import {useRouter} from 'next/router';
import AmenitiesGallery from '../../components/AmenitiesGallery';

const Garden = () => {

  const router = useRouter();
  const path = router.pathname.split('/')[2];

  return (
    <AmenitiesGallery path={path}/>
  )
}

export default Garden;