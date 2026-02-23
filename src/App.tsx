import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWidgetBuilder from "./pages/PageWidgetBuilder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/widget-builder" element={<PageWidgetBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}
