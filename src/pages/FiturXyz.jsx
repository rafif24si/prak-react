import React from "react";
import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
// Import komponen dari library Recharts
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FiturXyz() {
  return (
    <div id="dashboard-container" className="flex-1 w-full pb-10">
      <PageHeader title="Fitur Xyz" />
      <p>Ini Halaman Fitur XYZ</p>

      <Button variant="outline" className="mt-4">
        Simpan
      </Button>
      <Button variant="default" className="mt-4">
        Simpan
      </Button>
      <Button variant="destructive" className="mt-4">
        Simpan
      </Button>
      <Button variant="secondary" className="mt-4">
        Simpan
      </Button>
      <Button variant="ghost" className="mt-4">
        Simpan
      </Button>
      <Button variant="link" className="mt-4">
        Simpan
      </Button>
      <Card className="mt-4 w-[380px]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Belajar shadcn/ui</CardTitle>
            <Badge variant="secondary">Baru</Badge>
          </div>
          <CardDescription>
            Contoh penggunaan komponen shadcn/ui di React
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            Komponen ini dibuat di branch <strong>setup-shadcn</strong>
            lalu di-merge ke main.
          </p>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button>Simpan</Button>
          <Button variant="outline">Batal</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
