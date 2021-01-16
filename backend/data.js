import bcrypt from 'bcryptjs';

const data={

    users: [
        {
          name: 'mabuX',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
           //customer
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],

    products:[
        {
            _id:'1',
            name: 'Nike Tshirt',
            category: 'Shirts',
            image: '/images/nike-tshirt.jpg',
            price: 120,
            countInStock: 20,
            brand: 'Nike',
            rating: 4.5,
            numReview: 10,
            description: 'high quality product'
        },
        {
            _id:'2',
            name: 'Adidas Tshirt',
            category: 'Shirts',
            image: '/images/adidas-tshirt.jpg',
            price: 100,
            countInStock: 0,
            brand: 'Adidas',
            rating: 4,
            numReview: 20,
            description: 'high quality product'
        },
        {
            _id:'3',
            name: 'Zara Tshirt',
            category: 'Shirts',
            image: '/images/zara-tshirt.jpg',
            price: 150,
            countInStock: 60,
            brand: 'Zara',
            rating: 4.5,
            numReview: 15,
            description: 'high quality product'
        },
        {
            _id:'4',
            name: 'Reserved Tshirt',
            category: 'Shirts',
            image: '/images/reserved-tshirt.jpg',
            price: 120,
            countInStock: 69,
            brand: 'Reserved',
            rating: 3.5,
            numReview: 9,
            description: 'high quality product'
        },
        {
            _id:'5',
            name: 'H&M Tshirt',
            category: 'Shirts',
            image: '/images/h&m-tshirt.jpg',
            price: 170,
            countInStock: 12,
            brand: 'H&M',
            rating: 3,
            numReview: 15,
            description: 'high quality product'
        },
        {
            _id:'6',
            name: 'Cotton On Tshirt',
            category: 'Shirts',
            image: '/images/cotton-on-tshirt.jpg',
            price: 180,
            countInStock: 65,
            brand: 'Cotton On',
            rating: 4.5,
            numReview: 5,
            description: 'high quality product'
        },
    ]
}

export default data;