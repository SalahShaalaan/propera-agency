import APIFeatures from '../utils/apiFeatures.js';

describe('APIFeatures', () => {
  let query;

  beforeEach(() => {
    query = {
      find: jest.fn().mockReturnThis(),
      sort: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis()
    };
  });

  describe('filter', () => {
    test('excludes special fields from filter', () => {
      const queryString = {
        price: { gte: '1000' },
        sort: 'price',
        fields: 'name,price',
        page: '1',
        limit: '10'
      };

      const features = new APIFeatures(query, queryString);
      features.filter();

      expect(query.find).toHaveBeenCalledWith({
        price: { $gte: '1000' }
      });
    });

    test('handles advanced filtering operators', () => {
      const queryString = {
        price: { gte: '1000', lte: '5000' },
        bedrooms: { gt: '2' }
      };

      const features = new APIFeatures(query, queryString);
      features.filter();

      expect(query.find).toHaveBeenCalledWith({
        price: { $gte: '1000', $lte: '5000' },
        bedrooms: { $gt: '2' }
      });
    });
  });

  describe('sort', () => {
    test('applies sorting when sort parameter is provided', () => {
      const queryString = { sort: 'price,-createdAt' };

      const features = new APIFeatures(query, queryString);
      features.sort();

      expect(query.sort).toHaveBeenCalledWith('price -createdAt');
    });

    test('defaults to createdAt sorting when no sort parameter', () => {
      const features = new APIFeatures(query, {});
      features.sort();

      expect(query.sort).toHaveBeenCalledWith('createdAt');
    });
  });

  describe('limitFields', () => {
    test('selects specific fields when fields parameter is provided', () => {
      const queryString = { fields: 'name,price,bedrooms' };

      const features = new APIFeatures(query, queryString);
      features.limitFields();

      expect(query.select).toHaveBeenCalledWith('name price bedrooms');
    });

    test('excludes __v field when no fields parameter', () => {
      const features = new APIFeatures(query, {});
      features.limitFields();

      expect(query.select).toHaveBeenCalledWith('-__v');
    });
  });

  describe('paginate', () => {
    test('applies pagination with provided page and limit', () => {
      const queryString = { page: '2', limit: '10' };

      const features = new APIFeatures(query, queryString);
      features.paginate();

      expect(query.skip).toHaveBeenCalledWith(10);
      expect(query.limit).toHaveBeenCalledWith(10);
    });

    test('uses default values when no pagination parameters', () => {
      const features = new APIFeatures(query, {});
      features.paginate();

      expect(query.skip).toHaveBeenCalledWith(0);
      expect(query.limit).toHaveBeenCalledWith(100);
    });
  });

  test('supports method chaining', () => {
    const features = new APIFeatures(query, {});

    const result = features
      .filter()
      .sort()
      .limitFields()
      .paginate();

    expect(result).toBe(features);
  });
});
