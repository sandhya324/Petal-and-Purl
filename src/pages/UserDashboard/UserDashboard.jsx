import { useNavigate } from "react-router-dom";

function UserDashboard() {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user") || "null"
    );

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login", { replace: true });
    };

    return (
        <div>

            <h1>Welcome to Petal & Purl!</h1>

            <h2>
                Hello, {user?.name || "Customer"} ❤️
            </h2>

            <p>Welcome to your personal dashboard.</p>

            <div>
                <button onClick={() => navigate("/my-orders")}>
                    My Orders
                </button>

                <button onClick={() => navigate("/wishlist")}>
                    My Wishlist
                </button>

                <button onClick={() => navigate("/cart")}>
                    My Cart
                </button>

                <button onClick={() => navigate("/profile")}>
                    My Profile
                </button>

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>

        </div>
    );
}

export default UserDashboard;