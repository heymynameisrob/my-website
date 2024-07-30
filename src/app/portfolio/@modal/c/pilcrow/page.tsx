import { Suspense } from "react";
import { Modal } from "@/components/modal";

export default async function Page() {
  // const { content } = await getProject(params.id);

  return (
    <Suspense fallback={null}>
      <Modal title="Test" closeHref="/portfolio">
        <p>Collection test</p>
      </Modal>
    </Suspense>
  );
}
