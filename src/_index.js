import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './_testapp';


const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <App />
</React.StrictMode>);

