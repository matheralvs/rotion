import { Link } from "react-router-dom";
import { Editor } from "../components/Editor";
import { ToC } from "../components/ToC";

export function Document() {
  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0 ">
        <span className="text-rotion-300 font-semiboldbold uppercase text-xs">
          WORKSPACE
        </span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>Banco de Dados</ToC.Section>
          <ToC.Section>Mensageria</ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex-col items-center">
        <Editor />
      </section>
    </main>
  );
}
