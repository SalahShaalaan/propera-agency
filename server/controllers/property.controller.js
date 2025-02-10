import Property from "../models/property.model.js";
import APIFeatures from "../utils/apiFeatures.js";

export const getAllProperites = async (req, res) => {
  try {
    const features = new APIFeatures(Property.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const properties = await features.query;

    res.status(200).json({
      status: "success",
      results: properties.length,
      data: properties,
    });
  } catch (error) {
    res.status(500).json({
      status: "faild",
      message: `Someting went wrong ${error.message}`,
    });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);



    res.status(204).json({
      status: "success",
      message: "Property Deleted !",
      data: null
    });
  } catch (error) {
    res.status(500).json({
      status: "faild",
      message: `Something went wrong: ${error.message}`,
    });
  }
};

export const updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!property) {
      return res.status(404).json({
        status: "fail",
        message: "No property found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: property,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: `Invalid data input: ${error.message}`,
    });
  }
};

export const createNewProperty = async (req, res) => {
  try {
    const newProperty = await Property.create(req.body);
    res.status(201).json({
      status: "Success",
      message: "Property Created",
      data: newProperty,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};


export const getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);


    if (!property) {
      return res.status(404).json({
        status: "fail",
        message: "No property found with that ID",
        data: null
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        details: property,
        additionalDetails: property.additionalDetails,
        features: property.features,
        amenities: property.amenities,
        agent: property.agent,
        address: property.address,
        image: property.image,
        name: property.name
      }
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
      data: null
    });
  }
};
