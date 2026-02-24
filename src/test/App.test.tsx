import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import DocumentsPage from "../pages/DocumentsPage"; import UploadPage from "../pages/UploadPage";
import SearchPage from "../pages/SearchPage"; import StatsPage from "../pages/StatsPage"; import SettingsPage from "../pages/SettingsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }
describe("Sidebar", () => { it("renders nav items", () => { wrap(<Sidebar/>); expect(screen.getByText("Knowledge Vault")).toBeInTheDocument(); }); });
describe("Pages", () => {
  it("DocumentsPage renders", () => { wrap(<DocumentsPage/>); expect(screen.getByText("Document Library")).toBeInTheDocument(); });
  it("UploadPage renders", () => { wrap(<UploadPage/>); expect(screen.getByText("Upload & Index")).toBeInTheDocument(); });
  it("SearchPage renders", () => { wrap(<SearchPage/>); expect(screen.getByText("Vector Search")).toBeInTheDocument(); });
  it("StatsPage renders", () => { wrap(<StatsPage/>); expect(screen.getByText("Total Documents")).toBeInTheDocument(); });
  it("SettingsPage renders", () => { wrap(<SettingsPage/>); expect(screen.getByText("Vector Database Connection")).toBeInTheDocument(); });
});
