export interface productDataProp {
    id: number;
    title: string;
    type: string;
    price: string | number;
    image: string;
    gender: number;
    size: string;
    quantity: number;
    details: string;
    care: string[];
}

export const productData: productDataProp[] = [
    {
        id: 1,
        title: 'Brushed Raglan Sweatshirt',
        type: 'Sweater',
        price: '195',
        image: 'product-1',
        gender: 2,
        size: '',
        quantity: 2,
        details: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est aliquid reprehenderit quibusdam illo veritatis voluptatem quia laborum provident eius aspernatur illum sunt id atque, itaque qui? Ea, rem ut nobis illum, optio quas fugiat iste voluptatum eligendi sit in, placeat praesentium libero facilis autem. Iure quod itaque obcaecati asperiores consectetur adipisci consequuntur dolores incidunt, accusantium, illum quasi dolorum quia excepturi vero, ea exercitationem ullam deserunt unde tempore. Ducimus, cupiditate?`,
        care: [
            'Hand wash using cold water.',
            'Do not using bleach.',
            'Hang it to dry.',
            'Iron on low temperature.',
        ],
    },
    {
        id: 2,
        title: 'Cameryn Sash Tie Dress',
        type: 'Dress',
        price: '545',
        image: 'product-2',
        size: '',
        gender: 2,
        quantity: 0,
        details: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est aliquid reprehenderit quibusdam illo veritatis voluptatem quia laborum provident eius aspernatur illum sunt id atque, itaque qui? Ea, rem ut nobis illum, optio quas fugiat iste voluptatum eligendi sit in, placeat praesentium libero facilis autem. Iure quod itaque obcaecati asperiores consectetur adipisci consequuntur dolores incidunt, accusantium, illum quasi dolorum quia excepturi vero, ea exercitationem ullam deserunt unde tempore. Ducimus, cupiditate?`,
        care: [
            'Hand wash using cold water.',
            'Do not using bleach.',
            'Hang it to dry.',
            'Iron on low temperature.',
        ],
    },
    {
        id: 3,
        title: 'Flex Sweatshirt',
        price: '179',
        type: 'Sweater',
        image: 'product-3',
        gender: 2,
        size: '',
        quantity: 0,
        details: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est aliquid reprehenderit quibusdam illo veritatis voluptatem quia laborum provident eius aspernatur illum sunt id atque, itaque qui? Ea, rem ut nobis illum, optio quas fugiat iste voluptatum eligendi sit in, placeat praesentium libero facilis autem. Iure quod itaque obcaecati asperiores consectetur adipisci consequuntur dolores incidunt, accusantium, illum quasi dolorum quia excepturi vero, ea exercitationem ullam deserunt unde tempore. Ducimus, cupiditate?`,
        care: [
            'Hand wash using cold water.',
            'Do not using bleach.',
            'Hang it to dry.',
            'Iron on low temperature.',
        ],
    },
    {
        id: 4,
        title: 'Flex Sweatpants',
        price: '175',
        type: 'Pants',
        image: 'product-4',
        gender: 2,
        size: '',
        quantity: 0,
        details: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est aliquid reprehenderit quibusdam illo veritatis voluptatem quia laborum provident eius aspernatur illum sunt id atque, itaque qui? Ea, rem ut nobis illum, optio quas fugiat iste voluptatum eligendi sit in, placeat praesentium libero facilis autem. Iure quod itaque obcaecati asperiores consectetur adipisci consequuntur dolores incidunt, accusantium, illum quasi dolorum quia excepturi vero, ea exercitationem ullam deserunt unde tempore. Ducimus, cupiditate?`,
        care: [
            'Hand wash using cold water.',
            'Do not using bleach.',
            'Hang it to dry.',
            'Iron on low temperature.',
        ],
    },
    {
        id: 5,
        title: 'Pink Fleece Sweatpants',
        price: '195',
        type: 'Pants',
        image: 'product-5',
        gender: 2,
        size: '',
        quantity: 0,
        details: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est aliquid reprehenderit quibusdam illo veritatis voluptatem quia laborum provident eius aspernatur illum sunt id atque, itaque qui? Ea, rem ut nobis illum, optio quas fugiat iste voluptatum eligendi sit in, placeat praesentium libero facilis autem. Iure quod itaque obcaecati asperiores consectetur adipisci consequuntur dolores incidunt, accusantium, illum quasi dolorum quia excepturi vero, ea exercitationem ullam deserunt unde tempore. Ducimus, cupiditate?`,
        care: [
            'Hand wash using cold water.',
            'Do not using bleach.',
            'Hang it to dry.',
            'Iron on low temperature.',
        ],
    },
    {
        id: 6,
        title: 'Lite Sweatpants',
        price: '150',
        type: 'Pants',
        image: 'product-6',
        gender: 2,
        size: '',
        quantity: 1,
        details: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est aliquid reprehenderit quibusdam illo veritatis voluptatem quia laborum provident eius aspernatur illum sunt id atque, itaque qui? Ea, rem ut nobis illum, optio quas fugiat iste voluptatum eligendi sit in, placeat praesentium libero facilis autem. Iure quod itaque obcaecati asperiores consectetur adipisci consequuntur dolores incidunt, accusantium, illum quasi dolorum quia excepturi vero, ea exercitationem ullam deserunt unde tempore. Ducimus, cupiditate?`,
        care: [
            'Hand wash using cold water.',
            'Do not using bleach.',
            'Hang it to dry.',
            'Iron on low temperature.',
        ],
    },
    {
        id: 7,
        title: 'Imperial Alpaca Hoodie',
        price: '525',
        type: 'Sweater',
        image: 'product-7',
        gender: 2,
        size: '',
        quantity: 0,
        details: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est aliquid reprehenderit quibusdam illo veritatis voluptatem quia laborum provident eius aspernatur illum sunt id atque, itaque qui? Ea, rem ut nobis illum, optio quas fugiat iste voluptatum eligendi sit in, placeat praesentium libero facilis autem. Iure quod itaque obcaecati asperiores consectetur adipisci consequuntur dolores incidunt, accusantium, illum quasi dolorum quia excepturi vero, ea exercitationem ullam deserunt unde tempore. Ducimus, cupiditate?`,
        care: [
            'Hand wash using cold water.',
            'Do not using bleach.',
            'Hang it to dry.',
            'Iron on low temperature.',
        ],
    },
    {
        id: 8,
        title: 'Flex Push Button Bomber',
        price: '225',
        type: 'Pants',
        image: 'product-8',
        gender: 1,
        size: '',
        quantity: 2,
        details: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est aliquid reprehenderit quibusdam illo veritatis voluptatem quia laborum provident eius aspernatur illum sunt id atque, itaque qui? Ea, rem ut nobis illum, optio quas fugiat iste voluptatum eligendi sit in, placeat praesentium libero facilis autem. Iure quod itaque obcaecati asperiores consectetur adipisci consequuntur dolores incidunt, accusantium, illum quasi dolorum quia excepturi vero, ea exercitationem ullam deserunt unde tempore. Ducimus, cupiditate?`,
        care: [
            'Hand wash using cold water.',
            'Do not using bleach.',
            'Hang it to dry.',
            'Iron on low temperature.',
        ],
    },
    {
        id: 9,
        title: 'Muscle Tank',
        price: '75',
        type: 'T Shirt',
        image: 'product-9',
        gender: 2,
        size: '',
        quantity: 0,
        details: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est aliquid reprehenderit quibusdam illo veritatis voluptatem quia laborum provident eius aspernatur illum sunt id atque, itaque qui? Ea, rem ut nobis illum, optio quas fugiat iste voluptatum eligendi sit in, placeat praesentium libero facilis autem. Iure quod itaque obcaecati asperiores consectetur adipisci consequuntur dolores incidunt, accusantium, illum quasi dolorum quia excepturi vero, ea exercitationem ullam deserunt unde tempore. Ducimus, cupiditate?`,
        care: [
            'Hand wash using cold water.',
            'Do not using bleach.',
            'Hang it to dry.',
            'Iron on low temperature.',
        ],
    },
    {
        id: 10,
        title: 'Brushed Bomber',
        price: '225',
        type: 'Jackets',
        image: 'product-3',
        gender: 2,
        size: '',
        quantity: 0,
        details: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est aliquid reprehenderit quibusdam illo veritatis voluptatem quia laborum provident eius aspernatur illum sunt id atque, itaque qui? Ea, rem ut nobis illum, optio quas fugiat iste voluptatum eligendi sit in, placeat praesentium libero facilis autem. Iure quod itaque obcaecati asperiores consectetur adipisci consequuntur dolores incidunt, accusantium, illum quasi dolorum quia excepturi vero, ea exercitationem ullam deserunt unde tempore. Ducimus, cupiditate?`,
        care: [
            'Hand wash using cold water.',
            'Do not using bleach.',
            'Hang it to dry.',
            'Iron on low temperature.',
        ],
    },
    {
        id: 11,
        title: 'Raglan Sweatshirt',
        price: '195',
        type: 'Sweater',
        image: 'product-11',
        gender: 1,
        size: '',
        quantity: 0,
        details: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est aliquid reprehenderit quibusdam illo veritatis voluptatem quia laborum provident eius aspernatur illum sunt id atque, itaque qui? Ea, rem ut nobis illum, optio quas fugiat iste voluptatum eligendi sit in, placeat praesentium libero facilis autem. Iure quod itaque obcaecati asperiores consectetur adipisci consequuntur dolores incidunt, accusantium, illum quasi dolorum quia excepturi vero, ea exercitationem ullam deserunt unde tempore. Ducimus, cupiditate?`,
        care: [
            'Hand wash using cold water.',
            'Do not using bleach.',
            'Hang it to dry.',
            'Iron on low temperature.',
        ],
    },
];
