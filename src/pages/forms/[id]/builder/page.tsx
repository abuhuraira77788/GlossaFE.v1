"use client";

import FormBuilder from "./FormBuilder";

export default function BuilderPage({ params }: { params: { id: string } }) {
  return (
    <div className="h-screen flex">
      <FormBuilder templateId={params.id} />
    </div>
  );
}
