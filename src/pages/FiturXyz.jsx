import React from 'react';
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaArrowUp, FaArrowDown } from "react-icons/fa";
// Import komponen dari library Recharts
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageHeader from "../components/PageHeader";


export default function FiturXyz() {
    return (
        <div id="dashboard-container" className="flex-1 w-full pb-10">
            
            <PageHeader title="Fitur Xyz" />
            <p>Ini Halaman Fitur XYZ</p>

    
        </div>
    );
}