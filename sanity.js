import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'
import { PROJECT_ID, DATASET } from "@env"

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  useCdn: true,
  apiVersion: "2023-05-03",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Run this to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000 - add this command inside sanity folder directory from the terminal

export default client;