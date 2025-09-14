const url = "https://www.trademe.co.nz/a/marketplace/books/search?search_string=books&condition=new";

const exercise3 = "https://www.trademe.co.nz/a/marketplace/computers/laptops/laptops/search?search_string=laptop&condition=new&shipping=pickup&price_min=20&price_max=30";

const myUrl = new URL(url);


console.log("href:", myUrl.href);
console.log("origin:", myUrl.origin);
console.log("hostname:", myUrl.hostname);
console.log("pathname:", myUrl.pathname);
console.log("search:", myUrl.search);
console.log("searchParams:", myUrl.searchParams);
console.log("searchParams:", myUrl.searchParams.get('search_string'));
console.log("searchParams:", myUrl.searchParams.get('condition'));