import { Schema, model, models } from "mongoose";
import { URL } from 'url'; // If using Node.js, or use appropriate URL type based on environment

export interface IImage extends Document{
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object; // Consider defining a more specific type if the structure of config is known
  transformationUrl?: string;
  aspectRatio?: number;
  color?: string;
  prompt?: string;
  author:  {
    _id: string;
    firstName: string;
    lastName: string;
  }// Assuming the ObjectId is represented as a string here; adjust based on actual usage
  createdAt?: Date;
  updatedAt?: Date;
}

// Note: If using this in a front-end environment where 'URL' type is not appropriate,
// you might replace 'URL' with 'string' for the URL fields.



const ImageSchema = new Schema({
    title: {type: String, required: true},
    transformationType: {type: String, required: true},
    publicId: {type: String, required: true},
    secureUrl: {type: URL, required: true},
    width: {type: Number, required: false},
    height: {type: Number, required: false},
    config: {type: Object, required: false},
    trnasformationUrl: {type: URL, required: false},
    aspectRatio: {type: Number, required: false},
    color: {type: String, required: false},
    prompt: {type: String, required: false},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;