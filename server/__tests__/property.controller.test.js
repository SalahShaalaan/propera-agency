import {
  getAllProperites,
  deleteProperty,
  updateProperty,
  createNewProperty,
  getProperty
} from '../controllers/property.controller.js';
import Property from "../models/property.model.js";
import APIFeatures from "../utils/apiFeatures.js"

jest.mock('../models/property.model.js');
jest.mock('../utils/apiFeatures.js');

describe('Property Controller', () => {
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = {
      params: {},
      query: {},
      body: {}
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  describe('getAllProperites', () => {
    test('successfully returns all properties', async () => {
      const mockProperties = [
        { id: 1, name: 'Property 1' },
        { id: 2, name: 'Property 2' }
      ];

      const mockFeatures = {
        filter: jest.fn().mockReturnThis(),
        sort: jest.fn().mockReturnThis(),
        limitFields: jest.fn().mockReturnThis(),
        paginate: jest.fn().mockReturnThis(),
        query: Promise.resolve(mockProperties)
      };

      APIFeatures.mockImplementation(() => mockFeatures);

      await getAllProperites(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        status: 'success',
        results: 2,
        data: mockProperties
      });
    });
  });


  describe('deleteProperty', () => {
    test('successfully deletes a property', async () => {
      mockRequest.params.id = '123';
      Property.findByIdAndDelete.mockResolvedValue({});

      await deleteProperty(mockRequest, mockResponse);

      expect(Property.findByIdAndDelete).toHaveBeenCalledWith('123');
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.json).toHaveBeenCalledWith({
        status: 'success',
        message: 'Property Deleted !',
        data: null
      });
    });

    test('handles delete error', async () => {
      Property.findByIdAndDelete.mockRejectedValue(new Error('Delete failed'));

      await deleteProperty(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        status: 'faild',
        message: expect.stringContaining('Delete failed')
      });
    });
  });

  describe('updateProperty', () => {
    test('successfully updates a property', async () => {
      const updatedProperty = { id: '123', name: 'Updated Property' };
      mockRequest.params.id = '123';
      mockRequest.body = { name: 'Updated Property' };

      Property.findByIdAndUpdate.mockResolvedValue(updatedProperty);

      await updateProperty(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        status: 'success',
        data: updatedProperty
      });
    });

    test('handles property not found', async () => {
      Property.findByIdAndUpdate.mockResolvedValue(null);

      await updateProperty(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        status: 'fail',
        message: 'No property found with that ID'
      });
    });
  });

  describe('createNewProperty', () => {
    test('successfully creates a new property', async () => {
      const newProperty = { name: 'New Property', price: 500000 };
      mockRequest.body = newProperty;

      Property.create.mockResolvedValue(newProperty);

      await createNewProperty(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith({
        status: 'Success',
        message: 'Property Created',
        data: newProperty
      });
    });

    test('handles creation error', async () => {
      Property.create.mockRejectedValue(new Error('Validation failed'));

      await createNewProperty(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        status: 'fail',
        message: 'Validation failed'
      });
    });
  });

  describe('getProperty', () => {
    test('successfully retrieves a property', async () => {
      const mockProperty = {
        id: '123',
        name: 'Test Property',
        details: { price: 500000 },
        additionalDetails: { type: 'House' },
        features: ['Garden'],
        amenities: ['Pool'],
        agent: { name: 'John Doe' },
        address: { city: 'Test City' },
        image: 'test.jpg'
      };

      mockRequest.params.id = '123';
      Property.findById.mockResolvedValue(mockProperty);

      await getProperty(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        status: 'success',
        data: {
          details: mockProperty,
          additionalDetails: mockProperty.additionalDetails,
          features: mockProperty.features,
          amenities: mockProperty.amenities,
          agent: mockProperty.agent,
          address: mockProperty.address,
          image: mockProperty.image,
          name: mockProperty.name
        }
      });
    });

    test('handles property not found', async () => {
      Property.findById.mockResolvedValue(null);

      await getProperty(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        status: 'fail',
        message: 'No property found with that ID',
        data: null
      });
    });
  });
});
