## Run Locally

Clone the project

```bash
  git clone https://dredsoft-labs-admin@bitbucket.org/dredsoft-labs/ecommerce.git
```

Go to the project directory

```bash
  cd ecommerce
```

Install dependencies

```bash
  npm install

  or

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

# Product Card UI – Assessment Submission

This component implements a responsive and accessible Product Card based on real-world data and UI/UX best practices.

## 🧩 Layout Approach

The Product Card is built using a structured card-based layout with Bootstrap utility classes and React JSX. The content is segmented into logical sections:

- Product Image
- Title and (optional) Description and Pricing
- Variant Selector
- Price Display
- Action Buttons (Add to Cart or Out of Stock buttons conditional display)

## 📱 Responsiveness Considerations

Responsiveness was achieved using Bootstrap’s layout utilities. Key considerations include:

- `object-fit-contain` on the product image ensures it scales responsively within its container while preserving aspect ratio and avoiding distortion across all devices.
- The `<select>` tag uses `w-auto` to prevent it from stretching full width, keeping the form compact and mobile-friendly.
- Buttons and layout elements adapt gracefully to smaller screen sizes while maintaining readability and functionality.

## 🔗 Demo

[Live Demo](#) (https://rainbow-scone-b93e16.netlify.app/)
