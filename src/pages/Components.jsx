import React from "react";
import PageHeader from "../components/PageHeader"; // Menggunakan komponen bawaan dari strukturmu
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import Footer from "../components/Footer";

export default function Components() {
  const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];
  const products = [
    { id: 1, name: "Laptop Asus", category: "Elektronik", price: "Rp 8.000.000" },
    { id: 2, name: "Sepatu Sport", category: "Fashion", price: "Rp 450.000" },
    { id: 3, name: "Jam Tangan", category: "Aksesoris", price: "Rp 799.000" },
  ];

  return (
    <Container className="bg-gray-50 min-h-screen">
      {/* Jika kamu menggunakan PageHeader di dalam MainLayout, bagian ini opsional */}
      <PageHeader title="Components" description="Dashboard / Components" />

      <div className="mt-8 space-y-10">
        
        {/* 1. Basic Components */}
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Basic Components</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Buttons</h3>
            <div className="flex gap-2">
              <Button type="primary">Primary</Button>
              <Button type="success">Simpan</Button>
              <Button type="danger">Hapus</Button>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Badges</h3>
            <div className="flex gap-2">
              <Badge type="success">Aktif</Badge>
              <Badge type="warning">Pending</Badge>
              <Badge type="danger">Batal</Badge>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Avatars</h3>
            <div className="flex gap-2">
              <Avatar name="Rafif" />
              <Avatar name="Budi" />
              <Avatar name="Siti" />
            </div>
          </div>
        </section>

        {/* 2. Data Display Components */}
        <section>
          <h2 className="text-2xl font-bold mb-4">2. Data Display Components</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Card</h3>
            <Card>
              <h2 className="text-xl font-bold">Judul Card</h2>
              <p className="text-gray-600">Ini adalah isi dari card.</p>
            </Card>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Product Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProductCard
                image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
                title="Sepatu Sport"
                category="Fashion"
                price="Rp 450.000"
                description="Sepatu sport modern dengan desain nyaman."
              />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Table</h3>
            <Table headers={headers}>
              {products.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-3">{index + 1}</td>
                  <td className="border px-4 py-3">{product.name}</td>
                  <td className="border px-4 py-3">{product.category}</td>
                  <td className="border px-4 py-3">{product.price}</td>
                  <td className="border px-4 py-3">
                    <Button type="primary">Detail</Button>
                  </td>
                </tr>
              ))}
            </Table>
          </div>
        </section>

      </div>
      
      <Footer />
    </Container>
  );
}