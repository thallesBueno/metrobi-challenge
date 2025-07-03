"use client";

import { Input } from "@heroui/input";
import { useState } from "react";
import { Divider } from "@heroui/divider";
import { Tab, Tabs } from "@heroui/tabs";
import { Card } from "@heroui/card";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";

import { subtitle, title } from "@/components/primitives";

export default function Challenge4Page() {
  const [arrayString, setArrayString] = useState("");

  const getCurrentTime = () => {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const logItemsWithDelay = async (items: string[]) => {
    let delay = 1000;

    for (const item of items) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      addToast({
        title: `${getCurrentTime()} - ${item}`,
      });
      delay = delay * 2;
    }
  };

  const array = arrayString.split(",").filter((s) => !!s);

  return (
    <div className="w-full space-y-8">
      <Breadcrumbs className="mb-8">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/challenges">Challenges</BreadcrumbItem>
        <BreadcrumbItem>Challenge 2</BreadcrumbItem>
      </Breadcrumbs>
      <h1 className={title()}>Challenge 2</h1>
      <p className={subtitle()}>
        Write an async javascript function that writes every item in any given
        array with 1, 2, 4, 8, etc., seconds apart
      </p>
      <Divider />
      <Tabs>
        <Tab title="Preview">
          <div className="flex gap-4 items-center">
            <Input
              isClearable
              className="w-60"
              placeholder="Ex. 1,2,3,4,5,6"
              value={arrayString}
              onChange={(e) => setArrayString(e.target.value)}
              onClear={() => setArrayString("")}
            />
            <Button
              color="primary"
              isDisabled={array.length == 0}
              onPress={() => logItemsWithDelay(array)}
            >
              Start
            </Button>
          </div>
        </Tab>
        <Tab title="Code">
          <Card />
        </Tab>
      </Tabs>
    </div>
  );
}
