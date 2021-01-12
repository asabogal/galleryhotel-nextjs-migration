//  images
// standard
import standard3 from '../../public/images/rooms/room_pictures/standard_room/standard3.png';
import standard4 from '../../public/images/rooms/room_pictures/standard_room/standard4.png';
import standard7 from '../../public/images/rooms/room_pictures/standard_room/standard7.png';
import standard8 from '../../public/images/rooms/room_pictures/standard_room/standard8.png';
// kingloft 
import kingLoft5 from '../../public/images/rooms/room_pictures/king_loft/kingloft5.png';
import kingLoft6 from '../../public/images/rooms/room_pictures/king_loft/kingloft6.png';
// queenDeck
import queenDeck from '../../public/images/rooms/room_pictures/queen_deck/queendeck.png';
// kingDeck
import kingDeck from '../../public/images/rooms/room_pictures/king_deck/kingdeck.png';
// gardenSuite
import gardenSuite from '../../public/images/rooms/room_pictures/garden_suite/gardensuite.png';
import gardenSuite2 from '../../public/images/rooms/room_pictures/garden_suite/gardensuite2.png';
import gardenSuite3 from '../../public/images/rooms/room_pictures/garden_suite/gardensuite3.png';
import gardenSuite4 from '../../public/images/rooms/room_pictures/garden_suite/gardensuite4.png';
// privateSuite
import privateSuite from '../../public/images/rooms/room_pictures/private_suite/privatesuite.png';
import privateSuite2 from '../../public/images/rooms/room_pictures/private_suite/privatesuite2.png';
import privateSuite3 from '../../public/images/rooms/room_pictures/private_suite/privatesuite3.png';
import privateSuite4 from '../../public/images/rooms/room_pictures/private_suite/privatesuite4.png';
import privateSuiteDeck from '../../public/images/rooms/room_pictures/private_suite/privatesuite_deck.png';
import privateSuiteTub from '../../public/images/rooms/room_pictures/private_suite/privatesuite_tub.png';
// decks
import deck1 from '../../public/images/rooms/room_pictures/deck/deck1.png';
import deck2 from '../../public/images/rooms/room_pictures/deck/deck2.png';
import deck3 from '../../public/images/rooms/room_pictures/deck/deck3.png';
// other
import minibarImage from '../../public/images/rooms/room_pictures/other/minibar.png';
import dresser from '../../public/images/rooms/room_pictures/other/dresser.png';

// large icons
import twoPersonsLarge from '../../public/images/rooms/icons/cards/two_persons.svg';
import threePersonsLarge from '../../public/images/rooms/icons/cards/three_persons.svg';
import fourPersonsLarge from '../../public/images/rooms/icons/cards/four_persons.svg';
import queenBedLarge from '../../public/images/rooms/icons/cards/queenBed.svg';
import kingBedLarge from '../../public/images/rooms/icons/cards/kingBed.svg';
import sofabedLarge from '../../public/images/rooms/icons/cards/sofabed.svg';
import showerLarge from '../../public/images/rooms/icons/cards/shower.svg';
import jacuzziLarge from '../../public/images/rooms/icons/cards/jacuzzi.svg';
import deckLarge from '../../public/images/rooms/icons/cards/deck.svg';
import accessibleLarge from '../../public/images/rooms/icons/cards/accessibility.svg';
// small icons
import twoPersons from '../../public/images/rooms/icons/room_page/two_persons.svg';
import threePersons from '../../public/images/rooms/icons/room_page/three_persons.svg';
import fourPersons from '../../public/images/rooms/icons/room_page/four_persons.svg';
import queenBed from '../../public/images/rooms/icons/room_page/queenBed.svg';
import kingBed from '../../public/images/rooms/icons/room_page/kingBed.svg';
import sofabed from '../../public/images/rooms/icons/room_page/sofabed.svg';
import shower from '../../public/images/rooms/icons/room_page/shower.svg';
import jacuzzi from '../../public/images/rooms/icons/room_page/jacuzzi.svg';
import deck from '../../public/images/rooms/icons/room_page/deck.svg';
import tv from '../../public/images/rooms/icons/room_page/tv.svg';
import bedding from '../../public/images/rooms/icons/room_page/bedding.svg';
import toiletries from '../../public/images/rooms/icons/room_page/toiletries.svg';
import minibar from '../../public/images/rooms/icons/room_page/minibar.svg';
import wifi from '../../public/images/rooms/icons/room_page/wifi.svg';
import hairDryer from '../../public/images/rooms/icons/room_page/hairDryer.svg';
import bathrobes from '../../public/images/rooms/icons/room_page/bathrobes.svg';
import acUnit from '../../public/images/rooms/icons/room_page/acUnit.svg';
import housekeeping from '../../public/images/rooms/icons/room_page/housekeeping.svg';
import accessible from '../../public/images/rooms/icons/room_page/accessibility.svg';

export const roomData = [
  {
    name: 'Standard Queen',
    avgRate: 205,
    roomType: 'Guest Room',
    sleeps: 2,
    maxSleeps: null,
    description: 'Our more affordable rooms. These moderate size rooms have street side views, include a Queen size bed, 450 thread linens, and sleek décor. Refresh in the bathroom with a high pressured shower, illuminated vanity mirrors, premium toiletries, hair dryer and cozy bathrobes. Enjoy complimentary high-speed Wi-Fi, a flat-screen TV, and fully stocked food and beverage minibar.',
    cardFeatures: {
      'Sleeps Two': twoPersonsLarge,
      'Bed Type': queenBedLarge,
      'Shower Type': showerLarge
    },
    features: {
      'Two Adults': twoPersons,
      'Queen Bed': queenBed,
      'Pressure Shower': shower,
      '- Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '450 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Cable TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: standard3,
      heroImage: standard3,
      other: {
        "Standard Room #4": standard4,
        "Standard Room #7": standard7,
        "Standard Room #8": standard8,
        "Standard Room #3": standard3,
        "x": dresser,
        "z": minibarImage,
      }
    },
    link: '/rooms/standard',
    path: 'standard',
    bookURL: 'https://galleryhotelny.client.innroad.com/room/19817'
  },

  {
    name: 'King Loft',
    avgRate: 225,
    roomType: 'Guest Room',
    sleeps: 2,
    maxSleeps: null,
    description: 'These King size bedrooms have loft ceilings, larger floor space and garden views. They include a King size bed, 450 thread linens, and sleek décor. Refresh in the bathroom with a high pressured shower, illuminated vanity mirrors, premium toiletries, hair dryer and cozy bathrobes. Enjoy complimentary high-speed Wi-Fi, a flat-screen TV, and fully stocked food and beverage minibar.',
    cardFeatures: {
      'Sleeps Two': twoPersonsLarge,
      'Bed Type': kingBedLarge,
      'Shower Type': showerLarge
    },
    features: {
      'Two Adults': twoPersons,
      'King Bed': kingBed,
      'Pressure Shower': shower,
      '- Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '450 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Cable TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: kingLoft5,
      heroImage: kingLoft5,
      other: {
        "King Loft Room #6": kingLoft6,
        "King Loft Room #5": kingLoft5,
        "x": dresser,
        "z": minibarImage,
      },
    },
    link: '/rooms/kingloft',
    path: 'kingloft',
    bookURL: 'https://galleryhotelny.client.innroad.com/room/19816'
  },

  {
    name: 'Queen With Deck',
    avgRate: 230,
    roomType: 'Guest Room',
    sleeps: 2,
    maxSleeps: null,
    description: 'Our premium Queen size bedroom. This room offers larger floorspace than our Standard Queen rooms, have a private sundeck and garden views. It includes a Queen size bed, 450 thread linens, and sleek décor. Refresh in the bathroom with a high pressured shower, illuminated vanity mirrors, premium toiletries, hair dryer and cozy bathrobes. Enjoy complimentary high-speed Wi-Fi, a flat-screen TV, and fully stocked food and beverage minibar.',
    cardFeatures: {
      'Sleeps Two': twoPersonsLarge,
      'Bed Type': queenBedLarge,
      'Shower Type': showerLarge,
      'Sun Deck': deckLarge
    },
    features: {
      'Two Adults': twoPersons,
      'Queen Bed': queenBed,
      'Sun Deck': deck,
      'Pressure Shower': shower,
      '- Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '450 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Cable TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: queenDeck,
      heroImage: queenDeck,
      other: [deck1, deck2, deck3]
    },
    link: '/rooms/queendeck',
    path: 'queendeck',
    bookURL: 'https://galleryhotelny.client.innroad.com/room/19725'
  },

  {
    name: 'King With Deck',
    avgRate: 245,
    roomType: 'Guest Room',
    sleeps: 2,
    maxSleeps: null,
    description: 'Our premium King size bedroom. It has a private sundeck and garden views. It includes a King size bed, 450 thread linens, and sleek décor. Refresh in the bathroom with a high pressured shower, illuminated vanity mirrors, premium toiletries, hair dryer and cozy bathrobes. Enjoy complimentary high-speed Wi-Fi, a flat-screen TV, and fully stocked food and beverage minibar.',
    cardFeatures: {
      'Sleeps Two': twoPersonsLarge,
      'Bed Type': kingBedLarge,
      'Shower Type': showerLarge,
      'Sun Deck': deckLarge
    },
    features: {
      'Two Adults': twoPersons,
      'King Bed': kingBed,
      'Sun Deck': deck,
      'Pressure Shower': shower,
      '- Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '450 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Cable TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: kingDeck,
      heroImage: kingDeck,
      other: [deck1, deck2, deck3]
    },
    link: '/rooms/kingdeck',
    path: 'kingdeck',
    bookURL: 'https://galleryhotelny.client.innroad.com/room/19724'
  },

  {
    name: 'Garden Suite',
    avgRate: 450,
    roomType: 'Suite',
    sleeps: 4,
    maxSleeps: 6,
    description: 'Our double room. This suite is ideal for group stays. It offers a small living room space, 2 Queen beds, 2 sofa beds, 450 thread linens, and sleek décor. Refresh in the bathroom with a high pressured shower, illuminated vanity mirrors, premium toiletries, hair dryer and cozy bathrobes. Enjoy complimentary high-speed Wi-Fi, a flat-screen TV, and fully stocked food and beverage minibar.',
    cardFeatures: {
      'Sleeps Four': fourPersonsLarge,
      'Bed Type': queenBedLarge,
      'Sofa Bed': sofabedLarge,
      'Shower Type': showerLarge,
      'Accessible': accessibleLarge
    },
    features: {
      'Four Adults': fourPersons,
      'Additional Two (fee)': twoPersons,
      '2 Queen Beds': queenBed,
      '2 Sofa Beds': sofabed,
      'Accessible Room': accessible,
      'Pressure Shower': shower,
      '- Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '450 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Cable TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: gardenSuite,
      heroImage: gardenSuite3,
      other: [gardenSuite, gardenSuite2, gardenSuite4, gardenSuite3]
    },
    link: '/rooms/gardensuite',
    path: 'gardensuite',
    bookURL: 'https://galleryhotelny.client.innroad.com/room/19818'
  },

  {
    name: 'Private Suite',
    avgRate: 750,
    roomType: 'Suite',
    sleeps: 2,
    maxSleeps: 3,
    description: 'Our top tier, luxury room. Your own private studio apartment with premium service and hospitality. This suite includes a King size bed, one sofa bed, kitchenette, living room space, private sundeck, and garden views. Refresh and indulge in the bathroom with a full size jet jacuzzi, dual sinks and illuminated vanity mirrors, premium toiletries, hair dryer and cozy bathrobes. Enjoy complimentary high-speed Wi-Fi, Apple TV, 65-inch flat-screen TV, and fully stocked food and beverage minibar.',
    cardFeatures: {
      'Sleeps Three': threePersonsLarge,
      'Bed Type': kingBedLarge,
      'Sofa Bed': sofabedLarge,
      'Shower Type': jacuzziLarge,
      'Sun Deck': deckLarge
    },
    features: {
      'Two Adults': twoPersons,
      'Three Adults (fee)': threePersons,
      'King Bed': kingBed,
      '1 Sofa Beds': sofabed,
      'Sun Deck': deck,
      'Tub/Jacuzzi': jacuzzi,
      '- Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '450 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Apple TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: privateSuite,
      heroImage: privateSuite,
      other: [privateSuite2, privateSuite3, privateSuite4, privateSuiteTub, privateSuiteDeck]
    },
    link: '/rooms/privatesuite',
    path: 'privatesuite',
    bookURL: 'https://galleryhotelny.client.innroad.com/room/19819'
  }
]