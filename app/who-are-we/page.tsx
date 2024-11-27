import React from "react";

const Page = () => {
  return (
    <div className="md:mt-24">
      <div className="flex justify-center mx-auto ">

        <div
          className="mt-10 min-w-[80vw]"
        >
          <div className="space-y-2">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
              Installation
            </h1>
            <p className="text-lg text-muted-foreground pt-2">
              <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
                Install and configure shadcn-ui.
              </h1>
            </p>
            <div>
              <div>
                <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
                  Create Project
                </h3>
                <p className=" mt-6 mb-4">
                  Start by creating a new Next.js project using{" "}
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    create-next-app
                  </code>
                  :
                </p>
                <span className="">
                </span>
              </div>
              <div>
                <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
                  Run the CLI
                </h3>
                <p className="leading-7 mt-6 mb-4">
                  Run the{" "}
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    shadcn-ui
                  </code>{" "}
                  init command to setup your project:
                </p>

                <span className="">
                </span>
              </div>
              <div>
                <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
                  Configure components.json
                </h3>
                <p className="leading-7 mt-6 mb-4">
                  You will be asked a few questions to configure{" "}
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    components.json
                  </code>{" "}
                  :
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;