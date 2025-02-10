import mongoose from 'mongoose';
import Property from '../models/property.model.js';

describe('Property Model', () => {
  const validPropertyData = {
    name: 'Luxury Villa',
    agent: [{
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      agency: 'Best Realty'
    }],
    image: 'villa.jpg',
    details: {
      description: 'Beautiful luxury villa with ocean view',
      price: 1000000,
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 3000,
      yearBuilt: 2020
    },
    address: {
      street: '123 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33139',
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
    amenities: ['Pool', 'Garden', 'Security System'],
    features: ['Ocean View', 'Modern Kitchen']
  };

  test('creates a valid property', async () => {
    const validProperty = new Property(validPropertyData);
    const savedProperty = await validProperty.validate();

    expect(savedProperty).toBeUndefined();
  });

  test('requires name field', async () => {
    const propertyWithoutName = new Property({
      ...validPropertyData,
      name: undefined
    });

    await expect(propertyWithoutName.validate()).rejects.toThrow('Property validation failed');
  });

  test('validates year built range', async () => {
    const propertyWithInvalidYear = new Property({
      ...validPropertyData,
      details: {
        ...validPropertyData.details,
        yearBuilt: 1700
      }
    });

    await expect(propertyWithInvalidYear.validate()).rejects.toThrow('Property validation failed');
  });

  test('requires at least one amenity', async () => {
    const propertyWithNoAmenities = new Property({
      ...validPropertyData,
      amenities: []
    });

    await expect(propertyWithNoAmenities.validate()).rejects.toThrow('At least one amenity is required');
  });

  test('validates listing status enum values', async () => {
    const propertyWithInvalidStatus = new Property({
      ...validPropertyData,
      additionalDetails: {
        ...validPropertyData.additionalDetails,
        listingStatus: 'Invalid Status'
      }
    });

    await expect(propertyWithInvalidStatus.validate()).rejects.toThrow('Property validation failed');
  });

  test('validates property type enum values', async () => {
    const propertyWithInvalidType = new Property({
      ...validPropertyData,
      additionalDetails: {
        ...validPropertyData.additionalDetails,
        propertyType: 'Invalid Type'
      }
    });

    await expect(propertyWithInvalidType.validate()).rejects.toThrow('Property validation failed');
  });

  test('requires valid agent information', async () => {
    const propertyWithInvalidAgent = new Property({
      ...validPropertyData,
      agent: [{
        name: 'John Doe',
        // Missing required fields
      }]
    });

    await expect(propertyWithInvalidAgent.validate()).rejects.toThrow('Property validation failed');
  });

  test('validates negative values in details', async () => {
    const propertyWithNegativeValues = new Property({
      ...validPropertyData,
      details: {
        ...validPropertyData.details,
        price: -1000,
        squareFootage: -100
      }
    });

    await expect(propertyWithNegativeValues.validate()).rejects.toThrow('Property validation failed');
  });

  test('includes timestamps', () => {
    const property = new Property(validPropertyData);
    expect(property.schema.options.timestamps).toBe(true);
  });

  test('trims string fields', () => {
    const propertyWithUntrimmedStrings = new Property({
      ...validPropertyData,
      name: '  Luxury Villa  ',
      address: {
        ...validPropertyData.address,
        street: '  123 Ocean Drive  '
      }
    });

    expect(propertyWithUntrimmedStrings.name).toBe('Luxury Villa');
    expect(propertyWithUntrimmedStrings.address.street).toBe('123 Ocean Drive');
  });
});
