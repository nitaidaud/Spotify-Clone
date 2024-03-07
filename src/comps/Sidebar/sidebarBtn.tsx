import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarBtn(props: { content: string; icon: IconDefinition }) {

    const content = props.content;
    const icon = props.icon

    return (
        <button className="lg:mt-2 lg:p-0 h-full p-3 rounded-md hover:bg-white hover:bg-opacity-20 hover:text-white duration-300 flex lg:justify-start justify-center items-center lg:w-11/12 w-full focus:bg-white active:bg-opacity-20 active:text-white">
            <FontAwesomeIcon icon={icon} className='lg:p-2 lg:mr-3' />
            <h3 className="lg:block hidden"> {content} </h3>
        </button>
    )
}
