const { fetchProperties } = require("../services/fetchProperties");

describe('fetchProperties', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  test('fetches properties successfully', async () => {
    const mockProperties = {
      data: [
        {
          id: 1,
          name: 'Luxury Villa',
          price: 500000
        },
        {
          id: 2,
          name: 'Modern Apartment',
          price: 300000
        }
      ]
    };

    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProperties)
      })
    );

    const fetchPromise = fetchProperties();
    jest.runAllTimers();
    const result = await fetchPromise;

    expect(result).toEqual(mockProperties.data);
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:5000/api/properties?'
    );
  });

  test('handles query parameters correctly', async () => {
    const mockProperties = {
      data: [
        {
          id: 1,
          name: 'Luxury Villa',
          price: 500000
        }
      ]
    };

    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProperties)
      })
    );

    const queryOptions = {
      price_min: 400000,
      bedrooms: 3,
      city: 'New York'
    };

    const fetchPromise = fetchProperties(queryOptions);
    jest.runAllTimers();
    await fetchPromise;

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('http://localhost:5000/api/properties?price_min=400000&bedrooms=3&city=New')
    );
  });

  test('handles HTTP error responses', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');

    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404
      })
    );

    const fetchPromise = fetchProperties();
    jest.runAllTimers();
    const result = await fetchPromise;

    expect(result).toBeUndefined();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching properties:',
      'HTTP error! status: 404'
    );
  });

  test('handles invalid data structure', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');

    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ invalidStructure: true })
      })
    );

    const fetchPromise = fetchProperties();
    jest.runAllTimers();
    const result = await fetchPromise;

    expect(result).toBeUndefined();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching properties:',
      'Invalid data structure received from the API'
    );
  });

  test('handles network errors', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');

    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Network error'))
    );

    const fetchPromise = fetchProperties();
    jest.runAllTimers();
    const result = await fetchPromise;

    expect(result).toBeUndefined();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching properties:',
      'Network error'
    );
  });

  test('respects the timeout delay', async () => {
    jest.spyOn(global, 'setTimeout');

    const mockProperties = {
      data: [{ id: 1, name: 'Test Property' }]
    };

    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProperties)
      })
    );

    const fetchPromise = fetchProperties();

    expect(global.setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);

    jest.runAllTimers();

    const result = await fetchPromise;
    expect(result).toEqual(mockProperties.data);
  });


});
