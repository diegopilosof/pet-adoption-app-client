import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pets from "./pages/Pets";
import Mypets from "./pages/Mypets";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PetDescription from "./pages/PetDescription";
import Faq from "./pages/Faq";
import UserProvider from "./context/UserContext";
import PetProvider from "./context/PetContext";
import ProfilePage from "./pages/ProfilePage";

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
              <Route path="profile" element={<Profile />} />
              <Route path="faq" element={<Faq />} />
              <Route path="profilepage" element={<ProfilePage />} />
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
