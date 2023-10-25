 import Link from "next/link";

 export default function Products() {
     return (
             <Link className="bg-lime-500 rounded-md text-white py-1 px-2" href={'/products/new'}>Add new product</Link>
     );
 }