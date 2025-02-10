import { revalidatePath } from 'next/cache';
import { createProperty } from '../services/createProperty';

jest.mock('next/cache', () => ({
  revalidatePath: jest.fn(),
}));

describe('createProperty', () => {
  let mockFormData;

  beforeEach(() => {
    mockFormData = new Map();
    // Setup basic form data
    mockFormData.set('name', 'Luxury Villa');
    mockFormData.set('image', 'villa.jpg');
    mockFormData.set('agent.name', 'John Doe');
    mockFormData.set('agent.email', 'john@example.com');
    mockFormData.set('agent.phone', '123-456-7890');
    mockFormData.set('agent.agency', 'Best Realty');
    mockFormData.set('details.description', 'Beautiful property');
    mockFormData.set('details.price', '500000');
    mockFormData.set('details.bedrooms', '3');
    mockFormData.set('details.bathrooms', '2');
    mockFormData.set('details.squareFootage', '2000');
    mockFormData.set('details.yearBuilt', '2020');
    mockFormData.set('address.street', '123 Main St');
    mockFormData.set('address.city', 'Springfield');
    mockFormData.set('address.state', 'IL');
    mockFormData.set('address.zipCode', '62701');
    mockFormData.set('address.country', 'USA');
    mockFormData.set('additionalDetails.listingStatus', 'For Sale');
    mockFormData.set('additionalDetails.propertyType', 'Villa');
    mockFormData.set('additionalDetails.floor', '2');
    mockFormData.set('additionalDetails.parkingSpaces', '2');
    mockFormData.set('additionalDetails.heating', 'Central');
    mockFormData.set('additionalDetails.cooling', 'Central AC');
    mockFormData.set('amenities', 'Pool, Garden, Garage');
    mockFormData.set('features', 'Modern Kitchen, Hardwood Floors');

    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('successfully creates a property', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true })
      })
    );

    const result = await createProperty({}, mockFormData);

    expect(result).toEqual({
      success: true,
      errors: null
    });
    expect(revalidatePath).toHaveBeenCalledWith('/');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('handles API error response', async () => {
    const errorMessage = 'Invalid property data';
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: errorMessage })
      })
    );

    const result = await createProperty({}, mockFormData);

    expect(result).toEqual({
      success: false,
      message: errorMessage,
      errors: null
    });
    expect(revalidatePath).not.toHaveBeenCalled();
  });

  test('handles network error', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Network error'))
    );

    const result = await createProperty({}, mockFormData);

    expect(result).toEqual({
      success: false,
      message: 'Network error occurred',
      errors: null
    });
    expect(revalidatePath).not.toHaveBeenCalled();
  });

  test('correctly formats property data', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true })
      })
    );

    await createProperty({}, mockFormData);

    const expectedPropertyData = {
      name: 'Luxury Villa',
      image: 'villa.jpg',
      agent: [{
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        agency: 'Best Realty'
      }],
      details: {
        description: 'Beautiful property',
        price: 500000,
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 2000,
        yearBuilt: 2020
      },
      address: {
        street: '123 Main St',
        city: 'Springfield',
        state: 'IL',
        zipCode: '62701',
        country: 'USA'
      },
      additionalDetails: {
        listingStatus: 'For Sale',
        propertyType: 'Villa',
        floor: 2,
        parkingSpaces: 2,
        heating: 'Central',
        cooling: 'Central AC'
      },
      amenities: ['Pool', 'Garden', 'Garage'],
      features: ['Modern Kitchen', 'Hardwood Floors']
    };

    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:5000/api/properties',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(expectedPropertyData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    );
  });
});
