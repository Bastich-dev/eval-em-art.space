setTimeout(() => {
    const section_ids = ["carousel_tv", "pages_galleries", "introducing", "galleries", "carousel_blog", "custom_look", "mobile_sites", "connect", "comments", "statistics", "contributors", "cloud"];
    const sections_tops = section_ids.map(el => document.getElementById(el).offsetTop);

    const scrollTo = element => {
        window.scroll({
            behavior: "smooth",
            left: 0,
            top: element,
        });
    };

    document.querySelector("#scroll-down").addEventListener("click", event => {
        console.log(Math.ceil(window.pageYOffset));
        for (let i = 0; i < sections_tops.length; i++) {
            if (Math.ceil(window.pageYOffset) < sections_tops[i]) {
                console.log(section_ids[i]);
                scrollTo(sections_tops[i]);
                break;
            }
        }
    });
}, 100);
