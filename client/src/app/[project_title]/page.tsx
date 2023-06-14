"use client";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'

export default function ProjectPage() {
    const pathName = usePathname()
    const router = useRouter()
    
    return (
        <div>
            Project Page : 
        </div>
    );
}