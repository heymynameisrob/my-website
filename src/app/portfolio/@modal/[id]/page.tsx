import { Suspense } from "react";
import { getProject } from "@/server/projects";
import { MDX } from "@/components/mdx";
import { Modal } from "@/components/modal";

export default async function Page({ params }: { params: { id: string } }) {
  const { content } = await getProject(params.id);

  return (
    <Suspense fallback={null}>
      <Modal title={params.id} closeHref="/portfolio">
        <MDX content={content} />
      </Modal>
    </Suspense>
  );
}
