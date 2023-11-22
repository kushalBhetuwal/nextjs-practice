import Link from "next/link";

export default function page(){
    return(
        <div>
            <Link href='/projects/carrent'><li>carrent</li></Link>
            <Link href='/projects/hipnodes'><li>hipnodes</li></Link>
            <Link href="/projects/teslaclone"><li>Tesla clone</li></Link>
        </div>
    )
}