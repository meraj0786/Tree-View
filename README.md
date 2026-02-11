# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


🌳 Tree View Component (React + TypeScript)

A fully functional and reusable Tree View Component built using React + TypeScript.

This component supports expand/collapse, drag-and-drop reordering, lazy loading, inline editing, and full CRUD operations while maintaining proper tree hierarchy integrity.

🚀 Features
1️⃣ Expand / Collapse Nodes

Toggle parent nodes between expanded and collapsed state.

Expand/collapse icon updates dynamically.

Maintains local node state.

2️⃣ Add New Node

Add child nodes to any parent node.

Inline input field for entering node name.

Updates tree structure dynamically.

3️⃣ Remove Node

Delete any node including its entire subtree.

Confirmation dialog before deletion.

Automatically updates parent structure.

4️⃣ Drag & Drop Support

Reorder nodes within the same level.

Move nodes across different parent nodes.

Preserves tree hierarchy integrity.

Powered by a lightweight drag-and-drop solution.

5️⃣ Lazy Loading (Simulated API)

Child nodes load only when a parent node is expanded.

Simulated asynchronous API call.

Displays loading indicator during fetch.

6️⃣ Edit Node Name

Inline editing on double-click or edit icon.

Save on Enter or blur.

Cancel with Escape key.

🛠 Tech Stack

React

TypeScript

Functional Components + Hooks

Minimal external libraries

Drag & Drop (e.g. dnd-kit / react-dnd)

Clean component decomposition

Controlled state management

📦 Installation
git clone https://github.com/your-username/tree-view.git
cd tree-view
npm install
npm start

🧠 Data Model
export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  collapsed?: boolean;
  isLoading?: boolean;
}


Each node contains a unique id

Recursive children array

Optional UI state properties

🏗 Component Structure
TreeView/
│
├── DeleteNodes.js        // Delete Node component
├── TreeNode.js        // Recursive node component
├── Notes.js          // Add Notes component
├── VerticalTree.js          // Main tree container
└── EdatingLabel.js            //Edit Heading Component

🔁 Core Functionalities Implemented
Add Node

Recursively finds parent and inserts child.

Delete Node

Removes node and its subtree safely.

Edit Node

Updates node label using immutable tree update logic.

Drag & Drop

Maintains structural integrity.

Prevents invalid nesting.

Handles reordering and parent reassignment.

Lazy Loading

Simulated async behavior:

const fetchChildren = (nodeId: string): Promise<TreeNode[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
};

🎨 UI Design

Clean minimal styling

Indented hierarchy structure

Connector lines

Smooth expand/collapse animation

Hover actions for edit/delete/add

♻️ Reusability

The <TreeView /> component is:

Fully reusable

Accepts initial tree data as props

Easily extendable

Well-typed with TypeScript

Separated logic from UI