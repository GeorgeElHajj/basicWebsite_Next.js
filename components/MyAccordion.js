'use client';
import {  Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react";
import { useState } from "react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function MyAccordion() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} disabled>
                <AccordionHeader onClick={() => handleOpen(1)}>Section 1</AccordionHeader>
                <AccordionBody>
                    <p>This is the first section in the Accordion, but it was disabled</p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="bg-black text-center ">
                <AccordionHeader onClick={() => handleOpen(2)} className="text-white">Section 2</AccordionHeader>
                <AccordionBody className="text-2xl">
                    <p>This is section  number two.</p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} className="mb-2 rounded-lg border border-blue-gray-100 px-4"/>}>
                <AccordionHeader onClick={() => handleOpen(3)} className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}>Section 3</AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                   <p>This is section number three</p>
                </AccordionBody>
            </Accordion>
        </>
    );
}