import { getPlainItem } from '../components/Main/Card';

test('getPlainItem(item, typeOfItem)', () => {
  const usuario = {
    _id: '5f0baad061adfe58f1db5876',
    index: 0,
    isActive: false,
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: {
      firstName: 'Cooper',
      lastName: 'Grant',
    },
    gender: 'male',
    company: 'RODEMCO',
    email: 'coopergrant@rodemco.com',
    phone: '+57 (993) 557-3635',
    address: '592 Montgomery Place, Fairview, Vermont, 3033',
    createdAt: '2016-04-20',
    tags: ['dolore', 'commodo', 'magna', 'aute', 'dolore', 'dolor', 'anim'],
  };

  const fuente = {
    _id: '5f0baba1913855e14eb69937',
    index: 0,
    isActive: false,
    name: 'amet',
    company: 'ENAUT',
    timestamp: {
      createdAt: '2018-05-03',
      updateAt: '2017-02-16',
    },
    description:
      'Eu ea incididunt mollit dolor. Irure reprehenderit ipsum dolore minim. Ut eiusmod esse velit eiusmod nulla. Duis sint commodo consectetur do. Ad aute ipsum voluptate cillum excepteur fugiat pariatur amet tempor anim ex cupidatat. Reprehenderit et pariatur mollit officia aute duis.\r\n',
    tags: ['minim', 'minim', 'velit', 'commodo', 'eiusmod', 'ut', 'enim'],
  };

  const conciliacion = {
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
  };

  const tablero = {
    _id: '5f0badf11ea4db1df39532fb',
    index: 0,
    isActive: false,
    dashboardName: 'nostrud',
    visualType: [
      {
        name: 'exercitation',
      },
      {
        name: 'pariatur',
      },
    ],
    visuals: [
      {
        name: 'laboris',
        type: 'tempor',
      },
      {
        name: 'cillum',
        type: 'laborum',
      },
      {
        name: 'voluptate',
        type: 'sint',
      },
      {
        name: 'nisi',
        type: 'amet',
      },
    ],
    timestamp: {
      createdAt: '2014-11-11',
      updateAt: '2019-12-20',
    },
    description:
      'Nulla dolore reprehenderit proident consequat. Minim aliquip deserunt fugiat in fugiat cupidatat incididunt ad non non minim in cillum. Nostrud voluptate qui ullamco aliquip proident mollit eu est aliquip cupidatat. Proident deserunt consectetur ullamco Lorem ea occaecat enim. Anim id cupidatat quis adipisicing duis dolor aliquip aliqua. Lorem Lorem veniam occaecat sint sit deserunt nostrud tempor mollit eiusmod duis.\r\n',
    tags: [
      'labore',
      'quis',
      'occaecat',
      'deserunt',
      'irure',
      'laboris',
      'aliquip',
    ],
  };

  const expectedUsuario = {
    _id: '5f0baad061adfe58f1db5876',
    index: 0,
    isActive: false,
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: 'Cooper Grant',
    gender: 'male',
    company: 'RODEMCO',
    email: 'coopergrant@rodemco.com',
    phone: '+57 (993) 557-3635',
    address: '592 Montgomery Place, Fairview, Vermont, 3033',
    createdAt: '2016-04-20',
    tags: '#dolore #commodo #magna #aute #dolore #dolor #anim',
  };

  const expectedFuente = {
    _id: '5f0baba1913855e14eb69937',
    index: 0,
    isActive: false,
    name: 'amet',
    company: 'ENAUT',
    createdAt: '2018-05-03',
    updateAt: '2017-02-16',
    description:
      'Eu ea incididunt mollit dolor. Irure reprehenderit ipsum dolore minim. Ut eiusmod esse velit eiusmod nulla. Duis sint commodo consectetur do. Ad aute ipsum voluptate cillum excepteur fugiat pariatur amet tempor anim ex cupidatat. Reprehenderit et pariatur mollit officia aute duis.\r\n',
    tags: '#minim #minim #velit #commodo #eiusmod #ut #enim',
  };

  const expectedConciliacion = {
    _id: '5f0bac255aba30b1dfec055e',
    index: 0,
    isActive: true,
    conciliationName: 'eu',
    sourceA: 'eu',
    sourceB: 'nostrud',
    balance: '$2,344.78',
    createdAt: '2016-02-14',
    updateAt: '2019-05-31',
    description:
      'Culpa culpa ea enim irure in excepteur deserunt incididunt id ipsum sunt incididunt. Culpa ad minim ex magna adipisicing irure exercitation eu. Reprehenderit ullamco exercitation ullamco nisi excepteur laboris. Magna laborum nostrud fugiat irure culpa sunt sint duis in culpa ullamco labore enim proident. Pariatur est proident laborum mollit amet proident fugiat ea officia Lorem proident deserunt elit velit. Cillum minim proident magna minim laborum mollit velit quis. Eu ullamco pariatur in fugiat cillum.\r\n',
    tags: '#fugiat #cillum #exercitation #occaecat #veniam #quis #reprehenderit',
  };

  const expectedTablero = {
    _id: '5f0badf11ea4db1df39532fb',
    index: 0,
    isActive: false,
    dashboardName: 'nostrud',
    visualType: ' exercitation, pariatur',
    visuals: [
      {
        name: 'laboris',
        type: 'tempor',
      },
      {
        name: 'cillum',
        type: 'laborum',
      },
      {
        name: 'voluptate',
        type: 'sint',
      },
      {
        name: 'nisi',
        type: 'amet',
      },
    ],
    createdAt: '2014-11-11',
    updateAt: '2019-12-20',
    description:
      'Nulla dolore reprehenderit proident consequat. Minim aliquip deserunt fugiat in fugiat cupidatat incididunt ad non non minim in cillum. Nostrud voluptate qui ullamco aliquip proident mollit eu est aliquip cupidatat. Proident deserunt consectetur ullamco Lorem ea occaecat enim. Anim id cupidatat quis adipisicing duis dolor aliquip aliqua. Lorem Lorem veniam occaecat sint sit deserunt nostrud tempor mollit eiusmod duis.\r\n',
    tags: '#labore #quis #occaecat #deserunt #irure #laboris #aliquip',
  };

  expect(expectedUsuario).toEqual(getPlainItem(usuario, 'usuario'));
  expect(expectedFuente).toEqual(getPlainItem(fuente, 'fuente'));
  expect(expectedConciliacion).toEqual(
    getPlainItem(conciliacion, 'conciliacion')
  );
  expect(expectedTablero).toEqual(getPlainItem(tablero, 'tablero'));
});
