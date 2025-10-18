"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function ContactButton() {
  return (
    <Button
      variant="outline"
      className="active:border-b active:scale-[0.97] 
                 hover:border-b-4 hover:border-primary/30 
                 hover:bg-background shadow-none transition-all duration-100 
                 flex items-center gap-2 
                bg-black text-white dark:bg-white dark:text-black"
      asChild
    >
      <a href="tel:+919279010410" title="Contact Sajid Hussain">
        <Phone size={18} />
        Contact
      </a>
    </Button>
  );
}

export function ContactFloat() {
  return (
    <Button
      className="group fixed z-50 bottom-5 right-5 w-12 h-12 rounded-full 
                 hover:px-4 hover:w-auto p-2 duration-300 transition-all ease-out 
                 flex items-center gap-2 shadow-lg 
                 bg-black text-white dark:bg-white dark:text-black"
      asChild
    >
      <a href="tel:+919279010410" title="Contact Sajid Hussain">
        <Phone strokeWidth={1} />
        <span className="hidden group-hover:block duration-300 transition-all ease-out">
          Contact
        </span>
      </a>
    </Button>
  );
}
