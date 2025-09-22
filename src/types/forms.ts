export interface FormTemplate {
  id: string;
  title: string;
  description: string;
  services: string[];
  sections: FormSection[];
}

export interface FormSection {
  id: string;
  type: "disclaimer" | "contact" | "medical" | "text" | "question" | "policy";
  title: string;
  content?: string;
  question?: string;
  options?: string[];
}

export type SectionType = FormSection["type"];
