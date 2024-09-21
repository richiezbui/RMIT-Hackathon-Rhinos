import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <>
      <h1 className="flex justify-center">Semi Compsci</h1>
      <div className="flex">
        <div>#1</div>
        <div>Liov</div>
        <div>5000</div>
      </div>
    </>
  );
}