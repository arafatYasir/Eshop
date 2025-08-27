import { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import ProfileSection from "../components/ProfileSection"
import OrdersSection from "../components/OrdersSection";
import WishlistSection from "../components/WishlistSection";
import SecuritySection from "../components/SecuritySection";
import SettingsSection from "../components/SettingsSection";
import { useSelector } from "react-redux";

const DashboardPage = () => {
    const { currentTab } = useSelector(state => state.dashboard);

    const renderSection = () => {
        switch (currentTab) {
            case "Profile": return <ProfileSection />;
            case "Orders": return <OrdersSection />;
            case "Wishlist": return <WishlistSection />;
            case "Security": return <SecuritySection />;
            case "Settings": return <SettingsSection />;
            default: return null;    
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Main Content */}
            <main className="p-10">
                {renderSection()}
            </main>
        </div>
    );
};

export default DashboardPage;
