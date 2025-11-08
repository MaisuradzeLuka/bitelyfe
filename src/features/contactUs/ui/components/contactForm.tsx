"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactFormSchema } from "@/validations/contactFormSchema";
import { toast } from "sonner";

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log(values);
    toast("Message was sent successfully", { style: { background: "white" } });
  };
  const handleError = (formErrors: typeof form.formState.errors) => {
    if (Object.keys(formErrors).length >= 2) {
      toast.error("All fields are required");
    } else if (!formErrors.email && formErrors.name) {
      toast.error("Name is required");
    } else if (!formErrors.name && formErrors.email) {
      toast.error("Please provide a valid email");
    } else if (!formErrors.name && !formErrors.email && formErrors.message) {
      toast.error("Message can not be empty", { duration: 2000 });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit, handleError)}
        className="w-full space-y-6 font-[400] text-[17px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[400] text-[17px] !text-[#333333]">
                Name<span className="font-bold">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className=" !text-[17px] font-[400] rounded-none text-gray-700  
             focus-visible:outline-none focus-visible:ring-0 focus-visible:border-[#80bdff] transition-colors duration-300"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[400] text-[17px] !text-[#333333]">
                Email<span className="font-bold">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className=" rounded-none text-gray-700 !text-[17px] font-[400] focus-visible:outline-none focus-visible:ring-0 focus-visible:border-[#80bdff] transition-colors duration-300"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[400] text-[17px] !text-[#333333]">
                Message<span className="font-bold">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className=" rounded-none h-[134px] text-gray-700 !text-[17px] font-[400] focus-visible:outline-none focus-visible:ring-0 focus-visible:border-[#80bdff] transition-colors duration-300"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="bg-[#ff607d] w-[200px] h-[42px] text-white font-[400] text-[17px] rounded-[4px] cursor-pointer ">
          Send
        </Button>
      </form>
    </Form>
  );
}
