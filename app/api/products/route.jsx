import { NextResponse, NextRequest } from "next/server";

const product = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 150 },
];

export function GET() {
  return NextResponse.json(product, { status: 200 });
}
