"use client";

import { Input } from "@heroui/input";
import { ChangeEvent, useState } from "react";
import { Divider } from "@heroui/divider";
import { Tab, Tabs } from "@heroui/tabs";
import { Card } from "@heroui/card";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";

import { subtitle, title } from "@/components/primitives";

export default function Challenge1Page() {
  const [arrayString, setArrayString] = useState("");

  const findDuplicates = <T,>(arr: T[]): T[] => {
    const seen = new Set<T>();
    const duplicates = new Set<T>();

    for (const item of arr) {
      if (seen.has(item)) {
        duplicates.add(item);
      } else {
        seen.add(item);
      }
    }

    return Array.from(duplicates);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sanitizedString = e.target.value.replace(/[^\d],/g, "");

    setArrayString(sanitizedString);
  };

  const array = arrayString.split(",").filter((item) => !!item);
  const duplicates = findDuplicates(array);

  return (
    <div className="w-full space-y-8">
      <Breadcrumbs className="mb-8">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/challenges">Challenges</BreadcrumbItem>
        <BreadcrumbItem>Challenge 1</BreadcrumbItem>
      </Breadcrumbs>
      <h1 className={title()}>Challenge 1</h1>
      <p className={subtitle()}>Find the duplicate items in any given array</p>
      <Divider />
      <Tabs>
        <Tab title="Preview">
          <div className="">
            <Input
              isClearable
              className="w-60"
              label="Array"
              placeholder="Ex. 1,2,3,4,5,6"
              value={arrayString}
              onChange={handleInputChange}
              onClear={() => setArrayString("")}
            />
          </div>

          <div className="py-16 flex justify-center">
            <div className="flex gap-2">
              {array.length > 0 &&
                array.map((item, index) => (
                  <div
                    key={item + index}
                    className={`p-4 rounded transition-background duration-1000 ${duplicates.includes(item) ? "bg-red-500" : "bg-slate-600"}`}
                  >
                    <p>{item}</p>
                  </div>
                ))}
            </div>
          </div>
        </Tab>
        <Tab title="Code">
          <Card />
        </Tab>
      </Tabs>
    </div>
  );
}
