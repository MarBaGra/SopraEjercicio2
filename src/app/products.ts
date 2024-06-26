import { Product } from './common/products';

export const products: Product[] = [
  {
    product: 'Tomato',
    price: 0.75,
    currency: '€',
    rating: 4.8,
    description: 'Tomato is a very healthy food and is mostly used in salads.',
    image: 'assets/red-tomato-in-png.png',
    similarProducts: [
      {
        product: 'lettuce',
        price: 0.8,
        currency: '$',
        rating: 2.8,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        image: 'assets/pngtree-a-ripe-green-lettuce-png-image_5508901.jpg',
      },
      {
        product: 'Carrot',
        price: 0.4,
        currency: '€',
        rating: 3.5,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
        image: 'assets/carrot-with-ai-generated-free-png.webp',
      },
      {
        product: 'Tegridad',
        price: 2500,
        currency: '€',
        rating: 5,
        description:
          'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
      },
    ],
    reviews: [
      {
        image: 'assets/images.png',
        name: 'Homer J. Simpson',
        raging: 5,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        date: 'Ayer por la tarde, 2023',
      },
      {
        image: 'assets/marge-simpson--253x180.webp',
        name: 'Marge Simpson',
        raging: 4,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        date: 'La semana pasada, 2023',
      },
    ],
  },
  {
    product: 'Coca-Cola',
    price: 1.25,
    currency: '$',
    rating: 2.8,
    description: 'very refreshing drink',
    image: 'assets/7591b0999a57bf8f958c33d4bfe1b0a0.png',
    similarProducts: [
      {
        product: 'Powerade',
        price: 1.15,
        currency: '€',
        rating: 3.5,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
        image: 'assets/kolc-cr-pwd-avalancha-alpina-600ml-0522-lr.webp',
      },
      {
        product: 'Juice',
        price: 1,
        currency: '€',
        rating: 5,
        description:
          'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
        image: 'assets/pr_2901_20200917095450.png',
      },
      {
        product: 'Tomaco',
        price: 1000,
        currency: '€',
        rating: 4.8,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
    ],
    reviews: [
      {
        image: 'assets/marge-simpson--253x180.webp',
        name: 'Marge J. Simpson',
        raging: 5,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        date: 'Ayer por la tarde, 2023',
      },
      {
        image: 'assets/images.png',
        name: 'Homer J. Simpson',
        raging: 2,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        date: 'La semana pasada, 2023',
      },
    ],
  },
  {
    product: 'Powerade',
    price: 1.15,
    currency: '€',
    rating: 5,
    description: 'Energy drink',
    image: 'assets/kolc-cr-pwd-avalancha-alpina-600ml-0522-lr.webp',
    similarProducts: [
      {
        image: 'assets/7591b0999a57bf8f958c33d4bfe1b0a0.png',
        product: 'Coca-cola',
        price: 1.25,
        currency: '€',
        rating: 3.5,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
      },
      {
        image: 'assets/pr_2901_20200917095450.png',
        product: 'Juice',
        price: 1,
        currency: '€',
        rating: 4.8,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      },
    ],
    reviews: [
      {
        image: 'assets/images.png',
        name: 'Stan Marsh',
        raging: 1,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        date: 'Ayer por la tarde, 2023',
      },
      {
        image: 'assets/marge-simpson--253x180.webp',
        name: 'Randy Marsh',
        raging: 5,
        opinion:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
        date: 'primer día, 2023',
      },
    ],
  },
  {
    product: 'Juice',
    price: 1,
    currency: '€',
    rating: 3.5,
    description:
      'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
    image: 'assets/pr_2901_20200917095450.png',
    similarProducts: [],
    reviews: null,
  },
];
