import { Data } from "@/data";
import Service from "./Service.js";



export default function Services() {
    return (
        <div className=" m-5 p-5 border border-gray-300 rounded-lg">
            <h3 className=" text-center text-lg font-semibold bl mb-4">Services</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {Data.map((service) => <Service key={service.service} {...service} />)}
            </div>
        </div>
    );
}
