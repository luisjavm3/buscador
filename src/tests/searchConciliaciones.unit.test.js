import { searchConciliaciones } from '../redux/reducers/result';

const mockConciliaciones = [
  {
    _id: '5f0bac255aba30b1dfec055e',
    index: 0,
    isActive: true,
    conciliationName: 'eu',
    sourceA: 'eu',
    sourceB: 'nostrud',
    balance: '$2,344.78',
    timestamp: {
      createdAt: '2016-02-14',
      updateAt: '2019-05-31',
    },
    description:
      'Culpa culpa ea enim irure in excepteur deserunt incididunt id ipsum sunt incididunt. Culpa ad minim ex magna adipisicing irure exercitation eu. Reprehenderit ullamco exercitation ullamco nisi excepteur laboris. Magna laborum nostrud fugiat irure culpa sunt sint duis in culpa ullamco labore enim proident. Pariatur est proident laborum mollit amet proident fugiat ea officia Lorem proident deserunt elit velit. Cillum minim proident magna minim laborum mollit velit quis. Eu ullamco pariatur in fugiat cillum.\r\n',
    tags: [
      'fugiat',
      'cillum',
      'exercitation',
      'occaecat',
      'veniam',
      'quis',
      'reprehenderit',
    ],
  },
  {
    _id: '5f0bac2503b2ddceb50e31f2',
    index: 1,
    isActive: false,
    conciliationName: 'sit',
    sourceA: 'sunt',
    sourceB: 'in',
    balance: '$3,116.93',
    timestamp: {
      createdAt: '2018-09-26',
      updateAt: '2015-09-03',
    },
    description:
      'Ullamco elit consectetur proident adipisicing commodo laboris ea tempor excepteur anim ex proident cupidatat. Incididunt est velit consectetur duis aliquip laboris in ex dolor tempor velit aliqua do veniam. Consequat ut incididunt consequat pariatur aliquip ex nulla et qui excepteur minim commodo exercitation veniam. Nulla eu cupidatat proident magna velit ad pariatur culpa et nostrud enim cillum dolor. Fugiat nulla eu fugiat cupidatat laboris nisi officia consectetur veniam qui occaecat.\r\n',
    tags: ['esse', 'mollit', 'pariatur', 'nostrud', 'ipsum', 'culpa', 'duis'],
  },
  {
    _id: '5f0bac25df14bd2d91f9993e',
    index: 2,
    isActive: true,
    conciliationName: 'dolore',
    sourceA: 'ex',
    sourceB: 'Lorem',
    balance: '$1,448.87',
    timestamp: {
      createdAt: '2015-05-25',
      updateAt: '2020-07-07',
    },
    description:
      'Et ut est ea nisi officia ex quis fugiat laboris excepteur. Officia esse fugiat eiusmod dolor ut enim. Laboris sunt culpa laboris officia. Nulla dolore magna id consequat nulla deserunt.\r\n',
    tags: [
      'amet',
      'sunt',
      'laborum',
      'exercitation',
      'labore',
      'exercitation',
      'nulla',
    ],
  },
  {
    _id: '5f0bac254f22f9c136a45f10',
    index: 3,
    isActive: true,
    conciliationName: 'ad',
    sourceA: 'dolore',
    sourceB: 'Lorem',
    balance: '$2,021.98',
    timestamp: {
      createdAt: '2015-02-18',
      updateAt: '2018-06-25',
    },
    description:
      'Esse ad ullamco do ipsum nulla reprehenderit ipsum minim aliquip mollit elit irure aute velit. Sint ad non eu sint occaecat. Eiusmod cupidatat duis sit eu occaecat quis voluptate consectetur laborum eu consectetur voluptate eiusmod. Ex ea Lorem est anim fugiat non ullamco mollit enim nulla dolore magna nisi. Consectetur cillum qui duis aliqua sint incididunt. Consectetur nostrud ad in labore esse magna elit dolor deserunt.\r\n',
    tags: ['et', 'cillum', 'velit', 'duis', 'Lorem', 'esse', 'mollit'],
  },
  {
    _id: '5f0bac25cfd46cd7c305f1dc',
    index: 4,
    isActive: false,
    conciliationName: 'excepteur',
    sourceA: 'reprehenderit',
    sourceB: 'incididunt',
    balance: '$1,032.44',
    timestamp: {
      createdAt: '2016-03-06',
      updateAt: '2015-03-15',
    },
    description:
      'Cupidatat laboris ea non commodo ex occaecat ad quis fugiat amet cupidatat sunt nulla amet. Eu magna occaecat in irure tempor velit in nostrud excepteur quis ea ut. Ipsum fugiat est sit tempor reprehenderit. Do exercitation magna qui et reprehenderit tempor anim.\r\n',
    tags: [
      'exercitation',
      'do',
      'exercitation',
      'sit',
      'nostrud',
      'mollit',
      'aliquip',
    ],
  },
];

describe('searchTableros( arr, searchTerm )', () => {
  test('Unicity', () => {
    expect([mockConciliaciones[0]]).toEqual(
      searchConciliaciones(mockConciliaciones, '5f0bac255aba30b1dfec055e')
    );

    expect([mockConciliaciones[1]]).toEqual(
      searchConciliaciones(mockConciliaciones, '5f0bac2503b2ddceb50e31f2')
    );

    expect([mockConciliaciones[2]]).toEqual(
      searchConciliaciones(mockConciliaciones, '5f0bac25df14bd2d91f9993e')
    );

    expect([mockConciliaciones[3]]).toEqual(
      searchConciliaciones(mockConciliaciones, '5f0bac254f22f9c136a45f10')
    );

    expect([mockConciliaciones[4]]).toEqual(
      searchConciliaciones(mockConciliaciones, '5f0bac25cfd46cd7c305f1dc')
    );
  });

  test('Match random word', () => {
    expect([
      mockConciliaciones[0],
      mockConciliaciones[2],
      mockConciliaciones[3],
    ]).toEqual(searchConciliaciones(mockConciliaciones, 'laborum'));

    expect([
      mockConciliaciones[0],
      mockConciliaciones[3],
      mockConciliaciones[4],
    ]).toEqual(searchConciliaciones(mockConciliaciones, 'reprehenderit'));

    expect([mockConciliaciones[2], mockConciliaciones[3]]).toEqual(
      searchConciliaciones(mockConciliaciones, 'dolore')
    );
  });
});
