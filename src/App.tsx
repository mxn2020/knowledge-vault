import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DocumentsPage from "./pages/DocumentsPage";
import UploadPage from "./pages/UploadPage";
import SearchPage from "./pages/SearchPage";
import StatsPage from "./pages/StatsPage";
import SettingsPage from "./pages/SettingsPage";
export default function App() {
  return (<BrowserRouter>
    <div style={{display:"flex"}}>
      <Sidebar />
      <main style={{marginLeft:"var(--sidebar-width)",flex:1,minHeight:"100vh"}}><Routes>
        <Route path="/" element={<DocumentsPage />} /> <Route path="/upload" element={<UploadPage />} />
        <Route path="/search" element={<SearchPage />} /> <Route path="/stats" element={<StatsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes></main>
    </div>
  </BrowserRouter>);
}
