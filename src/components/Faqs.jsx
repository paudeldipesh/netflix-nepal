import { Faq, FormRow } from "./";

export const Faqs = () => {
  return (
    <section className="text-white py-16">
      <h2 className="text-3xl px-5 text-center md:text-5xl font-bold mb-8">
        Frequently Asked Questions
      </h2>
      <Faq question="What is Netflix?" />
      <Faq question="How much does Netflix cost?" />
      <Faq question="Where can I watch?" />
      <Faq question="How do I cancel?" />
      <Faq question="What can I watch on Netflix?" />
      <Faq question="Is Netflix good for kids?" />
      <FormRow />
    </section>
  );
};
