import request from 'supertest';
import express from 'express';
import propertiesRouter from '../routes/properties.route.js';
import {
  getAllProperites,
  createNewProperty,
  getProperty,
  updateProperty,
  deleteProperty
} from '../controllers/property.controller.js';

const app = express();
app.use(express.json());
app.use('/api/properties', propertiesRouter);

jest.mock('../controllers/property.controller.js');

describe('Properties Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/properties', () => {
    test('should route to getAllProperties controller', async () => {
      getAllProperites.mockImplementation((req, res) => {
        res.status(200).json({
          status: 'success',
          data: [{ id: 1, name: 'Test Property' }]
        });
      });

      const response = await request(app)
        .get('/api/properties')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(getAllProperites).toHaveBeenCalled();
      expect(response.body.status).toBe('success');
    });

    test('handles query parameters', async () => {
      const response = await request(app)
        .get('/api/properties?price_min=100000&bedrooms=3')
        .expect(200);

      expect(getAllProperites).toHaveBeenCalled();
      const mockReq = getAllProperites.mock.calls[0][0];
      expect(mockReq.query).toHaveProperty('price_min', '100000');
      expect(mockReq.query).toHaveProperty('bedrooms', '3');
    });
  });

  describe('POST /api/properties', () => {
    const newProperty = {
      name: 'New Property',
      price: 500000
    };

    test('should route to createNewProperty controller', async () => {
      createNewProperty.mockImplementation((req, res) => {
        res.status(201).json({
          status: 'success',
          data: req.body
        });
      });

      const response = await request(app)
        .post('/api/properties')
        .send(newProperty)
        .expect('Content-Type', /json/)
        .expect(201);

      expect(createNewProperty).toHaveBeenCalled();
      expect(response.body.data).toEqual(newProperty);
    });
  });

  describe('GET /api/properties/:id', () => {
    test('should route to getProperty controller', async () => {
      getProperty.mockImplementation((req, res) => {
        res.status(200).json({
          status: 'success',
          data: { id: req.params.id, name: 'Test Property' }
        });
      });

      const response = await request(app)
        .get('/api/properties/123')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(getProperty).toHaveBeenCalled();
      expect(response.body.data.id).toBe('123');
    });
  });

  describe('PUT /api/properties/:id', () => {
    const updatedData = {
      name: 'Updated Property',
      price: 600000
    };

    test('should route to updateProperty controller', async () => {
      updateProperty.mockImplementation((req, res) => {
        res.status(200).json({
          status: 'success',
          data: { id: req.params.id, ...req.body }
        });
      });

      const response = await request(app)
        .put('/api/properties/123')
        .send(updatedData)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(updateProperty).toHaveBeenCalled();
      expect(response.body.data).toEqual({
        id: '123',
        ...updatedData
      });
    });
  });

  describe('DELETE /api/properties/:id', () => {
    test('should route to deleteProperty controller', async () => {
      deleteProperty.mockImplementation((req, res) => {
        res.status(204).send();
      });

      await request(app)
        .delete('/api/properties/123')
        .expect(204);

      expect(deleteProperty).toHaveBeenCalled();
      const mockReq = deleteProperty.mock.calls[0][0];
      expect(mockReq.params.id).toBe('123');
    });
  });
});
