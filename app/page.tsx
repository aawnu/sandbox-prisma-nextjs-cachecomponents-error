import { prisma } from "@/lib/db";
import Image from "next/image";
import { cache } from "react";

const loadTestIds = cache(() => prisma.test.findMany());

export default async function Home() {
  const idList = await loadTestIds();
  return (
    <div>
      {idList.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  );
}
