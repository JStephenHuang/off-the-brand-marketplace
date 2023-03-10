import { Route, Routes } from "react-router-dom";

import MainPage from "./view/pages/main-page/main-page";
import LoginPage from "./view/pages/login-page/login-page";
import InboxPage from "./view/pages/inbox-page/inbox-page";
import ConversationPage from "./view/pages/inbox-page/conversation-page";
import ShopPage from "./view/pages/shop-page/shop-page";
import CreateListingPage from "./view/pages/shop-page/create-listing-page";
import EditListingPage from "./view/pages/shop-page/edit-listing-page";
import ListingPage from "./view/pages/shop-page/listings/listing-page";
import ProductPage from "./view/pages/product-page/product-page";
import ProfilePage from "./view/pages/profile-page/profile-page";
import ActiveListings from "./view/pages/shop-page/listings/active-listings";
import DraftListings from "./view/pages/shop-page/listings/draft-listings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products/:listingId" element={<ProductPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/inbox" element={<InboxPage />}>
        <Route path=":userId" element={<ConversationPage />} />
      </Route>
      <Route path="/shop" element={<ShopPage />}>
        <Route path="edit/:listingId" element={<EditListingPage />} />
        <Route path="listings" element={<ListingPage />}>
          <Route path="active" element={<ActiveListings />}></Route>
          <Route path="draft" element={<DraftListings />}></Route>
        </Route>
      </Route>
      <Route path="/new" element={<CreateListingPage />} />
    </Routes>
  );
};

export default App;
