import { useSelector } from "react-redux";

const ProfileSection = () => {
    const { name, email, phone, address } = useSelector(state => state.auth.user)
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
                <div>
                    <span className="font-semibold">Full Name:</span> {name}
                </div>
                <div>
                    <span className="font-semibold">Email:</span> {email}
                </div>

                {phone && <div>
                    <span className="font-semibold">Phone:</span> {phone}
                </div>}
                
                {address && <div>
                    <span className="font-semibold">Address:</span> {address}
                </div>}
            </div>
        </div>
    );
};

export default ProfileSection;