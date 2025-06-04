import { products43, products44, products45, products46 } from './baby'
import { products35, products36, products37 } from './bikes'
import { products40 } from './car'
import { products33, products34 } from './cosmetics'
import { products21, products22, products23, products24 } from './electronics'
import {
  products1,
  products10,
  products11,
  products12,
  products13,
  products14,
  products15,
  products16,
  products17,
  products18,
  products19,
  products2,
  products20,
  products3,
  products4,
  products5,
  products51,
  products52,
  products53,
  products54,
  products55,
  products56,
  products57,
  products58,
  products59,
  products6,
  products7,
  products8,
  products9,
} from './fashion'
import { products28 } from './glasses'
import { products25, products26, products27 } from './grocery'
import { products42 } from './jewelry'
import { products29, products30, products31, products32 } from './medical'
import { products47, products48, products49 } from './tools'
import { products41 } from './watches'

export const cars = [
  {
    id: 1,
    isNew: true,
    isIncoming: true,
    title: 'Peugeot 3008 1.5 blue HDI',
    brand: 'Peugeot',
    model: '3008',
    volume: '1.5',
    oldPrice: 21111,
    price: 20000,
    year: '2020',
    mileage: '20000',
    engineType: 'Benzinski',
    transmission: 'automatski',
    enginePower: '130',
    chassisNumber: 'VF3MCYHZRKS514080',
    pictures: [
      { url: 'https://picsum.photos/200?random=1' },
      { url: 'https://picsum.photos/200?random=2' },
      { url: 'https://picsum.photos/200?random=3' },
      { url: 'https://picsum.photos/200?random=4' },
      { url: 'https://picsum.photos/200?random=5' },
      { url: 'https://picsum.photos/200?random=6' },
      { url: 'https://picsum.photos/200?random=7' },
      { url: 'https://picsum.photos/200?random=8' },
      { url: 'https://picsum.photos/200?random=9' },
      { url: 'https://picsum.photos/200?random=10' },
    ],
    description: `✅ PEUGEOT 3008 1.5 BlueHDI ✅
Godina: 2020
Kilometraža: 20,000 km
Motor: Benzinski, 130 KS
Mjenjač: Automatski
Broj šasije: VF3MCYHZRKS514080
Stanje: NOVO u ponudi, U DOLASKU
Odlična oprema, servisna knjiga, moguća zamjena.`,
  },
  {
    id: 2,
    title: 'Volkswagen Tiguan 2.0 TDI',
    brand: 'Volkswagen',
    model: 'Tiguan',
    volume: '2.0',
    price: '23000',
    year: '2019',
    mileage: '30000',
    engineType: 'Dizelski',
    transmission: 'manualni',
    enginePower: '150',
    chassisNumber: 'WVGZZZ5NZKM514080',
    pictures: [
      { url: 'https://picsum.photos/200?random=7' },
      { url: 'https://picsum.photos/200?random=8' },
      { url: 'https://picsum.photos/200?random=9' },
      { url: 'https://picsum.photos/200?random=10' },
      { url: 'https://picsum.photos/200?random=11' },
      { url: 'https://picsum.photos/200?random=12' },
    ],
    description: `✅ VOLKSWAGEN TIGUAN 2.0 TDI ✅
Godina: 2019
Kilometraža: 30,000 km
Motor: Dizelski, 150 KS
Mjenjač: Manualni
Broj šasije: WVGZZZ5NZKM514080
Pouzdan SUV, bogata oprema, uredno održavan.`,
  },
  {
    id: 3,
    title: 'Toyota Corolla 1.8 Hybrid',
    brand: 'Toyota',
    model: 'Corolla',
    volume: '1.8',
    price: '25000',
    year: '2021',
    mileage: '15000',
    engineType: 'Hibridni',
    transmission: 'automatski',
    enginePower: '122',
    chassisNumber: 'JTNBVHEJ0MJ005948',
    pictures: [
      { url: 'https://picsum.photos/200?random=13' },
      { url: 'https://picsum.photos/200?random=14' },
      { url: 'https://picsum.photos/200?random=15' },
      { url: 'https://picsum.photos/200?random=16' },
      { url: 'https://picsum.photos/200?random=17' },
      { url: 'https://picsum.photos/200?random=18' },
    ],
    description: `✅ TOYOTA COROLLA 1.8 HYBRID ✅
Godina: 2021
Kilometraža: 15,000 km
Motor: Hibridni, 122 KS
Mjenjač: Automatski
Broj šasije: JTNBVHEJ0MJ005948
Ekonomična potrošnja, napredna sigurnost, odličan gradski automobil.`,
  },
  {
    id: 4,
    title: 'BMW X1 xDrive 18d',
    brand: 'BMW',
    model: 'X1',
    volume: '2.0',
    price: '28000',
    year: '2020',
    mileage: '25000',
    engineType: 'Dizelski',
    transmission: 'automatski',
    enginePower: '150',
    chassisNumber: 'WBA0E5100L5L81792',
    pictures: [
      { url: 'https://picsum.photos/200?random=19' },
      { url: 'https://picsum.photos/200?random=20' },
      { url: 'https://picsum.photos/200?random=21' },
      { url: 'https://picsum.photos/200?random=22' },
      { url: 'https://picsum.photos/200?random=23' },
      { url: 'https://picsum.photos/200?random=24' },
    ],
    description: `✅ BMW X1 xDrive 18d ✅
Godina: 2020
Kilometraža: 25,000 km
Motor: Dizelski, 150 KS
Mjenjač: Automatski
Broj šasije: WBA0E5100L5L81792
xDrive pogon, luksuzna oprema, servisna povijest.`,
  },
  {
    id: 5,
    title: 'Audi Q3 35 TFSI',
    brand: 'Audi',
    model: 'Q3',
    volume: '1.5',
    price: '29000',
    year: '2021',
    mileage: '12000',
    engineType: 'Benzinski',
    transmission: 'automatski',
    enginePower: '150',
    chassisNumber: 'WA1ZZZF30L1045238',
    pictures: [
      { url: 'https://picsum.photos/200?random=25' },
      { url: 'https://picsum.photos/200?random=26' },
      { url: 'https://picsum.photos/200?random=27' },
      { url: 'https://picsum.photos/200?random=28' },
      { url: 'https://picsum.photos/200?random=29' },
      { url: 'https://picsum.photos/200?random=30' },
    ],
    description: `✅ AUDI Q3 35 TFSI ✅
Godina: 2021
Kilometraža: 12,000 km
Motor: Benzinski, 150 KS
Mjenjač: Automatski
Broj šasije: WA1ZZZF30L1045238
Moderan SUV, vrhunska udobnost, prvi vlasnik.`,
  },
  {
    id: 6,
    title: 'Mercedes-Benz GLA 200',
    brand: 'Mercedes-Benz',
    model: 'GLA',
    volume: '1.3',
    price: '30000',
    year: '2021',
    mileage: '10000',
    engineType: 'Benzinski',
    transmission: 'automatski',
    enginePower: '163',
    chassisNumber: 'WDC1569421J520983',
    pictures: [
      { url: 'https://picsum.photos/200?random=31' },
      { url: 'https://picsum.photos/200?random=32' },
      { url: 'https://picsum.photos/200?random=33' },
      { url: 'https://picsum.photos/200?random=34' },
      { url: 'https://picsum.photos/200?random=35' },
      { url: 'https://picsum.photos/200?random=36' },
    ],
    description: `✅ MERCEDES-BENZ GLA 200 ✅
Godina: 2021
Kilometraža: 10,000 km
Motor: Benzinski, 163 KS
Mjenjač: Automatski
Broj šasije: WDC1569421J520983
Premium crossover, napredni sigurnosni sustavi, odlična očuvanost.`,
  },
  {
    id: 7,
    title: 'Hyundai Tucson 1.6 T-GDI Hybrid',
    brand: 'Hyundai',
    model: 'Tucson',
    volume: '1.6',
    price: '27000',
    year: '2022',
    mileage: '5000',
    engineType: 'Hibridni',
    transmission: 'automatski',
    enginePower: '230',
    chassisNumber: 'TMAJ3815LJJ045782',
    pictures: [
      { url: 'https://picsum.photos/200?random=37' },
      { url: 'https://picsum.photos/200?random=38' },
      { url: 'https://picsum.photos/200?random=39' },
      { url: 'https://picsum.photos/200?random=40' },
      { url: 'https://picsum.photos/200?random=41' },
      { url: 'https://picsum.photos/200?random=42' },
    ],
    description: `✅ HYUNDAI TUCSON 1.6 T-GDI HYBRID ✅
Godina: 2022
Kilometraža: 5,000 km
Motor: Hibridni, 230 KS
Mjenjač: Automatski
Broj šasije: TMAJ3815LJJ045782
Najnoviji model, niska potrošnja, odličan za obitelj.`,
  },
  {
    id: 8,
    title: 'Kia Sportage 2.0 CRDi',
    brand: 'Kia',
    model: 'Sportage',
    volume: '2.0',
    price: '26000',
    year: '2020',
    mileage: '18000',
    engineType: 'Dizelski',
    transmission: 'automatski',
    enginePower: '185',
    chassisNumber: 'KNAP5816BL0123456',
    pictures: [
      { url: 'https://picsum.photos/200?random=43' },
      { url: 'https://picsum.photos/200?random=44' },
      { url: 'https://picsum.photos/200?random=45' },
      { url: 'https://picsum.photos/200?random=46' },
      { url: 'https://picsum.photos/200?random=47' },
      { url: 'https://picsum.photos/200?random=48' },
    ],
    description: `✅ KIA SPORTAGE 2.0 CRDi ✅
Godina: 2020
Kilometraža: 18,000 km
Motor: Dizelski, 185 KS
Mjenjač: Automatski
Broj šasije: KNAP5816BL0123456
Pouzdan SUV, bogata serijska oprema, servisiran u ovlaštenom servisu.`,
  },
]

export const allProducts = [
  ...products1,
  ...products2,
  ...products3,
  ...products4,
  ...products5,
  ...products6,
  ...products7,
  ...products8,
  ...products9,
  ...products10,
  ...products11,
  ...products12,
  ...products13,
  ...products14,
  ...products15,
  ...products16,
  ...products17,
  ...products18,
  ...products19,
  ...products20,
  ...products21,
  ...products22,
  ...products23,
  ...products24,
  ...products25,
  ...products26,
  ...products27,
  ...products28,
  ...products29,
  ...products30,
  ...products31,
  ...products32,
  ...products33,
  ...products34,
  ...products35,
  ...products36,
  ...products37,

  ...products40,
  ...products41,
  ...products42,
  ...products43,
  ...products44,
  ...products45,
  ...products46,
  ...products47,
  ...products48,
  ...products49,

  ...products51,
  ...products52,
  ...products53,
  ...products54,
  ...products55,
  ...products56,
  ...products57,
  ...products58,
  ...products59,
]
