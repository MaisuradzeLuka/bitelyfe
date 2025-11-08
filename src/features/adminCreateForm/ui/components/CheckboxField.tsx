"use client";

import React from "react";
import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
} from "@/components/ui/form";
import { Control } from "react-hook-form";

interface CheckboxFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  required?: boolean;
}

const CheckboxField = ({
  control,
  name,
  label,
  required,
}: CheckboxFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex items-center gap-2">
          <FormControl>
            <input
              type="checkbox"
              checked={!!field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
          </FormControl>
          <FormLabel className="!mb-0">{label}</FormLabel>
        </FormItem>
      )}
    />
  );
};

export default CheckboxField;
