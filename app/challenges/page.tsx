"use client";

import Link from "next/link";
import { Divider } from "@heroui/divider";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";

import { title } from "@/components/primitives";

const challenges = [
  { text: "Find Duplicates", challengeNumber: 1 },
  { text: "Exponencial Delay", challengeNumber: 2 },
  { text: "Flex Layout", challengeNumber: 3 },
  { text: "Brackets Validator", challengeNumber: 4 },
  { text: "Broken Egg", challengeNumber: 5 },
  { text: "Zeno's Paradox", challengeNumber: 6 },
  { text: "Carrots Bag", challengeNumber: 7 },
];

export default function ChallengesPage() {
  return (
    <div className="w-full space-y-8">
      <Breadcrumbs className="mb-8">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/challenges">Challenges</BreadcrumbItem>
      </Breadcrumbs>
      <h1 className={title()}>Challenges</h1>
      <div className="flex flex-col gap-6">
        {challenges.map((challenge) => (
          <Link
            key={challenge.challengeNumber}
            href={`/challenges/${challenge.challengeNumber}`}
          >
            <div className="flex justify-between">
              <p className="text-2xl bold p-2">{challenge.challengeNumber}.</p>
              <p className="text-2xl bold p-2">{challenge.text}</p>
            </div>
            <Divider />
          </Link>
        ))}
      </div>
    </div>
  );
}
