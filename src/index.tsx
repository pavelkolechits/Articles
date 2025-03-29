import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';


const root = createRoot(document.getElementById('root'));


root.render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>
);


