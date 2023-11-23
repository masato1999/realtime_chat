export const scroll = () => {
  const scrollToEnd = () => {
    console.log("scroll: scrollToEnd");
    const contentContainer = document.getElementById("scrollToBottom");
    const contentContainer2 = contentContainer?.innerText;
    console.log("contentContainer2", contentContainer2);
    contentContainer?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return { scrollToEnd };
}
