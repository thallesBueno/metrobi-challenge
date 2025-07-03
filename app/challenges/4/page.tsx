"use client";

import { Input } from "@heroui/input";
import { ChangeEvent, useState } from "react";
import { Divider } from "@heroui/divider";
import { Tab, Tabs } from "@heroui/tabs";
import { Card } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";

import { subtitle, title } from "@/components/primitives";

export default function Challenge4Page() {
  const [bracketsString, setBracketsString] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const onlyBrackets = e.target.value.replace(/[^{}\[\]()]/g, "");

    setBracketsString(onlyBrackets);
  };

  function isBalancedBrackets(str: string) {
    const stack = [];
    const pairs: Record<string, string> = {
      "(": ")",
      "[": "]",
      "{": "}",
    };

    for (let char of str) {
      if (pairs[char]) {
        // Se for abertura, empilha o fechamento esperado
        stack.push(pairs[char]);
      } else if (char === ")" || char === "]" || char === "}") {
        // Se for fechamento, verifica se bate com o topo da pilha
        if (stack.pop() !== char) {
          return false; // Mismatch!
        }
      }
      // Se não for bracket, ignora (opcional)
    }

    // Se ainda sobrar abertura na pilha, está errado
    return stack.length === 0;
  }

  return (
    <div className="w-full space-y-8">
      <Breadcrumbs className="mb-8">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/challenges">Challenges</BreadcrumbItem>
        <BreadcrumbItem>Challenge 4</BreadcrumbItem>
      </Breadcrumbs>
      <h1 className={title()}>Challenge 4</h1>
      <p className={subtitle()}>
        {`Check if every {, [, and ( in a string closes in the correct order.`}
      </p>
      <Divider />
      <Tabs>
        <Tab title="Preview">
          <div className="flex gap-4 items-center">
            <Input
              isClearable
              className="w-60"
              label="Brackets"
              placeholder="Test a string"
              value={bracketsString}
              onChange={handleInputChange}
              onClear={() => setBracketsString("")}
            />
            {bracketsString.length > 0 &&
              (isBalancedBrackets(bracketsString) ? (
                <Chip color="success" size="lg">
                  Valid
                </Chip>
              ) : (
                <Chip color="danger" size="lg">
                  Invalid
                </Chip>
              ))}
          </div>
        </Tab>
        <Tab title="Code">
          <Card />
        </Tab>
      </Tabs>
    </div>
  );
}
