import React from "react";
import "./style.css";

const Header = () => {
    return (
        <header>
            <h1 className="text-center">Employee Directory</h1>
            <p className="text-center">
                Click on each heading to filter or use the search box to narrow your employee results.
            </p>
        </header>
    );
};

export default Header;