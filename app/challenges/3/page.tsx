"use client";

import { Tabs, Tab } from "@heroui/tabs";

import { subtitle, title } from "@/components/primitives";

export default function DocsPage() {
  const Preview = () => (
    <div className="min-w-5/6 text-2xl space-y-1">
      <header className="h-16 bg-cyan-500 flex justify-center p-4">
        <p>Header</p>
      </header>
      <div className="flex gap-1 h-[1000px]">
        <div className="flex flex-col gap-1 flex-1">
          <div className="h-2/5 bg-pink-300 flex justify-center p-4">
            <p>Hero</p>
          </div>
          <div className="flex-1 bg-green-400 flex justify-center p-4">
            <p>Sidebar</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <main className="flex-1 bg-yellow-500 flex justify-center p-4">
            <p>Main Content</p>
          </main>
          <div className="h-1/5 bg-slate-700 flex justify-center p-4">
            <p>Extra Content</p>
          </div>
        </div>
      </div>
      <div className="h-40 flex gap-1">
        <div className="flex-1 bg-green-800 flex justify-center p-4">
          <p>Related Images</p>
        </div>
        <div className="w-1/4 bg-pink-400 flex justify-center p-4">
          <p>Related Posts</p>
        </div>
      </div>
      <footer className="h-16 bg-orange-500 flex justify-center p-4">
        <p>Footer</p>
      </footer>
    </div>
  );

  return (
    <div className="w-full space-y-8">
      <h1 className={title()}>Challenge 3</h1>
      <p className={subtitle()}>
        Write the necessary React code for generating the figure (using flex).
      </p>
      <Tabs aria-label="Tabs variants">
        <Tab key="preview" title="Preview">
          {Preview()}
        </Tab>
        <Tab key="code" title="Code" />
      </Tabs>
    </div>
  );
}
