import Link from "next/link";

export default function Logo() {
    return (
        <Link href={'/'} className="flex gap-1 w-24 h-12">
                <img src="/logo-toys.png" className="max-w-full h-auto" alt="Logo"/>
        </Link>
    );
}