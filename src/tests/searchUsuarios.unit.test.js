import { searchUsuarios } from '../redux/reducers/result';
import testData from '../testData';

const mockUsuarios = [
  {
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
  },
  {
    _id: '5f0baad060c8551960364102',
    index: 1,
    isActive: false,
    picture: 'http://placehold.it/32x32',
    age: 37,
    name: {
      firstName: 'Cameron',
      lastName: 'Monroe',
    },
    gender: 'male',
    company: 'SOLGAN',
    email: 'cameronmonroe@solgan.com',
    phone: '+57 (860) 456-2550',
    address: '739 Newel Street, Wollochet, New York, 7768',
    createdAt: '2016-09-28',
    tags: ['nulla', 'esse', 'excepteur', 'laborum', 'sunt', 'aliquip', 'sint'],
  },
  {
    _id: '5f0baad032c56a6d94932c27',
    index: 2,
    isActive: false,
    picture: 'http://placehold.it/32x32',
    age: 38,
    name: {
      firstName: 'Berg',
      lastName: 'Myers',
    },
    gender: 'male',
    company: 'ZILLACON',
    email: 'bergmyers@zillacon.com',
    phone: '+57 (955) 490-2290',
    address: '925 Visitation Place, Zeba, New Mexico, 6116',
    createdAt: '2019-06-18',
    tags: [
      'consequat',
      'enim',
      'cupidatat',
      'voluptate',
      'fugiat',
      'commodo',
      'reprehenderit',
    ],
  },
  {
    _id: '5f0baad0fef2f90ee1c43e7d',
    index: 3,
    isActive: true,
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: {
      firstName: 'John',
      lastName: 'Lindsay',
    },
    gender: 'female',
    company: 'CUJO',
    email: 'johnlindsay@cujo.com',
    phone: '+57 (898) 431-2831',
    address: '723 Seeley Street, Graball, Tennessee, 9753',
    createdAt: '2016-01-17',
    tags: ['cillum', 'anim', 'ut', 'exercitation', 'enim', 'anim', 'nostrud'],
  },
  {
    _id: '5f0baad0292f27e4b234c00e',
    index: 4,
    isActive: true,
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: {
      firstName: 'Brittany',
      lastName: 'Holcomb',
    },
    gender: 'female',
    company: 'SHOPABOUT',
    email: 'brittanyholcomb@shopabout.com',
    phone: '+57 (952) 579-3048',
    address: '284 Beverley Road, Moquino, Arkansas, 2395',
    createdAt: '2017-05-27',
    tags: [
      'irure',
      'culpa',
      'incididunt',
      'deserunt',
      'fugiat',
      'laboris',
      'fugiat',
    ],
  },
];

describe('searchUsuarios( Array, searchTerm )', () => {
  test('Unicity', () => {
    expect([testData.usuarios[0]]).toEqual(
      searchUsuarios(testData.usuarios, '5f0baad061adfe58f1db5876')
    );

    expect([testData.usuarios[1]]).toEqual(
      searchUsuarios(testData.usuarios, '5f0baad060c8551960364102')
    );

    expect([testData.usuarios[2]]).toEqual(
      searchUsuarios(testData.usuarios, '5f0baad032c56a6d94932c27')
    );

    expect([testData.usuarios[3]]).toEqual(
      searchUsuarios(testData.usuarios, '5f0baad0fef2f90ee1c43e7d')
    );

    expect([testData.usuarios[4]]).toEqual(
      searchUsuarios(testData.usuarios, '5f0baad0292f27e4b234c00e')
    );
  });

  test('Match random word', () => {
    expect([mockUsuarios[0]]).toEqual(searchUsuarios(mockUsuarios, 'Cooper'));

    expect([mockUsuarios[0], mockUsuarios[2]]).toEqual(
      searchUsuarios(mockUsuarios, 'commodo')
    );

    expect([mockUsuarios[3], mockUsuarios[4]]).toEqual(
      searchUsuarios(mockUsuarios, 'female')
    );

    expect([mockUsuarios[1], mockUsuarios[3], mockUsuarios[4]]).toEqual(
      searchUsuarios(mockUsuarios, 'es')
    );
  });
});
