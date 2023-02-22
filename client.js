const convertUrl = (url) => {
  const splittedLink = url.split("/shorts/");
  return `${splittedLink[0]}/watch?v=${splittedLink[1]}`;
};

if (location.href.includes("shorts/")) {
  location.href = convertUrl(location.href);
}

document.addEventListener("yt-navigate-finish", function (event) {
  if (event.detail.pageType === "shorts") {
    history.pushState(
      null,
      "",
      event.detail.response.url.replace("shorts/", "watch?v=")
    );
    location.reload();
  }
});
