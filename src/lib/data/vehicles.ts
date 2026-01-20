// Real vehicle database for AJ24 MOTORS
// In production, this will come from Supabase

export interface Vehicle {
    id: string;
    slug: string;
    make: string;
    model: string;
    year: number;
    mileage: number;
    price: number; // in UGX
    priceUSD: number;
    location: 'Kampala' | 'Dubai' | 'In Transit' | 'Mombasa';
    status: 'available' | 'reserved' | 'sold';
    transmission: 'Automatic' | 'Manual';
    fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
    bodyType: 'SUV' | 'Sedan' | 'Hatchback' | 'Pickup' | 'Coupe' | 'Van';
    color: string;
    engineSize: number; // in liters
    seats: number;
    features: string[];
    images: string[];
    description: string;
    dubaiPrice: number;
    shippingCost: number;
    customsDuty: number;
    inspectionReport?: string;
    views: number;
    likes: number;
}

export const vehicles: Vehicle[] = [
    {
        id: '1',
        slug: 'toyota-land-cruiser-prado-2020',
        make: 'Toyota',
        model: 'Land Cruiser Prado',
        year: 2020,
        mileage: 45000,
        price: 185000000, // UGX 185 million
        priceUSD: 50000,
        location: 'Kampala',
        status: 'available',
        transmission: 'Automatic',
        fuelType: 'Diesel',
        bodyType: 'SUV',
        color: 'Pearl White',
        engineSize: 2.8,
        seats: 7,
        features: [
            '4WD',
            'Leather Interior',
            'Sunroof',
            'Navigation System',
            'Reverse Camera',
            'Cruise Control',
            'Alloy Wheels',
            'LED Headlights'
        ],
        images: [
            '/vehicles/prado-1.jpg',
            '/vehicles/prado-2.jpg',
            '/vehicles/prado-3.jpg'
        ],
        description: 'Immaculate 2020 Toyota Land Cruiser Prado in pristine condition. Freshly imported from Dubai with full service history. Perfect for both city driving and off-road adventures. This premium SUV combines luxury with legendary Toyota reliability.',
        dubaiPrice: 42000,
        shippingCost: 2500,
        customsDuty: 5500,
        inspectionReport: '/reports/prado-inspection.pdf',
        views: 1247,
        likes: 43
    },
    {
        id: '2',
        slug: 'toyota-harrier-2019',
        make: 'Toyota',
        model: 'Harrier',
        year: 2019,
        mileage: 38000,
        price: 105000000, // UGX 105 million
        priceUSD: 28000,
        location: 'Kampala',
        status: 'available',
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        bodyType: 'SUV',
        color: 'Graphite Grey',
        engineSize: 2.5,
        seats: 5,
        features: [
            'Hybrid Engine',
            'Premium Sound System',
            'Panoramic Sunroof',
            'Power Tailgate',
            'Heated Seats',
            'Lane Assist',
            'Blind Spot Monitor',
            'Adaptive Cruise Control'
        ],
        images: [
            '/vehicles/harrier-1.jpg',
            '/vehicles/harrier-2.jpg',
            '/vehicles/harrier-3.jpg'
        ],
        description: 'Stunning 2019 Toyota Harrier Hybrid combining fuel efficiency with premium features. Exceptionally low mileage for year. Perfect for executives who value comfort, technology, and economy. Hybrid system delivers remarkable fuel savings.',
        dubaiPrice: 24000,
        shippingCost: 1800,
        customsDuty: 2200,
        inspectionReport: '/reports/harrier-inspection.pdf',
        views: 892,
        likes: 67
    },
    {
        id: '3',
        slug: 'nissan-xtrail-2021',
        make: 'Nissan',
        model: 'X-Trail',
        year: 2021,
        mileage: 28000,
        price: 95000000, // UGX 95 million
        priceUSD: 25500,
        location: 'In Transit',
        status: 'reserved',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        bodyType: 'SUV',
        color: 'Magnetic Red',
        engineSize: 2.5,
        seats: 7,
        features: [
            '7-Seater',
            'Navigation System',
            'Reverse Camera',
            '360° View Monitor',
            'Dual AC',
            'Roof Rails',
            'Keyless Entry',
            'Push Start'
        ],
        images: [
            '/vehicles/xtrail-1.jpg',
            '/vehicles/xtrail-2.jpg',
            '/vehicles/xtrail-3.jpg'
        ],
        description: 'Versatile 2021 Nissan X-Trail with premium 7-seater configuration. Perfect for growing families. Currently in transit from Dubai, estimated arrival in 2 weeks. Reserve now to secure this popular model.',
        dubaiPrice: 22000,
        shippingCost: 1800,
        customsDuty: 1700,
        views: 654,
        likes: 28
    },
    {
        id: '4',
        slug: 'mercedes-benz-gls-450-2021',
        make: 'Mercedes-Benz',
        model: 'GLS 450',
        year: 2021,
        mileage: 22000,
        price: 320000000, // UGX 320 million
        priceUSD: 86000,
        location: 'Kampala',
        status: 'available',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        bodyType: 'SUV',
        color: 'Obsidian Black',
        engineSize: 3.0,
        seats: 7,
        features: [
            'Air Suspension',
            'Massage Seats',
            'Premium Plus Package',
            'Burmester Sound',
            '12.3" Display',
            'Head-Up Display',
            'AMG Styling',
            'MBUX System'
        ],
        images: [
            '/vehicles/gls-1.jpg',
            '/vehicles/gls-2.jpg',
            '/vehicles/gls-3.jpg'
        ],
        description: 'Ultimate luxury SUV. The 2021 Mercedes-Benz GLS 450 offers unparalleled comfort and technology. Perfect for C-suite executives who demand the best. Loaded with every premium feature available. Showroom condition.',
        dubaiPrice: 75000,
        shippingCost: 3500,
        customsDuty: 7500,
        inspectionReport: '/reports/gls-inspection.pdf',
        views: 1456,
        likes: 89
    },
    {
        id: '5',
        slug: 'toyota-premio-2019',
        make: 'Toyota',
        model: 'Premio',
        year: 2019,
        mileage: 42000,
        price: 62000000, // UGX 62 million
        priceUSD: 16500,
        location: 'Kampala',
        status: 'available',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        bodyType: 'Sedan',
        color: 'Silver Metallic',
        engineSize: 1.8,
        seats: 5,
        features: [
            'Fuel Efficient',
            'Navigation',
            'Reverse Camera',
            'Alloy Wheels',
            'Power Windows',
            'Central Locking',
            'ABS',
            'Airbags'
        ],
        images: [
            '/vehicles/premio-1.jpg',
            '/vehicles/premio-2.jpg'
        ],
        description: 'Reliable and economical 2019 Toyota Premio. Perfect daily driver with low running costs. Well-maintained with full service history. Ideal for professionals seeking dependable transportation.',
        dubaiPrice: 14000,
        shippingCost: 1500,
        customsDuty: 1000,
        views: 543,
        likes: 22
    },
    {
        id: '6',
        slug: 'range-rover-sport-2020',
        make: 'Land Rover',
        model: 'Range Rover Sport',
        year: 2020,
        mileage: 35000,
        price: 275000000, // UGX 275 million
        priceUSD: 74000,
        location: 'Dubai',
        status: 'available',
        transmission: 'Automatic',
        fuelType: 'Diesel',
        bodyType: 'SUV',
        color: 'Carpathian Grey',
        engineSize: 3.0,
        seats: 5,
        features: [
            'Dynamic Package',
            'Meridian Sound',
            'Adaptive Dynamics',
            'Terrain Response',
            'Gesture Tailgate',
            '21" Alloys',
            'Sliding Panoramic Roof',
            'Black Pack'
        ],
        images: [
            '/vehicles/rr-sport-1.jpg',
            '/vehicles/rr-sport-2.jpg',
            '/vehicles/rr-sport-3.jpg'
        ],
        description: 'Commanding 2020 Range Rover Sport with dynamic styling. Ultimate combination of luxury and performance. Currently in Dubai, can be shipped upon 40% deposit. Perfect for those who refuse to compromise.',
        dubaiPrice: 65000,
        shippingCost: 3000,
        customsDuty: 6000,
        inspectionReport: '/reports/rrsport-inspection.pdf',
        views: 1123,
        likes: 76
    },
    {
        id: '7',
        slug: 'honda-fit-2018',
        make: 'Honda',
        model: 'Fit',
        year: 2018,
        mileage: 55000,
        price: 38000000, // UGX 38 million
        priceUSD: 10000,
        location: 'Kampala',
        status: 'available',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        bodyType: 'Hatchback',
        color: 'Blue Metallic',
        engineSize: 1.5,
        seats: 5,
        features: [
            'Compact & Agile',
            'Excellent Fuel Economy',
            'Magic Seats',
            'Reverse Camera',
            'USB/AUX',
            'PowerWindows',
            'AC',
            'ABS'
        ],
        images: [
            '/vehicles/fit-1.jpg',
            '/vehicles/fit-2.jpg'
        ],
        description: 'Practical 2018 Honda Fit perfect for city driving. Amazing fuel efficiency and clever space utilization. Great first car or second vehicle. Well maintained and ready to go.',
        dubaiPrice: 8500,
        shippingCost: 1200,
        customsDuty: 300,
        views: 432,
        likes: 15
    },
    {
        id: '8',
        slug: 'bmw-x5-2020',
        make: 'BMW',
        model: 'X5 xDrive40i',
        year: 2020,
        mileage: 31000,
        price: 245000000, // UGX 245 million
        priceUSD: 66000,
        location: 'Kampala',
        status: 'available',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        bodyType: 'SUV',
        color: 'Alpine White',
        engineSize: 3.0,
        seats: 5,
        features: [
            'M Sport Package',
            'Harman Kardon Sound',
            'Panoramic Roof',
            'Digital Cockpit',
            'Gesture Control',
            'Wireless Charging',
            'Head-Up Display',
            '20" M Wheels'
        ],
        images: [
            '/vehicles/x5-1.jpg',
            '/vehicles/x5-2.jpg',
            '/vehicles/x5-3.jpg'
        ],
        description: 'Sporty 2020 BMW X5 with M Sport package. Perfect blend of performance and luxury. Low mileage for year. Meticulously maintained. For drivers who appreciate German engineering excellence.',
        dubaiPrice: 58000,
        shippingCost: 2800,
        customsDuty: 5200,
        inspectionReport: '/reports/x5-inspection.pdf',
        views: 987,
        likes: 64
    },
    {
        id: '9',
        slug: 'toyota-hilux-2021',
        make: 'Toyota',
        model: 'Hilux Double Cab',
        year: 2021,
        mileage: 25000,
        price: 115000000, // UGX 115 million
        priceUSD: 31000,
        location: 'In Transit',
        status: 'available',
        transmission: 'Manual',
        fuelType: 'Diesel',
        bodyType: 'Pickup',
        color: 'Super White',
        engineSize: 2.8,
        seats: 5,
        features: [
            '4x4',
            'Robust Build',
            'Tow Bar',
            'Bed Liner',
            'Fog Lights',
            'Reverse Sensors',
            'Bluetooth',
            'USB/AUX'
        ],
        images: [
            '/vehicles/hilux-1.jpg',
            '/vehicles/hilux-2.jpg'
        ],
        description: 'Legendary 2021 Toyota Hilux. Built to last. Perfect for businesses, NGOs, or adventure enthusiasts. Unbeatable reliability and resale value. Currently in transit, arrives next week.',
        dubaiPrice: 27000,
        shippingCost: 2000,
        customsDuty: 2000,
        views: 756,
        likes: 51
    },
    {
        id: '10',
        slug: 'audi-q7-2020',
        make: 'Audi',
        model: 'Q7 55 TFSI',
        year: 2020,
        mileage: 29000,
        price: 265000000, // UGX 265 million
        priceUSD: 71000,
        location: 'Dubai',
        status: 'available',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        bodyType: 'SUV',
        color: 'Mythos Black',
        engineSize: 3.0,
        seats: 7,
        features: [
            'S-Line Package',
            'Virtual Cockpit',
            'Matrix LED',
            'Bang & Olufsen',
            'Adaptive Air Suspension',
            'Massage Seats',
            '21" Wheels',
            '360° Camera'
        ],
        images: [
            '/vehicles/q7-1.jpg',
            '/vehicles/q7-2.jpg',
            '/vehicles/q7-3.jpg'
        ],
        description: 'Sophisticated 2020 Audi Q7 with 7-seater luxury. Technology-packed with every premium feature. Currently in Dubai, can start import process with 40% deposit. For those who demand Vorsprung durch Technik.',
        dubaiPrice: 62000,
        shippingCost: 3000,
        customsDuty: 6000,
        inspectionReport: '/reports/q7-inspection.pdf',
        views: 1034,
        likes: 58
    }
];

// Helper functions
export function getVehicleBySlug(slug: string): Vehicle | undefined {
    return vehicles.find(v => v.slug === slug);
}

export function getAvailableVehicles(): Vehicle[] {
    return vehicles.filter(v => v.status === 'available');
}

export function getVehiclesByLocation(location: Vehicle['location']): Vehicle[] {
    return vehicles.filter(v => v.location === location);
}

export function searchVehicles(query: string): Vehicle[] {
    const lowerQuery = query.toLowerCase();
    return vehicles.filter(v =>
        v.make.toLowerCase().includes(lowerQuery) ||
        v.model.toLowerCase().includes(lowerQuery) ||
        v.year.toString().includes(lowerQuery)
    );
}

export function filterVehicles(filters: {
    minPrice?: number;
    maxPrice?: number;
    make?: string;
    bodyType?: string;
    fuelType?: string;
    transmission?: string;
}): Vehicle[] {
    return vehicles.filter(v => {
        if (filters.minPrice && v.price < filters.minPrice) return false;
        if (filters.maxPrice && v.price > filters.maxPrice) return false;
        if (filters.make && v.make !== filters.make) return false;
        if (filters.bodyType && v.bodyType !== filters.bodyType) return false;
        if (filters.fuelType && v.fuelType !== filters.fuelType) return false;
        if (filters.transmission && v.transmission !== filters.transmission) return false;
        return true;
    });
}
