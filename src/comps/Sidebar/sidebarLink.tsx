import { Link } from "react-router-dom"



export default function SidebarLink(props: { content: string }) {

    const content = props.content
    return (
        <div className="p-2 mr-3">
            <Link to={"#"} className="hover:text-white duration-300">{content}</Link>
        </div>
    )
}
