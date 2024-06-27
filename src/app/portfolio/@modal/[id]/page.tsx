import { Suspense } from "react";
import { getProject } from "@/server/projects";
import { MDX } from "@/components/mdx";
import { Modal } from "@/components/modal";

export default async function Page({ params }: { params: { id: string } }) {
  const { content } = await getProject(params.id);

  return (
    <Suspense fallback={null}>
      <Modal closeHref="/portfolio">
        <div className="max-w-2xl mx-auto px-4 py-16 lg:py-24">
          <MDX content={content} />
        </div>
      </Modal>
    </Suspense>
  );
}
