# Deliveroo Clone

```markdown
# Setting Up Sanity and GROQ

1. Install Sanity CLI globally and create a new Sanity project:
   ```
   npm i -g sanity/cli
   npm create sanity@latest
   ```

2. Start the Sanity development server:
   ```
   npm run dev
   ```

3. Install required packages for Sanity and image handling:
   ```
   npm i @sanity/client @sanity/image-url
   ```

4. Add CORS configuration for your Sanity project (assuming it runs on http://localhost:3000):
   ```
   sanity cors add http://localhost:300
   ```

# GROQ - Graph-Relational Object Queries

```groq
*[_type == "featured"] {
  ...,
  restaurants[] -> {
    ...,
    dishes[] ->,
    category -> {
      name
    }
  }
}
```

# Technologies Used

- Redux
- Tailwind CSS
- React Native
- React Native Navigation
- React Native Animation
- React Native Maps
- Sanity
- Heroicons


# Environment Configuration

1. Install `react-native-dotenv` for managing environment variables:
   ```
   npm install react-native-dotenv
   ```

2. Add the Babel preset module for `react-native-dotenv`:

3. Import environment variables like this in your code:
   ```javascript
   import { name } from '@env';
   ```
