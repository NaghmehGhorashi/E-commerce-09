import { BrowserRouter } from 'react-router-dom';
import RouteApp from './Routes/RouteApp';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense className="text-amber-50" fallback={<>Loading</>}>
          <RouteApp />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
