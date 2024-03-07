import {NavLink} from "react-router-dom";

export default function NavbarItem(props : {content : string}) {

    const content = props.content

  return (
    <div className='mx-3 py-2 text-xl text-gray-500 hover:text-white duration-300'>
        <NavLink to={"#"}>{content}</NavLink>
    </div>
  )
}
