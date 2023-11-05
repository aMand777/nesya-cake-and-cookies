interface Data {
  id: number
  title: string
  price: number
  img: string
}

export const getPromotion = (): Data[] => [
  {
    id: 1,
    title: 'Tiramisu Coklat',
    price: 300000,
    img: '/img/cake-1.png',
  },
  {
    id: 2,
    title: 'Bolu Pandan',
    price: 150000,
    img: '/img/cake-2.jpg',
  },
  {
    id: 3,
    title: 'Custom Birthday Cake',
    price: 270000,
    img: '/img/cake-3.jpg',
  },
  {
    id: 4,
    title: 'Choco Cookies and Peanut',
    price: 30000,
    img: '/img/cookies-1.jpg',
  },
  {
    id: 5,
    title: 'Aneka Kue Lebaran',
    price: 37000,
    img: '/img/cookies-2.jpg',
  },
  {
    id: 6,
    title: 'Choco Chips',
    price: 35000,
    img: '/img/cookies-3.png',
  },
]

export const getFeaturedProduct = (): Data[] => [
  {
    id: 1,
    title: 'Brownies',
    price: 120000,
    img: '/img/brownies.jpg',
  },
  {
    id: 2,
    title: 'Kue Kismis',
    price: 100000,
    img: '/img/kue-kismis.jpg',
  },
  {
    id: 3,
    title: 'Pretzels',
    price: 50000,
    img: '/img/pretzels.jpg',
  },
  {
    id: 4,
    title: 'Choco Cookies',
    price: 30000,
    img: '/img/choco-cookies.webp',
  },
  {
    id: 5,
    title: 'Choco Marbels',
    price: 50000,
    img: '/img/cookies-marbels.jpg',
  },
]

export const getDetailPromo = (id: number) => getPromotion().filter((item) => item.id === id)
export const getDetailFeatureProduct = (id: number) => getFeaturedProduct().filter((item) => item.id === id)

export const formattedAmount = (num: number) => {
  return num.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
}
