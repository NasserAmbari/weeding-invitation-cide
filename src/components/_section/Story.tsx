import RevealText from "@/components/ui/RevealText";

const Story = () => {
  return (
    <div className="h-screen w-full p-4 md:p-8 text text-gray-950">
      <RevealText
        as="h1"
        trigger="viewport"
        mode="sentence"
        delay={1}
        duration={0.8}
        className="text-sm md:text-xl lg:text-2xl text-center w-2/3 mx-auto"
      >
        You're Invited to Celebrate The Wedding of
      </RevealText>
    </div>
  );
};

export default Story;
