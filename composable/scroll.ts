export const scroll = () => {
  const scrollToEnd = () => {
    console.log("scroll: scrollToEnd");
    const contentContainer = document.getElementById("scrollToBottom");
    contentContainer?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return { scrollToEnd };
}
