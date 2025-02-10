const { getProperty } = require("../services/getProperty");

describe('getProperty', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('successfully fetches property details by id', async () => {
    const mockPropertyDetails = {
      data: {
        details: {
          id: 1,
          description: 'Luxury Villa',
          price: 500000,
          bedrooms: 4,
          bathrooms: 3,
          squareFootage: 2500,
          yearBuilt: 2020
        }
      }
    };

    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPropertyDetails)
      })
    );

    const propertyId = 1;
    const result = await getProperty(propertyId);

    expect(result).toEqual(mockPropertyDetails.data.details);
    expect(fetch).toHaveBeenCalledWith(`http://localhost:5000/api/properties/${propertyId}`);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('throws error when HTTP request fails', async () => {
    const propertyId = 999;
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404
      })
    );

    await expect(getProperty(propertyId)).rejects.toThrow('HTTP error! status: 404');
  });

  test('throws error on network failure', async () => {
    const propertyId = 1;
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Network error'))
    );

    await expect(getProperty(propertyId)).rejects.toThrow('Network error');
  });
});
