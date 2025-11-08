import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

interface TextInputFieldProps {
  control: any;
  name: any;
  label: string;
  required?: boolean;
}

const TextInputField = ({
  control,
  name,
  label,
  required,
}: TextInputFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-[400] text-[17px] !text-[#333333] dark:text-white!  ">
            {label}
            {required && <span className="font-bold">*</span>}
          </FormLabel>

          <FormControl>
            <Input
              placeholder=""
              {...field}
              value={field.value || ""}
              className="h-[40px] !text-[17px] font-[400] text-gray-700 dark:text-white  
             focus-visible:outline-none focus-visible:ring-0 border-gray-300 dark:border-gray-700 dark:bg-[#141A26] focus-visible:border-[#80bdff] transition-colors duration-300 rounded-md"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default TextInputField;
