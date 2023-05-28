import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pets from "./pages/Pets";
import Mypets from "./pages/Mypets";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PetDescription from "./pages/PetDescription";
import Faq from "./pages/Faq";
import UserProvider from "./context/UserContext";
import PetProvider from "./context/PetContext";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboard from "./pages/AdminDashboard";
import Addpet from "./pages/Addpet";
import ManageUsers from "./pages/ManageUsers";
import ManagePets from "./pages/ManagePets";
import EditPet from "./pages/EditPet";

function App() {
  return (
    <UserProvider>
      <PetProvider>
        <ChakraProvider>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="pets" element={<Pets />} />
              <Route path="pets/:petId" element={<PetDescription />} />
              <Route path="mypets" element={<Mypets />} />
              <Route path="faq" element={<Faq />} />
              <Route path="profilepage" element={<ProfilePage />} />
              <Route path="admindashboard" element={<AdminDashboard />} />
              <Route path="addpet" element={<Addpet />} />
              <Route path="manageusers" element={<ManageUsers />} />
              <Route path="managepets" element={<ManagePets />} />
              <Route path="managepets/:petId" element={<EditPet />} />

              {/* <Route path="*" element={<NoPage />} /> */}
            </Routes>
          </BrowserRouter>
          {/* <Navbar /> */}
          <Footer />
        </ChakraProvider>
      </PetProvider>
    </UserProvider>
  );
}

export default App;
