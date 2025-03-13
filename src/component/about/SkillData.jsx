import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";


const skills = [
    {
        sn: "1",
        title: "React Js",
        barSize: "w-[95%]",
        barPercent: "95%",
        icon: <FaReact className="text-sky-500" />,
    },
    {
        sn: "2",
        title: "Node Js",
        barSize: "w-[90%]",
        barPercent: "90%",
        icon: <FaNodeJs className="text-green-600" />
    }, {
        sn: "3",
        title: "PHP",
        barSize: "w-[95%]",
        barPercent: "95%",
        icon: <FaPhp className="text-violet-800" />
    }, {
        sn: "4",
        title: "Laravel",
        barSize: "w-[90%]",
        barPercent: "90%",
        icon: <FaLaravel className="text-red-700 w-" />
    },
]
export default skills