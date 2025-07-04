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
      <div className="">
        {challenges.map((challenge) => (
          <Link
            key={challenge.challengeNumber}
            className="hover:bg-neutral-900 active:bg-neutral-800 transition-background duration-300 "
            href={`/challenges/${challenge.challengeNumber}`}
          >
            <div className="flex justify-between p-2 py-6">
              <p className="text-xl">{challenge.challengeNumber}.</p>
              <p className="text-xl">{challenge.text}</p>
            </div>
            <Divider />
          </Link>
        ))}
      </div>
    </div>
  );
}
