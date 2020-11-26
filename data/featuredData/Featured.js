// images
import facade from '../../images/home/the_hotel/FACADE1.jpg';
import room from '../../images/home/our_rooms/QUEEN WITH DECK.jpg';
import res from '../../images/home/restaurant/94_kontiki_estefanymolina_hires.jpg';
// icons
import shower from '../../images/home/our_rooms/shower.svg';
import toiletries from '../../images/home/our_rooms/toiletries.svg';
import minibar from '../../images/home/our_rooms/minibar.svg';
import roomservice from '../../images/home/our_rooms/roomservice.svg'
import wifi from '../../images/home/our_rooms/wifi.svg';
import island from '../../images/home/restaurant/island.svg';
import bar from '../../images/home/restaurant/bar.svg';
import outdoor from '../../images/home/restaurant/outdoor.svg';

export const featuredContent = {
  hotel: {
    title: 'The Hotel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    features: {
      'Private Garden': 0,
      'Art Gallery': 0,
      'Restaurant & Bar': 0,
      'Movie/Media Room': 0,
      'Continental Breakfast': 0,
      'Free Private Parking': 0
    },
    image: facade
  },
  rooms: {
    title: 'Our Rooms',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    features: {
      'Preasure Shower': shower,
      'Acca Kappa Toiletries': toiletries,
      'Mini Bar & Fridge': minibar,
      'Room Service': roomservice,
      'Free Wi-Fi': wifi
    },
    image: room
  },
  restaurant: {
    title: 'Food and Drinks',
    subTitle: 'Kon Tiki',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    features: {
      'Eclectic Cuisine': island,
      'Tropical Cocktails': bar,
      'Outdoor Seating': outdoor
    },
    link: 'https://www.instagram.com/kontiki.gp/',
    image: res
  }
}