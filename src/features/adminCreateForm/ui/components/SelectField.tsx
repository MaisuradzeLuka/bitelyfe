"use client";

import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Control } from "react-hook-form";
import { TfiAngleDown } from "react-icons/tfi";

interface SelectFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  options: { id: string; name: string }[];
}

const SelectField = ({ control, name, label, options }: SelectFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormControl>
            <Select
              onValueChange={(v) => field.onChange(v)}
              value={field.value}
              defaultValue={field.value}
            >
              <SelectTrigger
                aria-label={name}
                className=" w-[300px] !h-[40px] flex justify-between items-center border-gray-300 dark:border-gray-700 dark:bg-[#141A26] !ring-0"
              >
                <SelectValue placeholder={label} />
                <TfiAngleDown />
              </SelectTrigger>

              <SelectContent
                align="start"
                className="bg-white dark:bg-[#141A26] border-gray-300 dark:border-gray-700 text-black dark:text-white"
              >
                {options.map((option) => {
                  return (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default SelectField;
