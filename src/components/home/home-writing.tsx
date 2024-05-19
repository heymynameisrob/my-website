import { ListItem } from "@/components/list-item";

export const HomeWriting = () => (
  <section className="space-y-6">
    <p className="font-medium">Selected writing</p>
    <ListItem label="Latest">
      <div className="flex flex-col gap-1">
        <a
          href="#"
          rel="noopener noreferrer"
          className="font-medium text-base underline"
        >
          Consumer V Professional
        </a>
      </div>
      <p className="font-serif text-secondary">
        Reflecting on what didn't work whilst at Lantum, I discovered that a lot
        of our failures came not from bad ideas or bad execution but the wrong
        type of execution.
      </p>
    </ListItem>
    <ListItem label="2024">
      <div className="flex flex-col gap-1">
        <a
          href="#"
          rel="noopener noreferrer"
          className="font-medium text-base underline"
        >
          Building Pilrcrow
        </a>
      </div>
      <p className="font-serif text-secondary">
        What started as time-killing project over the Christmas holidays turned
        into a product built soley around myself. This is what I learnt.
      </p>
    </ListItem>
    <ListItem label="2021">
      <div className="flex flex-col gap-1">
        <a
          href="https://blog.prototypr.io/designing-at-a-startup-vs-designing-at-a-big-company-e6aad22956ea"
          rel="noopener noreferrer"
          className="font-medium text-base underline"
        >
          Design at a big company vs small company
        </a>
      </div>
      <p className="font-serif text-secondary">
        After moving from working with Waitrose to a small agency, I wrote some
        thoughts about how design approaches differ depending on the size of the
        company you're working for.
      </p>
    </ListItem>
    <ListItem label="20–22">
      <div className="flex flex-col gap-1">
        <a
          href="https://lantum.com"
          rel="noopener noreferrer"
          className="font-medium text-base underline"
        >
          nuom
        </a>
      </div>
      <p className="font-serif text-secondary">
        I helped pivot this agency to an expert life science and pharma agency
        during the pandemic. Launch various products including an ML talk
        therapy app with Microsoft.
      </p>
    </ListItem>
  </section>
);
