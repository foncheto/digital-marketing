import WordPullUp from "@/components/magicui/word-pull-up";

export function WordPullUpDemo() {
  return (
    <WordPullUp
      className="
        text-2xl 
        md:text-4xl 
        md:text-center 
        font-semibold 
        text-gray-800 
        dark:text-gray-100
      "
      words="Diseñado desde cero"
    />
  );
}
