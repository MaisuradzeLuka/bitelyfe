"use client";

import SelectField from "../components/SelectField";
import CheckboxField from "../components/CheckboxField";
import TextInputField from "../components/TextInputField";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
import { formData } from "@/constants/adminFormDara";
import TextAreaField from "./textAreaField";
import { usePostFormData } from "../../api";

const FormComponent = ({ id }: { id: string }) => {
  const formFields = formData[id];
  const post = usePostFormData(id);

  const defaultValues = useMemo(() => {
    const values: Record<string, any> = {};

    formFields.forEach((field) => {
      if (["text", "textarea", "select"].includes(field.type)) {
        values[field.id] = "";
      }
      if (field.type === "boolean") values[field.id] = false;
      if (field.type === "file") values[field.id] = null;
    });

    return values;
  }, [formFields]);

  const form = useForm({
    // resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const handleSubmit = async (values: typeof defaultValues) => {
    await post.mutateAsync(values); // calls POST /api/adminform?tableId=<id>
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-8"
      >
        <button type="button" onClick={() => console.log(form.getValues())}>
          Clickme
        </button>

        {formFields.map((field) => {
          switch (field.type) {
            case "select":
              return (
                <SelectField
                  key={field.id}
                  control={form.control}
                  name={field.id}
                  label={field.name}
                  options={field.options!}
                />
              );
            case "boolean":
              return (
                <CheckboxField
                  key={field.id}
                  control={form.control}
                  name={field.id}
                  label={field.name}
                  required={field.required}
                />
              );
            case "text":
              return (
                <TextInputField
                  key={field.id}
                  control={form.control}
                  name={field.id}
                  label={field.name}
                  required={field.required}
                />
              );
            case "textarea":
              return (
                <TextAreaField
                  control={form.control}
                  label={field.name}
                  name={field.id}
                  key={field.id}
                  required={field.required}
                />
              );
            default:
              break;
          }
        })}
        <button type="submit">Submit</button>
      </form>
    </Form>
  );
};

export default FormComponent;
