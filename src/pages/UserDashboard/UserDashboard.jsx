import { useNavigate } from "react-router-dom";
import {
  Package,
  Heart,
  ShoppingBag,
  User,
  ArrowRight,
  Flower2
} from "lucide-react";

import { assets } from "../../assets/assets";

function UserDashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const dashboardItems = [
    {
      title: "My Orders",
      description: "Track and manage your purchases.",
      icon: Package,
      path: "/my-orders",
      color: "bg-[#F5E3E6]",
    },
    {
      title: "My Wishlist",
      description: "Your favourite handmade creations.",
      icon: Heart,
      path: "/wishlist",
      color: "bg-[#F9E9E2]",
    },
    {
      title: "My Cart",
      description: "Your lovely picks are waiting.",
      icon: ShoppingBag,
      path: "/cart",
      color: "bg-[#F1E8DF]",
    },
    {
      title: "My Profile",
      description: "Manage your personal information.",
      icon: User,
      path: "/profile",
      color: "bg-[#F5E3E6]",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen py-12 px-5 md:px-10">

      <div className="max-w-6xl mx-auto">

        {/* Welcome Section */}
        <div className="relative overflow-hidden rounded-3xl bg-[#FFF8F4]  px-7 py-12 md:px-14 md:py-16 mb-10 border-2 border-dashed border-[#CFA3AA] flex">

          <div className="absolute right-20 w-70 h-70 rounded-full bg-[#F5E3E6] " />

          <div className="relative z-10">

            <div className="flex items-center gap-2 text-[#9F5B69] mb-4">
              <Flower2 size={20} />
              <span className="text-sm font-medium tracking-[0.2em] uppercase">
                Your little happy place
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold text-[#4A3835] mb-4">
              Welcome to Petal & Purl!
            </h1>

            <h2 className="text-xl md:text-2xl text-[#9F5B69] mb-3">
              Hello, {user?.name || "Customer"} ❤️
            </h2>

            <p className="text-[#746966] max-w-xl leading-relaxed">
              We're happy to have you here. Explore your account,
              keep track of your orders and find all your favourite
              handmade treasures in one place.
            </p>

          </div>

          <div className="w-90 object-contain z-5 ">
            <img src={assets.dashboard} alt="" />
          </div>

        </div>

        {/* Dashboard Heading */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3 mb-7">

          <div>
            <p className="text-[#C9828F] text-sm tracking-widest uppercase mb-2">
              Account overview
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#4A3835]">
              Your Dashboard
            </h2>

            <p className="text-[#746966] mt-2">
              Everything you need, all in one place.
            </p>
          </div>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">

          {dashboardItems.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.title}
                onClick={() => navigate(item.path)}
                className="group text-left bg-white rounded-2xl p-7 border border-[#F1E1DB] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon size={26} className="text-[#9F5B69]" />
                </div>

                <h3 className="text-lg font-semibold text-[#4A3835] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#746966] leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-[#B0886A] text-sm font-medium">
                  Explore
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>

              </button>
            );
          })}

        </div>


        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-[#B0886A] font-[Allura] text-3xl">
            Little things, lovingly looped.
          </p>
        </div>

      </div>
    </div>
  );
}

export default UserDashboard;
