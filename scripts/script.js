$(() => {

   $(`.overlay`).delay(6000).fadeOut();
    setTimeout(() => $(`.overlay`).text(`Gathering`), 300);
    setTimeout(() => $(`.overlay`).text(`sunshine`), 1300);
    setTimeout(() => $(`.overlay`).text(`and`), 2300);
    setTimeout(() => $(`.overlay`).text(`clouds`), 3300);
    setTimeout(() => $(`.overlay`).text(`for`), 4300);
    setTimeout(() => $(`.overlay`).text(`you...`), 5300);
});