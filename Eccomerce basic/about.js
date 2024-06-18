document.addEventListener("DOMContentLoaded", function() {
    const moreInfoBtn = document.getElementById("moreInfoBtn");
    const moreInfo = document.getElementById("moreInfo");

    moreInfoBtn.addEventListener("click", function() {
        if (moreInfo.classList.contains("hidden")) {
            moreInfo.classList.remove("hidden");
            moreInfoBtn.textContent = "Less Info";
        } else {
            moreInfo.classList.add("hidden");
            moreInfoBtn.textContent = "More Info";
        }
    });
});
