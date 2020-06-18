import React from 'react'
import Navigation from './Components/Navigation'
import { FormProvider } from "./Components/config/store";

function App() {
  return (
    <FormProvider>
      <Navigation />
    </FormProvider>
  );
}

export default App;
