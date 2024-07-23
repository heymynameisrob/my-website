import { Container } from "@/components/container";
import { Prose } from "@/components/prose";

export default async function WorkPage() {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-gradient-to-b from-background to-transparent h-[64px] w-full" />
      <div className="space-y-16 py-16 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-8 mb-16">
          <h1>Work</h1>
        </div>
        <Container size="md">
          <Prose>
            <h2>Work Experience</h2>
            <p>Work experience goes here.</p>
          </Prose>
        </Container>
        <Container size="lg">
          <div className="space-y-4">
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-5">
                <div className="bg-zinc-100 rounded w-full h-64"></div>
              </div>
              <div className="col-span-3">
                <div className="bg-zinc-100 rounded w-full h-64"></div>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-4">
                <div className="bg-zinc-100 rounded w-full h-64"></div>
              </div>
              <div className="col-span-4">
                <div className="bg-zinc-100 rounded w-full h-64"></div>
              </div>
            </div>
          </div>
        </Container>
        <Container size="md">
          <Prose>
            <h2>Work Experience</h2>
            <p>Work experience goes here.</p>
          </Prose>
        </Container>
        <Container size="lg">
          <div className="space-y-4">
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-5">
                <div className="bg-zinc-100 rounded w-full h-64"></div>
              </div>
              <div className="col-span-3">
                <div className="bg-zinc-100 rounded w-full h-64"></div>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-4">
                <div className="bg-zinc-100 rounded w-full h-64"></div>
              </div>
              <div className="col-span-4">
                <div className="bg-zinc-100 rounded w-full h-64"></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
