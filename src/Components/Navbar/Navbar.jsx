import React from "react";
import logo from "../../assets/Images/logo hh.png";

const Navbar = () => {
  return (
    <div className="bg-orange-100 lg: opacity-80">
      <div className="navbar ">
        <div className="flex-1 me-16">
          <img src={logo} className="w-1/3" />
        </div>
        <div class="flex-auto">
          <a
            href="#"
            class=" text-black rounded-md px-3 py-2 text-sm font-medium hover:bg-orange-300"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            class="text-black rounded-md px-3 py-2 text-sm font-medium hover:bg-orange-300"
          >
            Shop
          </a>
          <a
            href="#"
            class="text-black rounded-md px-3 py-2 text-sm font-medium hover:bg-orange-300"
          >
            About
          </a>
          <a
            href="#"
            class="text-black rounded-md px-3 py-2 text-sm font-medium hover:bg-orange-300"
          >
            Contact
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-orange-300"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-orange-300 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-xl">0 Items</span>
                <span className="text-lg font-semibold">Subtotal: $0</span>
                <div className="card-actions">
                  <button className="btn border-black btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:bg-orange-300"
            >
              <div className="w-10 rounded-full ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5pRYkNO_iSx4tQjp_z9Nqdoiwf8ztHzQlg&usqp=CAU" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-300 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
