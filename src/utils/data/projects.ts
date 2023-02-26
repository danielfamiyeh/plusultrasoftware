export const projects = [
  {
    _id: {
      $oid: '63cd7cfe8504dc17260c7484',
    },
    name: 'Chamber',
    description: 'Proof-of-concept mobile social networking application',
    startDate: {
      $date: {
        $numberLong: '1674411252000',
      },
    },
    endDate: {
      $date: {
        $numberLong: '1674411252000',
      },
    },
    skills: ['reactNative', 'node', 'typescript', 'mongoDb'],
    links: ['https://github.com/danielfamiyeh/chamber'],
    __v: 0,
    features: [
      'Users can create and edit their own profiles, which can include information such as their name, bio, and profile picture.',
      'Users can view a feed of content posted by their friends.',
      'Users can create and share their own text and photos with their friends.',
      'Users can add each other as friends, allowing them to see their posts in their news feed.',
      'Users can communicate privately with other users through direct messages.',
    ],
    image: '/projects/chamber.png',
  },
  {
    _id: {
      $oid: '63cf0fb76eb27e0214fa518b',
    },
    name: 'Cloe',
    description: 'Mobile skincare diary redevelopment',
    startDate: {
      $date: {
        $numberLong: '1674411252000',
      },
    },
    endDate: {
      $date: {
        $numberLong: '1674411252000',
      },
    },
    skills: ['reactNative', 'node', 'typescript', 'mongoDb', 'graphql'],
    links: [],
    __v: 0,
    features: [
      'Implements social login strategies via Apple and Google and traditional email authentication',
      'Users can track skin progression via photos and attaching metadata about lifestyle habits',
      'Users can review products and share their thoughts about them on a public feed',
    ],
    image: '/projects/cloe.png',
  },
];
