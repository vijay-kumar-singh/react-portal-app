import img1 from '../assets/images/product-1.jpeg';
import img2 from '../assets/images/product-2.gif';
import img5 from '../assets/images/product-5.jpeg';
import img6 from '../assets/images/product-6.jpeg';
import img9 from '../assets/images/product-9.jpeg';
import img10 from '../assets/images/product-10.jpeg';

export default [
    {
        sys: {
            id: '1',
        },
        fields: {
            name: 'Company car insurance',
            slug: 'car-insurance',
            type: 'vehicle',
            price: 100,
            featured: true,
            description: 'Kasko and statutory liability for your company passenger car.',
            extras: [
                'Statutory insurance for all cars',
                'Liability insurance',
                'Comprehensive insurance. Covers damage to your car',
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: img1,
                        },
                    },
                },
            ],
        },
    },
    {
        sys: {
            id: '2',
        },
        fields: {
            name: 'Health Insurance',
            slug: 'health-insurance',
            type: 'life',
            price: 150,
            featured: false,
            description: ' Quick examination and treatment for you and your employees - covers both work and leisure.',
            extras: [
                'Preliminary examination (eg MRI scan)',
                'Operation',
                'Rehabilitation',
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: img10,
                        },
                    },
                },
            ],
        },
    },
    {
        sys: {
            id: '5',
        },
        fields: {
            name: 'crime insurance',
            slug: 'crime-insurance',
            type: 'life',
            price: 200,
            featured: true,
            description:
                ' If your employees commit crime both against you - and against a person or company for which your company is liable.',
            extras: [
                'The crime insurance covers if your employees commit theft, fraud.',
                'If the crime is committed against your business, the insurance will cover your financial loss.',
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: img5,
                        },
                    },
                },
            ],
        },
    },
    {
        sys: {
            id: '6',
        },
        fields: {
            name: 'Business Travel Insurance',
            slug: 'Business-Travel',
            type: 'Business',
            price: 250,
            featured: false,
            description:
                'When your employees go on short or long business trips abroad, with this insurance they are covered by illness and injuries.',
            extras: [
                'covers everyone who travels in the interests of the company.',
                'covers trips all over the world - including on holidays',
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: img6,
                        },
                    },
                },
            ],
        },
    },
    {
        sys: {
            id: '9',
        },
        fields: {
            name: 'Dental Insurance',
            slug: 'Dental-Insurance',
            type: 'life',
            price: 300,
            featured: false,
            description:
                'Give your employees profits in everyday life, even with toothaches. The insurance provides reimbursement for most dental treatments.',
            extras: [
                'Dental fillings',
                'root canals',
                'Implants',
                'Surgery',
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: img9,
                        },
                    },
                },
            ],
        },
    },
    {
        sys: {
            id: '10',
        },
        fields: {
            name: 'Equipment Insurance',
            slug: 'Equipment-Insurance',
            type: 'machine',
            price: 350,
            featured: false,
            description:
            'When you own or rent work machines and come to harm other people or their stuff - can be extended with a hull insurance.',
            extras: [
                'covered for damage to the insured work machines',
                'can expand the coverage area if you also use the work machines abroad',
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: img2,
                        },
                    },
                },
            ],
        },
    },
];
